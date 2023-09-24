import React from "react";
import styles from './UsersList.module.css'
import Card from "../UI/Card";

const UserList = (props) => {
    
    return (
        <div className={styles['users-list-container']}>
            {props.usersArray.length === 0 &&<div className={styles['no-users']}> No users have been added yet</div>}
            
            {props.usersArray.length > 0 && <div className={styles['users-list']}>
                {props.usersArray.map((item, index) => {
                    return <Card key={index} user={item}/>
                })}
            </div>}
        </div>
    )
}

export default UserList;