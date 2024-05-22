import { Button, Space } from "antd";
import React from "react";

export default function IndexPage() {
  return (
    <Space size="large" className="m-20">
      <Button>导入</Button>
      <Button>导出</Button>
      <Button>审核</Button>
      <Button>查看</Button>
      <Button>文件预览</Button>
    </Space>
  );
}
