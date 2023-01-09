/// <reference types="cypress"/>

import { defaultTimeOut } from "../common/Constants.cy";

export default class CheckBoxPage {

    getFileUploadInput() {
        return cy.get('#file-upload', { timeout: defaultTimeOut });
    }

    getUploadButton() {
        return cy.get('#file-submit', { timeout: defaultTimeOut });
    }

    getUploadedFileNameLabel() {
        return cy.get('#uploaded-files"', { timeout: defaultTimeOut });
    }


} 