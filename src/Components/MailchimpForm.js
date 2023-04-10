import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?$id=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return(
        <MailchimpSubscribe url={postUrl}
        render={({ subscribe, status, message}) => {
            
        }} />
    )
}


export default MailchimpForm;