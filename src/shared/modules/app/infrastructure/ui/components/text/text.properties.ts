import type {  TextStyle } from 'react-native/types';

interface TextProperties {
    children: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    color: 'black' | 'grey',
    style?: TextStyle;
}

export default TextProperties;