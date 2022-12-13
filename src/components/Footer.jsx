import React from 'react';
import "../styles/footer.scss";
import plastore from '../assets/playstore.png';
import appstore from "../assets/appstore.png";
import logo from '../assets/logo-white.png';
import twitter from "../assets/Twitter.png";
import linkedin from '../assets/linkedin.png';
import instagram from "../assets/Instagram.png";
import youtube from '../assets/Youtube.png';

function Footer() {
    return (
        <footer>

            <div>
                <img src={logo} alt="image" />
                <div>
                    <h2>Quick Links</h2>
                    <div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>FAQs</p>
                        <p>T&Cs</p>
                        <p>Privacy</p>
                    </div>
                </div>

                <div>
                    <h2>Download our App</h2>
                    <div className='store'>
                        <img src={plastore} alt="image" />
                        <img src={appstore} alt="image" />
                    </div>
                </div>
            </div>

            <p>Risk Warning: Trading Forex and Leveraged Financial Instruments involves significant risk 
                and can result in the loss of your invested capital. You should not invest more than you can 
                afford to lose and should ensure that you fully understand the risks involved. Trading leveraged 
                products may not be suitable for all investors. Trading non-leveraged products such as stocks also 
                involves risk as the value of a stock can fall as well as rise, which could mean getting back less 
                than you originally put in. Past performance is no guarantee of future results. Before trading, please 
                take into consideration your level of experience, investment objectives and seek independent financial 
                advice if necessary. It is the responsibility of the Client to ascertain whether he/she is permitted to 
                use the services of the EVERGREENFFX brand based on the legal requirements in his/her country of residence. 
                <span> Read more</span>
            </p>

            <div>
                <p>&copy; 2022 EvergreenFFX. All rights reserved</p>
                <div>
                    <img src={instagram} alt="image" />
                    <img src={twitter} alt="image" />
                    <img src={youtube} alt="image" />
                    <img src={linkedin} alt="image" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;