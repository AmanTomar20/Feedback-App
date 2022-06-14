import React from 'react'
import Card from '../Components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card className='about'>
      <h1>About this Project</h1>
      <p>This is a react app to leave a feedback for a product or service</p>
      <p>Version: 1.0.0</p>
      <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default AboutPage