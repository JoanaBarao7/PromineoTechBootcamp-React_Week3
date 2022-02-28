import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


export const NewBookForm = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (title) {
            props.addNewBook({title, author});
            setTitle('');
            setAuthor('');          
        } else {
            console.log('Invalid Book Input');
        }
    }; 


    return  (
        <div className="new-ingredient border p-2">
            <h4><strong>Add a New Book</strong></h4>
            <Form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                /> <span>&nbsp;&nbsp;</span>
                
                <input
                    type='text'
                    placeholder='Author'
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                /> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button className='btn-my-color rounded' type='submit'>Add Book</button>
            </Form>
        </div>
    ) 
}; 