const validate = (data, type) => {
    
    const errors = {};

    if (type === "signUp") {
        if (!data.username.trim()) {
            errors.username = "Username required";
        } else {
            delete errors.username;
        }

        if (data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = "Accept our regulations"
        }
    }

    if (!data.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid";
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = "Password required";
    } else if (data.password.length < 6) {
        errors.password = "Password need to be 6 charector or more"
    } else {
        delete errors.password;
    }

    return errors;
}

export default validate;