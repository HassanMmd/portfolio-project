import "./Main.css";
import CVBuilder from "./Card";
import MyGames from "./Card2";
import Me from '../assets/imges/me.jpg';
import { useMediaQuery } from 'react-responsive';
import Education from "./Education";
import Contact from "./Contact";
import ProjectsNav from "./ProjectsNav";
import RestaurantCard from "./RestaurantCard";

function Main() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div className="all-sections">
            <section className="pesonal-info">
                {isDesktopOrLaptop && <div><img className="me-img" src={Me}></img></div>}
                {isTabletOrMobile && <div><img className="me-img-mobile" src={Me}></img></div>}
                <p>Hello, I am Hassan!</p>
                <h2 className="des-title">Frontend developer</h2>
            </section>
            <section id="projects" className="projects-section">
                <h1 className="title">My Projects</h1>
                <div className="projects">
                    {isDesktopOrLaptop && <div className="my-projects">
                        <CVBuilder />
                        <MyGames />
                        <RestaurantCard />
                    </div>}
                    {isTabletOrMobile && <div className="my-projects-mobile">
                        <CVBuilder />
                        <MyGames />
                        <RestaurantCard />
                    </div>}
                    <h3 className="title">Extra Projects & Activities</h3>
                    <ProjectsNav />
                </div>
            </section>
            <section id="education" className="education-courses">
                <h1 className="title">Education And Courses</h1>
                <div className="edu">
                    {isDesktopOrLaptop && <div className='card-container--laptop'>
                        <Education />
                    </div>}
                    {isTabletOrMobile && <div className='card-container-mobile'>
                        <Education />
                    </div>}
                </div>
            </section>
            <section id="contact" className="contact-me">
                <h1 className="title">Contact me</h1>
                <div className="contact-form">
                    <Contact />
                </div>
                {isDesktopOrLaptop && <div className="email">Or by Email: hassanmohammad.sy.95@gmail.com</div>}
                {isTabletOrMobile && <div className="email-mobile">Or by Email: hassanmohammad.sy.95@gmail.com</div>}
            </section>
        </div>
    );
}

export default Main;