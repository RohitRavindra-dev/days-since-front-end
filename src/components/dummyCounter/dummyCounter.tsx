// import React from 'react';

// import {useSelector, useDispatch} from 'react-redux';
// import {RootState} from '../../store/highCommand';
// import {increment, decrement} from '../../store/reducers/goals/goalReducer';
// import {Button, Text, View} from 'react-native';

// export const Counter = () => {
//   const count = useSelector((state: RootState) => state.goals.count);
//   const dispatch = useDispatch();

//   return (
//     <View>
//       <View>
//         <Button
//           onPress={() => dispatch(increment())}
//           title="Increment"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//         <Text style={{color: 'red', fontSize: 20}}>{count}</Text>

//         <Button
//           onPress={() => dispatch(decrement())}
//           title="Decrement"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//     </View>
//   );
// };
