import { Link } from "react-router-dom";

const Book = ({book}) => {

    const { id, image, genre, audience, title, author, rating } = book

    return (
        <Link to={`/book/${id}`}>
        <div className="border border-[#1313132D] p-6 rounded-2xl">
            <div className="bg-[#1313130D] p-8 rounded-2xl mb-6">
                <img className="mx-auto" src={image} alt="" />
            </div>
            <div>
                <div>
                    <p className="work-sans font-medium text-base text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] inline-block">{audience}</p>
                </div>
                <p className="playfair font-bold text-2xl">{title}</p>
                <p>By: {author}</p>
                <div className="flex justify-between">
                    <p>{genre}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;