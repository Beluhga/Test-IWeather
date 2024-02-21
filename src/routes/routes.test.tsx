import { screen } from "@testing-library/react-native";
import { Routes } from "."
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { render, act, waitFor } from "@__tests__/utils/customRender";

describe("Routes", () => {

    it("deve ser renderizada a tela de pesquisa quando a cidade não estiver selecionada", async () => {
     render(<Routes />)
    
     const title = await waitFor(() => screen.findByText(/^escolha um local/i));
     expect(title).toBeTruthy();
    })

    it("deve ser renderizada a tela do painel quando a cidade for selecionada", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse})

        const city = {
            id: "1",
            name: "São Paulo",
            longitude: 123,
            latitude: 456,
        } 

        await saveStorageCity(city); 

        await act(() => waitFor(() => render(<Routes />)));
        
        const title = screen.getByText(city.name);
        
        expect(title).toBeTruthy();
    })
})