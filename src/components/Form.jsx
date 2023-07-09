import React , { useState } from 'react';
import "./Form.css";
import SignUp from './SingUp';
import LogIn from './LogIn';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [show, setShow] = useState("");

    return (
        <>
            <div className={`wrapper${show}`}>
                <span className="icon-close">
                    <ion-icon name="close"></ion-icon>
                </span>
                <LogIn show={setShow} />
                <SignUp show={setShow} />
            </div>
            <ToastContainer />
        </>
    );
};

export default Form;