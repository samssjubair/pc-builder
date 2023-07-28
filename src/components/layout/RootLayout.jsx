import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import FooterComponent from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
    
  return (
    <Layout>
      
      <Navbar/>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <FooterComponent/>
    </Layout>
  );
};
export default RootLayout;
