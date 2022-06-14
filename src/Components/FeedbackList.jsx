import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../Context/FeedbackContext'



function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  return (
      <>
            <AnimatePresence>
            {feedback.length===0?'There is no feedback':
            feedback.map((val)=><motion.div
              key={val.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              >
              <FeedbackItem key={val.id} item={val}/>
            </motion.div>
            )}
            </AnimatePresence>
            
      
      </>
      
  )
}

export default FeedbackList