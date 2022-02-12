import classes from './ContactSection.module.scss';
const ContactForm = ({ }) => {
    return (<form action=''>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='message'>Message</label>
        <textarea name="message"
            id='message'
            cols={'30'}
            rows={'10'}></textarea>
        <input type='submit' value={'Send Message'} className={classes.sendMessage_cta} />
    </form>);
}

export default ContactForm;