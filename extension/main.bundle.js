/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Components \r\nfunction StatusText({ text }) {\r\n    const element = document.createElement('li')\r\n    element.textContent = text;\r\n    return element\r\n}\r\n\r\n// Initialize application\r\nconst app = document.createElement('div')\r\nconst searchButton = document.createElement(\"button\");\r\nconst statusList = document.createElement(\"ul\");\r\n\r\n// Apply styles\r\napplyStyles(app, {\r\n    position: 'absolute',\r\n    bottom: '10px',\r\n    left: '10px',\r\n    height: 'max-content',\r\n    width: 'max-content',\r\n    background: 'white',\r\n    border: '1px solid #dbdbdb',\r\n    padding: '16px',\r\n    borderRadius: '10px',\r\n    boxShadow: '5px 5px 7px 1px #eee',\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n    justifyContent: 'center',\r\n    flexDirection: 'row-reverse'\r\n})\r\n\r\napplyStyles(searchButton, {\r\n    height: '30px',\r\n    width: '30px',\r\n    background: 'orange',\r\n    borderRadius: '100%',\r\n    outline: 'none',\r\n    border: 'none',\r\n})\r\n\r\napplyStyles(statusList, {\r\n    height: '100px',\r\n    width: '150px',\r\n    overflow: 'auto',\r\n    border: '1px solid #eee',\r\n    borderRadius: '8px',\r\n    marginRight: '8px'\r\n})\r\n\r\n\r\n// Set Defaults\r\nlogStatus(\"Idle\")\r\n\r\n// Add Elements to UI\r\napp.appendChild(searchButton)\r\napp.appendChild(statusList)\r\ndocument.body.appendChild(app)\r\n\r\n\r\n// Attach event listeners\r\nsearchButton.addEventListener('click', searchOnGoogle);\r\n\r\nasync function searchOnGoogle() {\r\n    const url_attribute =  false ? 0 : \"data-ng-src\"\r\n    const image_url = document.querySelector('.ans-section').querySelector('img').getAttribute(url_attribute);\r\n    const api_url = `https://api.ocr.space/parse/imageurl?apikey=7ad1ea631088957&url=${image_url}`;\r\n\r\n    // Set Status\r\n    logStatus('Purging ...')\r\n\r\n    try {\r\n\r\n        // Call OCR API to get text in the image\r\n        const response = await httpRequest(api_url);\r\n        const data = await response.json();\r\n\r\n        logStatus('Idle')\r\n\r\n        const image_text = data.ParsedResults[0].ParsedText\r\n        const google_url = `http://google.com/search?q=${image_text}`\r\n\r\n        window.open(google_url)\r\n    } catch (error) {\r\n        logStatus(':( Error')\r\n        if (true) console.trace(error)\r\n    }\r\n}\r\n\r\n\r\n// Utils\r\nfunction applyStyles(element, styles) {\r\n    Object.keys(styles).forEach(function (styleKey) {\r\n        element.style[styleKey] = styles[styleKey]\r\n    })\r\n}\r\n\r\nfunction logStatus(status) {\r\n    statusList.appendChild(StatusText({ text: status }))\r\n    statusList.lastElementChild.scrollIntoView({ behavior: 'smooth' })\r\n}\r\n\r\nfunction httpRequest(...payload) {\r\n    if (typeof content === 'undefined') return fetch(...payload)\r\n    content.fetch(...payload)\r\n}\n\n//# sourceURL=webpack://exam-stone/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;