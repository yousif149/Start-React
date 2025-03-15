import './footer.css'

export default function Footer() {

    return (
        <>
            <footer>
                <div className="footer">
                    <div className="location">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive <br />
                            Clark, MO 65243</p>
                    </div>
                    <div className="media">
                        <h3>Around the web</h3>
                        <div className="media-icons">
                           <i className="fa-brands fa-facebook"></i>
                           <i className="fa-brands fa-twitter"></i>
                           <i className="fa-brands fa-linkedin"></i>
                           <i className="fa-brands fa-youtube"></i>
                         
                        </div>
                    </div>
                    <div className="info">
                        <h3>About freelancer</h3>
                        <p>Freelance is a free to use, MIT licensed <br /> Bootstrap 
                            theme created by  <i>Said El-agamy</i>
                        </p>
                    </div>
                    
                </div>
                <div className="tail">
                    <h4>Copyright © <i>Yousif Tamer</i> 2025</h4>        
                 </div>
            </footer>
        </>
    )
}