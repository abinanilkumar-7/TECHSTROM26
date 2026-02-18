import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMicrochip, FaUsers, FaBrain } from 'react-icons/fa';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
    const [filter, setFilter] = useState<'All' | 'Technical' | 'Non-Technical'>('All');

    const events = [
        {
            title: "Poster Presentation",
            description: "Showcase your innovative ideas and research findings on a poster. Impress the judges with your visual and verbal presentation.",
            type: "Technical",
            icon: <FaLaptopCode />,
            link: "https://forms.gle/cZPikaWwB6yRinDd6"
        },
        {
            title: "Project Expo",
            description: "Bring your hardware or software projects to life. Demonstrate the working model and explain the technology behind it.",
            type: "Technical",
            icon: <FaMicrochip />,
            link: "https://forms.gle/cZPikaWwB6yRinDd6"
        },
        {
            title: "Adzap",
            description: "Unleash your creativity and marketing skills. Create a hilarious and convincing advertisement for a quirky product.",
            type: "Non-Technical",
            icon: <FaUsers />,
            link: "https://forms.gle/cZPikaWwB6yRinDd6"
        },
        {
            title: "Memory Challenge",
            description: "Test your cognitive abilities and retention power. Recall sequences, patterns, and details in this mind-bending challenge.",
            type: "Non-Technical",
            icon: <FaBrain />,
            link: "https://forms.gle/cZPikaWwB6yRinDd6"
        }
    ];

    const filteredEvents = filter === 'All' 
        ? events 
        : events.filter(event => event.type === filter);

    return (
        <div className="events-page">
            <motion.h1 
                className="page-title text-gradient"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                The Trials
            </motion.h1>

            <div className="filter-container">
                {['All', 'Technical', 'Non-Technical'].map((type) => (
                    <button 
                        key={type}
                        className={`filter-btn ${filter === type ? 'active' : ''}`}
                        onClick={() => setFilter(type as any)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="events-grid">
                {filteredEvents.map((event, index) => (
                    <EventCard 
                        key={index}
                        title={event.title}
                        description={event.description}
                        type={event.type as any}
                        icon={event.icon}
                        registerLink={event.link}
                        delay={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Events;
