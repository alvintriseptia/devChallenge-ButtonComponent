import React from "react";
import styled from "styled-components";
import "material-design-icons/iconfont/material-icons.css";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #4f4f4f;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  align-items: flex-end;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  margin-right: 1rem;
  min-width: 12rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  background: ${props => props.hover || "#e0e0e0"};
  color: #3f3f3f;
  text-align: center;
  margin-bottom: 0.5rem;

  &.startIcon {
    width: 105px;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4rem;
    background: #2962ff;
    color: #fff;
  }
  &.endIcon {
    width: 105px;
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4rem;
    background: #2962ff;
    color: #fff;
  }

  &.size-sm {
    width: 73px;
    background: #2962ff;
    color: #fff;
  }
  &.size-md {
    width: 81px;
    background: #2962ff;
    color: #fff;
  }
  &.size-lg {
    width: 93px;
    background: #2962ff;
    color: #fff;
  }

  &.color-default {
    background: ${props => props.hover || "#e0e0e0"};
    color: #3f3f3f;
  }
  &.color-primary {
    background: ${props => props.hover || "#2962ff"};
    color: #fff;
  }
  &.color-secondary {
    background: ${props => props.hover || "#455a64 "};
    color: #fff;
  }
  &.color-danger {
    background: ${props => props.hover || "#d32f2f"};
    color: #fff;
  }

  &.outline {
    background: ${props => props.hover || "#fff"};
    border: 1px solid #3d5afe;
    color: #3d5afe;
  }

  &.text {
    background: ${props => props.hover || "#fff"};
    color: #3d5afe;
    box-shadow: none;
    &.disabled {
      background: none;
      color: #9e9e9e;
      cursor: not-allowed;
      pointer-events: all !important;
    }
  }

  &.disableShadow {
    background: #3d5afe;
    color: #fff;
    box-shadow: none;
  }

  &.disabled {
    background: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

const Documentation = () => {
  return (
    <>
      <Title>Buttons</Title>
      <Flex>
        <Card>
          <p>{`<Button />`}</p>
          <Button>Default</Button>
        </Card>
        <Card>
          <p>&:hover, &:focus</p>
          <Button hover="#AEAEAE">Default</Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button variant=”outline” />`}</p>
          <Button className="outline">Default</Button>
        </Card>
        <Card>
          <p>&:hover, &:focus</p>
          <Button className="outline" hover="#2962FF1A">
            Default
          </Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button variant="text" />`}</p>
          <Button className="text">Default</Button>
        </Card>
        <Card>
          <p>&:hover, &:focus</p>
          <Button className="text" hover="#2962FF1A">
            Default
          </Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button disableShadow />`}</p>
          <Button className="disableShadow">Default</Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button disabled />`}</p>
          <Button className="disabled">Disabled</Button>
        </Card>
        <Card>
          <p>{`<Button variant=”text” disabled />`}</p>
          <Button className="text disabled">Disabled</Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button startIcon=”local_grocery_store” />`}</p>
          <Button className="startIcon">
            <span className="material-icons">local_grocery_store</span>
            Default
          </Button>
        </Card>
        <Card>
          <p>{`<Button endIcon=”local_grocery_store” />`}</p>
          <Button className="endIcon">
            <span className="material-icons">local_grocery_store</span>
            Default
          </Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button size=”sm” />`}</p>
          <Button className="size-sm">Default</Button>
        </Card>
        <Card>
          <p>{`<Button size=”md” />`}</p>
          <Button className="size-md">Default</Button>
        </Card>
        <Card>
          <p>{`<Button size=”lg” />`}</p>
          <Button className="size-lg">Default</Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>{`<Button color=”default” />`}</p>
          <Button className="color-default">Default</Button>
        </Card>
        <Card>
          <p>{`<Button color=”primary” />`}</p>
          <Button className="color-primary">Default</Button>
        </Card>
        <Card>
          <p>{`<Button color=”secondary” />`}</p>
          <Button className="color-secondary">Default</Button>
        </Card>
        <Card>
          <p>{`<Button color=”danger” />`}</p>
          <Button className="color-danger">Default</Button>
        </Card>
      </Flex>
      <Flex>
        <Card>
          <p>&:hover, &:focus</p>
          <Button className="color-default" hover="#AEAEAE">
            Default
          </Button>
        </Card>
        <Card>
          <Button className="color-primary" hover="#0039CB">
            Default
          </Button>
        </Card>
        <Card>
          <Button className="color-secondary" hover="#1C313A">
            Default
          </Button>
        </Card>
        <Card>
          <Button className="color-danger" hover="#9A0007">
            Default
          </Button>
        </Card>
      </Flex>
    </>
  );
};

export default Documentation;
