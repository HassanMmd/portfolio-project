import Card from 'react-bootstrap/Card';
import { useMediaQuery } from 'react-responsive';
import './Education.css';

function Education() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop && <Card className='card-pos' style={{ width: '30rem', height: '32rem' }}>
                <Card.Body>
                    <Card.Title className='cart-title'><b><em>Education:</em></b></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em><b>Tartous University Bachelor in Mathematics</b></em></div>
                        <div>2019 Tartous - Syria.</div>
                    </Card.Text>
                    <Card.Title className='cart-title'><b><em>Courses:</em></b></Card.Title>
                    <Card.Text className='cart-text'>
                        <div><em><b>- Meta Front-End Developer Professional</b></em></div>
                        <div><b>Certificate — 9 courses:</b></div>
                        <div>1-Introduction to Front-End Development</div>
                        <div>2-Programming with JavaScript</div>
                        <div>3-Version Control</div>
                        <div>4-HTML and CSS in depth</div>
                        <div>5-React Basics</div>
                        <div>6-Advanced React</div>
                        <div>7-Principles of UX/UI Design</div>
                        <div>8-Front-End Developer Capstone</div>
                        <div>9-Coding Interview Preparation</div>
                        <div><em><b>- Frontend development industry training</b></em> /Brainnest company/</div>
                        <div><em><b>- The complete Flutter development bootcamp with Dart</b></em></div>
                    </Card.Text>
                </Card.Body>
            </Card>}
            {isTabletOrMobile && <Card className='card-pos' style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                    <Card.Title className='cart-title'><b><em>Education:</em></b></Card.Title>
                    <Card.Text className='cart-text-mobile'>
                        <div><em><b>Tartous University Bachelor in Mathematics</b></em></div>
                        <div>2019 Tartous - Syria.</div>
                    </Card.Text>
                    <Card.Title className='cart-title'><b><em>Courses:</em></b></Card.Title>
                    <Card.Text className='cart-text-mobile'>
                        <div><em><b>- Meta Front-End Developer Professional</b></em></div>
                        <div><b>Certificate — 9 courses:</b></div>
                        <div>1-Introduction to Front-End Development</div>
                        <div>2-Programming with JavaScript</div>
                        <div>3-Version Control</div>
                        <div>4-HTML and CSS in depth</div>
                        <div>5-React Basics</div>
                        <div>6-Advanced React</div>
                        <div>7-Principles of UX/UI Design</div>
                        <div>8-Front-End Developer Capstone</div>
                        <div>9-Coding Interview Preparation</div>
                        <div><em><b>- Frontend development industry training</b></em> /Brainnest company/</div>
                        <div><em><b>- The complete Flutter development bootcamp with Dart</b></em></div>
                    </Card.Text>
                </Card.Body>
            </Card>}
        </div>
    );
}

export default Education;
