import classes from './HeroSection.module.scss';
import { BiVideoRecording } from 'react-icons/bi';
const HeroSection = ({ }) => {
    return (
        <section className={classes.hero}>
            <div className={classes.container}>
                <div className={classes.left_col}>
                    <p className={classes.subHead}>It`s Nitty &amp; Gritty</p>
                    <h1>A Task App That Doesn`t Stink</h1>
                    <div className={classes.hero_cta}>
                        <a href='#' className={classes.primary_cta}>Try For Free</a>
                        <a href='#' className={classes.watch_video}>Watch Video
                            <BiVideoRecording />
                        </a>
                    </div>
                </div>
                <div className={classes.right_col}>
                    <img alt='here we nned to add some image' />
                </div>
            </div>
        </section>);
}

export default HeroSection;