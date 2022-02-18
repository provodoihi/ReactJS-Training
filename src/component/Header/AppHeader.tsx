import React from "react";
import { Avatar, Layout, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Header.css";

const { Header } = Layout;
const { Title } = Typography;

type AppHeaderType = {
  headerName: string;
};

export const AppHeader = ({ headerName }: AppHeaderType) => {
  return (
    <Header style={{ backgroundColor: "#F7F8FC", display: "flex", justifyContent: "space-between" }}>
      <Title style={{ margin: 10 }} level={3}>
        {headerName}
      </Title>
      <Avatar style={{ margin: 10 }} size={44} icon={<UserOutlined />} />
    </Header>
  );
};

export default AppHeader;
