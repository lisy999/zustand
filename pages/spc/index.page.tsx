import React, { useEffect, useState } from "react";
import EchartsForReact from "echarts-for-react";

import axios from "axios";
import { Button, Col, Form, Row, InputNumber } from "antd";
export default function Spc() {
  const [form] = Form.useForm();
  const [optionData, setOptionData] = useState<{
    x_bar_avg: number;
    x_bar_upper_limit: number;
    x_bar_lower_limit: number;
    R: number[];
  }>({ x_bar_avg: 0, x_bar_upper_limit: 0, x_bar_lower_limit: 0, R: [] });
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
  const option = {
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: [1, 2, 3, 4, 5],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "",
        data: optionData.R,
        type: "line",
        markLine: {
          data: [
            {
              name: "avg",
              yAxis: optionData.x_bar_avg ? optionData.x_bar_avg : 0,
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
              yAxis: optionData.x_bar_upper_limit
                ? optionData.x_bar_upper_limit
                : 0,
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
              yAxis: optionData.x_bar_lower_limit
                ? optionData.x_bar_lower_limit
                : 0,
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
  };
  const formData = [
    { dataIndex: "row", title: "数据行数" },
    { dataIndex: "cols", title: "数据列数" },
    { dataIndex: "A2", title: "A2常数值" },
    { dataIndex: "D4", title: "D4常数值" },
    { dataIndex: "min", title: "数据最小值" },
    { dataIndex: "max", title: "数据最大值" },
  ];
  const getData = () => {
    axios
      .get("http://192.168.111.97:8080/randomdemo", {
        params: { ...form.getFieldsValue() },
      })
      .then((res) => {
        setOptionData(res.data);
        console.log(res, "rrrrr");
        axios
          .get("http://192.168.111.97:8080/demo", {
            params: {
              data: [
                [
                  0.6547177538980067, 0.902309799505638, 0.03305632229209532,
                  0.39843626130045506, 0.7707952264405944,
                ],
                [
                  0.4392232196476322, 0.4974236213929032, 0.6660721844764713,
                  0.30861995949303933, 0.500960760174903,
                ],
                [
                  0.5143792566946238, 0.23969478267515665, 0.2241223639647819,
                  0.5456937990619026, 0.9472064458458623,
                ],
                [
                  0.33188200192841777, 0.5880959741134006, 0.2568468102477688,
                  0.058444735449726726, 0.6321096203190837,
                ],
              ],
              ...form.getFieldsValue(),
            },
          })
          .then((res2) => {
            // setOptionData(res.data);
            console.log(res2, "rrrrr22222");
          });
      });
  };
  useEffect(() => {
    getData();
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
          <Button type="primary" onClick={() => getData()}>
            查询
          </Button>
        </Row>
      </Form>
      <EchartsForReact
        style={{
          width: "100%",
          height: 400,
        }}
        option={option}
      />
    </div>
  );
}
