import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import firebase from "../firebase/init";
export interface dirProps {
  fullPath: string;
  name: string;
}

const StyledNotes = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 6px;
  &:hover {
    color: #36689a;
    text-decoration: underline;
  }
`;
export default function Notes() {
  const [dir, setDir] = useState<dirProps[]>([]);

  useEffect(() => {
    const list: dirProps[] = [];
    firebase
      .storage()
      .ref("public")
      .list({ maxResults: 100 })
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          const { fullPath, name } = folderRef;
          list.push({
            fullPath,
            name,
          });
        });
      })
      .then(() => setDir(list))
      .catch((notesError) => {
        console.log({ notesError });
      });
  }, []);
  return (
    <Layout active="notes">
      <Header>Notes</Header>
      <StyledNotes>
        {dir.map(({ name }) => (
          <StyledLink to={`notes/${name}`} key={name}>
            {name}
          </StyledLink>
        ))}
      </StyledNotes>
    </Layout>
  );
}
