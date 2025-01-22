const HeroSection = () => {
    return (
        <div>
            <div className="w-[1170px] bg-[#1313130D] mx-auto rounded-3xl py-[80px] mb-[100px]">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                        <p className="playfair font-bold text-6xl mb-12">Books to freshen up <br /> your bookshelf</p>
                        <div>
                            <button className="bg-green-500 py-5 px-7 rounded-lg text-white font-bold">View The List</button>
                        </div>
                    </div>
                    <div>
                        <img src='/assets/Banner_book.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;