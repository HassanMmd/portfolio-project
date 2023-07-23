import Card from 'react-bootstrap/Card';
import "./Card.css";
import { FiChevronsRight } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';
import CavemanVideo from "../assets/videos/games/Caveman.mp4"

function CavemanCard() {
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
                    <source src={CavemanVideo} type="video/mp4" />
                </video>
                <Card.Body>
                    <Card.Title><b><em>Caveman Game</em></b> - <em>Godot</em></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em>Caveman: is an adventure game. Caveman hunts </em></div>
                        <div><em>birds and collect apples.</em></div>
                    </Card.Text>
                </Card.Body>
            </Card>}
            {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
                <video width="100%" height="100%" controls>
                    <source src={CavemanVideo} type="video/mp4" />
                </video>
                <Card.Body>
                    <Card.Title><b><em>Caveman Game</em></b> - <em>Godot</em></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em>Caveman: is an adventure game. Caveman hunts </em></div>
                        <div><em>birds and collect apples.</em></div>
                    </Card.Text>
                </Card.Body>
            </Card>}
        </div>
    );
}

export default CavemanCard;