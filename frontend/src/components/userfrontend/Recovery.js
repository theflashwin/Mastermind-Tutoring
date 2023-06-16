import React from "react";
import "../userfrontend/applytailwind.css"
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { usernameValidate } from "../../helper/validate"

function Recovery() {

    return (

        <div>

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <form action="/login" method="post">
                <div className="form-group">
                    <label>Verification code: </label>
                    <input type="text" name="username" id="username" placeholder="Verification Code" required />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>

                <p><a href="/register">Register Now</a></p>

            </form>

        </div>
    )

}

export default Recovery