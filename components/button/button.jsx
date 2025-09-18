import { s } from "./button.style";
import { Text, TouchableOpacity } from "react-native";

export function ButtonTemp ({onPress, unit}) { 
return <TouchableOpacity style={s.button} onPress={onPress}><Text style={s.text}>
    Convertir en {unit}</Text></TouchableOpacity>
}