import React, { useEffect, useState } from 'react'
import fbicon from '../assets/fbicon.png'
import { FiMoreHorizontal } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = () => {

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
    }, []);


    //Other way to do the same thing as above
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/posts").then((res)=>{
    //         setGetPost(res.data)
    //     })
    // })
    return (
        <div className='grid justify-center'>
            {
                getPost.map((val, i) => {
                    return (

                        <div className='h-[400px] w-[600px] shadow-lg shadow-black mt-4 rounded-md' key={i}>
                            <div className='grid grid-cols-12 w-full bg-blue-500 rounded-t-md'>
                                <div>
                                    <img src={fbicon} alt="" height={40} width={40} />
                                </div>
                                <div className='col-start-2 col-span-9'>
                                    <p>{val.username}</p>
                                    <p>{val.createdAt}</p>
                                </div>
                                <div>
                                    <FiMoreHorizontal />
                                </div>
                                <div>
                                    <RxCross2 />
                                </div>
                            </div>
                            <Link to={`/viewmore/${val.id}`}>
                                <div>
                                    {val.title} <br />
                                    {val.description}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts
