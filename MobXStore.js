import { observable, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class MobXStore {
  @observable imperial = true;
  @observable weight = '';
  @observable height = '';
  @observable convertedWeight = '';
  @observable convertedHeight = '';

  @action setImperial = (value) => {
    this.imperial = value;
  };

  @action convert = () => {
    if (this.imperial) {
      // Conversion logic from imperial to metric
      const kg = parseFloat(this.weight) * 0.453592;
      this.convertedWeight = kg.toFixed(2);

      const [feet, inches] = this.height.split('&').map((s) => parseFloat(s.trim()));
      const meters = (feet + inches / 12) * 0.3048;
      this.convertedHeight = meters.toFixed(2);
    } else {
      // Conversion logic from metric to imperial
      const lbs = parseFloat(this.weight) * 2.20462;
      this.convertedWeight = lbs.toFixed(2);

      const meters = parseFloat(this.height);
      const feet = Math.floor(meters / 0.3048);
      const inches = ((meters / 0.3048 - feet) * 12).toFixed(2);
      this.convertedHeight = `${feet} ft & ${inches} inch`;
    }
  };

  @action saveToDisk = async () => {
    try {
      const data = {
        imperial: this.imperial,
        weight: this.weight,
        height: this.height,
        convertedWeight: this.convertedWeight,
        convertedHeight: this.convertedHeight,
      };
      // Serialize the data to JSON
      const jsonData = JSON.stringify(data);

      // Use AsyncStorage to save the data
      await AsyncStorage.setItem('appData', jsonData);
    } catch (error) {
      console.error('Error saving data to disk:', error);
    }
  };

  @action loadFromDisk = async () => {
    try {
      // Retrieve data from AsyncStorage
      const jsonData = await AsyncStorage.getItem('appData');

      if (jsonData) {
        // Parse the JSON data
        const data = JSON.parse(jsonData);

        // Update the store with the loaded data
        this.imperial = data.imperial;
        this.weight = data.weight;
        this.height = data.height;
        this.convertedWeight = data.convertedWeight;
        this.convertedHeight = data.convertedHeight;
      }
    } catch (error) {
      console.error('Error loading data from disk:', error);
    }
  };
}

export const mobxStore = new MobXStore();
