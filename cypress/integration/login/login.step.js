
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

import { loginpage } from "../../../pages/LoginPage.js"
import { feedpage } from "../../../pages/feedpage.js";

Given("Saurabh is a writer and has access to the application", function(){

    cy.visit("/")

})

When("Saurabh login with correct credentials", function(){

    const useremail = "testuser@test.com"
    const password = "testpassword"

    loginpage.loginToApplication(useremail, password)

})

Then("Saurabh gets access to the application", function(){

    feedpage.verifyLoginSuccess("testuser")

})

When("Saurabh uses his credentials as {string} and {string}", function(useremail, password){
    loginpage.loginToApplication(useremail, password)
})

When("Saurabh uses his credentials as", function(datatable){

    const data = datatable.raw();

    const useremail = data[0][0];
    const password = data[1][0];

    loginpage.loginToApplication(useremail, password)
})

When("Saurabh uses his credentials as map", function(datatable){


    let  useremail;

    let  password 

    datatable.hashes().map(function(value){

        console.log(value)

        useremail = value.useremail;

        password = value.userpassword;
    })


   
    loginpage.loginToApplication(useremail, password)
})