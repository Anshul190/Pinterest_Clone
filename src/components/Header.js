import {logo_url} from "../utils/constants" ;
import {useState} from "react";

const Header = () => {

    const [loginbutton, setloginbutton] = useState('Login');
    
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className="logo" src= {logo_url}></img>
            </div>

            <div className='nav-bar'>
                <ul>
                    <li>About</li>
                    <li>Business</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className='login'>
                <button className='login-btn' onClick = {()=> {
                    loginbutton === 'Login'
                    ? setloginbutton('Logout')
                    : setloginbutton('Login') 
                }}>
                    {loginbutton}
                </button>
            </div>
        </div>
    )
}
export default Header;