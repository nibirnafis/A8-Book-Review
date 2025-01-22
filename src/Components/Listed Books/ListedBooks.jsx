import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStorage } from "../../Utility/LocalStorage";
import ListedBook from "../Listed Book/ListedBook";


const ListedBooks = () => {

    const [ listedBooks, setListedBooks] = useState([])

    const books = useLoaderData()

    useEffect(()=>{
        const listedBooksId = getDataFromLocalStorage()
        const newListedBooks = books.filter(book=> listedBooksId.includes(book.id))
        setListedBooks(newListedBooks)
    }, [books])
    
    
    return (
        <div className="w-[1170px] m-auto mb-[100px]">
            <p className="playfair font-bold text-[40px] text-center mb-9">Listed Books</p>
            <div className="grid grid-cols-3 gap-5">
                {
                    listedBooks.map((listedBook, idx) => <ListedBook key={idx} listedBook={listedBook}></ListedBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;