import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  sectionAttention: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: fonts.regular,
      alignSelf: 'center',
      marginBottom: metrics.baseMargin
  },

  sectionInstructions: {
      color: colors.primary,
      fontSize: fonts.regular,
      marginBottom: metrics.baseMargin
  },

  sectionTitle: {
    color: colors.header,
    fontWeight: 'bold',
    fontSize: fonts.giant,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },

  textinput:{
    backgroundColor: colors.secondary,
    width:'100%',
    paddingLeft:6,
    color: colors.primary,
    elevation:5,
    borderRadius: metrics.baseRadius,
    textAlignVertical: 'top'
  }
};

export default general;