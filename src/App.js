import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Profile from './profile';
import Media from './media';
import Agency from './agency';
import Notfound from './NotFound';
import './App.scss';


const App = () => {
  return(
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Profile/*" element={<Profile />}></Route>
                <Route path="/Media/*" element={<Media />}></Route>
                <Route path="/Agency/*" element={<Agency />}></Route>
                <Route path="*" element={<Notfound />}></Route>
            </Routes>
        </BrowserRouter>





    </div>
  )
}

export default App;
