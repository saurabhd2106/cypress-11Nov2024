/// <reference types="cypress" />


describe("Intercepting call Testing", function () {

    it("Intercept calls", function () {


        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        }, {
            fixture: "tags.json"
        }).as("tagApi")

        cy.visit("/")

        cy.wait("@tagApi")

        cy.get("@tagApi").then(function(xhr){


            expect(xhr.response.body.tags).to.contain("Automation")
            expect(xhr.response.body.tags).to.contain("Selenium")
            expect(xhr.response.body.tags).to.contain("Playwright")
            expect(xhr.response.body.tags).to.contain("cypress")

        })

    })

    it("500 Error code", function () {


        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        }, {
            statusCode: 500
        }).as("tagApi")

        cy.visit("/")

        cy.wait("@tagApi")

        cy.get("@tagApi").then(function(xhr){


           expect(xhr.response.statusCode).to.equal(500)

        })

        cy.get(".error-message-presenter").should("be.visible").and("contain.text", "Cannot load popular tags...")

    })




})