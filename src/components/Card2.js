import Card from 'react-bootstrap/Card';
import games from '../assets/imges/games.png'
import "./Card.css"
import { FiChevronsRight } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';

function Cardd() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div className='card-container'>
      {isDesktopOrLaptop && <Card className='card-pos' style={{ width: '24rem', height: '22rem' }}>
        <Card.Img className='img' src={games} />
        <Card.Body>
          <Card.Title><b><em>Games website </em></b> - <em>React</em></Card.Title>
          <Card.Text className='cart-text'>
            <div><em>It shows my games that I made using Godot engine. You can see </em></div>
            <div><em>each game's description and video. I liked to show my games in </em></div>
            <div><em>a website using React.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/My-games-website'>See more<FiChevronsRight size={10} /></a>
          </Card.Text>
        </Card.Body>
      </Card>}
      {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
        <Card.Img className='img' src={games} />
        <Card.Body>
          <Card.Title><b><em>Games website </em></b> - <em>React</em></Card.Title>
          <Card.Text className='cart-text'>
            <div><em>It shows my games that I made using Godot engine. You can see </em></div>
            <div><em>each game's description and video. I liked to show my games in </em></div>
            <div><em>a website using React.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/My-games-website'>See more<FiChevronsRight size={10} /></a>
          </Card.Text>
        </Card.Body>
      </Card>}
    </div>
  );
}

export default Cardd;