const getDataFromLocalStorage = () =>{
    const listedBooksLS = localStorage.getItem('listed-books')
    if(listedBooksLS){
        return JSON.parse(listedBooksLS)
    }
    return []
}

const addDataToLocalStorage = (id) =>{
    const listedBooks = getDataFromLocalStorage()
    const newListedBook = listedBooks.find(bookId => bookId === id)
    if(!newListedBook){
        listedBooks.push(id)
        localStorage.setItem('listed-books', JSON.stringify(listedBooks))
    }
    else{
        console.log('already listed')
    }
}

export { addDataToLocalStorage, getDataFromLocalStorage }