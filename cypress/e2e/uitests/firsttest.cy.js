/// <reference types="cypress" />

import {loginpage} from "../../../pages/LoginPage.js"
import {feedpage} from "../../../pages/feedpage.js"

//Test Suite
describe("Conduit App testcases", function () {

    // Hooks
    beforeEach(function(){

        cy.fixture("users").then(function(usersObject) {

            this.users = usersObject

        })

    })

    // Test cases
    it("Login to conduit app", function () {


        // 2. Execute test steps

        cy.visit("/")

        

        loginpage.loginToApplication(this.users.useremail, this.users.userpassword)
        

        // 3. Verify the results
        feedpage.verifyLoginSuccess(this.users.username)
       
    })

    it("Verify login with invalid credentials", function(){

        loginpage.loginToApplication(this.users.invalidemail, this.users.invalidpassword);

        //Verify login fails

    })

    it("Add Article", function(){

         
          // 2. Execute test steps
  
          cy.visit("/")
  
          //  cy.get("a[href='/user/login']").click()
  
          loginpage.loginToApplication(this.users.useremail, this.users.userpassword)

          //Steps to add article

        //  cy.get("input[placeholder='What\'s this article about?']")

        

        

    })

})

