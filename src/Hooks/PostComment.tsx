import axios from 'axios';

const PostComment = (message, id) => {
    
    const data = {
        post: id,
        content: message
    }

    axios.post(`https://api.jessdrawsandstitches.co.uk/wp-json/wp/v2/comments`, data)
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
}

export default PostComment;