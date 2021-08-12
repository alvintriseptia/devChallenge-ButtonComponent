import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.4);
  text-align: center;

  &.default {
    background: #e0e0e0;
    color: #3f3f3f;
    &:hover,
    &:focus {
      background: #aeaeae;
    }
  }
  &.outline {
    background: #fff;
    border: 1px solid #aeaeae;
    color: #3f3f3f;
    &:hover,
    &:focus {
      background: #aeaeae;
    }
  }

  &.text {
    background: #fff;
    color: #3f3f3f;
    &:hover,
    &:focus {
      background: #aeaeae;
    }
  }

  &.primary {
    background: #2962ff;
    color: #fff;
    &:hover,
    &:focus {
      background: #0039cb;
    }
    &.outline {
      background: #fff;
      border: 1px solid #2962ff;
      color: #2962ff;
      &:hover,
      &:focus {
        background: #2962ff1a;
      }
    }

    &.text {
      background: #fff;
      color: #2962ff;
      &:hover,
      &:focus {
        background: #2962ff1a;
      }
    }
  }
  &.secondary {
    background: #455a64;
    color: #fff;
    &:hover,
    &:focus {
      background: #1c313a;
    }
    &.outline {
      background: #fff;
      border: 1px solid #455a64;
      color: #455a64;
      &:hover,
      &:focus {
        background: #455a642a;
      }
    }

    &.text {
      background: #fff;
      color: #455a64;
      &:hover,
      &:focus {
        background: #455a642a;
      }
    }
  }
  &.danger {
    background: #d32f2f;
    color: #fff;
    &:hover,
    &:focus {
      background: #9a0007;
    }
    &.outline {
      background: #fff;
      border: 1px solid #d32f2f;
      color: #d32f2f;
      &:hover,
      &:focus {
        background: #d32f2f2a;
      }
    }

    &.text {
      background: #fff;
      color: #d32f2f;
      &:hover,
      &:focus {
        background: #d32f2f2a;
      }
    }
  }

  &.startIcon {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4rem;
  }
  &.endIcon {
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4rem;
  }

  &.sm {
    min-width: 85px;
    transition: 0.2s all;
  }
  &.md {
    min-width: 90px;
    transition: 0.2s all;
  }
  &.lg {
    min-width: 100px;
    transition: 0.2s all;
  }

  &.disableShadow {
    box-shadow: none;
    transition: 0.2s all;
  }

  &.disabled {
    background: #e0e0e0 !important;
    color: #9e9e9e !important;
    cursor: not-allowed;
    pointer-events: all !important;
    &.text {
      background: #fff !important;
      color: #3f3f3f !important;
    }
  }
`;

const Button = ({
  text,
  variant,
  shadow,
  alignIcon,
  icon,
  size,
  color,
  disabled,
}) => {
  return (
    <Buttons
      className={`${variant} ${shadow} ${alignIcon} ${size} ${color} ${disabled}`}
    >
      <span className="material-icons">{icon}</span>
      <p>{text}</p>
    </Buttons>
  );
};

export default Button;
