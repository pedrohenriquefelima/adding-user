import React from "react";
import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles['card-container']}>
            <div>Username: {props.user.username}</div>
            <div>age: {props.user.age}</div>
        </div>
    );
}

export default Card;