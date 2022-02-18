import { Breadcrumb, Layout, Image } from "antd";
import { Image1 } from "assets";
import "./AppContent.css";

const { Content } = Layout;

export const AppContent = () => {
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 16,
        minHeight: 300,
      }}
    >
      <Breadcrumb style={{ margin: "12px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Image src={Image1} height={320} width={560} />
      </div>
    </Content>
  );
};
