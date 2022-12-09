import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.none};
  border-radius: ${(props) => props.theme.cornerRadius.round};
  border-color: ${(props) => props.theme.colors.ui.border};
  border-width: ${(props) => props.theme.borderWidth.thin};
  elevation: ${0};
`;

export const Content = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

export const OpenIndicator = styled.View`
  flex-direction: row;
`;

export const CardCover = styled(Card.Cover)`
  border-radius: ${(props) => props.theme.cornerRadius.none};
  border-top-left-radius: ${(props) => props.theme.cornerRadius.round};
  border-top-right-radius: ${(props) => props.theme.cornerRadius.round};
`;

export const Section = styled.View`
  flex-direction: row;
`;

export const Rating = styled.View`
  flex: 1;
  flex-direction: row;
`;
