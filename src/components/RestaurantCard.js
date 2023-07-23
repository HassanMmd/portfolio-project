import Card from 'react-bootstrap/Card';
import restaurant from '../assets/imges/restaurant.png'
import "./Card.css"
import { FiChevronsRight } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';

function RestaurantCard() {
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
        <Card.Img className='img' src={restaurant} />
        <Card.Body>
          <Card.Title><b><em className='card-title'>Restaurant Website</em></b> - <em className='cart-title-sec'>React</em></Card.Title>
          <Card.Text className='cart-text'>
            <div><em>I used: React-responsive, Firebase, React-router-dom, Hooks.</em></div>
            <div><em>Restaurant website, in this website you can check the</em></div>
            <div><em>restaurant's menu, book a table in the restaurant and more.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/CV-Builder'>See more<FiChevronsRight size={10} /></a>
          </Card.Text>
        </Card.Body>
      </Card>}
      {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
        <Card.Img className='img' src={restaurant} />
        <Card.Body>
          <Card.Title><b><em className='card-title'>CV Builder</em></b> - <em className='cart-title-sec'>React</em></Card.Title>
          <Card.Text className='cart-text'>
            <div><em>I used: REST API , firebase authentication, Bootstrap, hooks.</em></div>
            <div><em>Create your CV by following simple steps, fill in your data and</em></div>
            <div><em>the website generates your CV for you.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/CV-Builder'>See more<FiChevronsRight size={10} /></a>
          </Card.Text>
        </Card.Body>
      </Card>}
    </div>
  );
}

export default RestaurantCard;