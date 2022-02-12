import classes from './TestimonialsSection.module.scss';
const TestimonialsSection = ({ }) => {
    return (<section className={classes.testimonial_section}>
        <div className={classes.container}>
            <ul>
                <li>
                    <img alt='person' />
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <cite>- Amit Shimon</cite>
                </li>
                <li>
                    <img alt='person' />
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <cite>- Amit Shimon</cite>
                </li>
                <li>
                    <img alt='person' />
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <cite>- Amit Shimon</cite>
                </li>
            </ul>
        </div>
    </section>);
}

export default TestimonialsSection;