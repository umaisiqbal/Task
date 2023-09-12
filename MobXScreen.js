import React from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import { observer } from 'mobx-react';
import { mobxStore } from './MobXStore';

const MobXScreen = observer(() => {
  const { imperial, weight, height, convert } = mobxStore;

  const handleConversion = () => {
    convert();
  };

  // Rest of your component...

  return (
    <View>
      {/* ... */}
      <Text>Converted Weight: {mobxStore.convertedWeight} {imperial ? 'lbs' : 'kg'}</Text>
      <Text>Converted Height: {mobxStore.convertedHeight} {imperial ? 'ft & inch' : 'm'}</Text>
    </View>
  );
});

export default MobXScreen;
