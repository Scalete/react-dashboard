import { FC, useState } from 'react'
import Menu from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import styles from './App.module.scss';

const App: FC = () => {

    const [sidebarIsActive, setSidebarIsActive] = useState<boolean>(false);

    return (
        <div className={styles.dashboard}>
            <Menu sidebarIsActive={sidebarIsActive}/>
            <main>
                <div 
                    onClick={() => setSidebarIsActive(prev => !prev)} 
                    className={`${styles.overlay} ${sidebarIsActive? styles.active: ''}`}
                ></div>
                <Home setSidebarIsActive={setSidebarIsActive}/>
            </main>
        </div>
    )
}

export default App;