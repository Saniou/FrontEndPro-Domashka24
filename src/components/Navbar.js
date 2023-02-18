import logo from './OneWeb_Logo.png'

const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} className='logo' alt='Logo' />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Information</a></li>
                <li><a href="/">Contacts</a></li>
            </ul>
        </div>
    )
}

export default Navbar