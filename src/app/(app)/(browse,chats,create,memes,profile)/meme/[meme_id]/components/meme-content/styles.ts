import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const MemeImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
`;
