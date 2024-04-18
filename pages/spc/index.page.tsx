import React, { useEffect, useState } from "react";
import EchartsForReact from "echarts-for-react";

import axios from "axios";
import { Button, Col, Form, Row, InputNumber, Input } from "antd";
type optionType = {
  x_bar_avg: number;
  x_bar_upper_limit: number;
  x_bar_lower_limit: number;
  R: number[];
  x: number[];
  x_bar: number[];
  R_upper_limit: number;
  R_avg: number;
};
const initialValue = {
  x_bar_avg: 0,
  x_bar_upper_limit: 0,
  x_bar_lower_limit: 0,
  R: [],
  x: [],
  x_bar: [],
  R_upper_limit: 0,
  R_avg: 0,
};
export default function Spc() {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [optionData, setOptionData] = useState<optionType>(initialValue);
  const [optionData2, setOptionData2] = useState<optionType>(initialValue);
  // 假设你从接口获取了以下数据
  // const optionData = {
  //   x_bar_avg: 0.5431507874496485,
  //   R: [
  //     0.6822848508080489, 0.693818984084539, 0.6667058110796507,
  //     0.49279619448138967, 0.6018492082171696,
  //   ],
  //   data: [
  //     [
  //       0.7112164106117, 0.02893155980365114, 0.3175964072304621,
  //       0.5547727533461229, 0.34902478937582815,
  //     ],
  //     [
  //       0.6250102417226926, 0.8134128133325758, 0.4566986436221996,
  //       0.11959382924803674, 0.23057459746560383,
  //     ],
  //     [
  //       0.9800311795956123, 0.3133253685159616, 0.87216201486835,
  //       0.8384543344470299, 0.5036897238032948,
  //     ],
  //     [
  //       0.9041909334306085, 0.5454401403068566, 0.42213496869485445,
  //       0.9149311631762441, 0.7112724658957328,
  //     ],
  //     [
  //       0.3186754184752689, 0.20931702360314663, 0.8111662318203162,
  //       0.738306989201813, 0.28883968464724874,
  //     ],
  //   ],
  //   x_bar_lower_limit: 0.18108847483303853,
  //   R_avg: 0.6274910097341595,
  //   x: [1, 2, 3, 4, 5],
  //   x_bar_upper_limit: 0.69,
  //   R_upper_limit: 1.3265159945780132,
  //   x_bar: [
  //     0.39230838407355284, 0.4490580250782218, 0.7015325242460496,
  //     0.6995939343008593, 0.47326106954955877,
  //   ],
  // };
  // 根据接口返回的数据动态生成 markLine
  // const markLineData = [
  //   {
  //     name: "avg",
  //     yAxis: optionData.x_bar_avg,
  //     lineStyle: {
  //       color: "red",
  //       width: 2,
  //     },
  //     label: {
  //       formatter: "avg",
  //     },
  //   },
  //   {
  //     name: "ucl",
  //     yAxis: optionData.x_bar_upper_limit,
  //     lineStyle: {
  //       color: "green",
  //       width: 2,
  //     },
  //     label: {
  //       formatter: "ucl",
  //     },
  //   },
  //   {
  //     name: "lcl",
  //     yAxis: optionData.x_bar_lower_limit,
  //     lineStyle: {
  //       color: "blue",
  //       width: 2,
  //     },
  //     label: {
  //       formatter: "lcl",
  //     },
  //   },
  // ];

  // 将 markLineData 添加到 series 中
  const option = (v: optionType) => ({
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: v.x,
    },
    yAxis: {
      max: v.x_bar_upper_limit ? v.x_bar_upper_limit + 0.5 : 0,
      min: v.x_bar_lower_limit ? v.x_bar_lower_limit - 0.5 : 0,
      type: "value",
    },
    series: [
      {
        name: "",
        data: v.x_bar,
        type: "line",
        markLine: {
          data: [
            {
              name: "avg",
              yAxis: v.x_bar_avg ? v.x_bar_avg : 0,
              lineStyle: {
                color: "red",
                width: 2,
              },
              label: {
                formatter: "avg",
              },
            },
            {
              name: "ucl",
              yAxis: v.x_bar_upper_limit ? v.x_bar_upper_limit : 0,
              lineStyle: {
                color: "green",
                width: 2,
              },
              label: {
                formatter: "ucl",
              },
            },
            {
              name: "lcl",
              yAxis: v.x_bar_lower_limit ? v.x_bar_lower_limit : 0,
              lineStyle: {
                color: "blue",
                width: 2,
              },
              label: {
                formatter: "lcl",
              },
            },
          ],
        },
      },
    ],
  });
  const option2 = (v: optionType) => ({
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: v.x,
    },
    yAxis: {
      max: v.R_upper_limit ? v.R_upper_limit + 0.5 : 0,

      type: "value",
    },
    series: [
      {
        name: "",
        data: v.R,
        type: "line",
        markLine: {
          data: [
            {
              name: "avg",
              yAxis: v.R_avg ? v.R_avg : 0,
              lineStyle: {
                color: "red",
                width: 2,
              },
              label: {
                formatter: "avg",
              },
            },
            {
              name: "ucl",
              yAxis: v.R_upper_limit ? v.R_upper_limit : 0,
              lineStyle: {
                color: "green",
                width: 2,
              },
              label: {
                formatter: "ucl",
              },
            },
            {
              name: "lcl",
              yAxis: 0,
              lineStyle: {
                color: "blue",
                width: 2,
              },
              label: {
                formatter: "lcl",
              },
            },
          ],
        },
      },
    ],
  });

  const formData = [
    { dataIndex: "row", title: "数据行数" },
    { dataIndex: "cols", title: "数据列数" },
    { dataIndex: "constantA2", title: "A2常数值" },
    { dataIndex: "constantD4", title: "D4常数值" },
    { dataIndex: "min", title: "数据最小值" },
    { dataIndex: "max", title: "数据最大值" },
  ];
  const formData2 = [
    { dataIndex: "row", title: "数据行数" },
    { dataIndex: "cols", title: "数据列数" },
    { dataIndex: "constantA2", title: "A2常数值" },
    { dataIndex: "constantD4", title: "D4常数值" },
    { dataIndex: "min", title: "数据最小值" },
    { dataIndex: "max", title: "数据最大值" },
  ];
  function splitArrayIntoChunks(array: string[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const getData2 = (data?: any) => {
    let params = {};
    if (data) {
      params = { ...form2.getFieldsValue(), data };
      axios
        .post("http://192.168.111.97:8080/demo", {
          ...params,
        })
        .then((res2: any) => {
          setOptionData2(res2.data);
          const oneDimensionalArray = [].concat(...res2.data.data);
          form2.setFieldsValue({ data: oneDimensionalArray });
        });
    } else {
      params = { ...form2.getFieldsValue() };
      const originalArray = form2.getFieldsValue().data;
      const chunkSize = 5;
      const resultArray = splitArrayIntoChunks(originalArray, chunkSize);
      form2.validateFields().then(() => {
        axios
          .post("http://192.168.111.97:8080/demo", {
            ...params,
            data: resultArray,
          })
          .then((res2) => {
            setOptionData2(res2.data);
            console.log(res2, "rrrrr22222");
          });
      });
    }
  };
  const getData = () => {
    return axios
      .get("http://192.168.111.97:8080/randomdemo", {
        params: { ...form.getFieldsValue() },
      })
      .then((res) => {
        setOptionData(res.data);
        return res.data.data;
      });
  };

  useEffect(() => {
    getData().then((res) => {
      getData2(res);
    });
  }, []);
  return (
    <div>
      {" "}
      <Form form={form}>
        <Row gutter={10}>
          {formData.map((item, index) => (
            <Col span={3} key={index}>
              <Form.Item label={item.title} name={item.dataIndex}>
                <InputNumber style={{ width: 150 }} />
              </Form.Item>
            </Col>
          ))}
          <Col>
            <Button type="primary" onClick={() => getData()}>
              查询
            </Button>
          </Col>

          <Button onClick={() => form.resetFields()}>重置</Button>
        </Row>
      </Form>
      <EchartsForReact
        style={{
          width: "100%",
          height: 400,
        }}
        option={option(optionData)}
      />
      <Form
        form={form2}
        initialValues={{ constantA2: 0.577, constantD4: 2.144 }}
      >
        <Row gutter={10}>
          {formData2.map((item, index) => (
            <Col span={3} key={index}>
              <Form.Item label={item.title} name={item.dataIndex}>
                <InputNumber style={{ width: 150 }} />
              </Form.Item>
            </Col>
          ))}
        </Row>

        <Row>
          <Form.List
            name="data"
            initialValue={Array.from({ length: 25 })}
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error("At least 2 passengers"));
                  }
                },
              },
            ]}
          >
            {(fields) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    // {...(index === 0
                    //   ? formItemLayout
                    //   : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "二维数组" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      // validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          message: "请输入",
                          // whitespace: true,
                        },
                      ]}
                      noStyle
                    >
                      <InputNumber style={{ width: "90%" }} />
                    </Form.Item>
                  </Form.Item>
                ))}
              </>
            )}
          </Form.List>

          <Col>
            <Button type="primary" onClick={() => getData2()}>
              查询
            </Button>
          </Col>

          <Form.Item>
            <Button onClick={() => form2.resetFields()}>重置</Button>
          </Form.Item>
        </Row>
      </Form>
      <EchartsForReact
        style={{
          width: "100%",
          height: 400,
        }}
        option={option2(optionData2)}
      />
    </div>
  );
}
