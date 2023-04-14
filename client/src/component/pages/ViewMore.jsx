import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import fbicon from '../assets/fbicon.png'
import { FiMoreHorizontal } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'


const ViewMore = () => {
    let { id } = useParams();

    const [postObject, setPostObject] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4000/posts/byId/${id}`)
            .then((res) => {
                setPostObject(res.data)
            })
    }, [id])
    return (
        <>
            <div className='h-[400px] w-[600px] shadow-lg shadow-black mt-4 rounded-md'>
                <div className='grid grid-cols-12 w-full bg-blue-500 rounded-t-md'>
                    <div>
                        <img src={fbicon} alt="" height={40} width={40} />
                    </div>
                    <div className='col-start-2 col-span-9'>
                        <p>{postObject.username}</p>
                        <p>{postObject.createdAt}</p>
                    </div>
                    <div>
                        <FiMoreHorizontal />
                    </div>
                    <div>
                        <RxCross2 />
                    </div>
                </div>
                <div>
                    {postObject.title} <br />
                    {postObject.description}
                </div>
            </div>
        </>
    )
}

export default ViewMore
