import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { PostForm } from '../components'

function EditPost() {
    const [post,setPost]=useState([])
    const navigate=useNavigate()
    const {slug}=useParams()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then(()=>{
                if(post){
                    setPost(post)
                }
            })

        }else{
            Navigate('/')

        }
    },[slug,navigate])
  return post ? (
    <div className='py-8'>
        <PostForm post={post}/>
    </div>
  ):null
}

export default EditPost
