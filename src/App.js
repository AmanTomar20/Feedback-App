import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";
function App() {
  
  return (
    <FeedbackProvider>
    
    <Router>
      
        <Header Name="Feedback UI"/>
        <div className="container">
        
        <Routes>
          <Route path="/" element={<><FeedbackForm />
            <FeedbackStats/>
            <FeedbackList/>
            <AboutIconLink /></>}/>
            
          
            <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            
        </div>
        
      
    </Router>
      
    </FeedbackProvider>
  );
}

export default App;
