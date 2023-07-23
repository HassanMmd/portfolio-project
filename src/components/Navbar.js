import './Navbar.css';
import { useMediaQuery } from 'react-responsive';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav>
      {isDesktopOrLaptop && <div className="nav">
        <a href="#Projects" onClick={handleClick("projects")} className="list-item">My projects</a>
        <a href="#Education" onClick={handleClick("education")} className="list-item">Education</a>
        <a href="#Contact" onClick={handleClick("contact")} className="list-item">Contact me</a>
      </div>}
      {isTabletOrMobile && <div className="nav">
        <Menu menuButton={<MenuButton className="m-btn"><AiOutlineMenu color='white' size={20} /></MenuButton>}>
          <MenuItem className="menu-nav">
            <a href="#Projects" onClick={handleClick("projects")} className="list-item">My projects</a>
          </MenuItem>
          <MenuItem className="menu-nav">
            <a href="#Education" onClick={handleClick("education")} className="list-item">Education</a>
          </MenuItem>
          <MenuItem className="menu-nav">
            <a href="#Contact" onClick={handleClick("contact")} className="list-item">Contact me</a>
          </MenuItem>
        </Menu>
      </div>}
    </nav>
  );
}

export default Navbar;