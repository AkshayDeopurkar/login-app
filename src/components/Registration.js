import { useState } from "react";
import DetailsForm from "./DetailsForm";

const Registration = (props) => {

    const [showDetails, toggleShowDetails] = useState(false);

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
        // setInputEmail('');
        setInputPassword('');
        setInputCPassword('');
        toggleShowDetails(true);

        props.onData(data);
    }
    const onBackHandler = () => {
        let data = {
            register : false,
            login : false
        }
        props.onBack(data);
    }
    const onDataHandler = (data) => {
        console.log(data);
    }
    if(!showDetails){
        return(
            <div>
                <form onSubmit={submitHandler}>
                    <label>Email: </label>
                    <input type="email" onChange={emailChangeHandler} value={inputEmail} /><p />
                    <label>Password: </label>
                    <input type="password" onChange={passwordChangeHandler} value={inputPassword} /><p />
                    <label>Confirm Password: </label>
                    <input type="password" onChange={cPasswordChangeHandler} value={inputCPassword}/><p />
                    <button type="submit">Submit</button><br />
                    <button type="button" onClick={onBackHandler}>Back</button>
                </form>
            </div>
        );
    }
    if(showDetails){
        return(
            <div>
                <DetailsForm email={inputEmail} onData={onDataHandler} onBack={onBackHandler} />
            </div>
        )
    }
}

export default Registration;