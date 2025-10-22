import {lazy} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import '@ant-design/v5-patch-for-react-19';
import {ConfigProvider, Layout} from 'antd';
import './index.css';

const Home = lazy(() => import('./src/Home'));
const Test = lazy(() => import('./src/Test'));

const {Sider, Content} = Layout;

const layoutRootStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: '#ffffff',
};

const siderStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: '#ffffff',
    padding: '16px',
};

const contentStyle: React.CSSProperties = {
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
    padding: '16px',
};

const App = () => {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Layout style={layoutRootStyle}>
          <Sider width={200} style={siderStyle}>
            sider
          </Sider>
          <Layout style={contentStyle}>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
