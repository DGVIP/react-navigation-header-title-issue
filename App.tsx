import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HeaderTitle() {
  const [title, setTitle] = React.useState('-');

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitle('Header Title');
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return <Text>{title}</Text>;
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerTitle: HeaderTitle,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
