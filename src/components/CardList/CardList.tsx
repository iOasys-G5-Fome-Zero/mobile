import React, { Dispatch } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../routes/Routes';
import { setWeb } from '../../store';
import { useAppDispatch } from '../../store/store';

// components
import {
  StyledContainer,
  StyledCardContainer,
  StyledCardImage,
  StyledCardTitle,
  StyledContainerBackgroundBarProgress,
  StyledContainerBarProgress
} from './styles';

// interfaces
interface ICardListProps {
  data: {
    image: string;
    title: string;
    link: string;
  }[];
  columns: number;
  doar?: boolean;
  onPress?: Dispatch<string>;
}

type NavProps = NativeStackNavigationProp<MainStackParams, 'WebView'>;

const CardList: React.FC<ICardListProps> = ({ data, columns, doar, onPress = null }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavProps>();

  const returnCard = ({ image, title, link }, index: number) => {
    return (
      <StyledCardContainer
        key={index}
        columns={columns}
        activeOpacity={0.8}
        onPress={() => {
          if (onPress) {
            onPress(title);
          } else {
            dispatch(setWeb({ url: link, go: true }));
            navigation.navigate('WebView');
          }
        }}
      >
        <StyledCardImage source={image} resizeMode='cover' />
        {doar && (
          <StyledContainerBackgroundBarProgress>
            <StyledContainerBarProgress />
          </StyledContainerBackgroundBarProgress>
        )}
        <StyledCardTitle>{title}</StyledCardTitle>
      </StyledCardContainer>
    );
  };

  return <StyledContainer>{data.map((item, index) => returnCard(item, index))}</StyledContainer>;
};

export default CardList;
