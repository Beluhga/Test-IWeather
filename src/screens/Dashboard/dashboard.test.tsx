import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";

describe("Screnn: Dashboard", () => {
    beforeAll(async () => { 
        const city = {
            id: '1',
            name: 'Jaboatao, BR',
            latitude: 123,
            longitude: 456
        }
        await saveStorageCity(city)
    })

    afterAll(() => {
        
    })

    it("Deve mostrar o clima da cidade", async () => {
        jest.spyOn(api, 'get').mockResolvedValue(({ data: mockWeatherAPIResponse}));
        render(<Dashboard />);
    
        const cityName = await waitFor(() => screen.findByText(/jaboatao/i))
        
        expect(cityName).toBeTruthy();

    });

    it("deve mostrar outra cidade meteorológica, selecionada", async () => {

       jest.spyOn(api, 'get')
       .mockResolvedValueOnce({data: mockWeatherAPIResponse})
       .mockResolvedValueOnce({data: mockCityApiResponse})
       .mockResolvedValueOnce({data: mockWeatherAPIResponse})

      render(<Dashboard />)
        await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

       const cityName = 'Recife';

       await waitFor(() => act(() => {
        const search = screen.getByTestId("search-input");
        fireEvent.changeText(search, cityName);
       }));

       await waitFor(() => act(() => {
        fireEvent.press(screen.getByText(cityName, {exact: false}));
       }))

       expect(screen.getByText(cityName, {exact: false})).toBeTruthy();
    });
});