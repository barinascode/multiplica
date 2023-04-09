import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';

// Animate move effect from bottom to top
const AnimateSlideFromBottomToTop = ({children, duration, delay }:{children:JSX.Element | JSX.Element[], duration: number, delay:number}) => {
	const [animation] = useState(new Animated.Value(0));
	useEffect(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration,
			delay,
			useNativeDriver: true,
		}).start();
	}, []);
	const translateY = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [600, 0],
	});
	return (
		<Animated.View style={{transform: [{translateY}]}}>
			{children}
		</Animated.View>
	);
};

export default AnimateSlideFromBottomToTop;