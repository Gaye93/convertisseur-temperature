import { TextInput, Text, View } from "react-native";
import { style } from "./inputTemp.style.js";

export function InputTemperature ({ defaultValue, onChangeText, unit }) { 
    return ( <View style={style.container}>
    <TextInput 
    style={style.input} 
    placeholder="Tape ta temperature ici!"
    keyboardType="numeric"
    maxLength={4}
    defaultValue={defaultValue}
    onChangeText={onChangeText}
    /> 
    <Text style={style.unit}>{unit}</Text>
    </View>
);
}