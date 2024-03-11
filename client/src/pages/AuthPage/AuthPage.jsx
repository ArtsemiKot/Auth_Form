import Header from "../../Components/Header/Header";
import style from './style.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AuthPage() {
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <h1>Sign In</h1>
                <p>Log in to access your account or create one. Verify your email for seamless access.</p>
                <p>email</p>
                <div>
                    <TextField style={{ width: '100%' }}
                        id="outlined-error"
                        label="Emailr"
                        defaultValue="Your email"
                    />
                </div>
                <p>password</p>
                <div>
                    <TextField style={{ width: '100%' }}
                        id="outlined-error-helper-text"
                        label="Password"
                        defaultValue="Must be at least 8 characters."
                    />
                </div>
                <Button variant="contained">Continue</Button>
                <p className={style.text}>Not registered yet? Sign Up</p>
            </div>
        </>
    );
}

export default AuthPage;