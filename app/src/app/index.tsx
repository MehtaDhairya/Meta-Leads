import { View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

const DATA = [
  {
    id: '1',
    name: "ABC",
    email: 'First Item',
    phoneNumber: '8780149799'


  },
  {
    id: '2',
    name: "ABC",
    email: 'Second Item',
    phoneNumber: '8780149799'

  },
  {
    id: '3',
    name: "ABC",
    email: 'Third Item',
    phoneNumber: '8780149799'
  },
];

type ItemProps = {
  email: string;
  name: string;
  phoneNumber: string;
};

const Item = ({ email, name, phoneNumber }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{email}</Text>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{phoneNumber}</Text>
  </View>
);


const App = () => {
  const [info, setInfo] = useState(DATA);
  const [nextId, setnextId] = useState(4)

  const onPress = () => {
    setnextId((nextId) => nextId + 1);
    setInfo(prev =>
      [
        { id: String(nextId), name: "Dhairya", email: "XYZ@gmail.com", phoneNumber: "8780149799" },

        ...prev
      ]
    );
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={info}
          renderItem={({ item }) => (
            <Item email={item.email} name={item.name} phoneNumber={item.phoneNumber} />
          )}
          keyExtractor={item => item.id}
        />
        <Button
          onPress={onPress}
          title="Press Me"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;