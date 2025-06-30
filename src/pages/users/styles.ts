import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },

  boxTop: {
    height: 29,
    width: '100%',
  },

  boxTitle: {
    height: 70,
    width: '100%',
    backgroundColor: '#424242',
    flexDirection: 'row',
  },

  textTitle: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  iconLogout: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    marginLeft: 310,
    position: 'absolute',
  },

  iconAdd: {
    marginTop: 20,
    marginLeft: 370,
    position: 'absolute',
  },

  listBox: {
    color: '#6f6f6f',
    marginTop: 30,
    marginLeft: 35,
  },

  listName: {
    fontSize: 20,
    color: 'white',
  },

  listUsername: {
    color: '#b3b3b3',
    fontSize: 15,
    marginTop: 3,
  },

  boxBottom: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
});
