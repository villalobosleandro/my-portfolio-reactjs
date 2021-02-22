import React, { useState } from "react";

export const Contact = props => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const data = {
      name,
      email,
      message
    }

    console.log('data => ', data);
  }

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we
                  will get back to you as soon as possible.
                  </p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button 
                  type="submit" 
                  onClick={() => handleSubmit} 
                  className="btn btn-custom btn-lg"
                >
                  Send Message
                  </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                  </span>
                  Maracaibo, Zulia - Venezuela
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  +58 424 646 2198
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  villalobosleandro1@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={"/"}
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={"/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={"/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2021 All rights reserved{" "}
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
              </a> */}
          </p>
        </div>
      </div>
    </div>
  );

}
