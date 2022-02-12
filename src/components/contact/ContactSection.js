import Container from '../container/Container';
import ContactForm from './ContactForm';
import classes from './ContactSection.module.scss';
const ContactSection = ({ }) => {
    return (
        <section className={classes.contact_section}>
            <Container className={classes.container}>
                <div className={classes.contact_left}>
                    <h2>Contact Us</h2>
                    <ContactForm />
                </div>
                <div className={classes.contact_right}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19967.57435568944!2d30.221885500000003!3d51.27529845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a8f00e898abcf%3A0x14bcceabdbfd5d2c!2z16Yn16jXoNeV15HXmdecLCDXnteX15XXliDXp9eZ15nXkSwg15DXlden16jXkNeZ16DXlA!5e0!3m2!1siw!2sil!4v1644688341090!5m2!1siw!2sil" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </Container>
        </section>
    );
}

export default ContactSection;