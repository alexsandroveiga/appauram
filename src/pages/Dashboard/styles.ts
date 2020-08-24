import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;

const buttonWidth = (windowWidth - 32) / 3 - 6;

export const Container = styled.View`
  flex: 1;
  background: #ddd;
`;

export const Header = styled.SafeAreaView`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${statusBarHeight}px 0 0 0;
  background: #5a25f1;
  padding: 16px 0 236px 0;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;

export const Logo = styled.Image`
  margin-right: 16px;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Main = styled.View`
  padding: 0 16px;
  margin-top: -186px;
`;

export const Invoice = styled.View`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const InvoiceHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const InvoiceHeaderText = styled.Text`
  color: #44414a;
`;

export const Shimmer = styled.View`
  background: #ccc;
  height: 40px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.View`
  width: ${buttonWidth};
  height: ${buttonWidth};
  background: #fff;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const ButtonText = styled.Text`
  color: #5a25f1;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
`;

export const Message = styled.Text`
  color: #f25f3d;
  text-align: center;
  margin: 32px 0;
`;

export const MessageButton = styled(RectButton)`
  background: #f25f3d;
  width: 50%;
  margin: 0 auto;
  border-radius: 20px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const MessageButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
