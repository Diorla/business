import { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Select from "../components/Select";
import firebase from "../firebase/init";
export interface dirProps {
  fullPath: string;
  name: string;
}

const StyledNotes = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  text-align: center;
  margin-top: 8px;
`;

const Header = styled.h1`
  text-align: center;
`;

const StyledInput = styled.div`
  display: flex;
  background: silver;
  height: 27px;
  & input,
  div {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;

export default function Notes() {
  const [dir, setDir] = useState<dirProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(new Blob());
  const [active, setActive] = useState(false);
  const [dirName, setDirName] = useState("");
  const [fileName, setFileName] = useState("");

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
      .then(() => {
        setDir(list);
        setLoading(false);
      })
      .catch((notesError) => {
        console.log({ notesError });
      });
  }, []);

  const selectFile = (e: any) => {
    setSelectedFile(e.target.files[0]);
    setActive(true);
  };

  const uploadFile = (e: any) => {
    firebase
      .storage()
      .ref(`public/${dirName}/${fileName}`)
      .put(selectedFile)
      .then((url) => {
        console.log({ url });
      })

      .catch((fbError) => {
        console.log({ fbError });
      });
  };

  return (
    <Layout active="notes">
      <Header>Create notes</Header>
      <StyledNotes>
        {loading ? (
          <div>Page is loading</div>
        ) : (
          <StyledInput>
            <input
              placeholder="Create new file"
              type="file"
              accept=".md"
              id="file"
              onChange={(e) => {
                selectFile(e);
                const file = e.target.files ? e.target.files[0] : { name: "" };
                setFileName(file.name);
              }}
            />
            <Select
              data={dir.map((item) => item.name)}
              onChange={(e: any) => setDirName(e.target.value)}
              value={dirName}
              placeholder="Select folder"
            />
          </StyledInput>
        )}
        <Center>
          <Button
            color="green"
            icon
            labelPosition="left"
            disabled={!active}
            onClick={uploadFile}
          >
            <Icon name="send" />
            Upload
          </Button>
          <Button color="red" icon labelPosition="right">
            Cancel
            <Icon name="cancel" />
          </Button>
        </Center>
      </StyledNotes>
    </Layout>
  );
}