import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View,ImageBackground,TouchableOpacity,RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import AllBooks from '../components/AllBooks';
import Background from  '../assets/Background.jpg'

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    try{
        const response=await axios.get("http://192.168.1.9:3000/books");
        setBooks(response.data);
        setDisplayedBooks(response.data);
        setNoDataFound(false);
        setRefreshing(false);
    }
    catch(error){
      console.log("error Message",error);
    }
  }

  const handleSearch = () => {
    const filteredBooks = books.filter(book => book.BookName.toLowerCase() === searchText.toLowerCase());
    setDisplayedBooks(filteredBooks);
    setNoDataFound(filteredBooks.length === 0);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setSearchText('');
    fetchData();
  };

  return (
    <SafeAreaView style = {{
      padding: Platform.OS==="android" ? 40 : 0,
      flex: 1,
      backgroundColor: "white",
    }}>

       <ImageBackground
        source={Background} 
        style={{ root:{flex:1},flex: 1, resizeMode: 'cover',margin:-24, justifyContent: 'center' }}
      >

      <ScrollView showsVerticalScrollIndicator={false}  
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
         }
        >
        <View style={{backgroundColor:"#14b8a6",padding:10,flexDirection:"row",alignItems:"center"}}>
          <Pressable style={{flexDirection:"row" , alignItems:"center",marginHorizontal:7,gap:10,backgroundColor:"white",borderRadius:3,height:38,flex:1,}}>
                <AntDesign style={{paddingLeft:10}} name="search1" size={24} color="black" />
                <TextInput placeholder='Search Books'  value={searchText}
                onChangeText={text => setSearchText(text)}/>
          </Pressable>
          
          <TouchableOpacity onPress={handleSearch}  style={{
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      }}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
        }}>Search</Text>
      </TouchableOpacity>


        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginLeft:14,flexWrap:"wrap"}}>
        {
              noDataFound ? (
                <Text style={{fontSize:46,alignItems:"center",marginTop:496,marginLeft:24,color:"#CD1818"}}>No data found</Text>
              ) : (
                displayedBooks.map((item, index) => (
                  <AllBooks item={item} key={index} />
                ))
              )
            }
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
    
  );
};

export default HomeScreen

const styles = StyleSheet.create({})