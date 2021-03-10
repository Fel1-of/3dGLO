/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changePhoto */ \"./src/modules/changePhoto.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n //получаем модули\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)(); //Menu \n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //Popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); //Tabs \n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //Slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); //change photo\n\n(0,_modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__.default)(); //valid\n\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_6__.default)(); // Calculator\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_7__.default)(100); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('form1');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('form2');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('form3');\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcCount = document.querySelector('.calc-count'),\n      calcDay = document.querySelector('.calc-day'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = +calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    var x = 1;\n\n    var animateNumbers = function animateNumbers() {\n      var requestId = requestAnimationFrame(animateNumbers);\n      x = x * 2;\n      totalValue.textContent = x;\n\n      if (x >= total) {\n        totalValue.textContent = total;\n        cancelAnimationFrame(requestId);\n      }\n    };\n\n    requestAnimationFrame(animateNumbers);\n  };\n\n  calcBlock.addEventListener('change', function (e) {\n    var target = e.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/changePhoto.js":
/*!************************************!*\
  !*** ./src/modules/changePhoto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar changePhoto = function changePhoto() {\n  var commandPhoto = document.querySelectorAll('#command .command__photo');\n  commandPhoto.forEach(function (item) {\n    var photoSrc = item.getAttribute('src');\n    var photoData = item.dataset.img;\n    item.addEventListener('mouseenter', function (event) {\n      return event.target.src = photoData;\n    });\n    item.addEventListener('mouseleave', function (event) {\n      return event.target.src = photoSrc;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePhoto);\n\n//# sourceURL=webpack://3dglo/./src/modules/changePhoto.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction countTimer() {\n  var date = new Date();\n  var deadline = \"\".concat(date.getFullYear(), \"-\").concat(date.getMonth() + 1, \"-\").concat(date.getDate() + 1);\n  var timeHours = document.querySelector('#timer-hours'),\n      timeMinutes = document.querySelector('#timer-minutes'),\n      timeSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        lefthours = 24 + (Math.floor(timeRemaining / 60 / 60) - 24);\n\n    if (lefthours < 0) {\n      deadlineCounter();\n      return;\n    }\n\n    var seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n\n    function getTime(time) {\n      for (var _len = arguments.length, arr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        arr[_key - 1] = arguments[_key];\n      }\n\n      arr = arr.map(function (item) {\n        return item < 10 ? '0' + item : '' + item;\n      });\n\n      var _ref = _toConsumableArray(arr),\n          seconds = _ref[0],\n          minutes = _ref[1],\n          hours = _ref[2];\n\n      return {\n        timeRemaining: timeRemaining,\n        seconds: seconds,\n        minutes: minutes,\n        hours: hours\n      };\n    }\n\n    return getTime(timeRemaining, seconds, minutes, hours);\n  }\n\n  var updateClock = setInterval(function () {\n    var timer = getTimeRemaining();\n\n    if (timer === undefined) {\n      clearInterval(updateClock);\n      return;\n    }\n\n    timeHours.textContent = timer.hours;\n    timeMinutes.textContent = timer.minutes;\n    timeSeconds.textContent = timer.seconds;\n\n    if (timer.timeRemaining <= 1) {\n      clearInterval(updateClock);\n    }\n  }, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm(selector) {\n  var errorMessage = 'Что-то пошло не так',\n      //loadMessage = 'Загрузка...',\n  successMessage = 'Заявка была отправлена';\n  var form = document.getElementById(selector);\n  var buttons = document.querySelectorAll('button[type=submit]');\n  var bNum = selector[4] - 1;\n  buttons.forEach(function (e) {\n    return e.setAttribute(\"disabled\", \"disabled\");\n  });\n  document.querySelectorAll('input').forEach(function (e) {\n    return e.addEventListener('input', function () {\n      var valid = 0;\n\n      var _iterator = _createForOfIteratorHelper(new FormData(form).entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n\n          if (val[1] === '') {\n            valid += 1;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      if (valid) {\n        buttons[bNum].setAttribute('disabled', \"disabled\");\n      } else {\n        buttons[bNum].removeAttribute('disabled');\n      }\n    });\n  });\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;'; //statusMessage.textContent = 'Тут будет сообщение';\n\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = '';\n    statusMessage.classList.add('sk-pulse');\n    statusMessage.style.cssText = 'margin: auto';\n    var formData = new FormData(form);\n    var body = {};\n\n    var _iterator2 = _createForOfIteratorHelper(formData.entries()),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var value = _step2.value;\n        body[value[0]] = value[1];\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    }).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error(\"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A, \\u043A\\u043E\\u0434 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0438 - \".concat(response.status));\n      }\n\n      statusMessage.textContent = successMessage;\n      updatePage();\n    })[\"catch\"](function (error) {\n      console.log(error);\n      statusMessage.textContent = errorMessage;\n      updatePage();\n    });\n  });\n\n  var updatePage = function updatePage() {\n    clearInputs(form);\n    statusMessage.classList.remove('sk-pulse');\n    statusMessage.style.cssText = '';\n    buttons[bNum].setAttribute('disabled', 'disabled');\n    setTimeout(function () {\n      statusMessage.textContent = '';\n    }, 3000);\n\n    if (selector === \"form3\") {\n      setTimeout(function () {\n        document.querySelector('.popup').style.display = 'none';\n      }, 2000);\n    }\n  };\n\n  var clearInputs = function clearInputs(form) {\n    var inputs = form.querySelectorAll('input');\n    inputs.forEach(function (item) {\n      return item.value = '';\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content'),\n      dotsUl = document.querySelector('.portfolio-dots');\n\n  var addDots = function addDots() {\n    for (var i = 0; i < slide.length; i++) {\n      var dotElement = document.createElement('li');\n      dotsUl.appendChild(dotElement);\n      dotElement.classList.add('dot');\n      if (i === 0) dotElement.classList.add('dot-active');\n    }\n  };\n\n  addDots();\n  var dot = document.querySelectorAll('.dot');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'); // function for close and open menu\n\n  var handlerMenu = function handlerMenu() {\n    return menu.classList.toggle('active-menu');\n  }; //Scroll links animate function\n\n\n  function scroll(block, dur) {\n    var endPoint = block.offsetTop;\n    var idAnimate;\n    var num = 0;\n\n    function animateScroll() {\n      idAnimate = requestAnimationFrame(animateScroll); // Function to increase scroll speed\n\n      function duration(count) {\n        if (num > endPoint * 0.95 && count !== 1) {\n          count = count / 2;\n        } else {\n          if (endPoint > 4000) {\n            count += 3;\n          } else if (endPoint > 3000) {\n            count += 2;\n          }\n        }\n\n        num = num + count * 20;\n      }\n\n      duration(dur);\n      document.documentElement.scrollTop = num;\n\n      if (num > endPoint) {\n        document.documentElement.scrollTop = endPoint;\n        cancelAnimationFrame(idAnimate);\n      }\n    }\n\n    idAnimate = requestAnimationFrame(animateScroll);\n  } //All listeners for header \n\n\n  document.addEventListener('click', function (event) {\n    var target = event.target; //Main block\n\n    if (target.closest('main') && !menu.classList.contains('active-menu')) {\n      if (target.closest('.menu')) {\n        // Open menu \n        handlerMenu();\n      } else if (target.closest('a[href=\"#service-block\"]')) {\n        //Scroll button to next slide at main block\n        event.preventDefault();\n        scroll(document.getElementById('service-block'), 2);\n      }\n    } else if (menu.classList.contains('active-menu')) {\n      if (target.closest('menu') === null || target.classList.contains('close-btn')) {\n        // Close menu\n        handlerMenu();\n      } else if (target.tagName === 'A' && !target.classList.contains('.close-btn')) {\n        // Close menu and scroll to blocks of target-link\n        event.preventDefault();\n        handlerMenu();\n        var targetId = target.getAttribute('href').substring(1);\n        var block = document.getElementById(targetId);\n        scroll(block, 3);\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = popup.querySelector('.popup-content'),\n      popupContentRect = popupContent.getBoundingClientRect(),\n      popupContentX = popupContentRect.x;\n  popupBtn.forEach(function (elem) {\n    return elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (screen.width > 768) {\n        animationPopUp();\n      }\n    });\n  }); //popup Close\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  }); //Popup Animation function\n\n  function animationPopUp() {\n    var animationId;\n    var count = -1200;\n    popupContent.style.transform = \"translate(\".concat(count, \"px)\");\n\n    var animationFunc = function animationFunc() {\n      animationId = requestAnimationFrame(animationFunc);\n      count += 50;\n\n      if (count >= popupContentX - 50) {\n        cancelAnimationFrame(animationId);\n      }\n\n      popupContent.style.transform = \"translate(\".concat(count, \"px)\");\n    };\n\n    animationFunc();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar validation = function validation() {\n  var form = document.querySelectorAll('input');\n  form.forEach(function (element) {\n    if (element.matches('.form-email')) {\n      element.addEventListener('blur', function () {\n        {\n          //replace(/[а-яА-ЯёЁ]|^[ -]*|( |-)(?=\\1)|[ -]*$/g, '')\n          element.classList.add('succses');\n          element.value = element.value.match(/\\w+@\\w+\\.\\w{2,3}/g);\n\n          if (!element.value) {\n            element.classList.remove('succses');\n          }\n        }\n      });\n    } else if (element.matches('.form-phone')) {\n      element.addEventListener('blur', function () {\n        {\n          element.value = element.value.match(/\\+?[78]([-()]*\\d){10}/g);\n        }\n      });\n    } else if (element.matches('.top-form') || element.matches('.form-name') || element.matches('.mess')) {\n      element.addEventListener('blur', function () {\n        {\n          element.value = element.value.replace(/[^а-яА-ЯёЁ\\s\\-]|^[ -]*|( |-)(?=\\1)|[ -]*$/g, '');\n          element.value = element.value.slice(0, 1).toUpperCase() + element.value.slice(1, element.value.length);\n        }\n      });\n    } else if (element.matches('.calc-item') && !element.matches('.calc-type')) {\n      element.addEventListener('blur', function () {\n        {\n          element.value = element.value.replace(/\\D/g, '');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3dglo/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;