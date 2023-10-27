import Home from './components/Home';
import Profile from './components/Profile';
///import Shop from './components/Shop';
import ErrorBoundary from './components/Errorboundary';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink, json } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/postlist';
import data from './components/data';
import { Example1, Example2 } from './components/Exammples';

const getData = async () => {
  const body = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27,
  };
  const data = await fetch(
    'https://webhook.site/beee3c1e-bcec-48ee-b280-10a7c76156f2',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );
  const mydata = await data.json();
  console.log(mydata);
};

getData();

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            // !! pending ile islenilmeyecekse ehtiyac yoxdur
            // ! active class ini pzu yerlesdirir
          >
            {' '}
            Home{' '}
          </NavLink>{' '}
        </li>{' '}
        <li>
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {' '}
            Profile{' '}
          </NavLink>{' '}
        </li>{' '}
        <li>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {' '}
            Shop{' '}
          </NavLink>{' '}
        </li>{' '}
      </ul>{' '}
      <ErrorBoundary>
        <Routes>
          <Route path="/home" element={<PostList data={data} />} />
          <Route path="/profile" element={<Profile />} />{' '}
          <Route
            path="/shop"
            element={
              <>
                <Example1 />
                <Example2 />
              </>
              //   !!! bu sekilde oturmek yerine iki componenti de bir umumi component yaradib icerisinde  yazib yonlendirmek daha uygun olar
            }
          />{' '}
        </Routes>{' '}
      </ErrorBoundary>
    </div>
  );
}
export default App;
