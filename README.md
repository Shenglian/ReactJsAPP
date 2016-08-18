# Workflow ReactJS

This workflow includes:

1. Webpack
* Babel
* Scss
* React hot loader
* css-loader
* file-loader
* node-sass
* sass-loader
* standard-loader
* style-loader
* url-loader

> 特別說明：如果安裝 sass-loader 不成功，你可能需要先安裝 node-sass
> npm i --save-dev node-sass

> autoprefixer 則是自動產生各種瀏覽器專用的語法

> file-loader 則是用來讀取字型檔、圖片檔用的。最後 url-loader 可以幫我們偵測如果 woff(2) 這些來源如果在多少大小以內，就幫轉成base64（減少 request）

## Dependencies:

- NodeJS >= 6;

## Up and running

- Clone this repository: `git clone git@git01.gomaji.corp:ShengLin/ReactjsProject.git`;
- Remove `.git` directory;
- Install dependencies: `npm i`;
- Run `npm start` to develop on `http://localhost:3000`
- Run `npm run build` to build app.css, app.js, vendor.js (first position)

參考文章：[https://medium.com/@alphaorange/cwebpack-1-css-loader-68a86fbe389f#.cucamfqo1](https://medium.com/@alphaorange/cwebpack-1-css-loader-68a86fbe389f#.cucamfqo1)

