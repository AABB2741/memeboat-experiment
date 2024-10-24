import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
})`
  flex-grow: 0;
  margin: 24px 0;
`;

export const MemeImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
`;
