import { Routes, Route, BrowserRouter,Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Components/Home';
import './App.css';
import { AccountBox } from './Components/accountBox';
import styles from './stylesheets/Container.module.css';
import { LogIn } from './Components/accountBox/LogIn';
import { SignUp } from './Components/accountBox/SignUp';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = 'http://localhost:8080/auth/login/success';
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log("user", user)
  return (
    <div className={styles.AppContainer}>
      <BrowserRouter>
        <AccountBox user={user} />
        <Routes>
          {/* <Route
            exact
            path='/'
            element={
              user && <Home userDetails={user} />
            }
          /> */}
          {/* <Route exact path='/login' element={  <LogIn />} />
          <Route exact path='/signup' element={ <SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
