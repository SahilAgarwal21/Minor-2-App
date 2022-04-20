import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Firebase  } from '../firebase'
import { Image } from 'react-native'
import axios from 'axios';

const HomeScreen = () => {
  const [full, setFull] = useState(false);
  const navigation = useNavigation()
  
  useEffect(() => {
  //   axios.get('https://fir-febcf-default-rtdb.firebaseio.com'), {
  //   headers: {
  //     "x-apikey": "API_KEY",
  //   },
  //   responseType: "json",
  // })
  // .then(function (response) {
  //   console.log("data", response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  {
    axios
      .get("https://fir-febcf-default-rtdb.firebaseio.com", {
        method: 'GET',
        mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
      })
      .then(function (response) {
          console.log("data", response);
        })
        .catch(function (error) {
          console.log(error);
        });
}
  },[]);

  const handleSignOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 50, marginBottom: 10, color: '#00ae59'}}>Smart-D</Text>
      <View>
            <Image style={styles.image} source={full ? require('../assets/red.png') : require('../assets/green.png') } />
        </View>
        <Text>{full ? <Text style={{textAlign: 'center', fontSize: 30, marginTop: 10, color: 'red'}}>Warning Dustbin is full</Text> : <Text style={{textAlign: 'center', fontSize: 50, marginBottom: 10, marginTop: 10, color: '#00ae59'}}>In Use</Text>}</Text>
      {/* <Text>Email: {Firebase.auth().currentUser?.email}</Text> */}
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 250,
    marginBottom: 20,
  },
  text: {
      padding: 22,
      fontSize: 28,
      color: '#0782F9',
      textAlign: 'center'

  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})