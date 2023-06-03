import {View, Text, StyleSheet } from 'react-native';

function InfoDetails ({duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default InfoDetails;

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent:'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 8,
        textAlign: 'center',
        color:'white',
    },
});
