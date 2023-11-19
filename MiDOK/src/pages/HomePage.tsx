import Disclaimer from '../components/Disclaimer';
import '../styles/HomePage.css'
import logo from "../images/midok.jpg"
import HomeCardComponent from '../components/HomeCardComponent';

const HomePage = () => {
    return (
        <>
            <div className="container">
                <p className="midok">MiDOK</p>
                <img src={logo} />
                <p className="who">Who are you?</p>
                <div className="card">
                    <HomeCardComponent text="Student" />
                    <HomeCardComponent text="Health Professional" />
                    <HomeCardComponent text="Non-Health Professional" />
                </div>
                <Disclaimer />
            </div>
        </>
    )
};

export default HomePage;