import axios from 'axios'
import { useEffect, useState } from 'react';
function Home() {

    const [getPost, setGetPost] = useState([])

    const getData = async () => {
        try {
            axios.get("http://localhost:4000/posts")
                .then((res) => {
                    // console.log(res.data);
                    setGetPost(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (

        <div>
            hello mom!
            {getPost.map((val, i) => {
                return <div key={i}>{val.username}</div>
            })}
        </div>
    )
}

export default Home
