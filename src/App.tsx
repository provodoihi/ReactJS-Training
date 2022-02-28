import { AppHeader, AppSider, AppContent, AppFooter } from 'component';
import './App.css';
import { Layout } from 'antd';

function App() {
  return (
    <Layout className="App">
      <AppSider />
      <Layout>
        <AppHeader headerName="Overview" />
        <AppContent />
        <AppFooter content="React JS Training demo" />
      </Layout>
    </Layout>
  );
}

export default App;
