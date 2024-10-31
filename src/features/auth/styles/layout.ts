import styled from "styled-components/native";

export const LayoutContainer = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 24px;
`;

export const FormContainer = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: 24px;
  width: 100%;
  gap: 16px;
`;
