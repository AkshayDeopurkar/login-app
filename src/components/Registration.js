import { useState } from "react";

const Registration = (props) => {

    const [inputEmail,setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [inputCPassword,setInputCPassword] = useState('');

    const emailChangeHandler = (event) => {
        setInputEmail(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setInputPassword(event.target.value);
    }
    const cPasswordChangeHandler = (event) => {
        setInputCPassword(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        let data = {
            email : inputEmail,
            password : inputPassword,
            cpassword : inputCPassword
        }
        setInputEmail('');
        setInputPassword('');
        setInputCPassword('');

        props.onData(data);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Email: </label>
                <input type="email" onChange={emailChangeHandler} value={inputEmail} /><p />
                <label>Password: </label>
                <input type="password" onChange={passwordChangeHandler} value={inputPassword} /><p />
                <label>Confirm Password: </label>
                <input type="password" onChange={cPasswordChangeHandler} value={inputCPassword}/><p />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;