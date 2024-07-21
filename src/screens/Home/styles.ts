import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#131016',
    //backgroundColor: '#FFFFFF',
    padding: 24,
  },
  listContainer: {
    backgroundColor: '#262626',
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  containerImage: {
   display: 'flex',
   flexDirection: 'row',
   alignItems:'center',
   justifyContent: 'center',
   marginTop: 48,
  },
  inputCustom: {
    width: "82%",//flex:1
    backgroundColor: '#282828',
    height: 56,//42
    //marginVertical: 16,
    borderRadius: 6,
    borderWidth: 1,
    color:"#FFFFFF",
    //paddingHorizontal: 16, //12
    padding: 16,
    fontSize: 16,
    marginTop: -88
  },
  titleButton: {
    color: '#FFF',
    fontSize: 16,//24
    textTransform:'uppercase',
    fontWeight:'bold',
  },
  buttonCustom: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    height: 56,
    width: 56,
    //width:'100%',
    //alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    //marginLeft:'auto',
    //marginRight:'auto',
    //marginVertical: 16
    marginLeft: 8,
    marginTop: -88
  },
  form: {
    width: '100%',
    //display: 'flex',
    flexDirection: 'row',
    marginTop: 36,
    //marginBottom: 42,
    marginBottom: 2
  },
  containerEmpty: {
   display: 'flex',
   flexDirection: 'column',
   paddingTop: 54,
   borderTopWidth: 1,
   borderColor: "#6B6B6B",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 17,
    textAlign: 'center'
  },
  listEmptyTextSub: {
    color: "#6B6B6B",
    fontSize: 16,
    textAlign: 'center'
  },
  progressTasks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  titleCreated: {
   color: "#4EA8DE",
   fontWeight: 'bold',
   fontSize: 16
  },
  titleDone: {
   color: "#8284FA",
   fontWeight: 'bold',
   fontSize: 16
  },
  totalCreatedDone: {
   marginLeft: 12,
   paddingHorizontal: 10,
   paddingVertical: 2,
   backgroundColor: "#282828",
   borderRadius: 12
  },
  totalValue: {
   color:"#FFFFFF",
   fontSize: 12,
   fontWeight: 'bold'
  },
});