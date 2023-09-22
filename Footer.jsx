import { Link } from "react-router-dom"
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <Link to='about'>
                    About Us
                </Link>
            </div>
            <div className="footer-center">
                <Link to='contact'>
                    Contact Us
                </Link>
</div>
                <div className="footer-right">
                 <a href="https://www.facebook.com/ChitkaraU/">
                    <FaFacebook />
                    </a> 
                    <a href="https://www.facebook.com/ChitkaraU/">
                    <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com/ChitkaraU/">
                    <FaInstagram />
                    </a>

                </div>

            </div>
            )

}
            export default Footer