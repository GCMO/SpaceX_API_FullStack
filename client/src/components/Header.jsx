import logo from './assets/logo.png';
import { FaListUl } from 'react-icons/fa';

 
const Header = () => {
  return (
    <nav className='navbar bg-light p-1'>
        <div className='container '>
                <div className="d-flex justify-content-space-between">
                  <nav className="navbar navbar-brand navbar-light bg-light m-2">
                    <a className="navbar form-inline m-1 text-decoration-none" href='/' >
                    <img src={logo} alt="logo" className="mr-1"/>
                    <button className="btn btn-sm btn-primary m-1" type="button"> SpaceX </button>
                    </a>
                      <a className="navbar form-inline m-1 text-decoration-none" href='/favorite'>
                        <button className="btn btn-sm btn-primary m-1" type="button"> 
                          <FaListUl/> Liked Missions
                        </button>
                        {/* <button className="btn btn-sm btn-primary m-1" type="button">Smaller button</button> */}
                      </a>
                  </nav> 
                </div>
        </div>
    </nav>
  )
}



export default Header