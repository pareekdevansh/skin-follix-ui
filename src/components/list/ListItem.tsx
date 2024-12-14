// components/ListItem.tsx
import React from "react";
import styled from "styled-components";

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-bottom: 16px;
`;

interface ListItemProps {
  title: string;
  content: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, content }) => (
  <ListItemWrapper>
    <strong>{title}</strong>
    <span>{content}</span>
  </ListItemWrapper>
);

export default ListItem;
