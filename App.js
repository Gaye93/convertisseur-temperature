import {
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { s } from "./app.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { InputTemperature } from "./components/inputTemp/inputTemp";
import { TemperatureDisplay } from "./components/temperatureDisplay/temperatureDisplay";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import {
  getOppositionUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-services";
import { ButtonTemp } from "./components/button/button";
import { ScrollView } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositeUnit = getOppositionUnit(currentUnit);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
      // Si c'est le cold background il affiche le froid, sinon il affiche le chaud
    }
  }, [inputValue]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
    // Si un nombre n'est pas saisi on affiche rien, sinon on converti et on affiche un résultat à un chiffre après la virgule
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <ButtonTemp
          onPress={() => {
            setCurrentUnit(oppositeUnit);
          }} // arrow function
          unit={currentUnit}
        />
      </View>
    </ImageBackground>
  );
}
