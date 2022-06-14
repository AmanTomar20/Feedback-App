import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'



function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  const avg=Math.round(feedback.reduce((sum, item)=>sum+item.rating, 0)/feedback.length)
  
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4> Average: {isNaN(avg)?0:avg}</h4>
    </div>
  )
}

export default FeedbackStats