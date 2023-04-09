import type { StackNavigationProp } from '@react-navigation/stack';

/* 
  RootStackType is used to define the type of the navigation prop and map it to the screen name
  '<screen-name>': <{'foo-parameter': foovalue} | undefined> }
*/
export type RootStackType = {
    MainScreen: undefined, // undefined because you aren't passing any params to the home screen
    RecordDetailScreen: undefined,
    TestScreen: undefined,
  };


// Type mapedUseNavigationType is used in the component to define the type of the useNavigation hook
export type mapedUseNavigationType = StackNavigationProp<RootStackType, 
    'MainScreen' 
    |'RecordDetailScreen'
    |'TestScreen'
  
  // <'screen-name'> ; 

  >;