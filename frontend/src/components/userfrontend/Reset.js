import React from "react";
import { Toaster } from "react-hot-toast"
import { useFormik } from "formik"
import "../userfrontend/applytailwind.css"
import { resetValidate } from "../../helper/validate";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Reset() {

    const formik = useFormik({
        initialValues : {
            password:  '',
            confirmPassword: '',
        },
        validate: resetValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })

    return (

        <div>

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <form action="/register" method="post" onSubmit={formik.handleSubmit}>

                <div>
                    <h1>Reset Password</h1>
                </div>
                <div class="form-group">
                    <input {...formik.getFieldProps('password')} type="text" name="password" id="password" placeholder="Enter New Password" required />
                </div>
                <div class="form-group">
                    <input {...formik.getFieldProps('confirmPassword')} type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>

            </form>

        </div>
    )

}

export default Reset;