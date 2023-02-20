import React from 'react'
import Card from '../Ui/Card'
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };


    return (
        <Card className={classes.input}>
            <form onClick={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input id='username' type="text"></input>
                <label htmlFor='age'>Age</label>
                <input id='age' type="number"></input>
                <button>Add User</button>
            </form>
        </Card>
    )
}

export default AddUser