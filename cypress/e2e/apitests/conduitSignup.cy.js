/// <reference types ="cypress" />

import { loginapi } from "../../../apis/loginpage.api"
import user_signup  from "../../fixtures/user_signup.json"
import { rs } from "../../support/verifyResponseCode"

describe("Signup tests", function () {


    it("Verify signup", function () {


        loginapi.signup(user_signup).then(function(response){

            rs.verifyOk(response);
        })
    })
})
