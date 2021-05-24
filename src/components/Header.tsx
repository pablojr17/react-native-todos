import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Switch } from 'react-native';

interface ModeProps {
  mode: boolean
  setMode: (mode: boolean) => void;
}

export function Header({ mode, setMode }: ModeProps) {
  return (
    <View style={mode === false ? styles.header : [styles.header, { backgroundColor: '#3E3E3E' }]}>
      <Text style={styles.headerText}>to.</Text>
      <TouchableOpacity />
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch
        thumbColor="#fff"
        style={styles.sw}
        value={mode}
        onValueChange={() => setMode(!mode)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  sw: {
    position: 'absolute',
    right: 0,
  }
});
