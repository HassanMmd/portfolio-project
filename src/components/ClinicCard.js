import Card from 'react-bootstrap/Card';
import restaurant from '../assets/imges/restaurant.png'
import "./Card.css"
import { FiChevronsRight } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';

function ClinicCard(){


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


    return(
      <div className='card-container'>
        {isDesktopOrLaptop && <Card className='card-pos' style={{ width: '24rem', height:'22rem' }}>
        <Card.Img className='img' src={restaurant} />
        <Card.Body>
          <Card.Title><b><em  className='card-title'>Dentist Clinic</em></b> - <em className='cart-title-sec'>React</em></Card.Title>
          <Card.Text className='cart-text'>
          <div><em>I used: React-responsive, Sql, Bootstrap, React-router-dom, Hooks.</em></div>
            <div><em>In this website you can Get, add, delete, and edit Patients details</em></div>
            <div><em>You can Get, add, delete, and edit Sessions, Payments and more.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/Dentist-Clinic-project'>See more<FiChevronsRight size={10}/></a>
            <a className='see-more' href='https://hassan-mohammad.tech/clinic/'>Live<FiChevronsRight size={10}/></a>
          </Card.Text>
        </Card.Body>
      </Card>}
      {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height:'100%' }}>
        <Card.Img className='img' src={restaurant} />
        <Card.Body>
          <Card.Title><b><em  className='card-title'>Dentist Clinic</em></b> - <em className='cart-title-sec'>React</em></Card.Title>
          <Card.Text className='cart-text'>
          <div><em>I used: React-responsive, Sql, Bootstrap, React-router-dom, Hooks.</em></div>
          <div><em>In this website you can Get, add, delete, and edit Patients details</em></div>
          <div><em>You can Get, add, delete, and edit Sessions, Payments and more.</em></div>
            <a className='see-more' href='https://github.com/HassanMmd/Dentist-Clinic-project'>See more<FiChevronsRight size={10}/></a>
            <a className='see-more' href='https://hassan-mohammad.tech/clinic/'>Live<FiChevronsRight size={10}/></a>
          </Card.Text>
        </Card.Body>
      </Card>}
      </div>
    );
}

export default ClinicCard;