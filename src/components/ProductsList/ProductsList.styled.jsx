import styled from "styled-components";

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 16px;
    margin-top: 20px;
`

export const ListItem = styled.div`
    border: 1px solid black;
    border-radius: 4px;

  > a {
    text-decoration: none;
  }`

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
