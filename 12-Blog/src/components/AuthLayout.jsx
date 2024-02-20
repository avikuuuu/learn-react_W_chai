/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function Protected({children,authentication=true}) {

    const  navigate=useNavigate()
    const [loader,setLoder]=useState(true)
    const authStatus=useSelector(state =>state.auth.Status)

    useEffect(()=>{
      setLoder
      if(authentication && authStatus !==authentication){
        navigate("/login")
      }else if(!authentication && authStatus !== authentication){
        navigate('/')

      }
      setLoder(false)

    },[authStatus,navigate,authentication])

  return loader?<h1>loading...</h1>:<>{children}</>
}

 
