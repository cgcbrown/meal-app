import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {
  NavigationStackScreenComponent
} from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen: NavigationStackScreenComponent = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
      <View style={styles.screen}>
        <Text>{selectedMeal ? selectedMeal.title : "Loading"}</Text>
        <Button title="Go Home" onPress={() => {
          navigation.popToTop();
        }} />
      </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal ? selectedMeal.title : 'Loading'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen