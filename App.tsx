import {Text, SafeAreaView} from 'react-native';
import React from 'react';

import * as Yup from 'yup';
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Password lenght is required'),
});

export default function App() {
  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
}
