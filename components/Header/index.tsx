import Link from 'next/link';
import React, { useState } from 'react';
import signup from '../../pages/signup';
import styles from './header.module.scss'


const Header = () => (
  
  <>
  
    <div className={styles.header}>
      <div className={styles.header__label}>
        <svg className={styles.header__logo__svg} width="32" height="32" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.00001 9.33326C5.3869 9.33499 4.77955 9.21508 4.2131 8.98049C3.64666 8.7459 3.13237 8.40129 2.7 7.96659L0.666671 6.15993C0.270615 5.80631 0.0312551 5.30983 0.00124927 4.77973C-0.0136081 4.51725 0.0233793 4.25442 0.1101 4.00623C0.19682 3.75804 0.331575 3.52937 0.506671 3.33326C0.681767 3.13715 0.893775 2.97745 1.13059 2.86328C1.3674 2.74911 1.62439 2.6827 1.88687 2.66784C2.41697 2.63783 2.93728 2.81964 3.33334 3.17326L5.44534 5.05859C5.51411 5.13986 5.59881 5.20617 5.69421 5.25341C5.78961 5.30065 5.89369 5.32783 6.00001 5.33326C6.17648 5.33322 6.34573 5.26322 6.47067 5.13859L11.288 0.551928C11.6748 0.201923 12.183 0.0168924 12.7043 0.0362979C13.2256 0.0557033 13.7187 0.278009 14.0784 0.655803C14.4381 1.0336 14.636 1.53698 14.6298 2.05859C14.6236 2.5802 14.4139 3.07876 14.0453 3.44793L9.26401 7.99993C8.83441 8.42596 8.32496 8.76304 7.76486 8.99183C7.20477 9.22063 6.60502 9.33666 6.00001 9.33326ZM32 4.66659C32 4.13616 31.7893 3.62745 31.4142 3.25238C31.0391 2.87731 30.5304 2.66659 30 2.66659H19.3333C18.8029 2.66659 18.2942 2.87731 17.9191 3.25238C17.5441 3.62745 17.3333 4.13616 17.3333 4.66659C17.3333 5.19703 17.5441 5.70574 17.9191 6.08081C18.2942 6.45588 18.8029 6.66659 19.3333 6.66659H30C30.5304 6.66659 31.0391 6.45588 31.4142 6.08081C31.7893 5.70574 32 5.19703 32 4.66659ZM9.26401 18.6666L14.0453 14.1146C14.4139 13.7454 14.6236 13.2469 14.6298 12.7253C14.636 12.2036 14.4381 11.7003 14.0784 11.3225C13.7187 10.9447 13.2256 10.7224 12.7043 10.703C12.183 10.6836 11.6748 10.8686 11.288 11.2186L6.47067 15.8053C6.34565 15.9302 6.17611 16.0005 5.99934 16.0005C5.82256 16.0005 5.65302 15.9302 5.52801 15.8053L3.41467 13.6906C3.03948 13.3154 2.53061 13.1046 2 13.1046C1.4694 13.1046 0.960531 13.3154 0.585338 13.6906C0.210145 14.0658 -0.000636353 14.5747 -0.000636353 15.1053C-0.000636353 15.6359 0.210145 16.1447 0.585338 16.5199L2.7 18.6333C3.56929 19.502 4.74619 19.9928 5.97515 19.9991C7.20412 20.0053 8.38594 19.5265 9.26401 18.6666ZM32 15.3333C32 14.8028 31.7893 14.2941 31.4142 13.919C31.0391 13.544 30.5304 13.3333 30 13.3333H19.3333C18.8029 13.3333 18.2942 13.544 17.9191 13.919C17.5441 14.2941 17.3333 14.8028 17.3333 15.3333C17.3333 15.8637 17.5441 16.3724 17.9191 16.7475C18.2942 17.1225 18.8029 17.3333 19.3333 17.3333H30C30.5304 17.3333 31.0391 17.1225 31.4142 16.7475C31.7893 16.3724 32 15.8637 32 15.3333ZM9.26401 29.3333L14.0453 24.7813C14.4139 24.4121 14.6236 23.9135 14.6298 23.3919C14.636 22.8703 14.4381 22.3669 14.0784 21.9891C13.7187 21.6113 13.2256 21.389 12.7043 21.3696C12.183 21.3502 11.6748 21.5353 11.288 21.8853L6.47067 26.4719C6.34573 26.5966 6.17648 26.6666 6.00001 26.6666C5.89369 26.6612 5.78961 26.634 5.69421 26.5867C5.59881 26.5395 5.51411 26.4732 5.44534 26.3919L3.33334 24.5066C2.93728 24.153 2.41697 23.9712 1.88687 24.0012C1.35676 24.0312 0.860293 24.2705 0.506671 24.6666C0.153049 25.0627 -0.0287566 25.583 0.00124927 26.1131C0.0312551 26.6432 0.270615 27.1396 0.666671 27.4933L2.69734 29.2999C3.56673 30.1695 4.7442 30.6608 5.97382 30.667C7.20344 30.6733 8.38583 30.194 9.26401 29.3333ZM32 25.9999C32 25.4695 31.7893 24.9608 31.4142 24.5857C31.0391 24.2106 30.5304 23.9999 30 23.9999H19.3333C18.8029 23.9999 18.2942 24.2106 17.9191 24.5857C17.5441 24.9608 17.3333 25.4695 17.3333 25.9999C17.3333 26.5304 17.5441 27.0391 17.9191 27.4141C18.2942 27.7892 18.8029 27.9999 19.3333 27.9999H30C30.5304 27.9999 31.0391 27.7892 31.4142 27.4141C31.7893 27.0391 32 26.5304 32 25.9999Z" fill="#3A3A3A"/>
        </svg>
        <div className={styles.header__logo__text}>
          <Link href="/">TaskManager</Link>
        </div>
      </div>

      <div className={styles.header__auth}>
        <Link href="/signup">
            {<div className={styles.header__auth__btn}>
              Log in
            </div>}
        </Link>
      </div>

    </div>
  
  </>
);

export default React.memo(Header);