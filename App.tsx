import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './app/Navigations/Route';
import { Provider } from 'react-redux';
import store from './app/redux/store';

const App = () =>{

	const [loaded] = useFonts({
      RobotoCondensedRegular : require('./app/assets/fonts/RobotoCondensed-Regular.ttf'),
      RobotoCondensedSemiBold: require('./app/assets/fonts/RobotoCondensed-SemiBold.ttf'),
      RobotoCondensedBold : require('./app/assets/fonts/RobotoCondensed-Bold.ttf'),
      RobotoCondensedMedium : require('./app/assets/fonts/RobotoCondensed-Medium.ttf'),
      RobotoCondensedLight : require('./app/assets/fonts/RobotoCondensed-Light.ttf'),
      RobotoCondensedExtraBold: require('./app/assets/fonts/RobotoCondensed-ExtraBold.ttf'),
      DKDisplayPatrol : require('./app/assets/fonts/DKDisplayPatrol.otf'),
      AntonSCRegular : require('./app/assets/fonts/AntonSC-Regular.ttf'),
	});  

	if(!loaded){
		  return null;
	}
  
	return (
		 <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
            <StatusBar style="dark" />
              <Provider store={store}>
                <Routes/>
              </Provider>
        </SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
