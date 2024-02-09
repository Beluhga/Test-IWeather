import { render, screen } from "@testing-library/react-native"
import { NextDays } from "."

import clearDay from '@assets/clear_day.svg'

describe("Component: NextDays", () => {
    it("deveria ser renderizado no dia", () => {
        render(
            <NextDays 
                data={[
                    {day: '18/07', min: '30ºc', max: '34ºc', icon: clearDay, weather: 'Céu Nublado'},
                    {day: '19/07', min: '20ºc', max: '30ºc', icon: clearDay, weather: 'Céu Limpo'},
                    {day: '20/07', min: '15ºc', max: '19ºc', icon: clearDay, weather: 'Céu Chuvoso'},
                    {day: '21/07', min: '28ºc', max: '35ºc', icon: clearDay, weather: 'Neve'},
                    {day: '22/07', min: '4ºc', max: '50ºc', icon: clearDay, weather: 'Chuva fraca'}

                ]}
            
                />
                )
                expect(screen.getByText("50ºc")).toBeTruthy();
    })
})