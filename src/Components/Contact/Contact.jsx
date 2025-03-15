import './contact.css'
export default function Contact (){


    return(
        <>
            <section>
                <div className="contact vh-100">
                    <h2>CONTACT ME</h2>
                    <div className="form">
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='E-mail' />
                        <input type="tel"  placeholder='Phone Number'/>
                        <input type="text"  placeholder='Message'/>
                        <button className="btn">SEND</button>
                    </form>
                    </div>
                </div>
            </section>
        </>
    )
}   