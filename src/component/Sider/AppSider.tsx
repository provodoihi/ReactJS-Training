import { Layout, Menu, Typography } from "antd";
import { MENU_ITEMS } from "constants/MenuItems";

const { Sider } = Layout;
const { Title } = Typography;
export const AppSider = () => {
  return (
    <Sider style={{ backgroundColor: "aqua" }} width={200} className="Sider">
      <Title style={{ margin: 10 }} level={3}>
        Dashboard
      </Title>
      <Menu style={{ backgroundColor: "aqua" }}>
        {MENU_ITEMS.map((item) => {
          return <Menu.Item key={item.key}>{item.value}</Menu.Item>;
        })}
        {/* <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default AppSider;
