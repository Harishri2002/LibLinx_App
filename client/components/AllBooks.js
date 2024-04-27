import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllBooks = ({item}) => {
  return (
    <View style={styles.container}>
    <Pressable style={{marginHorizontal:20,marginVertical:2,flexDirection:"row",}}>
      <Image source={{uri:item?.selectedFile}} style={{ width: 110, height: 200 , resizeMode:"contain",right:20 }}/>
      <View style={{flexDirection:"column" ,padding:-2,justifyContent:"space-evenly"}}>
      <Text style={{fontSize:20,fontWeight:500}}>{item?.BookName}</Text>
      <Text >Author:{item?.Author}</Text>
      <Text style={{ flexWrap: "wrap", maxWidth: 200,gap:5,}}>Desc: {item?.Desc}</Text>
      <Text style={{}}>Category:{item?.Category}</Text>
      {item.Tag === 0 ? (
          <View
            style={{
              width: 300,
              marginTop: 9,
              borderRadius: 25,
              height: 50,
              backgroundColor: "#FFDB58",
            }}
          >
            <Text style={{ marginTop: 12, marginLeft:10,fontSize: 18, fontWeight: 700 }}>
              Available
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: 300,
              marginTop: 9,
              borderRadius: 25,
              height: 50,
              backgroundColor: "#3587A4",
            }}
          >
            <Text style={{ marginTop: 12,marginLeft:10, fontSize: 18, fontWeight: 700 }}>
              Rent
            </Text>
          </View>
        )}
      </View>
    </Pressable>
    </View>
  )
}

export default AllBooks

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width:310,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
})