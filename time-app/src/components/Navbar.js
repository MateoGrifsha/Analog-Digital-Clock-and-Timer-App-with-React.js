import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <Link to='/'><p>Home</p></Link>
            <Link to='/timer'><p>Timer</p></Link>
        </div>
     );
}
 
export default Navbar;