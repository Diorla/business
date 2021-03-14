import styled from "styled-components";
import Layout from "../components/Layout";
import business from "../assets/business.svg";
import thought from "../assets/thought.svg";

export interface businessProps {
  id: string;
  name: string;
}

const StyledMain = styled.div`
  min-height: 250px;
  background-color: #ff7d000a;
  background-size: contain;
  align-items: center;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  line-height: 32px;
`;

const StyledSection = styled(StyledMain)<{
  imageUrl: string;
  position: string;
}>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-position: ${({ position }) => position};
  justify-content: ${({ position }) =>
    position === "right" ? "flex-start" : "flex-end"};
  padding: 8px;
  & > div {
    background-color: rgba(255, 255, 255, 0.8);
    width: 80%;
    min-width: 240px;
  }
`;

export default function Home() {
  return (
    <Layout active="home">
      <StyledMain>
        <div>This is bore out of my leadership and management class.</div>
      </StyledMain>
      <StyledSection imageUrl={business} position="left">
        <div>
          Create and manage your <a href="/business">business profile</a> here,
          using the latest tools
        </div>
      </StyledSection>
      <StyledSection imageUrl={thought} position="right">
        <div>
          Click here to see the type of <a href="/leader">leader</a> you are, or
          think you are
        </div>
      </StyledSection>
    </Layout>
  );
}
