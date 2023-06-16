import React from "react";
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
import "../userfrontend/applytailwind.css"
import { usernameValidate, validateLogin, passwordValidate } from "../../helper/validate";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Password() {

    const formik = useFormik({
        initialValues : {
            password: '',
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })

    return (

        <div>

        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <form action="/login" method="post" onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <div class="form-group">
                <label>Username: </label>
                <input {...formik.getFieldProps('password')} type="password" name="password" id="password" placeholder="Enter Password" required />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>

            <p><a href="/recovery">Forgot Password</a></p>


        </form>

        </div>
    )

}

export default Password;