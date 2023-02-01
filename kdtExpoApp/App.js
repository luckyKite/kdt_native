import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native';
import Ebutton from './assets/components/Ebutton';

export default function App() {

  const checkIn = () => {
    console.log('check in')
  }

  return (
    <View style={styles.container}>
      <Image 
        source={
          //{uri:'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XM3RJ7SBXXBUAKVAPG4VZ4EJHU.jpg'}
          require('./assets/emart24.jpg')
        }
        style={{width:350, height:200}}
      />
      <Ebutton 
        title='Check In'
        onPress={checkIn}
      />
      <Text>KDT APP</Text>
      <Text>First</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb71b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
