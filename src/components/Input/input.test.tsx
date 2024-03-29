import { render, screen } from "@testing-library/react-native";

import {Input} from '@components/Input';

describe("Component: Input", () => {
    it("deve ser renderizado sem activity indicator se isLoading for executada undefined", () => {
        render(<Input />)

        
        const activityIndicator = screen.queryByTestId("activity-indicator")
        expect(activityIndicator).toBeNull();
        
    });

    it("deve ser renderizado sem activity indicator se isLoading for executada true", () => {
        render(<Input isLoading/>);
    
        const activityIndicator = screen.getByTestId("activity-indicator");
        expect(activityIndicator).toBeTruthy();
    
    
    });


})

