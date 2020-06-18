import React from 'react';
import Title from "../Title"

const Contact = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="We'd love to hear from you..."/>
                    <form className="mt-5" action="https://formspree.io/mnqgzdzj" method="POST">
                        {/* first name */}
                        <div className="form-group">
                            <input type="text" className="form-control" name="fullName" placeholder="John Smith" required/>
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="email@email.com" required/>
                        </div>
                        {/* subject */}
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" placeholder="subject" required/>
                        </div>
                        {/* message */}
                        <div className="form-group">
                           <textarea name="message" cols="30" rows="10" className="form-control" placeholder="type your message here..." required></textarea>
                        </div>
                        {/* Submit */}
                        <div className="form-group mt-3">
                           <input type="submit" className="form-control bg-primary text-white" value="Send Message"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
