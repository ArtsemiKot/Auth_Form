import Header from "../../Components/Header/Header";
import style from './style.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RegPage() {
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <h1>Welcome, let's create an account</h1>
                <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                <div className={style.name}>
                    <TextField style={{ width: '100%' }}
                        id="outlined-error"
                        label="Name"
                        defaultValue="Name"
                    />
                     <TextField style={{ width: '100%' }}
                        id="outlined-error"
                        label="Surname"
                        defaultValue="Surname"
                    />
                </div>
                <div>
                    <TextField style={{ width: '100%' }}
                        id="outlined-error"
                        label="Email"
                        defaultValue="Your email"
                    />
                </div>
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

export default RegPage;