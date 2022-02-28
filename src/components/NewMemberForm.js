import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


export const NewMemberForm = (props) => {
    const { createMember } = props;
    const [name, setName] = useState('');
    const [numberId, setNumberId] = useState('');
    const [lastName, setLastName] = useState('');
    const [books, setBooks] = useState([]);


    const handleNumberIdInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setNumberId(int >= 0 ? int : '');   
    }   

    const onSubmit = (e) => {
        
        e.preventDefault();
        if (name && lastName) {
            createMember({name, numberId, lastName, books});
            setName('');
            setLastName('');
            setNumberId('');
            setBooks('');
        } else {
            alert('Invalid input:  Please re-enter book!');
            console.log('Invalid Member Input-- needs to be re-entered!');
        }
    }; 
   
    return  (
        <div className="new-recipe">
            <div className="p-2 border">
                <h4><strong>Enter a New Member</strong></h4>
                <Form onSubmit={onSubmit}>
                <input
                        type='text'
                        placeholder='Card Member Id'
                        onChange={handleNumberIdInput}
                        value={numberId}
                    />
                     <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='First Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                   
                   
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button 
                        className='btn-my-color rounded' 
                        type='submit' 
                        onClick={onSubmit}>Add Member</button>
                    <br />
                </Form>
            </div>
        </div>
        ) 
}; 