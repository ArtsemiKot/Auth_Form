import Header from "../../Components/Header/Header";
import style from './style.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from 'axios'

function AuthPage() {
    const [data, setData] = useState({})

    function changeState(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    async function sendRequest() {
        const response = await axios.post("http://localhost:3000/user/auth", data, {
            withCredentials: true,
        })
        console.log(response);
    }
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <h1>Sign In</h1>
                <p>Log in to access your account or create one. Verify your email for seamless access.</p>
                <div>
                    <TextField onChange={changeState} style={{ width: '100%' }}
                        id="outlined-error"
                        label="Email"
                        name="email"
                    />
                </div>
                <div>
                    <TextField onChange={changeState} style={{ width: '100%' }}
                        id="outlined-error-helper-text"
                        label="Password"
                        name="password"
                    />
                </div>
                <Button onClick={sendRequest} variant="contained">Continue</Button>
                <p className={style.text}>Not registered yet? Sign Up</p>
            </div>
        </>
    );
}

export default AuthPage;