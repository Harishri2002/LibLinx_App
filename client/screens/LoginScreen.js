import { StyleSheet, Text, View, SafeAreaView, Image,TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


const LoginScreen = () => {
  const [email,setEmail] = useState("");
  const [password,setPass] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
           navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post("http://192.168.1.9:3000/admin/login", user);
      console.log("Login response:", response.data);
      const token = response.data.token;
      const Reg = response.data.Reg;
      console.log(response)
      await AsyncStorage.setItem("authToken", token);
      await AsyncStorage.setItem("RegNo", Reg);
      navigation.replace("Main");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Error", "Invalid Email or Password");
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 200, height: 90, marginTop: 40, borderRadius: 40 }}
          source={require("../assets/Lib.png")}
        />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 17,
              color: "#041e42",
              marginLeft:67
            }}
          >
            Login In to your Account
          </Text>
        </View>
        <View style={{marginTop:70}}> 
         <View style={{
          flexDirection:"row",
          alignItems: "center",
          gap: 5,
          backgroundColor: "#D0D0D0",
          paddingVertical: 5,
          borderRadius: 5,
          marginTop: 30
         }}>
           <MaterialIcons style={{marginLeft:8,color:"grey"}} name="email" size={24} color="black"/>
           <TextInput 
           value={email}
           onChangeText={(text) => setEmail(text)}
           style={{color: "grey",marginVertical:10,width:300,fontSize:password ? 16 : 16}} 
           placeholder="Enter your email"
           />
        </View>
        </View>
        <View style={{marginTop:20}}>
        <View style={{
          flexDirection:"row",
          alignItems: "center",
          gap: 5,
          backgroundColor: "#D0D0D0",
          paddingVertical: 5,
          borderRadius: 5,
          marginTop: 30
         }}>
           <AntDesign style={{marginLeft:8,color:"grey"}} name="lock1" size={24} color="black"/>
           <TextInput 
           value={password}
           onChangeText={(text) => setPass(text)}
           secureTextEntry={true}
           style={{color: "grey",marginVertical:10,width:300,fontSize:password ? 16 : 16}} 
           placeholder="Enter your password"
           />
        </View>
        </View>
        <View  style={{marginTop:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        {/* <Text>Keep Logged In</Text>
         <Text style={{color:"#007FFF",fontWeight:500}}>Sign in</Text> */}
        </View>
        <View style={{marginTop:50}}/>
        <Pressable 
          onPress={handleLogin}
          style={{
          width:200,
          backgroundColor:"#14b8a6",
          borderRadius:6,
          marginLeft:"auto",
          marginRight: "auto",
          padding: 15
        }}>
          <Text style={{textAlign:"center",fontWeight:500,fontSize:16,color:"white"}}>Login</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
