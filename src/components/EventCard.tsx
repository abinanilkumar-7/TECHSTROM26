import { motion } from 'framer-motion';
import { GiScrollQuill } from 'react-icons/gi';
import './EventCard.css';

interface EventCardProps {
    title: string;
    description: string;
    type: 'Technical' | 'Non-Technical';
    icon?: React.ReactNode;
    registerLink?: string;
    delay?: number;
}

const EventCard = ({ title, description, type, icon, registerLink, delay = 0 }: EventCardProps) => {
    return (
        <motion.div 
            className="event-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" }}
        >
            <div className={`event-type-badge ${type.toLowerCase()}`}>
                {type}
            </div>
            
            <div className="event-icon-container">
                {icon}
            </div>

            <h3 className="event-title">{title}</h3>
            <p className="event-description">{description}</p>

            <a 
                href={registerLink || 'https://forms.gle/cZPikaWwB6yRinDd6'} 
                target="https://forms.gle/cZPikaWwB6yRinDd6" 
                rel="noopener noreferrer" 
                className="event-register-btn"
            >
                Register <GiScrollQuill />
            </a>
        </motion.div>
    );
};

export default EventCard;
