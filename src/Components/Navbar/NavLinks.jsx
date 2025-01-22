import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className='flex items-center gap-4'>
            <NavLink className= {({isActive}) => isActive ? 'border-[1px] border-green-500 rounded-lg py-1 px-2' : ' '} to='/'>Home</NavLink>
            <NavLink className= {({isActive}) => isActive ? 'border-[1px] border-green-500 rounded-lg py-1 px-2' : ' '} to='/listed-books'>Listed Books</NavLink>
            <NavLink className= {({isActive}) => isActive ? 'border-[1px] border-green-500 rounded-lg py-1 px-2' : ' '} to='/pages-to-read'>Pages to Read</NavLink>
        </div>
    );
};

export default NavLinks;