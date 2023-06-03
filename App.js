import { StyleSheet,  Button, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import InfoOverviewScreen from './screens/InfoOverviewScreen';
import InfoDetailScreen from './screens/InfoDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
           headerStyle:{backgroundColor: '#1F1B24'},
           headerTintColor: "white",
           contentStyle: {backgroundColor: '#262428'}
        }}
      >
        <Stack.Screen 
        name="InfoCategories" 
        component={CategoriesScreen} 
        options={{
          title:'AXCESS IRELAND',
        }}/>
        <Stack.Screen name="InfoOverview" 
        component={InfoOverviewScreen} 
        />
        <Stack.Screen 
        name="InfoDetail"
         component={InfoDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

    
    /*{ <NavigationContainer>
    <View style={styles.container}>
      <ImageBackground resizeMode='cover'
      source={require('./assets/BackgroundImage.jpg')} //
      style={styles.backgroundImage}
      >
      <View>
        <Text style={styles.testStyle}>Welcome to AXCESS IRELAND</Text>
        <StatusBar style="auto"/>
      </View>
      <Text style={styles.testStyle}>Your Gateway to Entering Ireland</Text>
      <Button title='Enter for more Information'/>
      </ImageBackground>
    </View>
    </NavigationContainer> }*/
 
const styles = StyleSheet.create({
  container: {
    
  },
  testStyle:{
    margin: 15,
    padding:15,
    borderColor: 'darkorange',
    borderWidth: 2,
    backgroundColor: 'olivedrab',
    color:'white',
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundImage:{
    flex:1,
    justifyContent:'center',
    width: '100%',
    height: '100%',
  },
  });
