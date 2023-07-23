import "./Header.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Navbar from "./Navbar";
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <header id="home" className="header-objects">
            {isDesktopOrLaptop && <div className="contact-list">
                <a className="list-item" href="https://github.com/HassanMmd"><AiFillGithub size={35} /></a>
                <a className="list-item" href="https://www.linkedin.com/in/hassan-mohammad-3a443424a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0KXDUwNYQ2KOpI76XUYWlg%3D%3D"><AiFillLinkedin size={35} /></a>
            </div>}
            {isTabletOrMobile && <div className="contact-list">
                <a className="list-item" href="https://github.com/HassanMmd"><AiFillGithub size={25} /></a>
                <a className="list-item" href="https://www.linkedin.com/in/hassan-mohammad-3a443424a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0KXDUwNYQ2KOpI76XUYWlg%3D%3D"><AiFillLinkedin size={25} /></a>
            </div>}
            <div className="nav">
                <Navbar />
            </div>
        </header>
    );
}

export default Header;