interface InfoBoxProperties {
    title?: string;
    children: JSX.Element | JSX.Element[];
    onPress?: () => void;
    fullCenter?: boolean;
    customChildrenContainerStyle?: object;
    height?: number;
    flex?: number;
}

export default InfoBoxProperties;