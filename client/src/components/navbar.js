import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <nav>
                <div className='flex md:justify-around justify-between md:py-6 py-4 md:px-0 px-6'>
                    <div className='text-sky-500'>
                        <Link to='/'>JWT-RAILS</Link>
                    </div>

                    <ul className='md:flex justify-between'>
                        <li className='mx-8'>
                            <Link className="btn btn-secondary" to='/signup'>Signup</Link>
                        </li>
                        <li className='mx-8'>
                            <Link className="btn btn-secondary" to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;