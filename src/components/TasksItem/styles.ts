import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    width:'100%',
    backgroundColor: '#282828',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    height: 64
  },
  name: {
    color: '#F2F2F2',
    width: 236, //"70%"
    fontSize: 14,
    marginLeft: 16,
    //borderWidth: 1,
    //borderColor: "red",
    lineHeight: 20,
    maxHeight: 40,
    //padding: 2,
    //fontWeight: 'bold'
  },
  titleButton: {
    color: '#FFF',
    fontSize: 24,
  },
  buttonCustom: {
    backgroundColor: '#282828',
    borderRadius: 12,
    height: 56,
    width: 28,
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 10
  },
  checkCustom: {
    height: 56,
    width: 28,
    marginLeft: 10
  }
});