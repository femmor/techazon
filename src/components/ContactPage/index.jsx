import React from 'react';
import Title from "../Title"

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="We'd love to hear from you..."/>
                    <form className="mt-5">
                        <div className="form-group">
                            <input type="text" className="form-control" name="firstName" placeholder="John Smith"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="email@email.com"/>
                        </div>
                        <div className="form-group">
                           <textarea name="message" cols="30" rows="10" className="form-control" placeholder="type your message here..."></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
