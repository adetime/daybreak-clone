import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  Alert,
} from 'react-native';

import { Card, BasicButton } from './common';
import { getCards } from './../server/api';

import { Actions } from 'react-native-router-flux'; // to be moved to redux

createCardIcon = require('./../assets/create-card-icon-drop-shadow.png');

class CardList extends Component {
  constructor(props) {
    super(props);

    // Initiate the data source for ListView
    // and define the function which takes tells ListView to re-render
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // Initial state
    this.state = {
      loading: true,
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  componentDidMount() {
    // Fetch the data and setState
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(getCards()),
    });
  }

  onPressCreateCard = () => {
    //Alert.alert('Some day I will create a Card')
    Actions.moodChoice();
  };

  // Render one ListView row for each Card
  renderRow = (oneCard) => {
    return <Card data={oneCard} />;
  }

  render() {
    // Avoid to render empty section headers
    if (!this.state.loading){
      return (
        <View style={styles.container}>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />

          <BasicButton
            onPress={this.onPressCreateCard}
            parentStyle={styles.createCardButtonParent}
            style={styles.createCardButton}
          >
            <Image source={createCardIcon} style={styles.icon}/>
          </BasicButton>

        </View>
      );
    }else {
      // ----------------- Attention: to be changed by a spinning animation
      return <Text>Loading ...</Text>;
    }
  }

}

// Attention: There is a bug when try to use shadown on Android.
// So, we are using an image that already has a shadown to keep
// the same viem on both iOS and Android.
const styles = StyleSheet.create({
  container: {
  },
  icon: {
    width: 75,
    resizeMode: 'contain',
  },
  createCardButtonParent: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    backgroundColor: 'transparent',
  },
  createCardButton: {
    height: 75,
  },
});

export default CardList;
