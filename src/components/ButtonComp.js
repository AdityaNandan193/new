import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

import React , {component} from 'react';

const ButtonComp = ({
    text = 'DONE',
    onPress = () => {},
    disabled = false,
   
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
               ... styles.container,
               backgroundColor: !disabled ? 'white' : 'grey',
                
            }}
            disabled={disabled}
        >
            <Text style= {styles.textStyle}> {text} </Text>

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 42,
        backgroundColor : '#006a42',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: "40%"
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#006a42'
    }


   
});

//make this component available to the app
export default ButtonComp;