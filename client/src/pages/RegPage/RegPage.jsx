import Header from "../../Components/Header/Header";
import style from './style.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from 'axios'

function RegPage() {
    const [data, setData] = useState({})

    function changeState(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    async function sendRequest() {
        const response = await axios.post("http://localhost:3000/user", data)
        console.log(response);
    }
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <h1>Welcome, let's create an account</h1>
                <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                <div className={style.name}>
                    <TextField onChange={changeState} style={{ width: '100%' }}
                        id="outlined-error"
                        label="Name"
                        name="name"
                    />
                    <TextField onChange={changeState} style={{ width: '100%' }}
                        id="outlined-error"
                        label="Surname"
                        name="surname"
                    />
                </div>
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

export default RegPage;