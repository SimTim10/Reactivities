import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <MenuItem header>
          <img src="assets/logo.png" alt="logo" style={{marginRight: "10px"}}/>
          Reactivities
        </MenuItem>
        <MenuItem name="Activities" />
        <MenuItem>
          <Button positive content="Create Activity" />
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
