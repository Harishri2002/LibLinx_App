import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';

const ProfileScreen = () => {
  const [User, setUser] = useState([]);
  useEffect(() => {
    const Profile = async () => {
      const Register = await AsyncStorage.getItem("RegNo");
      try {
        const user = {
          Reg: Register,
        };
        const response = await axios.post("http://192.168.1.9:3000/students/User",user);
        setUser(response.data);
      } catch (error) {
        console.error("Profile error:", error);
      }
    };
    Profile();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ marginTop: 50 }}
    >
      <View style={styles.profileSection}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>{ User.Name}</Text>
      </View>
      <View style={styles.profileSection}>
        <Text style={styles.label}>Register No:</Text>
        <Text style={styles.info}>{ User.Reg}</Text>
      </View>
      <View style={styles.profileSection}>
        <Text style={styles.label}>Course:</Text>
        <Text style={styles.info}>{ User.course}</Text>
      </View>
      <View style={styles.profileSection}>
        <Text style={styles.label}>Semister:</Text>
        <Text style={styles.info}>{ User.semister}</Text>
      </View>
      <View style={styles.profileSection}>
        <Text style={styles.label}>Id:</Text>
        <Text style={styles.info}>{ User._id}</Text>
      </View>
      <View style={{marginTop:30,flexDirection:"column",gap:8}}>
           <Text style={{marginBottom:20,fontSize:25,fontWeight:500}}>Library Access QRCode</Text>
           <QRCode value={User.Reg} size={250} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    paddingVertical: 20,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  info: {
    fontSize: 16,
    color: "#666666",
  },
});
