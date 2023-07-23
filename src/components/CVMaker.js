import Card from 'react-bootstrap/Card';
import "./Card.css"
import { FiChevronsRight } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';

function CVMakerCard() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div className='card-container'>
            {isDesktopOrLaptop && <Card className='card-pos' style={{ width: '20rem', height: '10rem' }}>
                <Card.Body>
                    <Card.Title><b><em>CV Maker</em></b> - <em>Flutter</em></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em> I used: REST API , firebase authentication, providers</em></div>
                        <div><em>and http interceptors.</em></div>
                        <a className='see-more' href='https://github.com/HassanMmd/CVMaker'>See more<FiChevronsRight size={10} /></a>
                    </Card.Text>
                </Card.Body>
            </Card>}
            {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                    <Card.Title><b><em>CV Maker</em></b> - <em>Flutter</em></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em> I used: REST API , firebase authentication, providers</em></div>
                        <div><em>and http interceptors.</em></div>
                        <a className='see-more' href='https://github.com/HassanMmd/CVMaker'>See more<FiChevronsRight size={10} /></a>
                    </Card.Text>
                </Card.Body>
            </Card>}
        </div>
    );
}

export default CVMakerCard;