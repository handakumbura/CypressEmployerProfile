/// <reference types="cypress" />

import CheckBoxFunctions from "../../support/functions/CheckBoxFunctions.js"

beforeEach(() => {
    cy.visit("/checkboxes");
})

describe("Handling a checkbox", () => {
    const chkBxPage = new CheckBoxFunctions();
    let testDataObj;

    before(() => {
        cy.fixture('testdata').then((data) => {
            testDataObj = data;
        })
    })

    it("Is a checkbox checked by default", () => {
        chkBxPage.checkByIndex(testDataObj.checkboxIndex);
    })


    it("Is the checkbox present in the DON", () => {
        chkBxPage.getCheckBoxes().should("exist");
    })

})