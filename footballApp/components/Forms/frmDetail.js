import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List, ListItem, Text, Card } from 'react-native-elements';

class frmDetail extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const { navigation } = this.props;
    const matches = JSON.parse(navigation.getParam('matches', 'No matches found'));
    console.log(matches);
  
    return (
      <ScrollView>
        <Card style={styles.container}>
          {
            matches.map((item, key) => (
              <View key={key} style={styles.subContainer}>
                
                  <View>
                    <Text h3>{item.group}</Text>
                  </View>
                
                <View>
                  <Text h3>{item.team1.name} vs {item.team2.name}</Text>
                </View>
                <View>
                  <Text h5>{item.date}</Text>
                </View>
                <View>
                  <Text h4>{item.score1} - {item.score2}</Text>
                </View>
                
              </View>
            ))
          }
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  }
})
export default frmDetail;