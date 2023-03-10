import React, { useState } from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card'
import ErrorModal from '../Ui/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState("")

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
           setError({
            title: 'Invalid input',
            message:'Please enter a valid name and age (non-empty value).' ,
           })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message:'Please enter a valid age (> 0).' ,
               })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');

    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () => {
    setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName</label>
                    <input
                        id='username'
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}></input>
                    <label htmlFor='age'>Age</label>
                    <input
                        id='age'
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser