import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import "material-design-icons/iconfont/material-icons.css";

const Demo = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-right: 1rem;
  display: block;
`;

const Option = styled.div`
  display: flex;
  column-gap: 0.2rem;
  align-items: center;
`;

const User = () => {
  const [variant, setVariant] = useState("default");
  const [text, setText] = useState("Default");
  const [shadow, setShadow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [alignIcon, setAlignIcon] = useState("startIcon");
  const [icon, setIcon] = useState("");
  const [size, setSize] = useState("sm");
  const [color, setColor] = useState("default");

  return (
    <>
      <Title>Types</Title>
      <Flex>
        <Option>
          <input
            title="option"
            type="radio"
            checked={variant === "default"}
            onChange={() => setVariant("default")}
          />
          <label>Default</label>
        </Option>

        <Option>
          <input
            title="option"
            type="radio"
            checked={variant === "outline"}
            onChange={() => setVariant("outline")}
          />
          <label>Outline</label>
        </Option>

        <Option>
          <input
            title="option"
            type="radio"
            checked={variant === "text"}
            onChange={() => setVariant("text")}
          />
          <label>Text</label>
        </Option>
      </Flex>

      <Title>Shadow</Title>
      <Flex>
        <input
          title="option"
          type="checkbox"
          checked={shadow}
          onChange={() => setShadow(!shadow)}
        />
        <label>Shadow</label>
      </Flex>

      <Title>Disabled</Title>
      <Flex>
        <input
          title="option"
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled(!disabled)}
        />
        <label>Disabled</label>
      </Flex>

      <Title>Icon</Title>
      <Flex>
        <Option>
          <input
            title="option"
            type="radio"
            checked={icon === "local_grocery_store"}
            onChange={() => setIcon("local_grocery_store")}
          />
          <label>
            <span classtitle="material-icons">local_grocery_store</span>
          </label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={icon === "home"}
            onChange={() => setIcon("home")}
          />
          <label>
            <span classtitle="material-icons">home</span>
          </label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={icon === "search"}
            onChange={() => setIcon("search")}
          />
          <label>
            <span classtitle="material-icons">search</span>
          </label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={icon === "store"}
            onChange={() => setIcon("store")}
          />
          <label>
            <span classtitle="material-icons">store</span>
          </label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={icon === "info"}
            onChange={() => setIcon("info")}
          />
          <label>
            <span classtitle="material-icons">info</span>
          </label>
        </Option>
      </Flex>
      <Title>Align Icon</Title>
      <Flex>
        <Option>
          <input
            title="option"
            type="radio"
            checked={alignIcon === "startIcon"}
            onChange={() => setAlignIcon("startIcon")}
          />
          <label>Left</label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={alignIcon === "endIcon"}
            onChange={() => setAlignIcon("endIcon")}
          />
          <label>Right</label>
        </Option>
      </Flex>
      <Title>Size</Title>
      <Flex>
        <Option>
          <input
            title="option"
            type="radio"
            checked={size === "sm"}
            onChange={() => setSize("sm")}
          />
          <label>Small</label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={size === "md"}
            onChange={() => setSize("md")}
          />
          <label>Medium</label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={size === "lg"}
            onChange={() => setSize("lg")}
          />
          <label>Large</label>
        </Option>
      </Flex>
      <Title>Color</Title>
      <Flex>
        <Option>
          <input
            title="option"
            type="radio"
            checked={color === "default"}
            onChange={() => setColor("default")}
          />
          <label>Default</label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={color === "primary"}
            onChange={() => setColor("primary")}
          />
          <label>Primary</label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={color === "secondary"}
            onChange={() => setColor("secondary")}
          />
          <label>Secondary</label>
        </Option>
        <Option>
          <input
            title="option"
            type="radio"
            checked={color === "danger"}
            onChange={() => setColor("danger")}
          />
          <label>Danger</label>
        </Option>
      </Flex>
      <Title>Text</Title>
      <input
        title="option"
        type="text"
        onChange={e => setText(e.target.value)}
      />
      <Title>Code</Title>
      <code>
        {`<Button variant="${variant}" shadow=${
          shadow ? `{true}` : `{false}`
        } color="${color}" />`}
      </code>

      <Demo>
        <Title>Demo</Title>
        <Button
          variant={variant}
          shadow={shadow ? "" : "disableShadow"}
          alignIcon={alignIcon}
          icon={icon}
          size={size}
          color={color}
          text={text}
          disabled={disabled ? "disabled" : ""}
        />
      </Demo>
    </>
  );
};

export default User;
