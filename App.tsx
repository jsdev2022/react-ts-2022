import React, { Fragment, FunctionComponent, useState, useEffect } from 'react';
import { useAppState } from './AppProvider';
import Hello from './Hello';
import UserProfile from './UserProfile';
import './styles.css';

interface AppState {
  // name: string;
  // loading: boolean;
}

const SkeletonTemplate: FunctionComponent<any> = () => (
  <div>Loading Template</div>
);

const App: FunctionComponent<AppState> = () => {
  const [state] = useState({
    name: 'App',
    loading: false,
  });

  // useEffect(() => {
  //   setTimeout(() => setState({ name: "React App", loading: false }), 1500);
  // });

  const { users, getUsers } = useAppState();

  useEffect(() => {
    getUsers();
  }, []);

  const { name, loading } = state;

  return (
    <Fragment>
      {loading ? (
        <SkeletonTemplate />
      ) : (
        <div>
          <section>
            <UserProfile />
          </section>
          <Hello name={name} />
          {users.map((item) => (
            <p> {item.name} </p>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default App;
