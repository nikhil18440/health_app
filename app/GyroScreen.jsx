// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Gyroscope } from "react-native-sensors";

// const GyroScreen = () => {
//   const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => {
//     const subscription = new Gyroscope({
//       updateInterval: 100, // Updates every 100ms
//     }).subscribe(({ x, y, z }) => {
//       setGyroData({ x, y, z });
//     });

//     return () => subscription.unsubscribe(); // Clean up on unmount
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Gyroscope Readings</Text>
//       <Text>X: {gyroData.x.toFixed(2)}</Text>
//       <Text>Y: {gyroData.y.toFixed(2)}</Text>
//       <Text>Z: {gyroData.z.toFixed(2)}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });

// export default GyroScreen;