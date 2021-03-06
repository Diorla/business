import { Menu } from "semantic-ui-react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/init";
import DropdownMenu from "./DropdownMenu";
import SignInForm from "./SignInForm";
import { useState } from "react";

export interface LayoutProps {
  children: React.ReactNode;
  active?: string;
}

const StyledContent = styled.div`
  min-height: calc(100vh - 130px);
  z-index: 1;
`;

const StyledMenu = styled.div`
  background: #ff7d00;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: center;
  & > div {
    flex: 1;
  }
`;

const Footer = styled.div`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  align-items: center;
  font-size: 18px;
  bottom: 0;
  width: 100%;
`;

export default function Layout({ children, active }: LayoutProps) {
  const [user] = useAuthState(firebase.auth());
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <StyledMenu>
        <Menu secondary>
          <Menu.Item name="home" active={active === "home"} href="/" />
          <Menu.Menu position="right">
            <Menu.Item name="quiz" active={active === "quiz"} href="/quiz" />
            <Menu.Item name="tools" active={active === "tools"} href="/tools" />
            <Menu.Item name="notes" active={active === "notes"} href="/notes" />
            {user ? (
              <DropdownMenu imageUrl={user.photoURL} uid={user.uid} />
            ) : (
              <Menu.Item
                name="login"
                active={active === "login"}
                onClick={() => setIsOpen(true)}
              />
            )}
          </Menu.Menu>
        </Menu>
      </StyledMenu>
      <StyledContent>{children}</StyledContent>
      <Footer>
        <div>
          Made with <span style={{ color: "red" }}>❤</span> by Adeola Adedotun
        </div>
      </Footer>
      <SignInForm
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
