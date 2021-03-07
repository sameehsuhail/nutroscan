import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button} from 'react-native';
import DashBoard from './components/DashBoard';
import {NavigationContainer} from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';
import MyStack from './components/Screens';
import LoginPage from './components/LoginPage';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:"495081465029-kb4stfdkg74g6audl3n2e8bkbibm2ksg.apps.googleusercontent.com",
        iosClientId:"495081465029-55195e6g68qn3pp0bq35mvsn997rtkha.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      
      if (result.type === "success") {

            this.setState({
              signedIn: true,
              name: result.name,
              photo: result.photoUrl
            })
            
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  render(){
    return (
      // <>
      //   {this.state.signedIn ? 
        <MyStack /> 
        // <Login/>
      //   }
      // </>
    )
}
}
const Login=()=>{
return (

  <View style={styles.container}>
 {/* {this.state.signedIn ? (
  //    <DashBoard name={this.state.name} photoUrl={this.state.photoUrl}/>
      <CameraPage/>
  ) : ( */}
      <View>
          <Text style={styles.header}>Sign In With Google</Text>
          <Button title="Sign in with Google" onPress={() => this.signIn()} />
      </View>
    {/* )} */}
    </View>
);
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25
  },
});