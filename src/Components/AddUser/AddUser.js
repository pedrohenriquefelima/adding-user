import React, { useState, useEffect } from "react";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../Modals/ErrorModal";

const AddUser = (props) => {
    const [user, setUser] = useState({username: '', age: 0});
    const [focused, setFocus]  = useState({userNameFocus: false, ageFocused: false});
    const [isInvalid, setValidity] = useState({userName : false, age: false});
    const [showModal, setShowModal] = useState({show: false, message: ''});


    useEffect(() => {
        // This code will run whenever the 'user' state changes.
        checkInputValidity(user, false);
      }, [user,focused]);

    const handleInputChange = (event, type) => {
        setUser((current) => {
            return {...current, [type] : event.target.value}
        })
    }

    const handleFocus = (event, type) => {
        if(type === 'username') {
            setFocus({userNameFocus: true, ageFocused: focused.ageFocused})
        }
        if(type === 'age') {
            setFocus({userNameFocus: focused.userNameFocus, ageFocused: true})
        }
    }

    const handleFormSubmit = (data) => {
        data.preventDefault();

        if(checkInputValidity(user, true)) {
            setUser({username: '', age: 0});
            setFocus({userNameFocus: false, ageFocused: false})
        }
    }

    const checkInputValidity = (user, visibleModal) => {
        if(user.username.trim() === '' && +user.age === 0 && focused.ageFocused && focused.userNameFocus) {
            console.log('one');
            setValidity({userName : true, age: true});
            if(visibleModal){
                showModalHandler('You are trying to log an user without username and age! Both fields are required')
            }
            return false;
        } else if (user.username.trim() === ''  && focused.userNameFocus) {
            setValidity({userName : true, age: false});
            if(visibleModal){
                showModalHandler('Username is a required field')
            }
            return false
        } else if(+user.age === 0 && focused.ageFocused) {
            setValidity({userName : false, age: true});
            if(visibleModal){
                showModalHandler('Age is a required field')
            }
            return false;
        }else {
            setValidity({userName : false, age: false});
        }
        return true;
    };

    const showModalHandler = (displayedMessage) => {
        setShowModal({show: true, message: displayedMessage});
    }

    const dismissModalHandler = () => {
        setShowModal({show: false, message: ''});
    }

    return (
        <React.Fragment>
            {showModal.show === true && <ErrorModal title='An error has occured' message={showModal.message} onDismiss={dismissModalHandler}/>}
            <form onSubmit={handleFormSubmit} className={styles.container}>
                <div className={styles['controler-input']}>
                    <label className={styles.label}>Username</label>
                    <input type="text" name='username' className={isInvalid.userName ? `${styles.input + ' ' + styles.invalid}`: styles.input} value={user.username} onChange={(event) => handleInputChange(event, 'username')} onFocus={(event) => handleFocus(event, 'username')}></input>
                </div>
                <div className={styles['controler-input']}>
                    <label className={styles.label}>Age</label>
                    <input type="number" name='age' className={isInvalid.age ? `${styles.input + ' ' + styles.invalid}`: styles.input} value={user.age} onChange={(event) => handleInputChange(event, 'age')} onFocus={(event) => handleFocus(event, 'age')}></input>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </React.Fragment>
    )
};

export default AddUser;