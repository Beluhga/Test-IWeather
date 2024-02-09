import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"


const newCity: CityProps = {
    id: '1',
    name: 'Jaboatão dos Guararapes',
    latitude: 123,
    longitude: 456
};

describe("Storage: CityStorage", () => {
    it("deve retornar nulo quando não houver uma cidade armazenada", async () => {
        const response = await getStorageCity();
        expect(response).toBeNull();
    } );

    it("deve ser devolvido à cidade armazenado", async () => {
       
        await saveStorageCity(newCity);
        const response = await getStorageCity();

        expect(response).toEqual(newCity);
        
    })

    it("deveria ser removido o armazenamento da cidade", async () => {
        await saveStorageCity(newCity);
        await removeStorageCity();

        const response = await getStorageCity();
        expect(response).toBeNull();
    })
})