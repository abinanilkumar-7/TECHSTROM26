import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <motion.h1 
                className="page-title text-gradient"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Summon Us
            </motion.h1>

            <div className="contact-container">
                <motion.div 
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="info-card">
                        <h3>Faculty Coordinators</h3>
                        <div className="coordinator">
                            <p><strong>Dr. S. Ashok </strong></p>
                            <a href="tel:+919876543210"><FaPhone />+91 99942 06725</a>
                        </div>
                    </div>

                    <div className="info-card">
                        <h3>Student Coordinators</h3>
                        <div className="coordinator">
                            <p><strong>Dhinesh S R</strong></p>
                            <a href="tel:+919988776655"><FaPhone /> +91 94446 77610</a>
                        </div>
                        <div className="coordinator">
                            <p><strong>Manoj Kumar P</strong></p>
                            <a href="tel:+919988776655"><FaPhone />+91 89257 05446</a>
                        </div>
                        <div className="coordinator">
                            <p><strong>Divya Shree S N</strong></p>
                            <a href="tel:+919988776644"><FaPhone /> +91 94446 77610</a>
                        </div>
                    </div>

                    <div className="contact-details">
                        <div className="detail-item">
                            <FaEnvelope className="icon" />
                            <a href="mailto:manojkumarp.ece22@veltechmultitech.org">coordinator@techstrom</a>
                        </div>
                        <div className="detail-item">
                            <FaMapMarkerAlt className="icon" />
                            <p>Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="map-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.572274387846!2d80.10418937484536!3d13.189346887146371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d88af459f3%3A0xa73242f57fb44db9!2sVel%20Tech%20Multi%20Tech%20Dr.Rangarajan%20Dr.Sakunthala%20Engineering%20College(Autonomous)!5e0!3m2!1sen!2sin!4v1771395348506!5m2!1sen!2sin" 
                        width="100%" 
                        height="400" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy"
                        className="map-frame"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
