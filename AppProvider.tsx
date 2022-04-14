import React, {
  FunctionComponent,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

import App from './App';

// interface AppState {
//   name: string;
//   age: number;
// }
const AppContext = createContext('');

const AppProvider: FunctionComponent<any> = () => {
  const [usersList, setUsersList] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // waits until the request completes...
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const users = await response.json();

    console.log(users);
    setUsersList(users);
  };

  const value = {
    getUsers,
    users: usersList,
    user: {
      name: 'Rob',
      age: 36,
    },
  };

  return (
    <AppContext.Provider value={value}>
      <main>
        <App />
      </main>
    </AppContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppContext must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useAppState };
