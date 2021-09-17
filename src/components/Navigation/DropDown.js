import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function DropDown(props) {

    const [show, setShow] = useState(false);

    return (
        <>
            <li>
                <Dropdown onMouseLeave={() => setShow(false)} onMouseOver={() => setShow(true)}>
                    <Dropdown.Toggle id="dropdown-basic" drop="end">DropDown&nbsp;</Dropdown.Toggle>
                    <Dropdown.Menu show={show}>
                        <Dropdown.Item> Drop Down 1 </Dropdown.Item>
                        <Dropdown.Item> Drop Down 2 </Dropdown.Item>
                        <Dropdown.Item> Drop Down 3 </Dropdown.Item>
                        <Dropdown.Item> {props.nested} </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        </>
    );
}

export default DropDown;