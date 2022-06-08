import React, {useState,useEffect} from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const detalhes = (props) => {

    const [carregando,setCarregando] = useState(true)
    const [detalhes,setDetalhes] = useState([])
  

    // useEffect(
    //   () => {
    //     fetch(`https://xqwsf2o3ei.execute-api.us-east-1.amazonaws.com/v1/api/bands/details/${props.id}`)
    //     .then((resp)=>resp.json())
    //     .then((json)=>setDetalhes(json.detalhes))
    //     .catch(()=>(alert('Erro ao Carregar dados.')))
    //     .finally(()=>(setCarregando(false)))
  
    //   }
    // )

  return (
      <View>
          <Text>detalhes</Text>
      </View>
  )
}

export default detalhes;