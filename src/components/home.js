const Home = (props) => {

    const registerBtnHandler = () => {
        let data = {
            register : true,
            login : false
        }

        props.onData(data);
    }
    const loginBtnHandler = () => {
        let data = {
            register : false,
            login : true
        }

        props.onData(data);
    }

    return(
        <div>
            <form>
                <input type="button" value="Register" onClick={registerBtnHandler}/><p />
                <input type="button" value="Login" onClick={loginBtnHandler}/>
            </form>
        </div>
    );
}

export default Home;