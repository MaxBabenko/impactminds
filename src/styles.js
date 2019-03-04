const colorNames = {
  nero: '#1f1f1f',
  dimGrey: '#595959',
  grey: '#7f7f7f',
  silver: '#b3b3b3',
  whiteSmoke: '#f5f5f5',
  white: '#ffffff',
  seance: '#902694',
};

const colors = {
  primary: colorNames.seance,

  fontColorPrimary: colorNames.nero,
  fontColorPrimaryActive: colorNames.seance,
  fontColorPrimaryInverted: colorNames.white,
  fontColorSecondary: colorNames.grey,

  tabBarBackgroundColorPrimary: colorNames.seance,
  tabBarBackgroundColorSecondary: colorNames.whiteSmoke,

  backgroundColorPrimary: colorNames.white,
  backgroundColorSecondary: colorNames.whiteSmoke,

  shadowColor: 'rgba(0, 0, 0, 0.3)',

  iconColor: colorNames.white,
};

const constants = {
  fontFamily: 'Roboto',

  fontSize: 14,
  fontSizeMedium: 16,
  fontSizeLarge: 18,
  fontSizeXLarge: 20,
  fontSizeXXLarge: 22,
  fontSizeLogo: 50,

  fontWeightBook: '300',
  fontWeight: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',

  lineHeightSmall: 16,
  lineHeight: 22,
};

export default {
  colorNames,
  colors,
  ...constants,
};
