import React, { useState} from 'react'
import { View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
//import { StatusBar } from 'expo-status-bar';

import { Feather } from '@expo/vector-icons';

import { ContainerLogo, ContainerInput, Logo, ContainerContent, Title, 
    SubTitle, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';


export default function Home() {

    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleShortLink() {
        //alert('URL DIGITADA: '+ input)

        setModalVisible(true);
    }


    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <LinearGradient
         colors={['#1ddbb9' , '#132742']}  
         style={{ flex: 1, justifyContent: 'center' }} 
        >

            <StatusBarPage 
              barStyle="light-content"
              backgroundColor="#1ddbb9"
        
            />

            <Menu/>

            <KeyboardAvoidingView
             behavior={ Platform.OS === 'android' ? 'padding' : 'position' }
             enabled
            >

           

            <ContainerLogo>
                <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
            </ContainerLogo>

            <ContainerContent>
                <Title>YcaroLink</Title>
                <SubTitle>Cole seu Link para encurtar</SubTitle>

                <ContainerInput>
                    <BoxIcon>
                        <Feather name="link" size={22} color="#fff"/>
                    </BoxIcon>
                    <Input 
                      placeholder="Cole seu link aqui..."
                      placeholderTextColor="white"
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="url"
                      value={input}
                      onChangeText={ (text) => setInput(text) }
                    />
                </ContainerInput>

                <ButtonLink onPress={ handleShortLink }>
                  <ButtonLinkText>Gerar Link</ButtonLinkText>   
                </ButtonLink>

            </ContainerContent>
          </KeyboardAvoidingView>


          <Modal visible={modalVisible} transparent animationType="slide">
             <ModalLink onClose={ () => setModalVisible(false)}/>
          </Modal>
            
        </LinearGradient>
       </TouchableWithoutFeedback> 
    )
}