const ListedBook = ({listedBook}) => {

    const { image, genre, audience, title, author, rating } = listedBook

    return (
        <div className="flex items-center border border-[#1313132D] p-6 rounded-2xl gap-3">
            <div className="bg-[#1313130D] p-8 rounded-2xl">
                <img className="mx-auto" src={image} alt="" />
            </div>
            <div>
                <p className="playfair font-bold text-2xl">{title}</p>
                <div>
                    <p className="work-sans font-medium text-base text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] inline-block">{audience}</p>
                </div>
                <p>By: {author}</p>
                <div className="flex justify-between">
                    <p>{genre}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;