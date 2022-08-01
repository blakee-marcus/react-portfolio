import React, { useState } from "react";

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Submit Form", formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        }
    };


    return (
        <section>
            <div className='about-header'>
                <div className='ah-left'>
                    <div className='selfie'>
                        <img
                            src={require("../../assets/images/self-illustration.png")}
                            alt='digital art of Blake'
                        ></img>
                    </div>
                    <div className='about-title'>
                        <div className='name'>Blake Marcus</div>
                        <div className='headliner'>
                            Full-Stack Web Developer
                        </div>
                    </div>
                </div>
                <div className='ah-right'>
                    <a
                        className='social-btn github'
                        href='tel:3109087309'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='btn-items'>
                            <img
                                src={require("../../assets/images/phone-icon.png")}
                                alt=''
                            />
                            <div>Phone Number</div>
                        </div>
                    </a>
                    <a
                        className='social-btn linkedin'
                        href='mailto: marcusb733@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='btn-items'>
                            <img
                                src={require("../../assets/images/email-icon.png")}
                                alt=''
                            />
                            <div>Email</div>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <div data-testid='h1tag' className="title">Contact</div>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div className="form-item">
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor='email'>Email address:</label>
                        <input
                            type='email'
                            name='email'
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor='message'>Message:</label>
                        <textarea
                            name='message'
                            rows='5'
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button className='social-btn btn' data-testid='button' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
