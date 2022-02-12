import classes from './Navbar.module.scss';
import { FaHamburger } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
const NavBar = ({ }) => {
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <a href='#'>Remember<span>That</span></a>
                <FaHamburger id={'mobile_cta'} className={classes.mobile_menu} />
                <nav>
                    <AiOutlineClose id={'close_cta'} className={classes.mobile_menu_exit} />
                    <ul className={classes.primary_nav}>
                        <li className={classes.current}><a href='#'>Home</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Pricing</a></li>
                    </ul>
                    <ul className={classes.secondary_nav}>
                        <li ><a href='#'>Contact</a></li>
                        <li className={classes.goPrimiumCTA}><a href='#'>Go Premium</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default NavBar;