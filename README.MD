![HTML5](https://img.shields.io/badge/html5-e34f27?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![AXIOS](https://img.shields.io/badge/axios-6723e9?style=for-the-badge&logo=axios&logoColor=white)
# AI工具王
#### [Github Page](https://bolin0330.github.io/webLayout-aiTool/)
#### 介接 Get API，撈取Open AI工具列表，並整合在頁面上

## 頁面
- index
- pricing

## API
- HTTP Method：GET
- Domain：https://2023-engineer-camp.zeabur.app
- Route : `/api/v1/works`
- Query String :

    | Key | Type | Require | Description |
    |:---:|:---:|:---:|:---|
    | type | String | false | 作品類型 |
    | sort | Number | false | 0：作品由新到舊排列，1：作品由舊到新排列 |
    | page | Number | false | 作品頁數 |
    | search | String | false | 作品名稱搜尋 |

## 渲染畫面
![demo](https://github.com/bolin0330/webLayout-aiTool/blob/main/img/demo.png)

## 專案技術
- 運用 Bootstrap 概念客製化格線系統排版
- Axios
- jQuery
- Swiper 輪播
- Javascript 渲染頁面