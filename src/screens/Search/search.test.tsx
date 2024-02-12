import { fireEvent, render, screen, waitFor } from "@__tests__/utils/customRender"
import { Search } from "."
import { api } from "@services/api"
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse"

describe("Screen: Search", () => {
    it("deve ser mostrado a opção de cidade", async () => {
        jest.spyOn(api, 'get').mockResolvedValue({data: mockCityApiResponse});
        const {debug} = render(<Search />)

        const searchInput = screen.getByTestId("search-input")
        fireEvent.changeText(searchInput, "Recife")

        const option = await waitFor(() => screen.findByText(/recife/i));
        debug()
        expect(option).toBeTruthy();
    })
})

