import Container from "../container/Container";
import classes from "./FeaturesSections.module.scss";
import holdingPhone from "../../assests/holding-phone.jpg";
const FeatureSection = () => {
    return (<section className={classes.feature_section}>
        <Container className={classes.container}>
            <ul className={classes.feature_list}>
                <li>Unlimited Tasks</li>
                <li>SMS Task Reminder</li>
                <li>Confetti Explosions upon Task Complition</li>
                <li>Social Media Announcements</li>
                <li>Real Time Collaboration</li>
                <li>Other awesome features</li>
            </ul>
            <img src={holdingPhone} alt='man holding a phone' />
        </Container>
    </section>);
}

export default FeatureSection;