import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

type FooterContent = {
  content: string;
};
export const AppFooter = ({ content }: FooterContent) => {
  return <Footer style={{ textAlign: 'center', backgroundColor: 'whitesmoke' }}>{content}</Footer>;
};
