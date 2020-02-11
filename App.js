import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'native-base';

import {setupStore} from './src/store/configureStore';

const store = setupStore();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Button>
          <Text>Click Me!</Text>
        </Button>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
