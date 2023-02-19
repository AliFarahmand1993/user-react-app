import React from 'react'

const AddUser = (props) => {

const addUserHandler = (event) =>{
    event.preventDefault();
};


    return (
        <form onClick={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input id='username' type="text"></input>
            <label htmlFor='age'>Age</label>
            <input id='age' type="number"></input>
            <button>Add User</button>
        </form>
    )
}

export default AddUser