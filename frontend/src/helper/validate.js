import toast from 'react-hot-toast'


/** Validate login page username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}

/** Validate password */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)

    return errors
}

/** Validate Registration */
export async function registerValidate(values) {

    const errors = usernameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)

    return errors;

}

/** Validate Reset */
export async function resetValidate(values) {

    console.log(values)

    const errors = passwordVerify({}, values)

    if(values.password !== values.confirmPassword) {
        errors.exist = toast.error("passwords must match!")
    }

    return errors

}

/** Validate both at once */
export async function validateLogin(values) {

    let errors = usernameVerify({}, values)

    if(errors != null) {
        errors = passwordVerify({}, values)
    }

    return errors

}

function passwordVerify(error = {}, values) {

    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!values.password) {
        error.password = toast.error('Password is Required')
    } else if (values.password.includes(" ")) {
        error.password = toast.error('Invalid Password! Check for spaces.')
    } else if (values.password.length < 4) {
        error.password = toast.error('Password is shorter than 4 Characters!')
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error('Password must contain a special character')
    }

    return error;

}

/** validate username */
function usernameVerify(error = {}, values) {

    if(!values.username) {
        error.username = toast.error('Username Required')
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username! Check for spaces.')
    }

    return error;

}

function emailVerify(error = {}, values) {

    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(!values.email) {
        error.email = toast.error('Email is Required')
    } else if (values.email.includes(' ')) {
        error.email = toast.error('Invalid Email. Check for spaces')
    } 


}