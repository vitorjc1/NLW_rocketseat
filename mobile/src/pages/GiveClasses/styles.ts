import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding:40
    },

    content:{
        flex:1,
        justifyContent:'center'
    },

    title:{
        fontFamily:'Archivo_700Bold',
        fontSize:32,
        lineHeight:37,
        maxWidth:210,
        color:'#fff'
    },

    description:{
        marginTop:24,
        color:'#D4C2FF',
        fontSize:16,
        fontFamily:'Poppins_400Regular',
        lineHeight:26,
        maxWidth:280
    },

    okButton: {
        marginVertical:40,
        backgroundColor:'#04d361',
        height:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },

    okButtonText:{
        color:'#fff',
        fontSize:16,
        fontFamily:'Archivo_700Bold'
    }
})

export default styles;