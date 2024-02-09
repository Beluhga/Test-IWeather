import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService ", () => {

    it("deve retornar dados da API de clima formatados", async () => {
        jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse});

        const response = await getWeatherByCityService({latitude: 123, longitude: 456})
        expect(response).toHaveProperty("nextDays")
    })
})