import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"



function FeedbackItem({item}) {
  const {deleteHandler, editHandler}=useContext(FeedbackContext)
  return (
    
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>deleteHandler(item.id)}><FaTimes color="purple"/></button>
        <button className="edit" onClick={()=>editHandler(item)}><FaEdit color="purple"/></button>
        <div className="text-desplay">{item.text}</div>
    </Card>
  )
}



export default FeedbackItem