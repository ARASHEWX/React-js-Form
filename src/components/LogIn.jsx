import React, { useState, useEffect } from 'react';
import "./Form.css";
import validate from '../helper/validate';
import notify from '../helper/toastify';

const LogIn = ({ show }) => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "logIn"));
    }, [data]);

    const changeHandler = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
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
                email: true,
                password: true
            })
        }
    }

    return (
        <>
            <div className="form-box login">
                <h2>Login</h2>
                <form action="#" onSubmit={submitHandler}>

                    <div className={errors.email && touched.email ? "err-border input-box" : "input-box"}>
                        <span className={errors.email && touched.email ? "err-txt icon" : "icon"}><ion-icon name="mail"></ion-icon></span>
                        <input type="email" autoComplete='off' name="email" value={data.email} onChange={changeHandler} onBlur={touchedHandler} />
                        <label className={touched.email ? "label-top" : ""}>Email</label>
                        {errors.email && touched.email && <span className="error-span">{errors.email}</span>}
                    </div>

                    <div className={errors.password && touched.password ? "err-border input-box" : "input-box"}>
                        <span className={errors.password && touched.password ? "err-txt icon" : "icon"}><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" name="password" value={data.password} onChange={changeHandler} onBlur={touchedHandler} />
                        <label className={touched.password ? "label-top" : ""}>Password</label>
                        {errors.password && touched.password && <span className="error-span">{errors.password}</span>}
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forget Password</a>
                    </div>

                    <button type="submit" className="btn">Login</button>

                    <div className="login-register">
                        <p>Don't have an account ? <a onClick={() => { show(" active") }} href="#" className="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LogIn;