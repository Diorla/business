import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import firebase from "../firebase/init";
import marked from "marked";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";
import { Header } from "../components/MyComponents";

const Markdown = styled.div`
  padding: 4px;
  & img {
    background: silver;
    border-radius: 8px;
  }
`;

export default function Notes() {
  let { slug, name } = useParams<{ slug: string; name: string }>();
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firebase
      .storage()
      .ref(`public/${slug}`)
      .child(`${name}.md`)
      .getDownloadURL()
      .then((url) => {
        fetch(url)
          .then((response) => {
            return response.text();
          })
          .then((text) => {
            setFile(marked(text));
            setLoading(false);
          })
          .catch((fetchError) => console.log({ fetchError }));
      })

      .catch((fbError) => {
        console.log({ fbError });
      });
  }, [slug, name]);

  return (
    <Layout active="notes">
      <div>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Section href={`/notes/${slug}`}>
              {slug}
            </Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>{name}</Breadcrumb.Section>
          </Breadcrumb>
        </Header>
        {loading ? (
          <div>Loading</div>
        ) : file ? (
          <Markdown dangerouslySetInnerHTML={{ __html: file }} />
        ) : (
          <div>No content</div>
        )}
      </div>
    </Layout>
  );
}
