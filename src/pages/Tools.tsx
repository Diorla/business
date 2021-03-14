import { Header, Item } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ToolsItem from "../components/ToolsItem";
import tools from "../data/tool";

const StyledContent = styled.div`
  padding: 8px;
  & .item {
    border-bottom: 1px solid red;
  }
  & .item {
    padding: 4px !important;
    transition: 0.5s ease !important;
  }
  & .item:hover {
    box-shadow: 0 0 2px silver;
  }
`;

const Center = styled.div`
  text-align: center;
  margin: 8px;
`;
export default function Tools() {
  return (
    <Layout active="tools">
      <Center>
        <Header as="h2">Tools</Header>
      </Center>
      <StyledContent>
        <Item.Group>
          {tools.map((tool, idx) => (
            <ToolsItem key={idx} {...tool} />
          ))}
        </Item.Group>
      </StyledContent>
    </Layout>
  );
}
