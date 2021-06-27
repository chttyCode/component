import React from "react";
import { Story, Meta } from "@storybook/react";
import { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import Menu from "./index";
export default {
  title: "Menu", // 可以使用/画分目录
  component: Menu,
  argTypes: {
    backgroundColor: { control: "color" },
    onSelect: { action: "clicked" },
  },
} as Meta;

const Template: Story<MenuProps> = (args: MenuProps) => (
  <Menu defaultIndex="0" {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <Menu.SubMenu title="test">
      <Menu.Item>SubMenu1</Menu.Item>
      <Menu.Item>SubMenu2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

export const Primary = Template.bind({});
Primary.storyName = "默认Menu";
