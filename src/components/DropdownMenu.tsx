import { Dropdown, Icon } from "semantic-ui-react";
import logout from "../firebase/logout";

export default function DropdownMenu({
  imageUrl,
  uid,
}: {
  imageUrl: any;
  uid: string;
}) {
  const trigger = imageUrl ? (
    <img src={imageUrl} alt="Profile icon" />
  ) : (
    <Icon name="user" />
  );
  return (
    <Dropdown trigger={trigger} pointing className="link item">
      <Dropdown.Menu>
        {process.env.REACT_APP_ADMIN_UID === uid && (
          <Dropdown.Item as="a" href="/admin">
            Admin
          </Dropdown.Item>
        )}
        <Dropdown.Item as="a" href="/profile">
          Profile
        </Dropdown.Item>
        <Dropdown.Item as="a" href="/my_notes">
          My notes
        </Dropdown.Item>
        <Dropdown.Item as="a" href="/my_scores">
          My scores
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Collections</Dropdown.Header>
        <Dropdown.Item as="a" href="/my_tools">
          My tools
        </Dropdown.Item>
        <Dropdown.Item as="a" href="/my_quizzes">
          My quizzes
        </Dropdown.Item>
        <Dropdown.Item as="a" href="/feedback">
          Feedback
        </Dropdown.Item>
        <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
