import classes from "./FeaturesSections.module.scss";
const FeatureSection = () => {
    return (<section className={classes.feature_section}>
        <div className={classes.container}>
            <ul>
                <li>Unlimited Tasks</li>
                <li>SMS Task Reminder</li>
                <li>Confetti Explosions upon Task Complition</li>
                <li>Social Media Announcements</li>
                <li>Real Time Collaboration</li>
                <li>Other awesome features</li>
            </ul>
            <img alt='man holding a phone' />
        </div>
    </section>);
}

export default FeatureSection;