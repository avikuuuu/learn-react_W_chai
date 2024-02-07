import { useParams } from "react-router-dom"
function User() {
    const {userid}=useParams();
  return (
    <div className="text-center">
        user :{userid}
      
    </div>
  )
}

export default User
