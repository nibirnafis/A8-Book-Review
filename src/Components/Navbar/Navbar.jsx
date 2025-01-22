import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <div className="w-[1170px] mx-auto my-12">
            <div className="flex justify-between items-center">
                <Link to='/'><p className="work-sans font-bold text-[28px]">Book Review</p></Link>
                <NavLinks></NavLinks>
                <button className="bg-green-500 py-3 px-7 rounded-lg text-white font-bold">Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;