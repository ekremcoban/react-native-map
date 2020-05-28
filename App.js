/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

const customers = [
  {
      latitude: 40.996166,
      longitude: 29.1775284,
      title: "Place 1"
  },
  {
      latitude: 40.976166,
      longitude: 29.1575284,
      title: "Place 2"
  },
  {
      latitude: 41.006166,
      longitude: 29.1175284,
      title: "Place 3"
  },
];

class App extends Component {

  onMapLayout = () =>
        this.map.fitToElements(true);

      render() {
        const markers = customers.map((marker, index) => (
            <Marker
                key={index}
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                }}
            >
                <Callout>
                    <Text>{marker.title}</Text>
                </Callout>
            </Marker>
        ));

        return (
            <View style={styles.container} >
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    ref={ref => this.map = ref}
                    onLayout={this.onMapLayout}
                    style={styles.map}
                >
                    {markers}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default App;
