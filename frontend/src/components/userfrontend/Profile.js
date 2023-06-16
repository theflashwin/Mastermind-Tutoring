import React from "react";
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
import "../userfrontend/applytailwind.css"
import { registerValidate } from "../../helper/validate";

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Register() {

    const formik = useFormik({
        initialValues : {
            email: '',
            username: '',
            password: '',
        },
        validate: registerValidate,
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
            <h1>Profile</h1>
            <div class="form-group">
                <label>Email: </label>
                <input {...formik.getFieldProps('email')} type="text" name="email" id="email" placeholder="Enter Email" required />
            </div>
            <div class="form-group">
                <label>Username: </label>
                <input {...formik.getFieldProps('username')} type="text" name="username" id="username" placeholder="Enter Username" required />
            </div>
            <div class="form-group">
                <label>Username: </label>
                <input {...formik.getFieldProps('password')} type="password" name="password" id="password" placeholder="Enter Password" required />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>

            <p><a href="/login">Sign In</a></p>


        </form>

        </div>
    )

}

export default Register;