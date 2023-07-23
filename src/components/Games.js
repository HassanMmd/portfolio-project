import BallonCard from "./BallonCard";
import BouncingCard from "./BouncingCard";
import CavemanCard from "./CavemanCard";
import MonkeyCard from "./MonkeyCard";
import './Games.css';
import { useMediaQuery } from 'react-responsive';

function Games() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop && <div className="games">
                <BouncingCard />
                <BallonCard />
                <MonkeyCard />
                <CavemanCard />
            </div>}
            {isTabletOrMobile && <div className="games-mobile">
                <BouncingCard />
                <BallonCard />
                <MonkeyCard />
                <CavemanCard />
            </div>}
        </div>
    );
}

export default Games;