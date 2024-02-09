import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "."

describe("Component: SelectList", () => {
    it("deve ser retornado os detalhes da cidade selecionados", () => {
        const data = [
            {id: '1', name: 'Campinas', latitude: 123, longitude: 456},
            {id: '2', name: 'Recife', latitude: 178, longitude: 789},

        ];

        const onPress = jest.fn()
        render(
            <SelectList
                data={data}
                onChange={() => { }}
                onPress={onPress}
            />
        );
        const selectedCity = screen.getByText(/campinas/i)
        fireEvent.press(selectedCity);

        expect(onPress).toHaveBeenCalledWith(data[0])
    });

    it("nao deve haver opcoes de exibicao quando os aderecos de dados estiver vazios.", () => {
        render(
            <SelectList 
                data={[]}
                onChange={() => {}}
                onPress={() => {}}
            />
        )

        const options = screen.getByTestId("options");
        expect(options.children).toHaveLength(0);
    })
});