/// <reference types="cypress"/>

import FileUploadPage from '../pages/FileUploadPage.cy'

export default class CheckBoxFunctions {

    uploadFile(filePath) {
        new FileUploadPage().getFileUploadInput().selectFile(filePath);
    }

    clickUpload() {
        new FileUploadPage().getUploadButton().click();
    }

    getUploadedFileLabel() {
        return new FileUploadPage().getUploadedFileNameLabel();
    }
} 