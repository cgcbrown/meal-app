import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface FavouritesScreenProps {

}

const FavouritesScreen: React.FC<FavouritesScreenProps> = ({}) => {
    return (
      <View style={styles.screen}>
        <Text>The Favourites Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen