import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import screens from '../../constants/screens';
import colors from '../../constants/colors';
import strings from '../../constants/strings';

const AppButton = props => {
    return (

        <TouchableOpacity onPress={() => { props.onPress() }} activeOpacity={0.9}>
            <View style={styles.wrapper}>
                <Text style={styles.buttonText}>{props.title.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonBackground,
        borderRadius: 2,
        padding: 8
    },
    buttonText: {
        color: colors.buttonText,
        fontSize: 15
    }
});

export default AppButton;