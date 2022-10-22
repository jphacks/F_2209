import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';


class point extends React.Component {
    render() {
        return (
            <>
                <ScrollView>

                    <Button
                        title={'Q‚é'}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />

                </ScrollView>
            </>
        );
    }
}

export default point;