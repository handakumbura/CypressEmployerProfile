/// <reference types="cypress"/>

describe("REST API Automation", () => {
    // the mockback API needs to be configured manualy before tests can be executed.

    it.skip("GET", () => {
        cy.request({
            method: "GET",
            url: "https://63b8dbcd3329392049e6c682.mockapi.io/cy"
        }
        ).then(function (response) {
            cy.wrap(response.body.method).should("equal", "GET");
            cy.wrap(response.body.username).should("equal", "dumidu");
            cy.wrap(response.body.items[1]).should("equal", "banana");
        })
    })

    it.skip("POST", () => {
        cy.request({
            method: "POST",
            url: "https://63b8dbcd3329392049e6c682.mockapi.io/cy",
            body: {
                "name": "test",
                "age": 123
            }
        }
        ).then(function (response) {
            cy.wrap(response.body.method).should("equal", "POST");
            cy.wrap(response.body.username).should("equal", "dumidu");
            cy.wrap(response.body.items[1]).should("equal", "banana");
        })
    })

    it.skip("PUT", () => {
        cy.request({
            method: "PUT",
            url: "https://63b8dbcd3329392049e6c682.mockapi.io/cy/2",
            body: {
                "name": "test",
                "age": 123
            }
        }
        ).then(function (response) {
            cy.wrap(response.body.method).should("equal", "PUT");
            cy.wrap(response.body.username).should("equal", "dumidu");
            cy.wrap(response.body.items[1]).should("equal", "banana");
        })
    })

    it.skip("DELETE", () => {
        cy.request({
            method: "DELETE",
            url: "https://63b8dbcd3329392049e6c682.mockapi.io/cy/2",
            body: {
                "name": "test",
                "age": 123
            }
        }
        ).then(function (response) {
            cy.wrap(response.body.method).should("equal", "DELETE");
            cy.wrap(response.body.username).should("equal", "dumidu");
            cy.wrap(response.body.items[1]).should("equal", "banana");
        })
    })
})