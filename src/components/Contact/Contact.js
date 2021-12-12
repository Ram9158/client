import React, { useEffect } from 'react'
import './Contact.css'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact_Page || My app"
    }, []);
    return (
        <>
            <section className="" id="contact">
                < h1 className='Heading'>Contact Us</h1>
                <div id="contact-box">
                {/* < h1 className="h-primary center">Contact Us</h1> */}
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="Name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="Email" placeholder="Enter your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Number">Phone Number</label>
                            <input type="text" name="Phone Number" placeholder="Enter your number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea name="Message" id="massage" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Contact
