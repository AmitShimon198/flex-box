import classes from './Navbar.module.scss';
import { FaHamburger } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Container from '../container/Container';
const NavBar = ({ }) => {
    const [isExit, setIsExit] = useState(false);
    const onExitButtonClick = () => {
        setIsExit(prev => !prev);
    };
    return (
        <div className={`${classes.navbar}`}>
            <Container className={classes.container}>
                <a className={classes.logo} href='#'>Remember<span>That</span></a>
                <FaHamburger onClick={onExitButtonClick} id={'mobile_cta'} className={classes.mobile_menu} />
                <nav className={`${isExit ? classes.menu_btn : ''}`}>
                    <div id={'close_cta'} className={`${classes.mobile_menu_exit}`}>
                        <AiOutlineClose onClick={onExitButtonClick} />
                    </div>
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
            </Container>

        </div>
    );
}

export default NavBar;