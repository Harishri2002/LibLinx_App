import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import PushNotification from "react-native-push-notification";
// import BackgroundFetch from "react-native-background-fetch";

const MyBooks = ({ item }) => {
  // const handleLikePress = () => {
  //   setLiked(!liked);
  //   onLikePress && onLikePress(!liked);
  // };
  const ret = new Date(item.ReturnAt).toLocaleDateString();
  const bor = new Date(item.BorrowAt).toLocaleDateString();
  const returningDate = new Date(item.ReturnAt);
  const differenceMs = returningDate - new Date();
  const remainingDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  //Notification Test Base

  // const configureBackgroundFetch = () => {
  //   try {
  //     // Initialize background fetch
  //     const backgroundFetchConfig = {
  //       minimumFetchInterval: 15, // Minimum interval in minutes for background fetch
  //       stopOnTerminate: false, // Continue background-fetch event after app termination
  //       startOnBoot: true, // Start background-fetch service on device boot
  //     };

  //     BackgroundFetch.configure(
  //       backgroundFetchConfig,
  //       async (taskId) => {
  //         checkDatesAndScheduleNotifications();
  //         BackgroundFetch.finish(taskId);
  //       },
  //       (error) => {
  //         console.error("[BackgroundFetch] Failed to start:", error);
  //       }
  //     );
  //   } catch (error) {
  //     console.error(
  //       "[BackgroundFetch] Error configuring background fetch:",
  //       error
  //     );
  //   }
  // };

  // // Check if BackgroundFetch is available
  // if (BackgroundFetch.configure) {
  //   configureBackgroundFetch();
  // } else {
  //   console.warn("BackgroundFetch.configure is not available.");
  // }

  // // Function to check dates and schedule notifications
  // const checkDatesAndScheduleNotifications = () => {
  //   const currentDate = new Date();
  //   const targetDate = new Date("2024-04-20");

  //   const timeDiff = targetDate.getTime() - currentDate.getTime();

  //   // Schedule notification if target date is nearing (e.g., 1 day before)
  //   if (timeDiff <= 24 * 60 * 60 * 1000) {
  //     PushNotification.localNotification({
  //       title: "LibLinx",
  //       message: "Date Nearing for submission of the book!",
  //     });
  //   }
  // };

  return (
    <View
      style={{
        backgroundColor: "#e0e0e0",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        width: 330,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.BookName}</Text>
      <TouchableOpacity ></TouchableOpacity>
      <View style={{ marginTop: 5 }}>
        <Text>Date of Borrowing: {bor}</Text>
        <Text>Date of Return: {ret}</Text>
        {item.Event === "Returning" ? (
          <View
            style={{
              width: 300,
              marginTop: 9,
              borderRadius: 25,
              height: 50,
              alignItems: "center",
              backgroundColor: "#0079FF",
            }}
          >
            <Text style={{ marginTop: 12, fontSize: 18, fontWeight: 700 }}>
              Book Returned
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: 300,
              marginTop: 9,
              borderRadius: 25,
              height: 50,
              alignItems: "center",
              backgroundColor: "#DD2C00",
            }}
          >
            <Text style={{ marginTop: 12, fontSize: 18, fontWeight: 700 }}>
              Days Remaining:{remainingDays}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyBooks;

const styles = StyleSheet.create({});
