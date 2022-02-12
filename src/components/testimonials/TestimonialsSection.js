import classes from './TestimonialsSection.module.scss';
import personImg from '../../assests/person.jpg'
import Container from '../container/Container';
const TestimonialsSection = ({ }) => {
    return (<section className={classes.testimonial_section}>
        <Container className={classes.container}>
            <ul>
                <li>
                    <img alt='person' src={personImg} />
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <cite>- Amit Shimon</cite>
                </li>
                <li>
                    <img alt='person' src={personImg} />
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <cite>- Amit Shimon</cite>
                </li>
                <li>
                    <img alt='person' src={personImg} />
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <cite>- Amit Shimon</cite>
                </li>
            </ul>
        </Container>
    </section>);
}

export default TestimonialsSection;