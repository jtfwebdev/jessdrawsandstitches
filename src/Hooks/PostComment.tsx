import axios from 'axios';

const PostComment = (message, id, setMessage, setPlaceholderMessage) => {

    const messageTimeout = () => {
        setTimeout(() => {
            setPlaceholderMessage("Write a message...")
        }, 3000)
    }
    
    const data = {
        post: id,
        content: message
    }

    axios.post(`https://api.jessdrawsandstitches.co.uk/wp-json/wp/v2/comments`, data)
    .then((res) => {
        setMessage("");
        setPlaceholderMessage("Thank you!");
        messageTimeout();
    })
    .catch((error) => {
        setMessage("");
        setPlaceholderMessage("Sorry, please try again later.")
        messageTimeout();
    })
}

export default PostComment;