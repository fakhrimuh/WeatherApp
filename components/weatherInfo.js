import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>The weather of {weatherData.name}</Text>

      <Text style={[styles.temperature, styles.marginTop20]}>
        {weatherData.main.temp}°C
      </Text>

      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.weatherDescription, styles.bold]}>
          {weatherData.weather[0].main}
        </Text>
      </View>
      <Text style={styles.weatherDescription}>
        {weatherData.weather[0].description}
      </Text>

      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility:</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {weatherData.visibility} km
        </Text>
      </View>

      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed:</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {weatherData.wind.speed} m/s
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  bold: {
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 60,
    textAlign: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherDescription: {
    textAlign: "center",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default WeatherInfo;
