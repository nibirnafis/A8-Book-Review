import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])
    
    useEffect(()=>{
        fetch('/Books.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="mb-[130px]">
            <p className="playfair font-bold text-[40px] text-center mb-9">Books</p>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;