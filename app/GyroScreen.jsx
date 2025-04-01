import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Gyroscope } from "expo-sensors";

const GyroScreen = () => {
  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    let subscription;

    const subscribe = async () => {
      subscription = Gyroscope.addListener((data) => {
        setGyroData(data);
      });
    };

    subscribe();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <View>
      <Text>Gyroscope Data:</Text>
      <Text>X: {gyroData.x.toFixed(2)}</Text>
      <Text>Y: {gyroData.y.toFixed(2)}</Text>
      <Text>Z: {gyroData.z.toFixed(2)}</Text>
    </View>
  );
};

export default GyroScreen;
