import React from 'react';
import { NewBookForm } from './NewBookForm';

export const Member = (props) => {
    const { member, updateMember } = props;

    const deleteBook = (bookName) => {
        const updatedMember=  {
            ...member,
            books: member.books.filter((x) => x.title !== bookName)
        };
        updateMember(updatedMember);
    };

    const addNewBook = (book) =>  updateMember({ ...member, books: [...member.books, book]});

    const books = () => (
        member.books
        ? <ul>
            {member.books.map((book,index) => (
            <li key={index}>
                    <label> <strong>{book.title}:</strong><span>&nbsp;&nbsp;</span>
                    <strong> &mdash; </strong> <span>&nbsp;&nbsp;</span> {book.author}  </label>
                    <span>&nbsp; &nbsp; &nbsp;</span>
                    <button className="btn-my-color rounded" onClick={(e) => deleteBook(book.title)}>Delete Book</button>
                    <br /> <br />
                </li>
            ))}
          </ul>   
        : null      
    )

    return (
      <div className="card-member ">
        <h2><strong><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Member Id: </strong>{member.numberId}</h2>    
        <br />                      
        <h4 className="tab"><strong>First Name: </strong>  {member.name}<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> <strong>Last Name: </strong>  {member.lastName} <span>&nbsp;&nbsp;&nbsp;&nbsp;</span></h4>  
        <br />
        <h4><strong>Books: </strong></h4>
            {
                books ({ books, memberId: member._id, deleteBook})
            }
            <NewBookForm addNewBook={addNewBook} />  
      </div>
    );
};