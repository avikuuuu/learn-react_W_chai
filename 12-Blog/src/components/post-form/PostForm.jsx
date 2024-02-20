import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
function PostForm({post}) {
    const navigate = useNavigate();
    const userData=useSelector((status)=>status.user.userData)
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title:  post?.title ||'',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || '',

        }
    })

    return (
        <div>

        </div>
    )
}

export default PostForm
