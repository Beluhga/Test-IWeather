import { getNextDays } from "./getNextDays";

describe("Grupo de testes", () => { 
it("teste 1", () => {
    const days = getNextDays();
    console.log(days);

    expect(days.length).toBe(5); 

});
})