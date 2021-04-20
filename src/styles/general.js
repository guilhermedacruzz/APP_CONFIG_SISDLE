import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  attention: {
      fontWeight: 'bold',
      marginTop: '2%',
  },

  instructions: {
      color: '#DDD',
      fontSize: 14,
      marginTop: '2%',
      textAlign: 'center',
  },

  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },

  textinput:{
      backgroundColor:'#800080',
      width:'100%',
      paddingLeft:6,
      color: '#f00',
      elevation:5,
      borderRadius: 2,
      textAlignVertical: 'top'
  }
};

export default general;