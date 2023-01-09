/// <reference types="cypress"/>

import InputFunctions from "../../support/functions/InputFunctions.cy";

describe("Handling a dropdown", () => {
    const inputBoxPageFunctions = new InputFunctions();
    let testData;

    beforeEach(() => {
        cy.visit("/inputs");
    })

    before(() => {
        cy.fixture("testdata").then((data) => {
            testData = data;
        })
    })

    it("enter in the value", () => {
        inputBoxPageFunctions.setValue(testData.inputValue);
    });

    it("Validating the selected value", () => {
        inputBoxPageFunctions.setValue(testData.inputValue);
        inputBoxPageFunctions.getValue().should('equals', testData.inputValue.toString());
    });
})