import React from "react";
import ReactDom from "react-dom";
import Button from "../UI/Button";
import style from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const BackDrop = (props) => {
        return <div className={style.backdrop} onClick={props.onClick}></div>
    }

    const OverlayModal = (props) => {
        return (
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
        );
    }

    const dismissHandler = () => {
        props.onDismiss();
    }

    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onClick={dismissHandler}/>,document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<OverlayModal title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
};

export default ErrorModal;