import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import AppNavigator from './AppNavigator';
import { mobxStore } from './MobXStore';

const App = () => {
  const { imperial, setImperial } = useContext(AppContext);

  useEffect(() => {
    // Trigger loading data from AsyncStorage when the app starts
    mobxStore.loadFromDisk();
  }, []);

  return (
    <AppContext.Provider value={{ imperial, setImperial }}>
      <AppNavigator />
    </AppContext.Provider>
  );
};

export default App;
