import { useState } from "react";

const DetailsForm = (props) => {

    const [inputFirstname, setInputFirstname] = useState('');
    const [inputLastname, setInputLastname] = useState('');
    const inputEmail = props.email;
    const [inputAddress, setInputAddress] = useState('');
    const [inputCountry, setInputCountry] = useState('');
    const [inputDob, setInputDob] = useState('');
    const [inputGender, setInputGender] = useState('');
    const [inputProfilePicture, setInputProfilePicture] = useState('');
    const [inputWebsiteRating, setInputWebsiteRating] = useState('');
    const [inputJava,toggleInputJava] = useState(false);
    const [inputHTML,toggleInputHTML] = useState(false);
    const [inputPython,toggleInputPython] = useState(false);
    const [inputLanguage, setInputLanguage] = useState({Java : false, HTML : false, Python : false});

    const fNameChangeHandler = (event) => {
        setInputFirstname(event.target.value);
    }
    const lNameChangeHandler = (event) => {
        setInputLastname(event.target.value);
    }
    const addresslNameChangeHandler = (event) => {
        setInputAddress(event.target.value);
    }
    const countryChangeHandler = (event) => {
        setInputCountry(event.target.value);
    }
    const dobChangeHandler = (event) => {
        setInputDob(event.target.value);
    }
    const genderChangeHandler = (event) => {
        setInputGender(event.target.value);
        // console.log(event.target.value);
    }
    const profileChangeHandler = (event) => {
        setInputProfilePicture(event.target.value);
        // console.log(event.target.value);
    }
    const ratingChangeHandler = (event) => {
        setInputWebsiteRating(event.target.value);
        // console.log(event.target.value);
    }
    const javaChangeHandler = (event) => {
        toggleInputJava(event.target.checked);
        // console.log(event.target.checked);
        // console.log(event.target.value);
        // languageChangeHandler();
        let data = {
            Java : event.target.checked,
            HTML : inputHTML,
            Python : inputPython
        }
        setInputLanguage(data);
        console.log(data);
    }
    const htmlChangeHandler = (event) => {
        toggleInputHTML(event.target.checked);
        // console.log(event.target.checked);
        // console.log(event.target.value);
        // languageChangeHandler();
        let data = {
            Java : inputJava,
            HTML : event.target.checked,
            Python : inputPython
        }
        setInputLanguage(data);
        console.log(data);
    }
    const pythonChangeHandler = (event) => {
        toggleInputPython(event.target.checked);
        // console.log(event.target.checked);
        // console.log(event.target.value);
        // languageChangeHandler();
        let data = {
            Java : inputJava,
            HTML : inputHTML,
            Python : event.target.checked
        }
        setInputLanguage(data);
        console.log(data);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        let data = {
            fName : inputFirstname,
            lName : inputLastname,
            email : inputEmail,
            address : inputAddress,
            country : inputCountry,
            dob : inputDob,
            gender : inputGender,
            profilePicture : inputProfilePicture,
            websiteRating : inputWebsiteRating,
            languages : inputLanguage
        }
        props.onData(data);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name: </label>
                <input type="text" value={inputFirstname} onChange={fNameChangeHandler}/><p />
                <label>Last Name: </label>
                <input type="text" value={inputLastname} onChange={lNameChangeHandler}/><p />
                <label>Email: </label>
                <input type="email" value={inputEmail} readOnly /><p />
                <label>Address: </label>
                <textarea value={inputAddress} onChange={addresslNameChangeHandler}/><p />
                <label>Country: </label>
                <select name="country" value={inputCountry} onChange={countryChangeHandler}>
                    <option value="--Select Country--">--Select Country--</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                    <option value="Russia">Russia</option>
                    <option value="Europe">Europe</option>
                </select><p />
                <label>Date of Birth: </label>
                <input type="date" value={inputDob} onChange={dobChangeHandler}/><p />
                <label>Gender: </label>
                <input type="radio" id="male" name="gender" value="Male" onChange={genderChangeHandler}/><label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="Female" onChange={genderChangeHandler}/><label for="female">Female</label><p />
                <label>Profile Picture: </label>
                <input type="file"  filetype="image" value={inputProfilePicture} onChange={profileChangeHandler}/><p />
                <label>Website Rating: </label>
                <label>0</label>
                <input type="range" min="0" max="10" value={inputWebsiteRating} onChange={ratingChangeHandler}/>
                <label>10</label><p />
                <label>Languages: </label>
                <input type="checkbox" id="java" value="Java" onChange={javaChangeHandler}/><label for="java">Java</label>
                <input type="checkbox" id="html" value="HTML" onChange={htmlChangeHandler}/><label for="html">HTML</label>
                <input type="checkbox" id="python" value="Python" onChange={pythonChangeHandler}/><label for="python">Python</label><p />
                <button type="submit">Submit</button>&nbsp;
                <button type="button" onClick={props.onBack}>Back</button>
            </form>
        </div>
    );
}

export default DetailsForm;