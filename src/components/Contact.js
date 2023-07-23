import Form from 'react-bootstrap/Form';
import './Contact.css';
import { useMediaQuery } from 'react-responsive';

function Contact() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div className="cont">
            {isDesktopOrLaptop && <Form className="form-size">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" className="form-tex custom-select" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" className="form-tex custom-select" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" className="form-tex custom-select" rows={3} />
                </Form.Group>
                <button className="btn btn-outline-info">Send</button>
            </Form>}
            {isTabletOrMobile && <Form className="form-size-mobile">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" className="form-tex custom-select" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" className="form-tex custom-select" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" className="form-tex custom-select" rows={3} />
                </Form.Group>
                <button className="btn btn-outline-info">Send</button>
            </Form>}
        </div>
    );
}

export default Contact;