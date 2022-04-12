import React, { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { ViewStyle } from 'react-native';
import { useField } from '@unform/core';
import { Icon } from 'react-native-elements';
import { handleMessage } from '../../../helpers';

// styles
import {
  StyledContainer,
  StyledContainerPickerFile,
  StyledText,
  StyledErrorMessage
} from './styles';

// interface
interface IProps {
  name: string;
  title: string;
  style?: ViewStyle;
}

const PickerFile: React.FC<IProps> = ({ name, title, style }) => {
  const [file, setFile] = useState(null);

  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: {},
      getValue: () => file,
      setValue: (ref, value) => setFile(value)
    });
  });

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});

      if (result.type === 'success') {
        setFile({
          name: result.name,
          file: result.uri
          // type: result.mimeType
        });
      }
    } catch (err) {
      handleMessage('Erro ao selecionar o arquivo');
    }
  };

  return (
    <StyledContainer {...{ style }}>
      {file && (
        <StyledText style={{ marginBottom: 10 }}>{`${file.name.substring(0, 25)}`}</StyledText>
      )}
      {!file && error && (
        <StyledErrorMessage style={{ marginBottom: 10 }}>
          Anexe o comprovante do pix
        </StyledErrorMessage>
      )}
      <StyledContainerPickerFile onPress={() => handlePickDocument()}>
        <StyledText>{title}</StyledText>
        <Icon
          type='material'
          name='file-upload'
          color='#00843F'
          size={24}
          tvParallaxProperties={undefined}
        />
      </StyledContainerPickerFile>
    </StyledContainer>
  );
};

export default PickerFile;
