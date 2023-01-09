/// <reference types="cypress"/>

import { defaultTimeOut } from "../common/Constants.cy";

export default class CheckBoxPage {

    getCheckBoxes() {
        return cy.get('input', { timeout: defaultTimeOut });
    }

} 