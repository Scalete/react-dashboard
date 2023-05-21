import { FC } from 'react'
import Menu from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';

const App: FC = () => {
    return (
        <>
            <Menu/>
            <Home/>
        </>
    )
}

export default App;