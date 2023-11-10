import React from 'react';
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const footerStyles = {
        color: 'white',
        padding: '10px'
    }
    return (
        <footer className={styles['containerFooter']}>
            <div style={footerStyles}>
                <p className={styles['parrafo']}>Derechos de autor Luis Alejandro Espinosa © 2023</p>
                <div className={styles['redesSociales']}>

                <a href="https://www.instagram.com/desarrollador_fullstack/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon fontSize="large" />
                    </a>

                    <a href="https://www.linkedin.com/in/luisalejandroespinosaam%C3%B3rtegui/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>

                    <a href="https://github.com/LuisAlejandroEspinosa" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large" />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61553199068210" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon fontSize="large" />
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;


