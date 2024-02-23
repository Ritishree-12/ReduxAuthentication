import React from 'react'
import Form from './Form'
import Logout from './logout/Logout'
import { selectUser } from '../features/userSlice';
import{useSelector} from "react-redux";

const Main = () => {
    const user= useSelector(selectUser)
  return (
    <div>
        {/* <Form/> */}
        {user ?<Logout/>: <Form/>}
    </div>
  )
}

export default Main