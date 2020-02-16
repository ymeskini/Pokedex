import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import {setupStore} from './src/store/configureStore';

import CatList from './src/screens/CatList';
import ViewCat from './src/screens/ViewCat';
import CreateCat from './src/screens/CreateCat';

const Stack = createStackNavigator();
const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={({navigation}) => ({
              headerRight: () => (
                <View>
                  <Button onPress={() => navigation.navigate('CreateCat')}>
                    <Text>New</Text>
                  </Button>
                </View>
              ),
            })}
            name="Cats"
            component={CatList}
          />
          <Stack.Screen name="ViewCat" component={ViewCat} />
          <Stack.Screen name="CreateCat">
            {props => <CreateCat {...props} dispatch={store.dispatch} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
