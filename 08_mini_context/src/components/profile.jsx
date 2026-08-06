import React, {useContext} from 'react'
import UserContext from '../context/User_context'



function profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>
    else return <div>Welcome {user.username}</div>
}

export default profile