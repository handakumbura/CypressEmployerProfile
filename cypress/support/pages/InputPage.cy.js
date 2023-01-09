/// <reference types="cypress"/>

import { defaultTimeOut } from "../common/Constants.cy";

export default class InputPage {

    getInputBox() {
        return cy.get('input', { timeout: defaultTimeOut });
    }
} 