import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  margin: 6px;
  &:hover {
    color: #36689a;
    text-decoration: underline;
  }
`;
