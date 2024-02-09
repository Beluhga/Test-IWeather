import { getCityByNameService } from "./getCityByNameService";
import { api } from "./api";
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse";

describe("API: getCityByNameService", () => {
    it("deve retornar detalhes da cidade", async () => {
        
        jest.spyOn(api, "get").mockResolvedValue({data: mockCityApiResponse});
      
        const response = await getCityByNameService("Pernambuco");
        expect(response.length).toBeGreaterThan(0);
    })
})