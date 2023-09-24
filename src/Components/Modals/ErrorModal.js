import React from "react";
import Button from "../UI/Button";
import style from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const dismissHandler = () => {
        props.onDismiss();
    }

    return (
        <div>
            <div className={style.backdrop} onClick={dismissHandler}></div>
            <div className={style.modal}>
                <div className={style['modal-inner']}>
                    <header className={style.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={style.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={style.actions}>
                        <Button onClick={dismissHandler}>Dismiss</Button>
                    </footer>
                </div>
            </div>
        </div>
    )
};

export default ErrorModal;