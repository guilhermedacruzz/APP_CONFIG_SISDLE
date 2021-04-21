import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {

  container:{
    alignItems:'center',
    flex:1,
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.smallMargin,
  },

  mind:{
      backgroundColor: colors.background,
      flex:1,
      padding: metrics.smallMargin,
      borderRadius: metrics.doubleBaseRadius,
      width: '100%'
  },

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

  sectionTextField:{
    backgroundColor: colors.secondary,
    width:'100%',
    paddingLeft:6,
    color: colors.primary,
    elevation:5,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.doubleBaseMargin,
    textAlignVertical: 'top'
  },

  sectionButton: { 
      borderRadius: 8,
      padding: 6,
      height: 50,
      width: '70%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 6,
      marginBottom: metrics.doubleBaseMargin
  },

  sectionButtonText: {
      fontSize: 16,
      margin: metrics.smallMargin,
      color: colors.background,
  },

  logo: {
    height: metrics.screenHeight * 0.11,
    width: metrics.screenWidth * 0.9,
    marginVertical: metrics.screenHeight * 0.05,
    alignSelf: 'center',
  },
};

export default general;