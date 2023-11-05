import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <Link to='/'><p>Home</p></Link>
            <Link to='/pomodoro'><p>Pomodoro</p></Link>
        </div>
     );
}
 
export default Navbar;