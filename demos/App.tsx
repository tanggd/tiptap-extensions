import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import {ConfigProvider, Button} from 'antd';

const App = () => {
  return (
    <ConfigProvider>
      <Button type="primary">123</Button>
    </ConfigProvider>
  );
};

export default App;
