import './Head.css'
import pic from "../../assets/images/avataaars.svg"




export default function Head(){
    

    return(
        <>
            <main>
                <div className="header">
                <img src={pic} width="150px" alt="" />

                    <h1>START REACT</h1>
                    <h4>Frontend Developer | Video Editor</h4>
                </div>
            </main>
        </>
    )
}