import Card from 'react-bootstrap/Card';
import "./Card.css";
import { useMediaQuery } from 'react-responsive';
import MonkeyVideo from "../assets/videos/games/Monkey.mp4"

function MonkeyCard() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div className='card-container'>
            {isDesktopOrLaptop && <Card className='card-pos' style={{ width: '20rem', height: '20rem' }}>
                <video width="300rem" height="200rem" controls>
                    <source src={MonkeyVideo} type="video/mp4" />
                </video>
                <Card.Body>
                    <Card.Title><b><em>Monkey Game</em></b> - <em>Godot</em></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em>Monkey: nice game for kids. </em></div>
                        <div><em>Help the monkey eating bananas and jumping safe.</em></div>
                    </Card.Text>
                </Card.Body>
            </Card>}
            {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
                <video width="100%" height="100%" controls>
                    <source src={MonkeyVideo} type="video/mp4" />
                </video>
                <Card.Body>
                    <Card.Title><b><em>Monkey Game</em></b> - <em>Godot</em></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em>Monkey: nice game for kids. </em></div>
                        <div><em>Help the monkey eating bananas and jumping safe.</em></div>
                    </Card.Text>
                </Card.Body>
            </Card>}
        </div>
    );
}

export default MonkeyCard;