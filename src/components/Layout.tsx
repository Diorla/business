import { Menu } from "semantic-ui-react";
import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
  active: string;
}

const StyledContent = styled.div`
  z-index: 1;
`;

const StyledMenu = styled.div`
  background: #ff7d00;
  position: sticky;
  top: 0;
  & span {
    display: inline-block;
    margin-right: 4px;
  }
`;

export default function Layout({ children, active }: LayoutProps) {
  return (
    <div>
      <StyledMenu>
        <Menu secondary>
          <Menu.Item name="home" active={active === "home"} href="/" />
          <Menu.Menu position="right">
            <span>
              <Menu.Item
                name="about"
                active={active === "about"}
                href="/about"
              />
            </span>
            <span>
              <Menu.Item name="help" active={active === "help"} href="/help" />{" "}
            </span>
          </Menu.Menu>
        </Menu>
      </StyledMenu>
      <StyledContent>{children}</StyledContent>
      <div>Footer</div>
    </div>
  );
}
