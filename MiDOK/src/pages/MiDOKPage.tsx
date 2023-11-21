import React from 'react';
import axios from 'axios';
import Disclaimer from "../components/Disclaimer";
import styles from '../styles/MiDOKPage.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingScreenComponent from '../components/LoadingScreenComponent';
import Button from '../components/Button';


const MiDOKPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [response, setResponse] = React.useState<string>("");
    const location = useLocation();
    const prompt = location.state.prompt;

    const apiUrl: string = "https://ai-hackathon-ap.onrender.com/chat";
    const postData: Record<string, string> = {"message" : prompt};

    const getMiDOKResponse = async (apiUrl: string, postData: Record<string, string>) => {
        try {
            const response = await axios.post(apiUrl, postData, {
                headers: {
                    "Content-Type" : "application/json",
                },
            });
            setResponse(response.data);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            try {
                getMiDOKResponse(apiUrl, postData);
            } finally {
                setIsLoading(false);
            }
        }, 5000);
    }, []);

    const handleClick = () => navigate("/")

    return (
        <>  
            <div className={styles.container}>
                {
                   isLoading ? <LoadingScreenComponent /> : 
                    <div>
                        {response}
                        <Button text="HOME" onClick={handleClick} />
                    </div>
                }
                <Disclaimer />
            </div>
        </>
    );
};

export default MiDOKPage;