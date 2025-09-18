import { UNITS } from "../constant";

function getOppositionUnit(unit) {
  return unit == UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
  //Si unit est égal à unit.celcius alors renvoie fahrenheit sinon renvoie celcius
}

function convertTemperatureTo(unit, value) {
  if (unit == UNITS.celcius) {
    return (value - 32) / 1.8; // converti celcius en fahrenheit
  } else {
    return value * 1.8 + 32; // converti fahrenheit en celcius
  }
}

function isIceTemperature(value, unit) {
  if (unit == UNITS.celcius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}

export { getOppositionUnit, convertTemperatureTo, isIceTemperature };
