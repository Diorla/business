import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Input, Modal } from "semantic-ui-react";
import {
  loginWithEmail,
  loginWithGoogle,
  signUpWithEmail,
} from "../firebase/login";
import { Column, Header } from "./MyComponents";

export interface SignInFormProps {
  open: boolean;
  onClose: () => void;
}

export interface SignInProps {
  email: string;
  password: string;
  repassword?: string;
}

const LoginIn = ({ onClose }: { onClose: () => void }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    loginWithEmail(credentials);
    onClose();
  };

  const { email, password } = credentials;
  const active = email !== "" && password !== "";

  return (
    <Column>
      <Input
        iconPosition="left"
        placeholder="Email"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            email: e.target.value,
          })
        }
      >
        <Icon name="at" />
        <input />
      </Input>
      <br />
      <Input
        iconPosition="left"
        placeholder="password"
        type="password"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      >
        <Icon name="key" />
        <input />
      </Input>
      <br />
      <div>
        <Button color="green" fluid disabled={!active} onClick={login}>
          Submit
        </Button>
      </div>
    </Column>
  );
};

const SignUp = ({ onClose }: { onClose: () => void }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const signUp = () => {
    signUpWithEmail(credentials);
    onClose();
  };

  const { email, password, repassword } = credentials;
  const active = email !== "" && password !== "" && password === repassword;
  return (
    <Column>
      <Input
        iconPosition="left"
        placeholder="Email"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            email: e.target.value,
          })
        }
      >
        <Icon name="at" />
        <input />
      </Input>
      <br />
      <Input
        iconPosition="left"
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      >
        <Icon name="key" />
        <input />
      </Input>
      <br />
      <Input
        iconPosition="left"
        placeholder="Repeat password"
        type="password"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            repassword: e.target.value,
          })
        }
      >
        <Icon name="key" />
        <input />
      </Input>
      <br />
      <div>
        <Button color="green" fluid disabled={!active} onClick={signUp}>
          Submit
        </Button>
      </div>
    </Column>
  );
};

const SignInForm = ({ open, onClose }: SignInFormProps) => {
  const [isNew, setIsNew] = useState(false);
  const title = isNew ? "Sign Up" : "Sign In";
  const login = () => {
    loginWithGoogle();
  };
  return (
    <>
      <Modal size="tiny" open={open} onClose={onClose}>
        <Modal.Header>
          <Header>{title}</Header>
        </Modal.Header>
        <Modal.Content>
          <div>
            <Button color="youtube" fluid onClick={login}>
              <Icon name="google" /> Google
            </Button>
          </div>
          <br />
          <Link to="#" onClick={() => setIsNew(!isNew)}>
            {isNew ? "Already a user?" : "New user?"}
          </Link>
          {isNew ? <SignUp onClose={onClose} /> : <LoginIn onClose={onClose} />}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onClose} color="red">
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default SignInForm;
