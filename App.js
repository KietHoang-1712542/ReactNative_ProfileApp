import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

export default class Week2 extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.headerTabWrapper}>
          <TouchableOpacity style={[styles.shadowButton, styles.headerButton]}>
            <Ionicons name="md-arrow-back" size={25} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.shadowButton, styles.headerButton]}>
            <AntDesign name="appstore1" size={25} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerArea}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatarImg} source={require('./assets/avatar.png')}/>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.nameText}>Hoang Anh Kiet</Text>
            <Text style={styles.jobText}>Developer</Text>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={[styles.shadowButton, styles.followButton]} onPress={() => alert("Followed")}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shadowButton, styles.sendMessageButton]} onPress={() => alert("Message sended")}>
              <Feather name="send" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.countArea}>
          <View style={styles.countGroup}>
            <Text style={styles.countText}>210</Text>
            <Text style={styles.countLable}>Photos</Text>
          </View>
          <View style={styles.countGroup}>
            <Text style={styles.countText}>15k</Text>
            <Text style={styles.countLable}>Followers</Text>
          </View>
          <View style={styles.countGroup}>
            <Text style={styles.countText}>605</Text>
            <Text style={styles.countLable}>Following</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.imagesArea} style={{flex:0.45}}>
          <View>
            { imgData.slice(0, centerImgData).map(item => {
              return <Image style={styles.image} source={item.imgSource} key={item.id} />;
            })}
          </View>
          <View>
          { imgData.slice(centerImgData).map(item => {
              return <Image style={styles.image} source={item.imgSource} key={item.id} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.bottomTabWrapper}>
          <TouchableOpacity style={[styles.shadowButton, styles.headerButton]}>
            <Ionicons name="md-home" size={25} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.shadowButton, styles.headerButton]}>
            <Ionicons name="md-menu" size={25} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.shadowButton, styles.bottomTabButton]}>
            <Ionicons name="md-settings" size={25} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerTabWrapper: {
    flex: 0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  headerArea: {
    flex: 0.2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  countArea: {
    flex: 0.15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },

  imagesArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomTabWrapper: {
    flex: 0.1,
    backgroundColor: 'transparent',
    borderTopColor: '#d6d6d6',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  avatarWrapper: {
    flex: 0.4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarImg: {
    width: 90,
    height: 90,
  },

  userInfo: {
    flex: 0.6,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  buttonWrapper: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'flex-end',
    marginTop: 10,
  },

  shadowButton: {
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },

  sendMessageButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 10,
  },

  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  jobText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '200',
  },

  followText: {
    fontSize: 15,
    color: 'white',
  },

  countGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  countLable: {
    fontSize: 15,
    fontWeight: '200',
    color: 'gray',
  },

  image: {
    height: 160,
    width: 160,
    borderRadius: 20,
    marginTop: 15,
  },

  headerButton: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomTabButton: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


AppRegistry.registerComponent('Week2Project', () => Week2);