import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createRoot } from 'expo-router';



// Import your screens (replace with your actual screens)
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const router = createRoot();

router.define({
  '/': HomeScreen,
  '/profile': ProfileScreen,
});

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      {router}
    </>
  );
};

export default App;
