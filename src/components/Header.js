import {logo_url} from "../utils/constants" ;

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className="logo" src= {logo_url}>
                </img>

            <div className='nav-bar'>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Create</li>
                </ul>
            </div>

            <div className='search' type = 'text'>
                <button className='seach-btn'>
                    Search
                </button>
            </div>
            </div>
        </div>
    )
}
export default Header;