import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./button";

export default {
  title: "Button", // 可以使用/画分目录
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.storyName = "默认Button";
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "lg",
  btnType: "danger",
};

export const Link = Template.bind({});
Link.storyName = "Link Button";
Link.args = {
  size: "sm",
  href: "https://github.com/chttyCode",
  btnType: "link",
};
