/// <reference types="cypress"/>

import { defaultTimeOut } from "../common/Constants.cy";

export default class DropDownPage {
    selectOption(value) {
        const dropDown = new DropDownPage();
        dropDown.getDropDown().select(value);
    }

    isGivenOptionSelected(value) {
        const dropDown = new DropDownPage();
        dropDown.getDropDown().select(value);
        dropDown.getSelectedDropdownOption().should("have.text", value);
    }

    getDropDown() {
        return cy.get("#dropdown", { timeout: defaultTimeOut });
    }

    getSelectedDropdownOption() {
        return cy.xpath("//*[@selected=\'selected\']", { timeout: defaultTimeOut });
    }
} 