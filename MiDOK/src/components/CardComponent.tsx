import styles from '../styles/components/CardComponent.module.css'

const CardComponent = (props : {text : string}) => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.text}>{props.text}</p>
            </div>
        </>
    );
};

export default CardComponent;