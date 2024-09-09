import React, { useState, useReducer } from 'react';
// Correct import for uuid in ES6
import { v4 as uuidv4 } from 'uuid'; 

const booksData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nidir Maghi" },
  { id: 3, name: "Srikanta" }
];

export default function UseReducer() {
  // const [books, setBooks] = useState(booksData);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalText, setModalText] = useState("");

    // useReducer
     
    const reducer = (state, action) =>{
      if(action.type==="add"){
        const allBooks = [...state.books, action.payload];
      return {
        ...state, 
        books: allBooks,
        isModalOpen: true,
        modalText: "book is added"
      };
    }

    if(action.type==="REMOVE")
    {
      const newBooks = [...state.books].filter((book)=>{
        return book.id!==action.payload
      });

      return {
        ...state, 
        books: newBooks,
        isModalOpen: true,
        modalText: "book is remove successfuly!"
      }


    }
  
  
  }

    const [bookState, dispatch] = useReducer(reducer, {
      books: booksData,
      isModalOpen: false,
      modalText: ""
    })

  const [bookName, setBookName] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // Using uuidv4 to generate a new UUID
    // const newBook = { id: uuidv4(), name: bookName };
    
    // // Add new book to the list
    // // setBooks([...books, newBook]); //one way 
    // setBooks((previous)=>{     //second way...
    //   return [...previous, newBook]
    // })
    // setBookName('');  // Clear input field

    // setIsModalOpen(true);
    // setModalText("book is added");
    const newBook = { id: uuidv4(), name: bookName };
    dispatch({type: "add", payload: newBook});

  };


  const Modal = ({modalText})=>{
    return <p>{modalText}</p>
  }


  const Remove = (id)=>{
    dispatch({type: "REMOVE", payload: id})
  }

  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}
      <ul>
        {bookState.books.map((book) => (
          <li key={book.id}>{book.name} <button type='submit' onClick={()=>Remove(book.id)}>Remove</button> </li>
        ))}
      </ul>
    </div>
  );
}
