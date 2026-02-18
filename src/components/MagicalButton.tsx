import { motion } from 'framer-motion';
import './MagicalButton.css';

interface MagicalButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
}

const MagicalButton = ({ children, onClick, href, className = '' }: MagicalButtonProps) => {
    const Component = href ? motion.a : motion.button;
    
    return (
        <Component
            href={href}
            onClick={onClick}
            className={`magical-btn ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
            <span className="btn-content">{children}</span>
            <div className="btn-glow"></div>
        </Component>
    );
};

export default MagicalButton;
