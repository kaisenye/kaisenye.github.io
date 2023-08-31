import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// css
import '../css/ContactForm.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function ContactForm() {

    // animation effect 
    const [titleRef, titleInView] = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });



    // form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        attachment: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [fileName, setFileName] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            attachment: file,
        }));
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to a server
        console.log('Form data submitted:', formData);
        alert('Form submitted successfully!');
        // Optionally, you can reset the form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            attachment: null,
        });
    };


  return (
    <div className="contact-form-container">
         <div className={`sub-title highlight-container fade-up ${titleInView ? 'fade-up-visible' : ''}`} ref={titleRef}>
            Contact
            <div className="highlight">
                Me
            </div>
        </div>

        <div className="contact-email">
            kaisenye20@gmail.com
        </div>

        
        <form 
            className="contact-form"
            onSubmit={handleSubmit}>
                
            <div className="contact-form-info">
                <div className="contact-form-info-left">
                    <div className='contact-form-item'>
                        <label htmlFor="name">FULL NAME:</label>
                        <input  type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Your Full Name" 
                                required />
                    </div>
                    <div className='contact-form-item'>
                        <label htmlFor="name">PHONE:</label>
                        <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                placeholder="Your Phone" 
                                required />
                    </div>
                </div>

                <div className="contact-form-info-right">
                    <div className='contact-form-item'>
                        <label htmlFor="email">EMAIL:</label>
                        <input type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Your Email" 
                                required />
                    </div>
                    <div className='contact-form-item'>
                        <label htmlFor="subject">SUBJECT:</label>
                        <input type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                placeholder="Subject" 
                                required />
                    </div>
                </div>
            </div>

            <div className='contact-form-item contact-message'>
                <label htmlFor="message">MESSAGE:</label>
                <textarea id="message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="Enter Your Message Here..." 
                          required />
            </div>
            <div className='contact-form-item contact-attachment'>
                <label htmlFor="attachment" className='attachment-label'>
                    <AiOutlineCloudUpload className='attachment-icon' />
                    <p>
                        ADD AN ATTACHMENT
                    </p>
                </label>
                <input type="file" 
                        id="attachment" 
                        name="attachment" 
                        onChange={handleFileChange} />
                {fileName && <p className='file-name'>File Selected: {fileName}</p>}
            </div>

            <div className='contact-form-btn-container'>
                <button type="submit" className='contact-btn'>
                    SEND MESSAGE
                </button>
            </div>
        </form>
    </div>
    
  );
}

export default ContactForm;
