// TODO: coming soon in the next feature

// import React, { useState } from 'react';
// import { RouteProp } from '@react-navigation/native';
// import { Icon } from 'react-native-elements';

// // components
// import { Header } from '../../../components';
// import {
//   StyledContainer,
//   StyledText,
//   StyledContainerScroll,
//   StyledContainerInput,
//   StyledCotainerBoxInput,
//   StyledInput,
//   StyledBoxMessage,
//   StyleStyledContainerMessage
// } from './styles';

// // interface
// interface IProps {
//   route: RouteProp<{ params: { name: string } }, 'params'>;
// }

// interface IObjMessage {
//   message: string;
//   time: string;
// }

// const Chat: React.FC<IProps> = ({ route }) => {
//   const [newMessage, setNewMessage] = useState<string>('');
//   const [messages, setMessages] = useState<IObjMessage[]>([]);

//   const handleSendMessage = () => {
//     if (newMessage) {
//       const objNewMessage = {
//         message: newMessage,
//         time: new Date().toLocaleTimeString().substring(0, 5)
//       };

//       setMessages([...messages, objNewMessage]);
//     }
//     setNewMessage('');
//   };

//   const returnMessages = (objMessage: IObjMessage, index: number) => {
//     return (
//       <StyleStyledContainerMessage key={index}>
//         <StyledBoxMessage>
//           <StyledText>{objMessage.message}</StyledText>
//         </StyledBoxMessage>
//         <StyledText size={12}>{objMessage.time}</StyledText>
//       </StyleStyledContainerMessage>
//     );
//   };

//   const returnInputChat = () => {
//     return (
//       <StyledContainerInput>
//         <StyledCotainerBoxInput>
//           <StyledInput
//             onChangeText={setNewMessage}
//             value={newMessage}
//             placeholder='Digite sua mensagem'
//             onSubmitEditing={() => handleSendMessage()}
//             keyboardType='twitter'
//           />
//           <Icon
//             type='font-awesome'
//             name='send'
//             color='#262626'
//             size={18}
//             onPress={() => handleSendMessage()}
//             tvParallaxProperties={undefined}
//           />
//         </StyledCotainerBoxInput>
//       </StyledContainerInput>
//     );
//   };

//   return (
//     <StyledContainer>
//       <Header title={route.params?.name} />
//       <StyledContainerScroll showsVerticalScrollIndicator={false}>
//         {messages && messages.map((objMessage, index) => returnMessages(objMessage, index))}
//       </StyledContainerScroll>
//       {returnInputChat()}
//     </StyledContainer>
//   );
// };

// export default Chat;
