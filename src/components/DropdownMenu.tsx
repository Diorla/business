import { Dropdown, Icon } from "semantic-ui-react";
import logout from "../firebase/logout";

export default function DropdownMenu({ imageUrl }: { imageUrl: any }) {
  const trigger = imageUrl ? (
    <img src={imageUrl} alt="Profile icon" />
  ) : (
    <Icon name="user" />
  );
  return (
    <Dropdown trigger={trigger} pointing className="link item">
      <Dropdown.Menu>
        <Dropdown.Header>Profile</Dropdown.Header>
        <Dropdown.Item as="a" href="/edit">
          Edit
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
