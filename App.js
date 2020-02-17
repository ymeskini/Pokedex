import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {setupStore} from './src/store/configureStore';

import CatList from './src/screens/CatList';
import CatView from './src/screens/CatView';
import CatForm from './src/screens/CatForm';

const Stack = createStackNavigator();
const store = setupStore();
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Cats" component={CatList} />
          <Stack.Screen name="CatView" component={CatView} />
          <Stack.Screen name="CatForm">
            {props => <CatForm {...props} dispatch={store.dispatch} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
