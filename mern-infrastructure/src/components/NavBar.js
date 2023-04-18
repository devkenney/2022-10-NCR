import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service'

function NavBar({ user, setUser }) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">New Order</Link>
      <span>WELCOME {user}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

export default NavBar;