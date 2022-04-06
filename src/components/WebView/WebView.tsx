import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { WebView as WebContainer } from 'react-native-webview';
import { setWeb } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/store';

// components
import { StyledRouteView, StyledContainerRoute, StyledContentRoute, StyledText } from './styles';

const WebView: React.FC = () => {
  const [title, setTTitle] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const initialUrl = useAppSelector(state => state.webReducer.url);

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#262626', true);
  });

  return (
    <>
      <StyledRouteView>
        <Icon
          type='feather'
          name='x'
          size={24}
          color='#fff'
          tvParallaxProperties={undefined}
          onPress={() => {
            dispatch(setWeb({ go: false }));
            navigation.goBack();
          }}
        />

        <StyledContainerRoute>
          <Icon
            type='feather'
            name='lock'
            size={18}
            color='#fff'
            tvParallaxProperties={undefined}
          />
          <StyledContentRoute>
            <StyledText bold>{title.length > 20 ? `${title.substring(0, 20)}` : title}</StyledText>
            <StyledText>{url.length > 35 ? `${url.substring(0, 33)}` : url}</StyledText>
          </StyledContentRoute>
        </StyledContainerRoute>
        <Icon
          type='feather'
          name='share'
          size={24}
          color='#fff'
          tvParallaxProperties={undefined}
          onPress={() => null}
        />
      </StyledRouteView>
      <WebContainer
        source={{ uri: initialUrl }}
        onNavigationStateChange={state => {
          setUrl(state.url);
          setTTitle(state.title);
        }}
      />
    </>
  );
};

export default WebView;
