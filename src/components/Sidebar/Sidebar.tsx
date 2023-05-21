import { FC } from 'react'
import styles from './Sidebar.module.scss'

const Menu: FC = () => {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.logo}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 34.888c-1.033 0-2.081-.232-2.898-.71l-8.48-4.887c-3.452-2.328-3.668-2.682-3.668-6.336v-8.91c0-3.655.2-4.01 3.592-6.306l8.54-4.933c1.62-.94 4.163-.94 5.782 0l8.51 4.902c3.453 2.328 3.669 2.682 3.669 6.336v8.896c0 3.653-.2 4.008-3.592 6.305l-8.541 4.933c-.833.478-1.88.71-2.914.71Zm0-30.464c-.647 0-1.28.124-1.726.386l-8.48 4.902c-2.512 1.696-2.512 1.696-2.512 4.332v8.896c0 2.636 0 2.636 2.574 4.378l8.418 4.856c.91.524 2.559.524 3.468 0l8.48-4.902c2.497-1.696 2.497-1.696 2.497-4.332v-8.896c0-2.636 0-2.636-2.575-4.378L20.227 4.81c-.447-.262-1.08-.386-1.727-.386Z" fill="#000"/><path d="M18.5 24.281a5.783 5.783 0 0 1-5.781-5.781 5.783 5.783 0 0 1 5.781-5.781 5.783 5.783 0 0 1 5.781 5.781 5.783 5.783 0 0 1-5.781 5.781Zm0-9.25a3.474 3.474 0 0 0-3.469 3.469 3.474 3.474 0 0 0 3.469 3.469 3.474 3.474 0 0 0 3.469-3.469 3.474 3.474 0 0 0-3.469-3.469Z" fill="#000"/></svg>
                <h2>Dashboard</h2>
                <span>v.01</span>
            </div>
            <ul className={styles.nav}>
                <li>
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.28 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88ZM10.45 16.28l-.85-.86" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.395 10.7h.008" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill="#9197B3"/><path d="M12 13.08c-.13 0-.26-.03-.38-.1l-5.3-3.06a.742.742 0 0 1-.27-1.02c.21-.36.67-.48 1.02-.27l4.92 2.85 4.89-2.83c.36-.21.82-.08 1.02.27.2.35.08.82-.27 1.02l-5.26 3.04c-.11.06-.24.1-.37.1Z" fill="#9197B3"/><path d="M12 18.52c-.41 0-.75-.34-.75-.75v-5.44c0-.41.34-.75.75-.75s.75.34.75.75v5.44c0 .41-.34.75-.75.75Z" fill="#9197B3"/><path d="M12 18.75c-.58 0-1.15-.13-1.61-.38l-3.2-1.78c-.96-.53-1.7-1.8-1.7-2.9V10.3c0-1.09.75-2.36 1.7-2.9l3.2-1.78c.92-.51 2.3-.51 3.22 0l3.2 1.78c.96.53 1.7 1.8 1.7 2.9v3.39c0 1.09-.75 2.36-1.7 2.9l-3.2 1.78c-.46.26-1.03.38-1.61.38Zm0-12c-.33 0-.65.06-.88.19l-3.2 1.78c-.49.27-.93 1.03-.93 1.58v3.39c0 .56.44 1.31.93 1.58l3.2 1.78c.46.26 1.3.26 1.76 0l3.2-1.78c.49-.27.93-1.03.93-1.58V10.3c0-.56-.44-1.31-.93-1.58l-3.2-1.78c-.23-.13-.55-.19-.88-.19Z" fill="#9197B3"/></svg>
                        <span>Product</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </li>
                <li className={styles.active}>
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22.75H9c-1.32 0-2.42-.13-3.35-.41a.767.767 0 0 1-.54-.78c.25-2.99 3.28-5.34 6.89-5.34s6.63 2.34 6.89 5.34c.03.36-.19.68-.54.78-.93.28-2.03.41-3.35.41Zm-8.28-1.69c.66.13 1.41.19 2.28.19h6c.87 0 1.62-.06 2.28-.19-.53-1.92-2.72-3.34-5.28-3.34s-4.75 1.42-5.28 3.34Z" fill="#fff"/><path d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14.92a4.34 4.34 0 0 1-4.33-4.34c0-2.39 1.94-4.33 4.33-4.33s4.33 1.94 4.33 4.33A4.34 4.34 0 0 1 12 14.92Zm0-7.17a2.836 2.836 0 0 0 0 5.67 2.836 2.836 0 0 0 0-5.67Z" fill="#fff"/></svg>
                        <span>Customers</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.752 16.86v2.03c0 1.72-1.6 3.11-3.57 3.11-1.97 0-3.58-1.39-3.58-3.11v-2.03c0 1.72 1.6 2.94 3.58 2.94 1.97 0 3.57-1.23 3.57-2.94Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.75 14.11c0 .5-.14.96-.38 1.36-.59.97-1.8 1.58-3.2 1.58-1.4 0-2.61-.62-3.2-1.58-.24-.4-.38-.86-.38-1.36 0-.86.4-1.63 1.04-2.19.65-.57 1.54-.91 2.53-.91.99 0 1.88.35 2.53.91.66.55 1.06 1.33 1.06 2.19Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.752 14.11v2.75c0 1.72-1.6 2.94-3.57 2.94-1.97 0-3.58-1.23-3.58-2.94v-2.75c0-1.72 1.6-3.11 3.58-3.11.99 0 1.88.35 2.53.91.64.56 1.04 1.34 1.04 2.2ZM22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 10.5v-2c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5h-2.5" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Income</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.75c-.63 0-1.22-.24-1.66-.69l-1.52-1.52c-.12-.12-.44-.25-.6-.25H6.06c-1.3 0-2.35-1.05-2.35-2.35v-2.16c0-.16-.13-.48-.25-.6l-1.52-1.52c-.44-.44-.69-1.03-.69-1.66 0-.63.24-1.22.69-1.66l1.52-1.52c.12-.12.25-.44.25-.6V6.06c0-1.3 1.05-2.35 2.35-2.35h2.16c.16 0 .48-.13.6-.25l1.52-1.52c.88-.88 2.44-.88 3.32 0l1.52 1.52c.12.12.44.25.6.25h2.16c1.3 0 2.35 1.05 2.35 2.35v2.16c0 .16.13.48.25.6l1.52 1.52c.44.44.69 1.03.69 1.66 0 .63-.24 1.22-.69 1.66l-1.52 1.52c-.12.12-.25.44-.25.6v2.16c0 1.3-1.05 2.35-2.35 2.35h-2.16c-.16 0-.48.13-.6.25l-1.52 1.52c-.44.45-1.03.69-1.66.69Zm-7.48-8.63c.4.4.69 1.1.69 1.66v2.16c0 .47.38.85.85.85h2.16c.56 0 1.26.29 1.66.69L11.4 21c.32.32.88.32 1.2 0l1.52-1.52c.4-.4 1.1-.69 1.66-.69h2.16c.47 0 .85-.38.85-.85v-2.16c0-.56.29-1.26.69-1.66L21 12.6a.84.84 0 0 0 .25-.6c0-.23-.09-.44-.25-.6l-1.52-1.52c-.4-.4-.69-1.1-.69-1.66V6.06a.85.85 0 0 0-.85-.85h-2.16c-.56 0-1.26-.29-1.66-.69L12.6 3a.87.87 0 0 0-1.2 0L9.88 4.52c-.4.4-1.1.69-1.66.69H6.06a.85.85 0 0 0-.85.85v2.16c0 .56-.29 1.26-.69 1.66L3 11.4c-.16.16-.25.37-.25.6 0 .23.09.44.25.6l1.52 1.52Z" fill="#9197B3"/><path d="M15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9.01 10C8.45 10 8 9.55 8 9s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9 15.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22Z" fill="#9197B3"/></svg>
                        <span>Promote</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 22.32c-.28 0-.57-.07-.83-.21-.57-.3-.92-.9-.92-1.54v-1.42c-3.02-.31-5-2.53-5-5.71v-6C1.25 4 3.56 1.69 7 1.69h10c3.44 0 5.75 2.31 5.75 5.75v6c0 3.44-2.31 5.75-5.75 5.75h-3.77l-4.26 2.84c-.29.19-.63.29-.97.29ZM7 3.18c-2.58 0-4.25 1.67-4.25 4.25v6c0 2.58 1.67 4.25 4.25 4.25.41 0 .75.34.75.75v2.13c0 .13.08.19.13.22s.15.06.26-.01l4.45-2.96c.12-.08.27-.13.42-.13h4c2.58 0 4.25-1.67 4.25-4.25v-6c0-2.58-1.67-4.25-4.25-4.25H7Z" fill="#9197B3"/><path d="M12 12.11c-.41 0-.75-.34-.75-.75v-.21c0-1.16.85-1.73 1.17-1.95.37-.25.49-.42.49-.68 0-.5-.41-.91-.91-.91s-.91.41-.91.91c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.33 1.08-2.41 2.41-2.41s2.41 1.08 2.41 2.41c0 1.14-.84 1.71-1.15 1.92-.39.26-.51.43-.51.71v.21c0 .42-.34.75-.75.75ZM12 14.6a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 12 14.6Z" fill="#9197B3"/></svg>
                        <span>Help</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                </li>
            </ul>
            <div className={styles.profile}>
                <div>
                    <img src="/profile.png" alt="Profile" />
                </div>
                <div className={styles.profileWrapper}>
                    <h4>Evano</h4>
                    <span>Project Manager</span>
                </div>
            </div>
        </nav>
    )
}

export default Menu;