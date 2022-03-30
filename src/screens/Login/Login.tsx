import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParams } from "../../routes/Routes";

// components
import { Container, Title, Button } from "./styles";

// types
type NavProps = NativeStackNavigationProp<
  MainStackParams,
  "TabNavigatorProducer" | "TabNavigatorConsumer"
>;

const Login: React.FC = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <Container>
      <Title style={{ fontSize: 40, marginBottom: 20 }}>Login</Title>
      <Button onPress={() => navigation.navigate("TabNavigatorProducer")}>
        <Title>Go to Producer</Title>
      </Button>
      <Button onPress={() => navigation.navigate("TabNavigatorConsumer")}>
        <Title>Go to Consumer</Title>
      </Button>
    </Container>
  );
};

export default Login;
