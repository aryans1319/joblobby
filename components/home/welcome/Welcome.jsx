import React from 'react'
import { View, Text } from 'react-native'
import styles from './welcome.style'
import { TextInput } from 'react-native-gesture-handler'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Aryan</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            />
        </View>
      </View>
    </View>
  )
}

export default Welcome