import { View, StyleSheet, Text } from 'react-native';

const Date = ({dateString}) => {
    if(dateString) {
        const year = parseInt(dateString.substring(0, 4));
        const month = parseInt(dateString.substring(5, 7));
        const day = parseInt(dateString.substring(8, 10));
         const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
         const monthAbbreviated = monthAbbreviations[month - 1];
        return (
            <View style={styles.container}>
                    <View style={styles.monthContainer}>
                        <Text style={styles.monthText}> {monthAbbreviated} </Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}> {day} </Text>
                    </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>    
    )
  

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: '#C2C2C2',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 15,
        elevation: 2
    },
    monthContainer: {
      backgroundColor: '#B200FF',
      padding: 5,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#B200FF',
      justifyContent: 'center',
      alignItems: 'center'
    },
    monthText: {
        fontFamily: 'ChalkboardSE-Bold',
        fontSize: 16,
        color: 'white'
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateText: {
        fontFamily: 'ChalkboardSE-Bold',
        fontSize: 28
    }
})

export default Date;