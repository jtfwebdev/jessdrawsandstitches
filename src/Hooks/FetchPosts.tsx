import axios from 'axios';

const FetchPosts = (setPosts) => {

    axios.get(import.meta.env.VITE_WP_POSTS_URL)
    .then((res) => {
        let imgs = [];
        res.data.forEach((item) => {

            //get img source
            let trunc = item.content.rendered.slice(item.content.rendered.indexOf("src=\"") + 5);
            trunc = trunc.slice(0, trunc.indexOf("\""));

            //get likes
            let likes = item.likes;

            //get comments
            let comments = [];
            axios.get(`https://api.jessdrawsandstitches.co.uk/index.php/wp-json/wp/v2/comments?post=${item.id}`)
            .then((res) => {
                res.data.forEach((x) => {

                    let data = {
                        comment: x.content.rendered, 
                        date: x.date.slice(0, 10),
                        author: x.author_name
                    }
                    comments.push(data);
                })
            })
            imgs = [...imgs, {
                id: item.id,
                source: trunc,
                comments: comments,
                likes: likes
            }]
        })
        setPosts(imgs);
    })
    .catch((err) => console.log(err))
}

export default FetchPosts;