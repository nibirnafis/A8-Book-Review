import { useLoaderData, useParams } from "react-router-dom";
import { addDataToLocalStorage } from "../../Utility/LocalStorage";

const BookDetail = () => {

    const data = useLoaderData()
    const { bookId } = useParams()
    const book = data[bookId-1]
    const { id, image, genre, audience, title, author, rating, review } = book

    return (
        <>
        <p className="playfair font-bold text-[40px] text-center mb-9">Book Details</p>
        <div className="w-[1170px] bg-[#1313130D] mx-auto rounded-3xl py-[40px] px-[40px] mb-[100px]">
            <div className="flex justify-center gap-10">
                <img className="my-auto px-[40px]" src={image} alt="" />
                <div className="flex flex-col gap-2">
                    <p className="playfair font-bold text-2xl">{title}</p>
                    <p>By: {author}</p>
                    <p><span className="font-bold">Genre:</span> {genre}</p>
                    <p><span className="font-bold">Review:</span> {review}</p>
                    <div>
                        <p className="work-sans font-medium text-base text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] inline-block">{audience}</p>
                    </div>
                    <p><span className="font-bold">Rating:</span> {rating}</p>
                    <div className="flex gap-3">
                        <button className="bg-green-500 py-3 px-7 rounded-lg text-white font-bold">Read</button>
                        <button onClick={()=>addDataToLocalStorage(id)} className="bg-blue-500 py-3 px-7 rounded-lg text-white font-bold">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BookDetail;