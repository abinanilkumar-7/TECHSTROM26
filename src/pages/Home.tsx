import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Countdown from '../components/Countdown';
import MagicalButton from '../components/MagicalButton';
import './Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="home-container">
            <div className="hero-section">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="college-name" data-aos="fade-down">Vel Tech Multi Tech</h2>
                    <p className="dept-name" data-aos="fade-down" data-aos-delay="200">Department of Electronics and Communication Engineering</p>
                    <p>Presents</p>
                    
                    <h1 className="event-title text-gradient">TECHSTROM 26</h1>
                    
                    <p className="subtitle" data-aos="fade-up" data-aos-delay="400">
                        A Convergence of Innovation & Imagination
                    </p>

                    <div className="event-meta" data-aos="zoom-in" data-aos-delay="600">
                        <p>February 27 | 9:00 AM</p>
                    </div>

                    <Countdown />

                    <div className="cta-container" data-aos="fade-up" data-aos-delay="800">
                        <MagicalButton href="/Events">
                            Enter the Academy
                        </MagicalButton>
                    </div>
                </motion.div>
            </div>
            
            {/* Particles or magical background elements can be added here with absolute positioning */}
            <div className="magical-particles"></div>
        </div>
    );
};

export default Home;
