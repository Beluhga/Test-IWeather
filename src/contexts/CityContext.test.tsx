import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
    it("deveria ser mudar a cidade selecionada", async () => {
        const data = {
            id: '1',
            name: 'Jaboatão dos Guararapes',
            latitude: 123,
            longitude: 456
        }
        const { result} = renderHook(() => useCity(), {wrapper: CityProvider});

        await waitFor(() => act(() => result.current.handleChanceCity(data)));

        expect(result.current.city?.name).toBe('Recife')        
    });
});