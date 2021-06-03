import React from 'react'
//import { View, Text } from 'react-native';

import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import ListItem from '../../components/ListItem';


export default function MyLinks() {
    return (
        <Container>
             <StatusBarPage 
              barStyle="light-content"
              backgroundColor="#132742"
            />

            <Menu />

            <Title>Aqui está a MyLinks</Title>

            <ListLinks 
             data={[ 1, 3, 4, 5, 6, 7, 123, 1, 1 ]}
             keyExtractor={ (item) => String(item.id)}
             renderItem={ ({item}) => <ListItem data={item} />}
             contentContainerStyle={{ paddingBottom: 20}}
             showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}