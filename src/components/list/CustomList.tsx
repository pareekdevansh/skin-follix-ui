import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import styled from "styled-components";

// Styled-components for custom styles
const ListWrapper = styled(Box)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  padding-left: 5%;
  padding-right: 5%;
  height: auto;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
`;
interface ListProps {
    items: { title: string; content: string }[];
}

const CustomList: React.FC<ListProps> = ({ items }) => (
    <ListWrapper>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
            Our Commitment to You:
        </Typography>
        <List sx={{ paddingLeft: 0 }}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem sx={{ paddingLeft: 0 }}>
                        <ListItemText primary={item.title} secondary={item.content} />
                    </ListItem>
                    {index < items.length - 1 && <Divider />} {/* Avoid divider after last item */}
                </React.Fragment>
            ))}
        </List>
    </ListWrapper>
);

export default CustomList;
