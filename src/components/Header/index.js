import { FaChalkboardTeacher } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import './index.css'

const Header = () => (
    <nav className='nav-header'>
        <div className='logo-container'>
            <FaChalkboardTeacher size={18} color="#eee6f7" />
            <h1 className="logo-text">Indigo Learn</h1>
        </div>
        <ul className="nav-items">
            <li className="nav-item">NavItem1</li>
            <li className="nav-item">NavItem2</li>
            <li className="nav-item">NavItem3</li>
            <li className="nav-item">NavItem4</li>
        </ul>
        <button type='button' className="button-container">
            <CgProfile size={20} color="#380478" />
            <p className="button-text">Login/Sign Up</p>
        </button>
    </nav>
)

export default Header 