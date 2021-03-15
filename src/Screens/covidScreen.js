import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Item = ({ title, value }) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.left}>{title}</Text>
    <Text style={styles.right}>{value}</Text>
  </View>
);


function CovidScreen(props) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.country}</Text>
      <Item title={"Cases"} value={item.cases} />
      <Item title={"Active Cases"} value={item.active} />
      <Item title={"Critical Cases"} value={item.critical} />
      <Item title={"Recovered Cases"} value={item.recovered} />
      <Item title={"Cases/Million"} value={item.casesPerOneMillion} />
      <Item title={"Deaths"} value={item.deaths} />
      <Item title={"Deaths/Million"} value={item.deathsPerOneMillion} />
      <Item title={"Tests/Million"} value={item.testsPerOneMillion} />
      <Item title={"Today Cases"} value={item.todayCases} />
      <Item title={"Today Deaths"} value={item.todayDeaths} />
      <Item title={"Total Tests"} value={item.totalTests} />
    </View>
  );

  function callData() {
    props.callData()
  }
  return (
    <View>
      <FlatList
        data={props.DATA}
        renderItem={renderItem}
        keyExtractor={item => item.country}
        onRefresh={() => callData()}
        refreshing={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 32,
  },
  right: {
    fontSize: 16,
    width: '50%',
    textAlign: 'right'
  },
  left: {
    fontSize: 16,
    width: '50%',
    textAlign: 'left'
  }
});


export default CovidScreen;