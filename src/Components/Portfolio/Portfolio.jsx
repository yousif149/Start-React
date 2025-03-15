
import './Portfolio.css'
import img1 from '../../assets/images/pic1.png'
import img2 from '../../assets/images/pic2.png'
import img3 from '../../assets/images/pic3.png'  
import img4 from '../../assets/images/pic4.png'
import img5 from '../../assets/images/pic5.png'
import img6 from '../../assets/images/pic6.png'
import { useState } from 'react'
import Child from '../Child/Child'
export default function Port() {

    const [projects , setProject] = useState([img1 , img2 , img3 , img4 , img5 , img6])
    
    return (
        <>
            <section>
                <div className="portfolio  py-5">
                    <h2>PORTFOLIO</h2>
                    <div className="container">
                          <div className="row g-4 m-auto">
                             
                               {projects.map((item , index)=>{
                                return(
                                    <div className="col-md-4 col-sm-12 mx-auto" key={index}>
                                        <Child item={item}  />
                                   </div>
                                )
                               })}
                          </div>
                  
                    </div>
                </div>

                
            </section>
        </>
    )
}