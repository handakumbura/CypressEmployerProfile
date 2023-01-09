/// <reference types="cypress"/>
import DropDownPage from "../pages/DropDownPage.cy";

export default class DropDownFunctions {
    selectOption(value) {
        new DropDownPage().getDropDown().select(value);
    }

    isGivenOptionSelected(value) {
        new DropDownPage().getDropDown().select(value);
        new DropDownPage().getSelectedDropdownOption().should("have.text", value);
    }
} 