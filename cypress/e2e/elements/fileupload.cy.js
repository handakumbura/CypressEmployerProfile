/// <reference types="cypress"/>
import FileUploadFunctions from "../../support/functions/FileUploadFunctions.cy";


describe("Handling a dropdown", () => {
    const fileUploadFunctions = new FileUploadFunctions();
    let testDataObj;

    beforeEach(() => {
        cy.visit("/upload");
    })

    before(() => {
        cy.fixture('testdata').then((data) => {
            testDataObj = data;
        })
    })

    it("enter in the value", () => {
        fileUploadFunctions.uploadFile(testDataObj.fileUploadURL);
        fileUploadFunctions.clickUpload();
    });


})