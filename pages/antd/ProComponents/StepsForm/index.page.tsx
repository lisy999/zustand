// 主要处理新建和编辑的场景

import type { ProFormInstance } from "@ant-design/pro-components";
import {
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from "@ant-design/pro-components";
import { Button } from "antd";

const Table = dynamic(() => import("antd").then((antd) => antd.Table), {
  ssr: false,
});

import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import React, { Key, useEffect, useRef, useState } from "react";

type FormValue = {
  jobInfo: {
    name: string;
    type: number;
  };
  syncTableInfo: {
    timeRange: [Dayjs, Dayjs];
    title: string;
  };
};
const formValue: FormValue = {
  jobInfo: {
    name: "normal job",
    type: 1,
  },
  syncTableInfo: {
    timeRange: [dayjs().subtract(1, "m"), dayjs()],
    title: "example table title",
  },
};
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formValue);
    }, time);
  });
};
const jobType = [
  {
    value: 1,
    label: "国企",
  },
  {
    value: 2,
    label: "私企",
  },
];
const EditExample = () => {
  const formMapRef = useRef<
    React.MutableRefObject<ProFormInstance<any> | undefined>[]
  >([]);
  useEffect(() => {
    waitTime(1000).then(() => {
      // 编辑场景下需要使用formMapRef循环设置formData
      formMapRef?.current?.forEach((formInstanceRef) => {
        formInstanceRef?.current?.setFieldsValue(formValue);
      });
    });
  }, []);

  const [selectedRowKeys, setSelectRowKeys] = useState<Key[]>([]);
  const onChange = (v: Key[]) => {
    setSelectRowKeys(v);
  };
  return (
    <StepsForm
      formMapRef={formMapRef}
      onFinish={(values) => {
        console.log(values);
        return Promise.resolve(true);
      }}
    >
      <StepsForm.StepForm name="step1" title="工作信息">
        <ProFormText label="姓名" name={["jobInfo", "name"]} />
        <ProFormSelect
          label="工作类型"
          name={["jobInfo", "type"]}
          options={jobType}
        />
        <Table
          pagination={{ total: 100 }}
          rowKey="data"
          rowSelection={{ selectedRowKeys, onChange }}
          columns={[{ dataIndex: "data", title: "title" }]}
          dataSource={[
            { data: 1 },
            { data: 2 },
            { data: 3 },
            { data: 4 },
            { data: 5 },
            { data: 6 },
            { data: 7 },
            { data: 8 },
            { data: 9 },
            { data: 10 },
            { data: 11 },
            { data: 12 },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm name="step2" title={"同步表单信息"}>
        <ProFormDateRangePicker
          label="时间区间"
          name={["syncTableInfo", "timeRange"]}
        />
        <ProFormText label="标题" name={["syncTableInfo", "title"]} />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default EditExample;
