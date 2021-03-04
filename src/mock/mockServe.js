import Mock from "mockjs";

import data from "./data.json";
//测试练习
Mock.mock('/api/test1', 123)

//模拟数据
Mock.mock('/api/getshopdata', {code:0, data:data})