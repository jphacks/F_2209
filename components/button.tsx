import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';


class button extends React.Component {
    render() {
        return (
            <>
                <ScrollView>

                    <Button
                        title={'?Q??'}
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

export default button;