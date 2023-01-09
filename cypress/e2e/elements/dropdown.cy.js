/// <reference types="cypress"/>
import DropDownFunctions from "../../support/functions/DropDownFunctions.cy";

describe("Handling a dropdown", () => {
    const dropDownFunction = new DropDownFunctions();
    let testDataObj;

    beforeEach(() => {
        cy.visit("/dropdown");
    })

    before(() => {
        cy.fixture('testdata').then((data) => {
            testDataObj = data;
        })
    })

    it("Selecting a value from a dropdown", () => {
        dropDownFunction.selectOption(testDataObj.dropdownIndex);
    });

    it("Validating the selected value", () => {
        dropDownFunction.isGivenOptionSelected(testDataObj.dropdownValue);
    });
})