import React, { useState, useEffect } from 'react';
import "./Form.css";
import validate from '../helper/validate';
import notify from '../helper/toastify';

const SignUp = ({ show }) => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signUp"));
    }, [data]);

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({
                ...data,
                [event.target.name]: event.target.checked
            })
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value
            })
        }
    }

    const touchedHandler = event => {
        setTouched({
            ...touched,
            [event.target.name]: true
        });
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("success" ,"Sign in successfully");
        }
        else{
            notify("error" , "Invalid Data !");
            setTouched({
                username: true,
                email: true,
                password: true,
                isAccepted: true
            })
        }
    }

    return (
        <>
            <div className="form-box register">
                <h2>Register</h2>
                <form action="#" onSubmit={submitHandler}>

                    <div className={errors.username && touched.username ? "err-border input-box" : "input-box"}>
                        <span className={errors.username && touched.username ? "err-txt icon" : "icon"}><ion-icon name="person"></ion-icon></span>
                        <input autoComplete='off' type="text" name="username" value={data.username} onChange={changeHandler} onBlur={touchedHandler} />
                        <label className={touched.username ? "label-top" : ""}>Username</label>
                        {errors.username && touched.username && <span className="error-span">{errors.username}</span>}
                    </div>

                    <div className={errors.email && touched.email ? "err-border input-box" : "input-box"}>
                        <span className={errors.email && touched.email ? "err-txt icon" : "icon"}><ion-icon name="mail"></ion-icon></span>
                        <input autoComplete='off' type="email" name="email" value={data.email} onChange={changeHandler} onBlur={touchedHandler} />
                        <label className={touched.email ? "label-top" : ""}>Email</label>
                        {errors.email && touched.email && <span className="error-span">{errors.email}</span>}
                    </div>

                    <div className={errors.password && touched.password ? "err-border input-box" : "input-box"}>
                        <span className={errors.password && touched.password ? "err-txt icon" : "icon"}><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" name="password" value={data.password} onChange={changeHandler} onBlur={touchedHandler} />
                        <label className={touched.password ? "label-top" : ""}>Password</label>
                        {errors.password && touched.password && <span className="error-span">{errors.password}</span>}
                    </div>

                    <div className="agreement-section">
                        <label>
                            <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onBlur={touchedHandler} />I agree to the terms & conditions
                        </label>
                    </div>
                    
                    {errors.isAccepted && touched.isAccepted && <span className="accept-error">{errors.isAccepted}</span>}

                    <button type="submit" className="register-btn">Register</button>
                    <div className="login-register">
                        <p>Already have an account ? <a onClick={() => { show("") }} href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;