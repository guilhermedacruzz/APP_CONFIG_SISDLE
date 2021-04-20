import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  sectionAttention: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: fonts.regular,
      marginBottom: metrics.baseMargin
  },

  sectionInstructions: {
      color: colors.primary,
      fontSize: fonts.regular,
      alignSelf: 'center',
      marginBottom: metrics.baseMargin
  },

  sectionTitle: {
    color: colors.header,
    fontWeight: 'bold',
    fontSize: fonts.giant,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;