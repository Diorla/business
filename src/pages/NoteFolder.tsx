import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Header } from "../components/MyComponents";
import firebase from "../firebase/init";

export interface filesProps {
  fullPath: string;
  name: string;
}

const StyledNotes = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  margin: 6px;
  &:hover {
    color: #36689a;
    text-decoration: underline;
  }
`;
export default function Notes() {
  const [files, setFiles] = useState<filesProps[]>([]);
  const [loading, setLoading] = useState(true);
  let { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const list: filesProps[] = [];
    firebase
      .storage()
      .ref(`public/${slug}`)
      .list({ maxResults: 100 })
      .then((res) => {
        res.items.forEach((itemRef) => {
          const { fullPath, name } = itemRef;
          list.push({
            fullPath,
            name,
          });
        });
      })
      .then(() => {
        setFiles(list);
        setLoading(false);
      })
      .catch((notesError) => {
        console.log({ notesError });
      });
  }, [slug]);

  if (loading) return <div>Loading</div>;
  return (
    <Layout active="notes">
      <Header>
        <Breadcrumb>
          <Breadcrumb.Section link href="/notes">
            Notes
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>{slug}</Breadcrumb.Section>
        </Breadcrumb>
      </Header>
      {!files.length ? (
        <div>Sorry, No notes found</div>
      ) : (
        <StyledNotes>
          {files.map(({ name }) => (
            <StyledLink
              to={`../notes/${slug}/${name.split(".")[0]}`}
              key={name}
            >
              {name.split(".")[0]}
            </StyledLink>
          ))}
        </StyledNotes>
      )}
    </Layout>
  );
}
