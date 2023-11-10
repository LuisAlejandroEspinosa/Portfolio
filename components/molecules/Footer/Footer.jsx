import React from 'react';
import styles  from './Footer.module.css';

const Footer = () => {
    const footerStyles = {
        backgroundColor: 'green',
        color: 'white',
        padding: '20px'
    }
    return (
        <footer className={styles['containerFooter']}>

            
                <p className={styles['parrafo']}> Derechos de autor Luis Alejandro Espinosa © 2023</p>
        </footer>
    );
};

export default Footer;


