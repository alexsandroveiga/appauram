import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { RectButton } from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Shimmer,
  Logo,
  Name,
  Invoice,
  InvoiceHeader,
  InvoiceHeaderText,
  ButtonContainer,
  Button,
  ButtonText,
  Main,
  Message,
  MessageButton,
  MessageButtonText,
} from './styles';

import logo from '../../assets/icon.png';

const Dashboard: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container>
      <Header>
        <Logo source={logo} width={50} />
        <Name>Renato</Name>
      </Header>

      <Main>
        <Invoice>
          <InvoiceHeader>
            <InvoiceHeaderText>Fatura</InvoiceHeaderText>
            <RectButton onPress={() => setIsOpened(!isOpened)}>
              <Icon
                name={isOpened ? 'eye' : 'eye-off'}
                size={24}
                color="#7E7E7E"
              />
            </RectButton>
          </InvoiceHeader>
          {isOpened ? <View /> : <Shimmer />}
        </Invoice>

        <ButtonContainer>
          <Button>
            <Icon name="file-text" size={24} color="#5a25f1" />
            <ButtonText>Extrato</ButtonText>
          </Button>
          <Button>
            <Icon name="dollar-sign" size={24} color="#5a25f1" />
            <ButtonText>Pagamentos</ButtonText>
          </Button>
          <Button>
            <Icon name="credit-card" size={24} color="#5a25f1" />
            <ButtonText>Cartão de crédito</ButtonText>
          </Button>
        </ButtonContainer>

        <Message>
          Identificamos que você atingiu o limite máximo da sua fatura do cartão
          Nubank. Que tal você transferir algumas de suas compras para outro
          cartão?
        </Message>
        <MessageButton>
          <MessageButtonText>Transferir dívida</MessageButtonText>
        </MessageButton>
      </Main>
    </Container>
  );
};

export default Dashboard;
