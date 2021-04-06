import React from 'react';
import { Button,ButtonGroup ,DropdownButton,Dropdown} from 'react-bootstrap';

const Drdopdown = () => {
    return (
        <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
      
        <DropdownButton as={ButtonGroup} title="Selecte one" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">first option</Dropdown.Item>
          <Dropdown.Item eventKey="2">Second option</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    );
};

export default Drdopdown;