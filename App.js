import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return <AppLoading
      startAsync={fetchFonts} onFinish={() =>
      setIsLoaded(true)}
      onError={console.log('fonts loading error')}/>
  }

  const addGoalHandler = goalItem => {
    setGoals(currentGoals => [...currentGoals,
      {
        key: Math.random().toString(),
        text: goalItem
      }]);
  };

  const deleteGoalHandler = id => {
    setGoals(goals.filter(goal => goal.key !== id))
  }

  return (
    <TouchableWithoutFeedback onPress={() =>
      Keyboard.dismiss()
    }>
      <ImageBackground source={require('./assets/StartScreenWallpaper.png')} style={styles.image}>
        <View style={styles.screen}>
          <GoalInput onAddGoal={addGoalHandler}/>
          <FlatList
            data={goals}
            renderItem={itemData =>
              <GoalItem
                title={itemData.item.text}
                id={itemData.item.key}
                onDelete={deleteGoalHandler}
              />}
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 20
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    opacity: 0.7
  }
});

