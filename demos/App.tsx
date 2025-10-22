import {lazy} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom';
import '@ant-design/v5-patch-for-react-19';
import {ConfigProvider, Layout} from 'antd';
import './index.css';

const Home = lazy(() => import('./src/Home'));
const Editor = lazy(() => import('./src/Editor'));

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

const siderLinks = [
  {title: '首页', path: '/'},
  {title: '编辑器', path: '/editor'},
];

const App = () => {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Layout style={layoutRootStyle}>
          <Sider width={150} style={siderStyle}>
            {siderLinks.map(({title, path}) => (
              <Link to={path} style={{display: 'block', margin: '10px 0'}}>
                {title}
              </Link>
            ))}
          </Sider>
          <Layout style={contentStyle}>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/editor" element={<Editor />} />
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
