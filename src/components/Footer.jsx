import InstagramIcon from '../Assets/images/Black_Instagram_Icon.webp';
import GitHubIcon from '../Assets/images/GitHub.webp';
import LinkedInIcon from '../Assets/images/Linked.webp';


export default function Footer() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <>
            {/* Social Media */}
            <div className="socialmedia-img-container">
                <a href="https://github.com/Batking74">
                    <img src={GitHubIcon} alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/nazir-knuckles-736970234/">
                    <img src={LinkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://www.instagram.com/mr_blacknificent/">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                </a>
            </div>
        </>
    );
}