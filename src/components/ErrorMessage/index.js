import React from 'react';
import { Text } from './styles.js';

const ErrorMessage = ({ text, className, style }) => {
  return (
    <Text className={className ? className : ''} style={style ? style : {}}>
      {text}
    </Text>
  );
};

export default ErrorMessage;
