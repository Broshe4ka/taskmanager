import styles from './footer.module.scss'

const Footer = () => (
  <>
  
    <div className={styles.footer}>

      <div className={styles.footer__author}>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Created by Gorelov Sergey</a>
      </div>
      
      <div className={styles.footer__github}>
        
        <div className={styles.github__text}>
          GitHub        
        </div>  
        
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0015 0.00153786C10.7422 0.00153786 0 11.0235 0 24.6077C0 35.4851 6.87643 44.7047 16.4065 47.9573C17.6111 48.1896 18.0461 47.4283 18.0461 46.7701C18.0461 46.1857 18.0326 44.6401 18.0236 42.5886C11.3437 44.0711 9.93662 39.2806 9.93662 39.2806C8.84305 36.4448 7.26495 35.6835 7.26495 35.6835C5.09282 34.1625 7.43747 34.1948 7.43747 34.1948C9.84362 34.3625 11.1097 36.7246 11.1097 36.7246C13.2503 40.4894 16.726 39.4006 18.1016 38.767C18.3116 37.1814 18.9372 36.091 19.6182 35.4836C14.2899 34.8669 8.68704 32.7523 8.68704 23.3235C8.68704 20.6307 9.6171 18.4377 11.1547 16.7153C10.8892 16.0986 10.0761 13.5918 11.3662 10.2023C11.3662 10.2023 13.3748 9.54564 17.9666 12.726C19.8882 12.18 21.9284 11.9078 23.967 11.894C26.0071 11.9078 28.0458 12.1816 29.9674 12.726C34.5322 9.54564 36.5393 10.2023 36.5393 10.2023C37.8279 13.5918 37.0148 16.097 36.7808 16.7153C38.3034 18.4377 39.2335 20.6322 39.2335 23.3235C39.2335 32.7738 33.6231 34.8577 28.2888 35.459C29.1228 36.1956 29.9044 37.7104 29.9044 40.0096C29.9044 43.3006 29.8744 45.9519 29.8744 46.7532C29.8744 47.3929 30.2944 48.1619 31.5305 47.9143C41.1311 44.6955 48 35.4682 48 24.6061C48 11.022 37.2578 0 23.9985 0L24.0015 0.00153786Z" fill="#3C3C3C"/>
        </svg>

        
      </div>
    
    </div>
  
  </>
);

export default Footer;