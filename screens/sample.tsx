import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';

export const Sample = () => {
    return(
        <View>
            <Button
            title={'React Native Elements'}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            />
        </View>
    )
}