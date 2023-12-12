import './Header.css'
import logo from './Images/google_logo.svg'
function Header() {
    return(
        <div className="header">
            <div className='logo'>
            <img className='google' src={logo}/>
            </div>
            <div className="middle items">
                <div className="input items">
                    <input type="text">
                    </input>
                    <i className="close"></i>
                    <i className="speaker"></i>
                    <i className="picture"></i>
                    <i className="search"></i>
                </div>
                <div className="links items">
                    <a className='all'><span>All</span></a>
                    <a><span>Images</span></a>
                    <a><span>Videos</span></a>
                    <a><span>News</span></a>
                    <a><span>Books</span></a>
                    <a><span>More</span></a>
                    <a className='tools'><span>Tools</span></a>
                </div>
            </div>
            <div className="right items">
                <div className='setting'>
                    <i>setting</i>
                    <i>menu</i>
                    <i>sign in</i>
                </div>
                <div className='safe-search'>
                    <a><span className='search'>Safe search</span></a>
                </div>
            </div>
        </div>
    )
}
export default Header;