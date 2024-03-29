import { Children } from 'react';
import{ View, Text, StyleSheet} from 'react-native';

function Subtitle({children}){
    return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color:'white',
        fontSize: 15,
        fontWeight:'bold',
        textAlign:'center', 
   },
    subtitleContainer:{
        padding: 6,
        margin: 5,
        marginHorizontal:10,
        marginVertical:12,
        borderBottomColor:'white',
        borderBottomWidth:2,
        color:'white',
   
    }
})

