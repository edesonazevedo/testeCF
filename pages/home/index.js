import React, {useEffect,useState}from 'react';
import { View, Text,FlatList,TouchableOpacity} from 'react-native';
import { TitleContainer,Title,Container } from './styles';

import bd from '../../bands.json';
// import { Container } from './styles';

const home = () => {

  return (
    <Container>
      <FlatList style={{width: "100%"}}
        data={bd['bands']}
        renderItem={({item}) => {
          return (
            <TitleContainer>
              <TouchableOpacity>
                  <Title>{item.name}</Title>
              </TouchableOpacity>
            </TitleContainer>
          )
        }}
        keyExtractor={(item) => {
          item.id
        }}
      />
    </Container>
  )
}

export default home;