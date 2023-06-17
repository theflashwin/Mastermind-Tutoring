import React from "react";
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
import { usernameValidate, validateLogin } from "../../helper/validate";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Username() {

    const formik = useFormik({
        initialValues : {
            username: '',
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })

    return (

        <div>

        <Toaster position="top-center" reverseOrder={false}></Toaster>

        {/* <form action="/login" method="post" onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <div class="form-group">
                <label>Username: </label>
                <input {...formik.getFieldProps('username')} type="text" name="username" id="username" placeholder="Enter Username" required />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>

            <p><a href="/register">Register Now</a></p>

        </form> */}

        <div className="container mx-auto">

            <div className="flex justify-center items-center h-screen">
                <div>
                    <div className="title">
                        <h4 className="text-xl">Hello Again!</h4>
                    </div>
                </div>
            </div>

        </div>

        </div>
    )

}

export default Username;