import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Home } from './src/screens/Home';
import { styles } from './src/screens/Home/styles';

export default function App() {
  return (
    <>
     <StatusBar 
      barStyle={'light-content'}
      backgroundColor="transparent"
      translucent
     />
     <View style={{ backgroundColor: '#000000', flex: 1, paddingTop: 24 }}>
      <View style={styles.containerImage}>
       <Image source={require('../imhereprova/src/assets/Logo.png')} width={110} height={32} resizeMode='contain' />
      </View>
     </View> 
     <Home />
    </>
  );
}

