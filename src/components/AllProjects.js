import CVMakerCard from './CVMaker';
import './AllProjects.css';
import MyExpensesCard from './MyExpensesCard';
import Ballon from './game-description/Ballon';
import Bouncing from './game-description/Bounicing';
import Caveman from './game-description/Caveman';
import Monkey from './game-description/Monkey';
import { useMediaQuery } from 'react-responsive';

function AllProjects() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop && <div className="all-projects">
                <Bouncing />
                <Ballon />
                <Monkey />
                <Caveman />
                <CVMakerCard />
                <MyExpensesCard />
            </div>}
            {isTabletOrMobile && <div className="all-projects-mobile">
                <Bouncing />
                <Ballon />
                <Monkey />
                <Caveman />
                <CVMakerCard />
                <MyExpensesCard />
            </div>}
        </div>
    );
}

export default AllProjects;