import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { lightTheme } from "../../config/colors";


const SplashScreen = () => {
	const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.replace("welcome");
		}, 3000);
	});
	return (
		<>
			<View style={styles.container}>
				<Image source={require("../../assets/images/splash/propoint.png")} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: lightTheme.generalBackground,
	},
});

export default SplashScreen;
