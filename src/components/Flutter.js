import CVMakerCard from './CVMaker';
import './Flutter.css';
import MyExpensesCard from './MyExpensesCard';
import { useMediaQuery } from 'react-responsive';

function Flutter() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop && <div className="flutter">
                <CVMakerCard />
                <MyExpensesCard />
            </div>}
            {isTabletOrMobile && <div className="flutter-mobile">
                <CVMakerCard />
                <MyExpensesCard />
            </div>}
        </div>
    );
}

export default Flutter;