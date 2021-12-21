import { useState } from "react";

const Login = (props) => {

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setInputUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setInputPassword(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        let data = {
            username : inputUsername,
            password : inputPassword
        }
        setInputUsername('');
        setInputPassword('');

        props.onData(data);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
              <label>Username: </label>
              <input type="email" onChange={usernameChangeHandler} value={inputUsername}/><p />
              <label>Password: </label>
              <input type="password" onChange={passwordChangeHandler} value={inputPassword}/><p />
              <button type="submit" >Submit</button>  
            </form>
        </div>
    );
}

export default Login;