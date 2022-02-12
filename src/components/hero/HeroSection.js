import classes from './HeroSection.module.scss';
import { BiVideoRecording } from 'react-icons/bi';
import illustration from '../../assests/illustration.svg'
import Container from '../container/Container';
const HeroSection = ({ }) => {
    return (
        <section className={classes.hero}>
            <Container className={classes.container}>
                <div className={classes.left_col}>
                    <p className={classes.subHead}>It`s Nitty &amp; Gritty</p>
                    <h1>A Task App That Doesn`t Stink</h1>
                    <div className={classes.hero_cta}>
                        <a href='#' className={classes.primary_cta}>Try For Free</a>
                        <a href='#' className={classes.watch_video}>
                            <BiVideoRecording className={classes.camera} />
                            Watch Video
                        </a>
                    </div>
                </div>
                <div className={classes.right_col}>
                    <img className={classes.hero_img} src={illustration} alt='illustration' />
                </div>
            </Container>
        </section>);
}

export default HeroSection;