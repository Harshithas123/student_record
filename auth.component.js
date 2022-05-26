import React from "react";
import './auth.styles.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../backend/firebasepro";
import { async } from "@firebase/util";



const AuthPage = () => {
    const [userInputs, setUserInputs] = useState({
        emailid:"",
        password:""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInputs({
            ...userInputs,
            [name]:value
        })
    }

    const handleClick = async () => {
        try {
            await  createUserWithEmailAndPassword(firebaseAuth, userInputs.emailid, userInputs.password)
            alert("account created!")
        }catch(err) {
            alert(err);
        }
    }

    return(
        <div className="auth-page-container">
        <div className="input-container">
        <input name="emailid" onChange={handleChange} className='inputs' type={'email'} placeholder="email id" />
        <input name="password" onChange={handleChange} className="inputs" type={'password'} placeholder="password" />
        <button className="create-account-button" onClick={handleClick}>create Account</button>
        </div>

        </div>
    );


}

export default AuthPage;


