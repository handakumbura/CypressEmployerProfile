/// <reference types="cypress"/>

import CheckBox from "../pages/CheckboxPage.cy"

export default class CheckBoxFunctions {

    checkByIndex(index) {
        new CheckBox().getCheckBoxes().eq(index).check();
    }

    getCheckBoxes() {
        return new CheckBox().getCheckBoxes();
    }


} 