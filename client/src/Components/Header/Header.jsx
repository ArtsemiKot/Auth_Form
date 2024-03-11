import Button from '@mui/material/Button';
import style from './style.module.scss'
function Header() {
    return (
        <>
            <Button variant="text">Sign In</Button>
            <Button variant="text">Sign Up</Button>
        </>
    );
}

export default Header;