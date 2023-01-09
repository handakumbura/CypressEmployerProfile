/// <reference types="cypress"/>

import InputPage from "../pages/InputPage.cy";


export default class InputFunctions {

    setValue(number) {
        new InputPage().getInputBox().type(number);

    }

    getValue() {
        return new InputPage().getInputBox().invoke('val');
    }

} 