import './Footer.css';
import { useMediaQuery } from 'react-responsive';

function Footer() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <footer className="footer-container">
            {isDesktopOrLaptop && <div className='copyright'>Hassan • Copyright©</div>}
            {isTabletOrMobile && <div className='copyright-mobile'>Hassan • Copyright©</div>}
        </footer>
    );
}

export default Footer;