import Disclaimer from '../components/Disclaimer';
import '../styles/HomePage.css'
import logo from "../images/midok.jpg"
import HomeCardComponent from '../components/HomeCardComponent';

const HomePage = () => {
    return (
        <>
            <div className="container">
                <p className="midok">MIDOK</p>
                <img src={logo} />
                <p className="who">Who are you?</p>
                <HomeCardComponent text="Student" />
                <Disclaimer />
            </div>
        </>
    )
};

export default HomePage;