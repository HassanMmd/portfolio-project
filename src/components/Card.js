import Card from 'react-bootstrap/Card';
import CV from '../assets/imges/cv.png'
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
        <Card.Img className='img' src={CV} />
        <Card.Body>
          <Card.Title><b><em className='card-title'>CV Builder</em></b> - <em className='cart-title-sec'>React</em></Card.Title>
          <Card.Text className='cart-text'>
            <div><em>I used: REST API , Firebase authentication, Bootstrap, Hooks.</em></div>
            <div><em>Create your CV by following simple steps, fill in your data and</em></div>
            <div><em>the website generates your CV for you.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/CV-Builder'>See more<FiChevronsRight size={10} /></a>
          </Card.Text>
        </Card.Body>
      </Card>}
      {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
        <Card.Img className='img' src={CV} />
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

export default Cardd;