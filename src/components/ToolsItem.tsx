import { Item } from "semantic-ui-react";

export interface ToolsItemProps {
  image: string;
  name: string;
  meta: string;
  description: string;
  link: string;
}

export default function ToolsItem({
  image,
  name,
  meta,
  description,
  link,
}: ToolsItemProps) {
  return (
    <Item as="a" href={link}>
      <Item.Image size="small" src={image} />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>{meta}</Item.Meta>
        <Item.Description>{description}</Item.Description>
      </Item.Content>
    </Item>
  );
}
