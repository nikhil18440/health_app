// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { useDeviceMotion } from "react-native-device-motion";

// const PushUpDetector = () => {
//   const [pushUpCount, setPushUpCount] = useState(0);
//   const [prevRotation, setPrevRotation] = useState(0);
//   const [isMovingDown, setIsMovingDown] = useState(false);

//   // Get gyroscope data
//   const { rotation } = useDeviceMotion();

//   useEffect(() => {
//     if (rotation) {
//       const pitch = rotation.beta; // Forward/backward rotation

//       if (pitch < -0.3 && !isMovingDown) {
//         setIsMovingDown(true);
//       }

//       if (pitch > 0.3 && isMovingDown) {
//         setIsMovingDown(false);
//         setPushUpCount((prev) => prev + 1);
//       }

//       setPrevRotation(pitch);
//     }
//   }, [rotation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.counter}>Push-Ups: {pushUpCount}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   counter: {
//     fontSize: 32,
//     fontWeight: "bold",
//   },
// });

// export default PushUpDetector;
