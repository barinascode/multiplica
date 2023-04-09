import type { StyleProp, ViewStyle } from 'react-native/types';

interface PaperProperties {
    children: JSX.Element | JSX.Element[] | null | undefined;
    style?: StyleProp<ViewStyle>;
}

export default PaperProperties;