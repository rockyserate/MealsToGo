import styled from "styled-components/native";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
  border-bottom-width: ${(props) => props.theme.borderWidth.thin};
  border-bottom-color: ${(props) => props.theme.colors.ui.border};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const SearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-color: ${(props) => props.theme.colors.ui.border};
  border-width: ${(props) => props.theme.borderWidth.thin};
  border-radius: ${(props) => props.theme.cornerRadius.fullyRounded};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body2};
  elevation: ${0};
`;
