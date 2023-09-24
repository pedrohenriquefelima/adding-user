import React, { useState } from "react";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../Modals/ErrorModal";

const AddUser = (props) => {
    const [user, setUser] = useState({username: '', age: 0});
    const [isInvalid, setValidity] = useState({userName : false, age: false});
    const [showModal, setShowModal] = useState({show: false, message: ''});

    const handleInputChange = (event, type) => {
        setUser((current) => {
            return {...current, [type] : event.target.value}
        })
    }

    const handleFormSubmit = (data) => {
        data.preventDefault();

        if(checkInputValidity(user)) {
            props.onAddUser(user);
            setUser({username: '', age: 0});
        }
    }

    const checkInputValidity = (user) => {
        if(user.username.trim() === '' && +user.age === 0) {
            setValidity({userName : true,age: true});
            setShowModal({show: true, message: 'You are trying to log an user without username and age! Both fields are required'});
            return false;
        } else if (user.username.trim() === '') {
            setValidity({userName : true,age: false});
            setShowModal({show: true, message: 'Username is a required field'});
            return false
        } else if(+user.age === 0) {
            setValidity({userName : false,age: true});
            setShowModal({show: true, message: 'Age is a required field'});
            return false;
        }
        return true;
    };

    const dismissModalHandler = () => {
        setShowModal({show: false, message: ''});
    }

    return (
        <div className={styles.container}>
            {showModal.show === true && <ErrorModal title='An error has occured' message={showModal.message} onDismiss={dismissModalHandler}/>}
            <form onSubmit={handleFormSubmit}>
                <div className={styles['controler-input']}>
                    <label className={styles.label}>Username</label>
                    <input type="text" name='username' className={isInvalid.userName ? `${styles.input + ' ' + styles.invalid}`: styles.input} value={user.username} onChange={(event) => handleInputChange(event, 'username')}></input>
                </div>
                <div className={styles['controler-input']}>
                    <label className={styles.label}>Age</label>
                    <input type="number" name='age' className={isInvalid.age ? `${styles.input + ' ' + styles.invalid}`: styles.input} value={user.age} onChange={(event) => handleInputChange(event, 'age')}></input>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </div>
    )
};

export default AddUser;