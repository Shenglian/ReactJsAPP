webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(2),a=o(r),i=n(31),u=n(164),s=n(168),c=o(s);n(172);var l=function(e){(0,i.render)(a["default"].createElement(u.AppContainer,null,a["default"].createElement(e,null)),document.querySelector('[data-js="app"]'))};l(c["default"]);(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(l,"renderApp","/Users/sheng/Desktop/case/ReactJsAPP/src/js/index.js")})()},164:function(e,t,n){e.exports=n(165)},165:function(e,t,n){"use strict";var o=n(166);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=o},166:function(e,t,n){"use strict";e.exports=n(167)},167:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),s=u.Component,c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?u.createElement(this.props.component,this.props.props):u.Children.only(this.props.children)}}]),t}(s);e.exports=c},168:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(169),u=(o(i),n(170)),s=(o(u),n(171)),c=o(s),l=function(){return a["default"].createElement("div",{className:"app"},a["default"].createElement(c["default"],null))},f=l;t["default"]=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"App","/Users/sheng/Desktop/case/ReactJsAPP/src/js/app.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/sheng/Desktop/case/ReactJsAPP/src/js/app.js"))})()},169:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=o(s),l=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleResult=n.handleResult.bind(n),n.onRadioChanged=n.onRadioChanged.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handleReset=n.handleReset.bind(n),n.state={index:0,answer:[],value:"",match:!1,result:!1},n}return i(t,e),u(t,[{key:"onRadioChanged",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState(function(e){return{answer:e.answer.concat(t.state.value),index:e.index+1}})}},{key:"handleResult",value:function(){this.setState(function(e){return{result:!0}});var e=this.state.answer.join(""),t=["都偷偷早退","猜個屁呀！","在收集後宮中..."].join("");e===t?this.setState(function(e){return{match:!0}}):this.setState(function(e){return{match:!1}})}},{key:"build",value:function(e,t){return void 0===t[e]?c["default"].createElement("div",{className:"btn-mix-text","data-text":"看結果(按我按我)",onClick:this.handleResult},"看結果(按我按我)"):c["default"].createElement("form",{className:"form",onSubmit:this.handleSubmit,autoComplete:"off"},c["default"].createElement("div",{className:"form__num"},t[e].num),c["default"].createElement("div",{className:"form__title"},t[e].title),c["default"].createElement("div",{className:"form__input"},c["default"].createElement("input",{type:"radio",value:t[e].option_one,onChange:this.onRadioChanged,name:t[e].title,checked:this.state.value===t[e].option_one}),c["default"].createElement("span",null,t[e].option_one)),c["default"].createElement("div",{className:"form__input"},c["default"].createElement("input",{type:"radio",value:t[e].option_two,onChange:this.onRadioChanged,name:t[e].title,checked:this.state.value===t[e].option_two}),c["default"].createElement("span",null,t[e].option_two)),c["default"].createElement("button",{className:"btn-mix-next","data-text":"下一題"},"下一題"))}},{key:"handleReset",value:function(){this.setState({index:0,answer:[],value:"",result:!1})}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=[{num:"第一題",title:"阿切通常何時下班？",option_one:"沒有下班過！！",option_two:"都偷偷早退"},{num:"第二題",title:"阿切幾歲?",option_one:"猜個屁呀！",option_two:"超年輕的！"},{num:"第三題",title:"阿切正在幹麻?",option_one:"你怎麼會知道...",option_two:"在收集後宮中..."}];return c["default"].createElement("div",{id:"wrapper"},this.state.result===!1?this.build(this.state.index,e):this.state.match===!0?"你很瞭解阿切":"你還不夠瞭解阿切",this.state.result===!1?"":c["default"].createElement("div",{className:"btn-mix-reset",onClick:this.handleReset,"data-text":"重玩"},"重玩"))}}]),t}(c["default"].Component),f=l;t["default"]=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Questions","/Users/sheng/Desktop/case/ReactJsAPP/src/js/questions.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/sheng/Desktop/case/ReactJsAPP/src/js/questions.js"))})()},170:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=o(s),l=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.geoFindMe=n.geoFindMe.bind(n),n.success=n.success.bind(n),n.error=n.error.bind(n),n.state={src:""},n}return i(t,e),u(t,[{key:"geoFindMe",value:function(){var e=document.getElementById("out");return navigator.geolocation?(e.innerHTML="<p>Locating…</p>",void navigator.geolocation.getCurrentPosition(this.success,this.error)):void(e.innerHTML="<p>Geolocation is not supported by your browser</p>")}},{key:"success",value:function(e){var t=document.getElementById("out"),n=e.coords,o=n.latitude,r=n.longitude;t.innerHTML="<p>Latitude is "+o+"° <br>Longitude is "+r+"°</p>";var a=new Image;a.width=400,a.height=400,a.src=this.setState({src:"http://maps.googleapis.com/maps/api/staticmap?center="+o+","+r+"&zoom=16&size=400x400&markers=color:blue%7Clabel:S%7C"+o+","+r})}},{key:"error",value:function(){var e=document.getElementById("out");e.innerHTML="Unable to retrieve your location"}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c["default"].createElement("div",{id:"wrapper"},c["default"].createElement("div",{className:"btn-mix-start",onClick:this.geoFindMe,"data-text":"Show my location"},"Show my location"),c["default"].createElement("div",{className:"image"},c["default"].createElement("img",{src:this.state.src,alt:""})),c["default"].createElement("div",{id:"out"}))}}]),t}(c["default"].Component),f=l;t["default"]=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Geolocation","/Users/sheng/Desktop/case/ReactJsAPP/src/js/geolocation.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/sheng/Desktop/case/ReactJsAPP/src/js/geolocation.js"))})()},171:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=o(s),l=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e={backgroundImage:"url(/imgs/pc.png)",backgroundAttachment:"fixed"};return c["default"].createElement("div",{id:"wrapper",style:e},c["default"].createElement("div",{className:"btn-mix-reset","data-text":"我要贊助"},"我要贊助"))}}]),t}(c["default"].Component),f=l;t["default"]=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Questions","/Users/sheng/Desktop/case/ReactJsAPP/src/js/bg.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/sheng/Desktop/case/ReactJsAPP/src/js/bg.js"))})()},172:function(e,t){}});
//# sourceMappingURL=app.js.map