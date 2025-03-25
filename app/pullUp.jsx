import { View, Text, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gyroscope } from 'expo-sensors'

const pullUp = () => {

    const [gyroData, setGyroData] = useState({x:0, y:0, z:0})
    const [gyroEnabled, setGyroEnabled] = useState(false)

    useEffect(() => {
      let subscription;
      
      if(gyroEnabled){
        subscription = Gyroscope.addListener(gyroScopeData => {
            setGyroData(gyroScopeData)
        })
      }else{
        subscription?.remove()
      }

      return () => {
        subscription?.remove()
      }
    }, [gyroEnabled])

    const handleGyroToggle = () => {
        setGyroEnabled(!gyroEnabled)
    }
    

  return (
    <View>
      <Text>pullUp</Text>
      <Switch 
        onValueChange={handleGyroToggle}
        value={gyroEnabled}
      />
    </View>
  )
}

export default pullUp