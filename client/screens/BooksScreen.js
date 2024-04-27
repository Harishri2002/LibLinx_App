import { ScrollView, StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import MyBooks from '../components/MyBooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Background from  '../assets/Background.jpg';

const BooksScreen = () => {
  const [Holder, setHolder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const Reg = await AsyncStorage.getItem("RegNo");
        const data = { Reg};
        console.log(data);
        const response=await axios.post("http://192.168.1.9:3000/Holder",data);
        setHolder(response.data);
      }
      catch(error){
        console.log("error Message",error);
      }
    }
    fetchData();
  },[])
  return (
    
    <View style = {{
      flex: 1,
      backgroundColor: "white",
    }}>
      <ImageBackground
        source={Background} 
        style={{ root:{flex:1},flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
      >
        <ScrollView>
      
       

       <View style={{flexDirection:"row",alignItems:"center",flexWrap:"wrap",marginTop:40,marginLeft:30}}>
          {   
                Holder.map((item,index) => (
               <MyBooks item={item} key={index}/>
            ))
           }
        </View>
        
        </ScrollView>
      
       </ImageBackground>
       
    </View>
   
  )
}

export default BooksScreen

const styles = StyleSheet.create({})