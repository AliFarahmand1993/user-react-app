import React, { useState } from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enterdusername, setEnteredUsername] = useState('');
    const [enterdَAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enterdusername, enterdَAge)
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

return (
    <Card className={classes.input}>
        <form onClick={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input
                id='username'
                type="text"
                onChange={usernameChangeHandler}></input>
            <label htmlFor='age'>Age</label>
            <input
                id='age'
                type="number"
                onChange={ageChangeHandler}></input>
            <Button type='submit'>Add User</Button>
        </form>
    </Card>
)
}

export default AddUser