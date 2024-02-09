import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from ".";

import drop from '@assets/drop.svg';

describe("Component: WeatherItem", () => {
    it("deve ser mostrar título e valor", () => {
        render(
            <WeatherItem 
                icon={drop}
                title="Umidade do ar"
                value="81%"
            />
        );

        const title = screen.getByText("Umidade do ar");
        const value = screen.getByText("82%");

        expect(title).toBeTruthy();
        expect(value).toBeTruthy();


    })
})