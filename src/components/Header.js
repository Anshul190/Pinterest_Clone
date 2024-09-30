import {logo_url} from "../utils/constants" ;

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className="logo" src= {logo_url}>
                </img>

            <div className='nav-bar'>
                <ul>
                    <li>About</li>
                    <li>Business</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className='login' type = 'text'>
                <button className='login-btn'>
                    Login
                </button>
            </div>
            </div>
        </div>
    )
}
export default Header;