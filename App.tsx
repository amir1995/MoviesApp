import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            // header: ({navigation}) => (
            //   <Navbar navigation={navigation} main={true} />
            // ),
          }}
        />
        <Stack.Screen
          name="zadas"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            // header: ({navigation}) => (
            //   <Navbar navigation={navigation} main={true} />
            // ),
          }}
        />
        {/*<Stack.Screen*/}
        {/*  name="Detail"*/}
        {/*  component={DetailScreen}*/}
        {/*  options={{*/}
        {/*    headerTransparent: true,*/}
        {/*    header: ({navigation}) => <Navbar navigation={navigation} />,*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="Search"*/}
        {/*  component={SearchScreen}*/}
        {/*  options={{*/}
        {/*    headerTransparent: true,*/}
        {/*    header: ({navigation}) => <Navbar navigation={navigation} />,*/}
        {/*  }}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
