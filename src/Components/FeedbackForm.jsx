import React, { useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext';


function FeedbackForm() {
  const darkTheme=true;
  const [isDisabled, setIsDisabled] = useState(true)
  const [Msg, setMsg] = useState('')
  const [rating, setRating] = useState(10)
  const [inputText, setInputText] = useState('')
  const inputTextHandler=({target:{value}})=>{
      if(value===''){
        setMsg('');
        setIsDisabled(true);
      }
      else if(value.trim().length<=10){
        setMsg('Review should be greater than 10 characters.');
        setIsDisabled(true);
      }
      else{
          setMsg('');
          setIsDisabled(false);
      }
      setInputText(value)
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    const Feedback={
      rating,
      inputText
    }
    if(feedbackEdit.edit){
      updateFeedback(feedbackEdit.item.id, Feedback)
    }
    else{
      AddHandler(Feedback)
    }
    setInputText('')
    setIsDisabled(true)
  }
  const {AddHandler, feedbackEdit, updateFeedback}=useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit){
      setInputText(feedbackEdit.item.text)
      setIsDisabled(false)
      setRating(feedbackEdit.item.rating)
    }
  
  }, [feedbackEdit])
  
  
  return (
    <Card reverse={darkTheme}>
        <form onSubmit={submitHandler}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect 
            select={setRating} 
            selected={rating}
          />
          <div className='input-group'>
              <input type='text' 
                  placeholder='Write your Review' 
                  className={darkTheme && 'dark-input'} onChange={inputTextHandler}
                  value={inputText}
              />
              <Button type='submit' 
                  version='primary' 
                  isdisabled={isDisabled} >
                  Submit
              </Button>
          </div>
          <div className='message'>
                  {Msg}
              </div>
        </form>
        
    </Card>
  )
}

export default FeedbackForm