import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';

// Animate move effect from right to left
const AnimateSlideFromRightToLeft = ({children }:{children:JSX.Element | JSX.Element[]}) => {
	const [animation] = useState(new Animated.Value(0));
	useEffect(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 500,
			delay: 500,
			useNativeDriver: true,
		}).start();
	}, []);
	const translateX = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [600, 0],
	});
	return (
		<Animated.View style={{transform: [{translateX}], flex:1}}>
			{children}
		</Animated.View>
	);
};

export default AnimateSlideFromRightToLeft;
