import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import theme from './components/Theme';
import LogInPage from './components/LogInPage';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <LogInPage />
    </PaperProvider>
  );
};

export default App;
