import React from 'react';
import { Text, StyleSheet } from 'react-native';
import normalize from './../../helpers/normalizeText';

// Defines Special text componets to DayBreak app
export const Heading1 = ({style, ...props}) => {
  return <Text style={[styles.h1, style]} {...props} />;
}

export const Heading3 = ({style, ...props}) => {
  return <Text style={[styles.h3, style]} {...props} />;
}

export const Heading4 = ({style, ...props}) => {
  return <Text style={[styles.h4, style]} {...props} />;
}

export const Paragraph = ({style, ...props}) => {
  return <Text style={[styles.p, style]} {...props} />;
}

// Defines default styles normalized by
// Dimensions and PixelRatio of the device's screen
const styles = StyleSheet.create({
  title: {
    fontSize: normalize(33),
    lineHeight: normalize(33),
    color: 'red',
  },
  h1: {
    fontSize: normalize(25),
    color: 'red',
  },
  h3: {
    fontSize: normalize(13),
    color: 'red',
  },
  h4: {
    fontSize: normalize(12),
    color: 'red',
  },
  p: {
    fontSize: normalize(15),
    lineHeight: normalize(20),
    color: 'red',
  },
});
