import {useNavigate} from "react-router-dom";
import "./Landing.css"



export default function LandingPage(){
    const navigate = useNavigate();

    return(
        <div className="landing-container">
            <div className="hero">

            <h1>Your Personal AI Advisor</h1>
            <p>
                Experience intelligent conversations powered by AI.
                Ask anything, learn faster, and boost productivity.
            </p>


            <button onClick={( ) => navigate("/chat")}>
                Get Started
            </button>

            <div className="preview-box">
                <div className="chat-message">
                    Hey! How can I help you today?
                </div>
                <div className="chat-message user">
                    Tell me something intresting.
                </div>
            </div>
        </div>
        </div>
        
    );
}