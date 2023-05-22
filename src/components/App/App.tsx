import { FC } from 'react'
import Menu from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import styles from './App.module.scss';

const App: FC = () => {
    return (
        <div className={styles.dashboard}>
            <Menu/>
            <main>
                <Home/>
            </main>
        </div>
    )
}

export default App;