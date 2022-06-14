import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../Data/FeedbackData';

const FeedbackContext = createContext()

export const FeedbackProvider=({children}) => {
  const [feedback, setFeedback]=useState(FeedbackData)

  const [feedbackEdit, setFeedbackEdit]=useState({
    item:{},
    edit:false
  })
  const updateFeedback=(id, updatedFB)=>{
    const newFD={
      text:updatedFB.inputText,
      rating: updatedFB.rating,
    }
    setFeedback(feedback.map(item=>item.id===id?{...item,...newFD}:item))
    setFeedbackEdit({item:{}, edit: false})
  }
  const deleteHandler=(id)=>{
    if(window.confirm('Are you sure you want to delete this')){
      setFeedback(FbArr=>FbArr.filter(fb=>fb.id!==id))
    }
  }

  const AddHandler=(fb)=>{
    fb.id=uuidv4()
    const newFB={
      id:fb.id,
      rating:fb.rating,
      text:fb.inputText
    }
    setFeedback(FBsArr=>[newFB,...FBsArr])
  }

  const editHandler=(item)=>{
    setFeedbackEdit({
        item,
        edit:true
    })
  }
  return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteHandler,
        AddHandler,
        editHandler,
        updateFeedback,
    }}>
    {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext