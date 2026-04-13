import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/Login';
import { users } from './data/Users';
import { User } from './interfaces/User';
import { UserStore } from './utils/UserStore';

const userStore = new UserStore(users);

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loginMessage, setLoginMessage] = useState('');
  const [userList, setUserList] = useState<User[]>(userStore.list());

  const refreshUsers = () => {
    setUserList([...userStore.list()]);
  };

  const handleLogin = (user: User, message: string) => {
    setCurrentUser(user);
    setLoginMessage(message);
    refreshUsers();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoginMessage('');
  };

  return (
    <div className="App">
      {!currentUser ? (
        <Login onlogin={handleLogin} />
      ) : (
        <Dashboard
          currentUser={currentUser}
          loginMessage={loginMessage}
          store={userStore}
          users={userList}
          onRefresh={refreshUsers}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;