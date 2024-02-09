import { render, screen } from "@testing-library/react-native"
import { Day } from "."

import clearDay from '@assets/clear_day.svg'

describe("Component: Day", () => {
    it("devera ser renderizado no dia", () => {
        render(
            <Day 
            data={{
                day: '18/07',
                min: '30ºc',
                max: '34ºc',
                icon: clearDay,
                weather: 'Céu Nublado'
            }}
            />
        )

        expect(screen.getByText('18/07')).toBeTruthy();
    })
})