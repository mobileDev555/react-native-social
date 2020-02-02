import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { useNavigation } from 'react-navigation-hooks';
import { GradientButton } from '../../../components/gradient-button';

export const RequestOtp = () => {
	const { navigate } = useNavigation();
	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}
			colors={[ '#57d6ff', '#3b98ef' ]}
			style={styles.linearGradient}
		>
			<Text style={styles.title}>Verification Code</Text>
			<Text style={styles.text}>Please Type Verification Code Sent</Text>
			<Text style={styles.text}>To +86 99585 89894</Text>

			<View style={styles.horizontal}>
				<View style={styles.square}>
					<Text style={styles.numberText}>8</Text>
				</View>
				<View style={styles.square}>
					<Text style={styles.numberText}>5</Text>
				</View>
				<View style={styles.square}>
					<Text style={styles.numberText}>4</Text>
				</View>
				<View style={styles.square}>
					<Text style={styles.numberText} />
				</View>
			</View>

			<View style={{ marginTop: 88 }}>
				<View style={styles.horizontal}>
					<TouchableOpacity
						onPress={() => {
							navigate('Home');
						}}
					>
						<GradientButton title={'CONFIRM'} />
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};
