import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from 'styles';

const baseItem = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 96,
};

const baseText = {
  margin: 0,
  lineHeight: 0,
  fontSize: FONT_SIZE.footnote,
};

export const styles = StyleSheet.create({
  item: {
    ...baseItem,
  },
  actived: {
    ...baseItem,
    borderTopWidth: 1,
    color: COLORS.black,
  },
  text: {
    ...baseText,
  },
  disabledText: {
    ...baseText,
    color: COLORS.rhythm,
  },
});