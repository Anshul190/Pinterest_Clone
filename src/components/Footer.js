import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className='Footer'>
            <h2> Designed by Anshul Singh </h2>
            <p>�� 2024 HarborTech, Inc. All rights reserved.</p>    

            <div className='Sociallogo-container'>
                <img className='insta-logo' src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-1024.png"></img>
                <img className='linkedin-logo' src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-1024.png"></img>
                <img className='twitter-logo' src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-1024.png"></img>
            </div>

        </div>
    )
}

export default Footer;