import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChatBot from "./pages/Chatbot";


function App(){
return(
    <BrowserRouter>
    <Routes>
        <Route path = "/" element= {<LandingPage/>}/>
        <Route path = "/chat" element= {<ChatBot/>}/>
   
    </Routes>
    </BrowserRouter>
);
}

export default App;
