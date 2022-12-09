import styled from "styled-components/native";

export const TITLE = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
  letter-spacing: ${(props) => props.theme.letterSpacing.tight};
`;
export const HEADING = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  letter-spacing: ${(props) => props.theme.letterSpacing.tight};
`;
export const SUBHEADING = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.subheading};
  color: ${(props) => props.theme.colors.ui.secondary};
  letter-spacing: ${(props) => props.theme.letterSpacing.base};
`;
export const BODY1 = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body1};
  color: ${(props) => props.theme.colors.ui.primary};
  letter-spacing: ${(props) => props.theme.letterSpacing.base};
`;
export const BODY2 = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body2};
  color: ${(props) => props.theme.colors.ui.primary};
  letter-spacing: ${(props) => props.theme.letterSpacing.base};
`;
export const CAPTION = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.secondary};
  letter-spacing: ${(props) => props.theme.letterSpacing.base};
`;
