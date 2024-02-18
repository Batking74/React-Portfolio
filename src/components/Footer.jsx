export default function Footer() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <>
            {/* Social Media */}
            <div className="socialmedia-img-container">
                <a href="https://github.com/Batking74">
                    <img src="/src/Assets/images/GitHub.webp" alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/nazir-knuckles-736970234/">
                    <img src="/src/Assets/images/Linked.webp" alt="LinkedIn Icon" />
                </a>
                <a href="https://www.instagram.com/mr_blacknificent/">
                    <img src="/src/Assets/images/Black_Instagram_Icon.webp" alt="Instagram Icon" />
                </a>
            </div>
        </>
    );
}