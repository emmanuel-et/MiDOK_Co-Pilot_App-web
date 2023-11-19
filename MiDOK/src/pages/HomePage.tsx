import Disclaimer from '../components/Disclaimer';
import '../styles/HomePage.css'
import logo from "../images/midok.jpg"

const HomePage = () => {
    return (
        <>
            <div className="container">
                <p className="midok">MIDOK</p>
                <img src={logo} />
                <p className="who">Who are you?</p>
                <Disclaimer />
            </div>
        </>
    )
};

export default HomePage;