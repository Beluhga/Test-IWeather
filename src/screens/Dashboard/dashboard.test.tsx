import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Screnn: Dashboard", () => {
    it("Deve mostrar o clima da cidade", async () => {
        jest.spyOn(api, 'get').mockResolvedValue(({ data: mockWeatherAPIResponse}));

        const city = {
            id: '1',
            name: 'Jaboatao, BR',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(city)
        const {debug} = render(<Dashboard />);
        
        const cityName = await waitFor(() => screen.findByText(/jaboatao/i))
        debug()
        expect(cityName).toBeTruthy();


    });
});