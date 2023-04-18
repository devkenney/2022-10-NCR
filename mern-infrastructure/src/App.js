import './index.css';
import { useState } from 'react';
import NewOrder from './pages/NewOrder';
import Auth from './pages/Auth';
import { Routes, Route } from 'react-router-dom';
import OrderHistory from './pages/OrderHistory';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';

function App() {
  
  const [user, setUser] = useState(getUser());
  
  return (
    <div className="App">
      {
        user ?
        <>
        <NavBar user={user.name} setUser={setUser} />
        <Routes>
          <Route path="/orders/new" element={<NewOrder />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
        </> :

        <Auth setUser={setUser} />
      }
    </div>
  );
}

export default App;
