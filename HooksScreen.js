import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import { AppContext } from './AppContext';

const HooksScreen = () => {
  const { imperial } = useContext(AppContext);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [convertedWeight, setConvertedWeight] = useState('');
  const [convertedHeight, setConvertedHeight] = useState('');

  const handleConversion = () => {
    if (imperial) {
      // Convert from pounds to kilograms
      const kg = parseFloat(weight) * 0.453592;
      setConvertedWeight(kg.toFixed(2)); // Round to 2 decimal places

      // Convert from feet & inches to meters
      const [feet, inches] = height.split('&').map((s) => parseFloat(s.trim()));
      const meters = (feet + inches / 12) * 0.3048;
      setConvertedHeight(meters.toFixed(2)); // Round to 2 decimal places
    } else {
      // Convert from kilograms to pounds
      const lbs = parseFloat(weight) * 2.20462;
      setConvertedWeight(lbs.toFixed(2)); // Round to 2 decimal places

      // Convert from meters to feet & inches
      const meters = parseFloat(height);
      const feet = Math.floor(meters / 0.3048);
      const inches = ((meters / 0.3048 - feet) * 12).toFixed(2);
      setConvertedHeight(`${feet} ft & ${inches} inch`);
    }
  };

  // Rest of your component...

  return (
    <View>
      {/* ... */}
      <Text>Converted Weight: {convertedWeight} {imperial ? 'lbs' : 'kg'}</Text>
      <Text>Converted Height: {convertedHeight} {imperial ? 'ft & inch' : 'm'}</Text>
    </View>
  );
};
