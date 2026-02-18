import { motion } from 'framer-motion';
import { GiHourglass } from 'react-icons/gi';
import './Schedule.css';

const Schedule = () => {
    const scheduleItems = [
        { time: "08:00 - 09.00 ", event: "Arrival and Registration", location: "M/K 203 Alexander Graham Bell Hall" },
        { time: "09:00 - 10.15 ", event: "Inaguration Ceremony", location: "M/K 203 Alexander Graham Bell Hall" },
        { time: "10.15 - 10:30 ", event: "Refreshments", location: "M/K 203 Alexander Graham Bell Hall" },
        { time: "10:30 - 12.30 ", event: "Technical Events Starts", location: "M/I 201 Engineering Practices Laboratory" },
        { time: "12:30 - 13.30 ", event: "Lunch Break", location: "Food Court" },
        { time: "13:30 - 15.00 ", event: "Non-Technical Event Starts", location: "M/J 204 Optical Laboratory" } 
    ];

    return (
        <div className="schedule-page">
            <motion.h1 
                className="page-title text-gradient"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Timeline of Events
            </motion.h1>

            <div className="timeline">
                {scheduleItems.map((item, index) => (
                    <motion.div 
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="timeline-content">
                            <div className="time-badge">
                                <GiHourglass /> {item.time}
                            </div>
                            <h3 className="timeline-event">{item.event}</h3>
                            <p className="timeline-location">{item.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
