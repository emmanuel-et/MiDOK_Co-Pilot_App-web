import {useParams} from "react-router-dom";
import CardComponent from "../components/CardComponent";
import Disclaimer from "../components/Disclaimer";
import Student from "../images/advising.png"
import HealthProfessional from "../images/health_professional_image.jpg"
import NonHealthProfessional from "../images/nonpro.png"
import styles from '../styles/UserPage.module.css'


const UserPage = () => {
    let userType: string | undefined = useParams().id;
    let userText: string = "None";
    let imgSrc: string = "None";

    if (userType === "student") {
        imgSrc = Student;
        userText = "Student";
    } else if (userType === "health-professional") {
        imgSrc = HealthProfessional;
        userText = "Health Professional";
    } else if (userType === "non-health-professional") {
        imgSrc = NonHealthProfessional;
        userText = "Non-Health Professional";
    }

    return (
        <>  
            <div className={styles.container}>
                <img className={styles.image} src={imgSrc} />
                <p className={styles.text}>{userText}</p>
                <CardComponent text="GENERAL WELL-BEING" />
                <CardComponent text="HEALTHCARE INFO" />
                <CardComponent text="REAL-TIME DATA" />
                <Disclaimer />
            </div>
        </>
    );
};

export default UserPage;