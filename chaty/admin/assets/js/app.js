/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/extend */ "./src/utils/extend.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/preview */ "./src/modules/preview.js");
/* harmony import */ var _modules_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/color-picker */ "./src/modules/color-picker.js");
/* harmony import */ var _components_active_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/active-widget */ "./src/components/active-widget.js");
/* harmony import */ var _components_customizer_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customizer-button */ "./src/components/customizer-button.js");
/* harmony import */ var _components_hide_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hide-popup */ "./src/components/hide-popup.js");
/* harmony import */ var _components_settings_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings-button */ "./src/components/settings-button.js");
/* harmony import */ var _components_widget_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/widget-size */ "./src/components/widget-size.js");
/* harmony import */ var _components_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collapse */ "./src/components/collapse.js");
/* harmony import */ var _modules_channels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/channels */ "./src/modules/channels.js");
/* harmony import */ var _components_rule_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rule-button */ "./src/components/rule-button.js");
/* harmony import */ var _modules_chatway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/chatway */ "./src/modules/chatway.js");













jQuery(function () {
  (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_preview__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_color_picker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_active_widget__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_customizer_button__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hide_popup__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_settings_button__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_widget_size__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_components_collapse__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_modules_channels__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_components_rule_button__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_modules_chatway__WEBPACK_IMPORTED_MODULE_12__["default"])();
});

/***/ }),

/***/ "./src/components/active-widget.js":
/*!*****************************************!*\
  !*** ./src/components/active-widget.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activeWidgetHandler)
/* harmony export */ });
var $ = window.jQuery;
function activeWidgetHandler() {
  var button = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if ($('#active_widget').length) {
    var $triggerBlockWrapper = $('.trigger-block-wrapper');
    var $disableWidetAlert = $('.widget-disable-alert');
    var $activeWidgetButton = $('#active_widget');

    if (button === null) {
      button = $activeWidgetButton[0];
    }

    if (button.checked) {
      $triggerBlockWrapper.show();
      $disableWidetAlert.hide();
    } else {
      $triggerBlockWrapper.hide();
      $disableWidetAlert.show();
    }

    $('#active_widget').on('change', function () {
      activeWidgetHandler(this);
    });
  }
}

/***/ }),

/***/ "./src/components/collapse.js":
/*!************************************!*\
  !*** ./src/components/collapse.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ collapse)
/* harmony export */ });
var $ = window.jQuery;
function collapse() {
  var $buttons = $('.chaty-targeted-collapse');
  $buttons.on('click', function (ev) {
    ev.preventDefault();
    var id = this.dataset.target;
    var $target = $("#".concat(id));
    var $element = $(this);
    $target.slideToggle(300, function () {
      if ($target.is(':hidden')) {
        $element.find('svg').css('transform', 'rotate(0deg)');
      } else {
        $element.find('svg').css('transform', 'rotate(90deg)');
      }
    });
  });
}

/***/ }),

/***/ "./src/components/customizer-button.js":
/*!*********************************************!*\
  !*** ./src/components/customizer-button.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ customizeButton)
/* harmony export */ });
var $ = window.jQuery;
function customizeButton() {
  $(document).on('click', '.customize-agent-button', function () {
    var $scope = $(this).parents('.chaty-channel');
    $scope.find('.customize-agent-button, .agent-button-action').toggleClass('enable');
    $scope.find('.chaty-channel-main-settings').slideToggle(200);
  });
  $(document).on('click', '.agent-channel-setting-button', function () {
    var $scope = $(this).parents('.agent-channel-setting');
    $scope.find('.agent-channel-setting-advance').slideToggle(200);
    $(this).toggleClass('enable');
  });
}

/***/ }),

/***/ "./src/components/hide-popup.js":
/*!**************************************!*\
  !*** ./src/components/hide-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hidePopup)
/* harmony export */ });
var $ = window.jQuery;
function hidePopup() {
  $(".close-chaty-popup-btn").on("click", function (e) {
    e.stopPropagation();
    $(".chaty-popup").hide();

    if ($(this).hasClass("channel-setting-btn")) {
      $("#chaty-social-channel").trigger("click");
      $(window).scrollTop($("#channels-selected-list").offset().top - 120);
    }
  });
}

/***/ }),

/***/ "./src/components/rule-button.js":
/*!***************************************!*\
  !*** ./src/components/rule-button.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ruleButtonHandler)
/* harmony export */ });
var $ = window.jQuery;
function ruleButtonHandler() {
  $('.create-rule').on('click', function () {
    var $parent = $(this).parents('.chaty-option-box');
    $parent.addClass('show-remove-rule-button');
  });
  $('.remove-rules').on('click', function () {
    var $parent = $(this).parents('.chaty-option-box');
    $parent.removeClass('show-remove-rule-button');
  });
}

/***/ }),

/***/ "./src/components/save-button.js":
/*!***************************************!*\
  !*** ./src/components/save-button.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveButton)
/* harmony export */ });
var $ = window.jQuery;
function saveButton() {
  var arrowBtn = $('.save-button-container .arrow-btn');
  arrowBtn.on('click', function () {
    var $saveDashboardBtn = $('.save-dashboard-button');
    var $footer = $('.footer-buttons');
    var footerOffset = $footer.offset();
    var buttonOffset = $(this).offset();
    var top = buttonOffset.top - footerOffset.top + 45;
    var left = buttonOffset.left - footerOffset.left + 40;

    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0).removeClass('active');
      $saveDashboardBtn.css({
        display: 'none'
      });
    } else {
      $(this).attr('data-click-state', 1).addClass('active');
      $saveDashboardBtn.css({
        position: 'absolute',
        left: left + 'px',
        top: top + 'px',
        display: 'inline-block',
        transform: 'translateX(-100%)'
      });
    }

    return false;
  });
  $(window).on('click', function (ev) {
    if ($('.arrow-btn.active')) {
      var $saveDashboardBtn = $('.save-dashboard-button');
      $saveDashboardBtn.css({
        display: 'none'
      });
      $('.arrow-btn.active').attr('data-click-state', 0).removeClass('active');
    }
  });
}

/***/ }),

/***/ "./src/components/settings-button.js":
/*!*******************************************!*\
  !*** ./src/components/settings-button.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settingsButton)
/* harmony export */ });
var $ = window.jQuery;
function settingsButton() {
  $('.chaty-settings').on('click', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    $(this).toggleClass('enable');
    var $scope = $(this).parents('.chaty-channel');
    var scrollTop = $(window).scrollTop();
    var distance = $scope.offset().top - scrollTop - 130;
    window.scrollBy({
      top: distance,
      left: 0,
      behavior: 'smooth'
    });
  });
}

/***/ }),

/***/ "./src/components/widget-size.js":
/*!***************************************!*\
  !*** ./src/components/widget-size.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ widgetSize)
/* harmony export */ });
var $ = window.jQuery;
function widgetSize() {
  $('.widget-size-control').on('change', function () {
    if (this.type === 'radio') {
      $('#custom-widget-size').css({
        display: this.id === 'size-custom' ? 'block' : 'none'
      });
      $('.widget-size-control').prop('checked', false);
      $(this).prop('checked', true);
    }

    $('#custom-widget-size-input').val(this.value);
    change_custom_preview();
  });
}

/***/ }),

/***/ "./src/compose/index.js":
/*!******************************!*\
  !*** ./src/compose/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compose)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function compose() {
  for (var _len = arguments.length, funs = new Array(_len), _key = 0; _key < _len; _key++) {
    funs[_key] = arguments[_key];
  }

  var props = funs.reduceRight(function (total, current) {
    return _objectSpread(_objectSpread({}, total), current);
  }, {});
  return function (source) {
    return function (values) {
      return source(_objectSpread(_objectSpread({}, values), props));
    };
  };
}

/***/ }),

/***/ "./src/hoc/with-layout-change.js":
/*!***************************************!*\
  !*** ./src/hoc/with-layout-change.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withLayoutChange)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Detect wordpress layout change  
 * implemented HOC to use this same functionility everywhere
 */
var $ = window.jQuery;
var sidebarWidth = $('#adminmenuwrap').outerWidth();
var adminBarHeight = $('#wpadminbar').outerHeight();
var headerEnd = $('.chaty-header').outerHeight();
var position = Boolean(window.isRtl) ? 'right' : 'left';

var calculateTop = function calculateTop() {
  if (innerWidth < 600) return (scrollY <= adminBarHeight ? adminBarHeight - scrollY : 0) + 'px';
  return adminBarHeight + 'px';
};

var calculateHorizontalGap = function calculateHorizontalGap() {
  if (innerWidth >= 783) return sidebarWidth + 'px';
  return 0;
};

var calcualteContent = function calcualteContent() {
  if (innerWidth < 640) return (headerEnd || 0) + 20;
  return (headerEnd || 0) + adminBarHeight;
};

function withLayoutChange() {
  return {
    onLayoutChange: function onLayoutChange(callback) {
      var _callback;

      /**
       * calcualte postion on initial page relad 
       */
      callback((_callback = {
        top: calculateTop()
      }, _defineProperty(_callback, position, calculateHorizontalGap()), _defineProperty(_callback, "width", "calc(100% - ".concat(calculateHorizontalGap(), ")")), _defineProperty(_callback, "content", calcualteContent()), _callback));
      /**
       * calcualte postion on scroll
       */

      onscroll = function onscroll() {
        var _callback2;

        callback((_callback2 = {
          top: calculateTop()
        }, _defineProperty(_callback2, position, calculateHorizontalGap()), _defineProperty(_callback2, "width", "calc(100% - ".concat(calculateHorizontalGap(), ")")), _defineProperty(_callback2, "content", calcualteContent()), _callback2));
      };
      /**
       * @param eventData contains the sidebar position like "folded, responsive" 
       */


      $(document).on('wp-menu-state-set wp-collapse-menu', function (event, eventData) {
        var _callback3;

        sidebarWidth = $('#adminmenuwrap').outerWidth();
        adminBarHeight = $('#wpadminbar').outerHeight();
        headerEnd = $('.chaty-header').outerHeight();
        callback((_callback3 = {
          top: calculateTop()
        }, _defineProperty(_callback3, position, calculateHorizontalGap()), _defineProperty(_callback3, "width", "calc(100% - ".concat(calculateHorizontalGap(), ")")), _defineProperty(_callback3, "content", calcualteContent()), _callback3));
      });
    }
  };
}

/***/ }),

/***/ "./src/hoc/with-route.js":
/*!*******************************!*\
  !*** ./src/hoc/with-route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withRoute)
/* harmony export */ });
function withRoute() {
  var route = new URLSearchParams(window.location.search);
  return {
    route: route
  };
}

/***/ }),

/***/ "./src/modules/channels.js":
/*!*********************************!*\
  !*** ./src/modules/channels.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ channels)
/* harmony export */ });
var $ = window.jQuery;
function channels() {
  /**
   * bring the newly created channel settings into view 
   */
  function bringNewChannelIntoView(target) {
    var $scope = $("#chaty-social-".concat(target));
    $scope[0].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
  /**
   * show pro alert when users tries to use more than 2 channel 
   */


  function onChannelLimitExceeded(isExceeded) {
    var $popover = $('.popover-upgrade-pro');

    if (isExceeded) {
      // show and shake
      $popover.addClass('flex shake-it').removeClass('hidden'); // scroll into view

      if (!$popover.isInViewport()) {
        $popover[0].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }

      setTimeout(function () {
        return $popover.removeClass('shake-it');
      }, 1000);
    } else {
      $popover.removeClass('flex shake-it').addClass('hidden');
    }
  }
  /**
   * channel update handler 
   */


  function init(props) {
    var action = props.action,
        target = props.target,
        channel = props.channel,
        isExceeded = props.isExceeded;
    onChannelLimitExceeded(isExceeded);

    if (action === 'added' && !isExceeded && target) {
      bringNewChannelIntoView(target);
    }
    /**
     * If just one channel is selected, 
     * then widget icon, color, default state, and icons view shouldn't appear in steps 2 and 3 
     */


    {
      var status = channel.length <= 1; // true | false;

      $('.chaty-widget-color, .chaty-widget-icon, .chaty-default-state, .chaty-icon-view').toggleClass('hidden', status);
    }
  }

  wp.hooks.addAction('chaty.channel_update', 'channelUpdateHandler', init);
} // call when any channel is removed or updated
// const channel_list = [];
// jQuery('.channels-icons > .icon.active').each( (i, item) => {
//     channel_list.push( item.dataset.social );
// } )
// wp.hooks.doAction('chaty.channel_update', {
//     channel     : channel_list,         // active channel list
//     target      : social,               // channel that removed last
//     action      : 'removed',            // added || removed,
//     isExceeded  : false,
// });

/***/ }),

/***/ "./src/modules/chatway.js":
/*!********************************!*\
  !*** ./src/modules/chatway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chatwayChannel)
/* harmony export */ });
var $ = window.jQuery;
function chatwayChannel() {
  var handler = {
    init: function init() {
      this.$chatwayPosition = 'above-chaty';
      $(document).on("click", "#add-chatyway", function (e) {
        e.preventDefault();
        clearClasses();
        $("#chatyway-info-popup").show();
        $("#chatyway-info-popup .chaty-popup-inner").addClass('step-1');
      });
      $(document).on("click", ".close-chatway-notice", function (e) {
        e.preventDefault();
        $(".chatway--notice").remove();
      });
      $(document).on("click", "#add-live-channel", function (e) {
        clearClasses();

        if ($(".has--no--widgets").length) {
          $("#chatyway-info-popup .chaty-popup-inner").addClass('step-1');
          $("#chatyway-info-popup").hide();
        } else {
          $("#chatyway-info-popup .chaty-popup-inner").addClass('step-2');
        }
      });
      $(document).on("click", "#change-chatway-position", function (e) {
        $("#chatway-position-settings").toggleClass("hidden");
      });
      $(document).on("change", "#chatway-position-settings input[name='chatway_position']:checked", function () {
        startAnimation();
      });
      $(document).on("click", ".close-chatway-notice", function (e) {
        e.preventDefault();
        $(".chatway-notice").addClass('hidden');
      });
      $(document).on("click", "#go-to-first-step", function (e) {
        e.preventDefault();
        $("#chaty-social-channel").trigger('click');
      });
      $(document).on("click", "#add-live-chat-btn", function (e) {
        e.preventDefault();
        $("#add-chatyway").trigger('click');
      });
      $(document).on("click", "#add-chatway-channel", function (e) {
        e.preventDefault();
        $("#chatyway-info-popup").hide();
      });
      $(document).on("click", "#open-widget-list", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".dropdown--list").slideToggle(200);
      });
      $(document).on("click", "body, html", function (e) {
        $(".dropdown--list").slideUp(200);
      });
      $(document).on("click", ".dropdown--list a", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var widgetId = $(this).attr("data-widget");
        $("#add_chatway_to_widget").val(widgetId);
        $("#chatyway-info-popup").show();
        $(".dropdown--list").slideUp(200);
      });
    }
  };

  var addChatwayChannel = function addChatwayChannel(e) {
    clearClasses();
    $("#chatyway-info-popup .chaty-popup-inner").addClass('step-2');
  };

  var clearClasses = function clearClasses() {
    $("#chatyway-info-popup .chaty-popup-inner").removeClass(['step-1', 'step-2', 'step-3']);
  };

  var closeChatwayNotice = function closeChatwayNotice() {};

  handler.init();
}

/***/ }),

/***/ "./src/modules/color-picker.js":
/*!*************************************!*\
  !*** ./src/modules/color-picker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ colorPicker)
/* harmony export */ });
var $ = window.jQuery;
function colorPicker() {
  var ChatyColorPicker = {
    init: function init() {
      this.extendJquery(); // enable color picker when page is refreshed

      this.trigger(false, {
        $scope: $(document),
        element: '.chaty-color-field'
      }); // custom event to enable color picker

      $(document).on('chatyColorPicker/trigger', this.trigger.bind(this));
    },
    // To manage opening and closing color picker
    STATE: {
      current: null,

      set add($element) {
        if (!$element.is(this.current) && this.current) {
          this.current.parent().next().slideUp();
        }

        this.current = $element;
        this.closeAll;
      },

      get closeAll() {
        var self = this;
        $('html, .preview-section-chaty').on('click', function (ev) {
          if (!ev.target.closest('.cht-colorpicker__dropdown')) {
            self.current.parent().next().slideUp();
          }
        });
      }

    },

    /**
     *
     * @event chatyColorPicker/trigger
     * this event will be used to enable color picker
     *
     */
    trigger: function trigger() {
      var _this = this;

      var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var settings = arguments.length > 1 ? arguments[1] : undefined;

      if (ev) {
        this.eventUtils(ev);
      }

      var colors = ['#202020', '#86cd91', '#1E88E5', '#ff6060', '#49E670', '#ffdb5e', '#ff95ee'];
      var $inputEl = settings.$scope.find(settings.element);
      $inputEl.each(function (index, input) {
        var $input = settings.$scope.find(input); // avoid duplicate color picker creation

        if ($input.data('chaty-color-picker')) {
          return;
        }

        var color = $input.val() || '#202020';
        var colorHex = AColorPicker.parseColor(color, "hex");
        var config = Object.assign({
          $scope: settings.$scope,
          $input: $input,
          defaultColor: color,
          colors: colors,
          defaultColorDarker: _this.colorLuminance(colorHex, -0.1)
        }, _this);
        config.addReplacer();
        $input.attr('data-chaty-color-picker', true);
      });
    },
    eventUtils: function eventUtils(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    },
    addReplacer: function addReplacer() {
      var self = this;
      self.$input.css('display', 'none');
      self.$input.after("\n                <div class=\"cht-colorpicker replacer\">\n                    <div class=\"cht-colorpicker__preview\">\n                        <span class=\"cht-colorpicker__preview--inner\" style=\"background-color: ".concat(self.defaultColor, "; border-color: ").concat(self.defaultColorDarker, "\"></span>\n                    </div>\n                    <div class=\"cht-colorpicker__dropdown\">\n                        ").concat(self.colorTemplate(), "\n                    </div>\n                </div>\n            "));
      var $scopeColorPalate = self.$input.parent().find('.cht-colorpicker');
      var $dropdown = $scopeColorPalate.find('.cht-colorpicker__dropdown');
      var picker = AColorPicker.createPicker($dropdown, {
        attachTo: $scopeColorPalate,
        color: this.defaultColor,
        showAlpha: true,
        showHSL: false // showRGB     : false,

      });
      self.initalize($scopeColorPalate);
      picker.on("change", function (picker, color) {
        self.onChange.call(self, color, $scopeColorPalate, true);
      });
    },
    colorTemplate: function colorTemplate() {
      var _this2 = this;

      return "\n            <ul class=\"palate\">\n                ".concat(this.colors.map(function (color, index) {
        return "<li data-color=\"".concat(color, "\" ").concat(color === _this2.defaultColor ? 'class="active"' : '', ">\n                    <span class=\"template-color\" style=\"background-color: ").concat(color, "\"></span>\n                </li>");
      }).join(''), "\n                <li class=\"custom-color ").concat(this.colors.includes(this.defaultColor) ? '' : 'active', "\">\n                    <div>\n                        <svg class=\"pointer-events-none\" width=\"16\" height=\"16\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" svg-inline=\"\" focusable=\"false\" tabindex=\"-1\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 1a1 1 0 00-2 0v4H1a1 1 0 000 2h4v4a1 1 0 102 0V7h4a1 1 0 100-2H7V1z\" fill=\"currentColor\"></path></svg>\n                    </div>\n                </li>\n            </ul>\n            ");
    },

    /**
     * extend jQuery methods
     */
    extendJquery: function extendJquery() {
      $.fn.extend({
        premioFixHorizontalPosition: function premioFixHorizontalPosition() {
          var left = this.parent().offset().left;
          var availableWidth = innerWidth - left;

          if (this.outerWidth() + 40 > availableWidth) {
            this.css('right', '0');
          }

          return this;
        }
      });
    },

    /**
     *
     *
     * @param $scope = $scopeColorPalate
     * manage event listens for
     * - toggling color palate
     * - selecting pre defined color
     * - custom color picking
     */
    initalize: function initalize($scope) {
      var self = this;
      var $preview = $scope.find('.cht-colorpicker__preview--inner');
      var $dropdown = $scope.find('.cht-colorpicker__dropdown');
      var $customColor = $scope.find('.custom-color');
      var $templateColor = $scope.find('.template-color');
      var $palate = $scope.find('.palate');
      var $acolorpicker = $scope.find('.a-color-picker'); // show hide color palate by clicking preivew

      $preview.on('click', function (ev) {
        self.eventUtils(ev);
        $dropdown.premioFixHorizontalPosition().slideToggle();
        $acolorpicker.hide();
        setTimeout(function () {
          $palate.show();
        }, 500); // setter method: It helps to clsoe already opend color picker

        self.STATE.add = $preview;
      }); // select pre defined template color

      $templateColor.on('click', function (ev) {
        self.eventUtils(ev);
        $scope.find('li').removeClass('active');
        var $target = jQuery(this).parent();
        $target.addClass('active');
        self.onChange.call(self, $target.data('color'), $scope, false);
      }); // show custom color palate

      $customColor.on('click', function () {
        $scope.find('li').removeClass('active');
        jQuery(this).parent().addClass('active');
        $palate.hide();
        $acolorpicker.show();
      });
    },

    /**
     *
     *
     * @method colorLuminance is used for making the color dark
     * @param hex contains hexa color code
     * @param lum contains the value of color darknesss
     *
     */
    colorLuminance: function colorLuminance(hex, lum) {
      // validate hex string
      hex = String(hex).replace(/[^0-9a-f]/gi, '');

      if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      lum = lum || 0; // convert to decimal and change luminosity

      var rgb = "#",
          c,
          i;

      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
      }

      return rgb;
    },
    updatePreviewColor: function updatePreviewColor($scope, color, colorDark) {
      var $preview = $scope.find('.cht-colorpicker__preview--inner');
      $preview.css({
        backgroundColor: color,
        borderColor: colorDark
      });
    },
    updateCustomPreviewColor: function updateCustomPreviewColor($scope, colorDark) {
      var $customColor = $scope.find('.custom-color');
      $customColor.css({
        borderColor: colorDark
      });
    },
    updateChannelIconColor: function updateChannelIconColor(_ref) {
      var $scope = _ref.$scope,
          color = _ref.color,
          type = _ref.type,
          channel = _ref.channel;
      // for chaty and agent icon background color
      jQuery("#chaty_image_" + channel + " .custom-chaty-image").css('background-color', color);
      jQuery("#chaty_image_" + channel + " .facustom-icon").css('background-color', color);
      jQuery("#chaty_image_" + channel + " .color-element").css('fill', color);
    },
    updateAgentIconColor: function updateAgentIconColor(_ref2) {
      var $scope = _ref2.$scope,
          color = _ref2.color,
          type = _ref2.type,
          channel = _ref2.channel;
      // for chaty and agent icon background color
      console.log("color: " + color);
      console.log("channel: " + channel);
      jQuery("#image_agent_data_agent-" + channel + " .custom-agent-image").css('background-color', color);
      jQuery("#image_agent_data_agent-" + channel + " .facustom-icon").css('background-color', color);
      jQuery("#image_agent_data_agent-" + channel + " .color-element").css('fill', color);
    },
    updateAgentUserIconColor: function updateAgentUserIconColor(_ref3) {
      var $scope = _ref3.$scope,
          color = _ref3.color,
          type = _ref3.type,
          channel = _ref3.channel,
          agentIndex = _ref3.agentIndex;
      // for chaty and agent icon background color
      jQuery("#image_agent_data_" + channel + "-" + agentIndex + " .custom-agent-image").css('background-color', color);
      jQuery("#image_agent_data_" + channel + "-" + agentIndex + " .facustom-icon").css('background-color', color);
      jQuery("#image_agent_data_" + channel + "-" + agentIndex + " .color-element").css('fill', color);
    },

    /**
     *
     *
     * @param color contains rgba/hexa color
     * @param $scope contains jqueryHTMLElement, it's a widget scope
     * @param isCustom Boolean, it's true when custom color used
     *
     */
    onChange: function onChange(color, $scope) {
      var isCustom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var colorHex = AColorPicker.parseColor(color, "hex");
      var colorDark = isCustom ? this.colorLuminance(colorHex, -0.1) : colorHex;
      var $parent = $scope.parents('.chaty-channel');
      var channel = $parent.data('channel'); // assign value into input field

      this.$input.val(color).attr('value', color); // update preview color

      this.updatePreviewColor($scope, color, colorDark); // update custom preview border color

      if (isCustom) {
        this.updateCustomPreviewColor($scope, colorDark);
      } // for chaty icon background color


      if (this.$input.hasClass("chaty-bg-color")) {
        console.log("color: " + color);
        console.log("channel: " + channel);
        this.updateChannelIconColor({
          type: 'chaty-bg-color',
          // input class
          $scope: jQuery(".custom-image-".concat(channel)).parent(),
          color: color,
          channel: channel
        });
      }

      if (this.$input.hasClass("agent-bg-color")) {
        this.updateAgentIconColor({
          type: 'agent-bg-color',
          // input class
          $scope: jQuery(".custom-image-".concat(channel)).parent(),
          color: color,
          channel: channel
        });
      }

      if (this.$input.hasClass("agent-icon-color")) {
        var agentIndex = $scope.parents('.agent-channel-setting').data("item");
        this.updateAgentUserIconColor({
          type: 'agent-icon-color',
          // input class
          $scope: jQuery(".custom-image-".concat(channel)).parent(),
          color: color,
          channel: channel,
          agentIndex: agentIndex
        });
      } // for agent icon background color
      // this.updateIconColor({
      //     type    : 'agent-bg-color', // input class
      //     $scope  : jQuery(`.custom-agent-image-${channel}`).parent(),
      //     color   : color,
      // })
      //
      // // agent header background color
      // this.updateIconColor({
      //     type    : `agent_head_bg_color_${channel}`, // input id
      //     $scope  : jQuery(document),
      //     channel : channel
      // })
      //
      // // agent header text color
      // this.updateIconColor({
      //     type    : `agent_head_text_color_${channel}`, // input id
      //     $scope  : jQuery(document),
      //     channel : channel
      // })


      change_custom_preview();
    }
  };
  ChatyColorPicker.init();
}

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hoc_with_layout_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hoc/with-layout-change */ "./src/hoc/with-layout-change.js");
/* harmony import */ var _hoc_with_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/with-route */ "./src/hoc/with-route.js");
/* harmony import */ var _components_save_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/save-button */ "./src/components/save-button.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compose */ "./src/compose/index.js");




var $ = window.jQuery;

function headerModule(props) {
  var $header = $('.chaty-header');
  var $widgetBody = $('#chaty-widget-body-tab');
  var $channels = $('#chaty-social-channel');
  var $backButton = $('.back-button');
  var $nextButton = $('.next-button');
  var $chatyTab = $('.chaty-widget-tab');
  var $stepTitle = $('#process-step');
  var $currentStep = $('#current-step');
  var $stepProgress = $('#step-progress');
  var $currentStepInput = $('#current_step');
  var tabList = ['chaty-tab-social-channel', 'chaty-tab-customize-widget', 'chaty-tab-triger-targeting', 'chaty-tab-chatway'];
  var activeTab = Number(props.route.get('step') || 0);
  if ($header.length === 0 || $channels.length === 0) return;
  /**
   * on wordpress sidebar change, change the header position 
   * @props style = { left: value, top: value, width: value }
   */

  props.onLayoutChange(function (style) {
    $header.css(style);
    $widgetBody.css('margin-top', "".concat(style.content, "px"));
  });
  /**
   * Show tab 
   */

  var showTab = function showTab(index) {
    if (index < tabList.length && index >= 0) {
      activeTab = index; // active the tab content

      $('.social-channel-tabs').removeClass('active');
      $("#".concat(tabList[index])).addClass('active'); //active tab label or header

      $('.chaty-tab').removeClass('active completed').each(function () {
        $(this).addClass('completed');

        if (this.dataset.tabId === tabList[index]) {
          $(this).addClass('active');
          return false;
        }
      });
      $currentStep.text("".concat(index + 1, "/4"));
      $stepTitle.text(setStepTitle(index));
      $currentStepInput.val(index); //next and back button show/hide

      $backButton.removeClass('cht-disable');
      $nextButton.removeClass('cht-disable');
      var $progress = strokeFullProgress() - (index + 1) / 4 * strokeFullProgress();
      $stepProgress.css({
        strokeDashoffset: $progress
      });

      if (index <= 0) {
        $backButton.addClass('cht-disable');
      }

      if (index >= tabList.length - 1) {
        $nextButton.addClass('cht-disable');
      }

      $chatyTab.removeClass(['step-0', 'step-1', 'step-2', 'step-3']);
      $chatyTab.addClass("step-".concat(index)); // update url

      var locationURL = new URL(window.location.href);
      var search_params = locationURL.searchParams; // new value of "id" is set to "101"

      search_params.set('step', index); // change the search property of the main url

      locationURL.search = search_params.toString(); // the new url string

      var new_url = locationURL.toString();
      window.history.replaceState({
        page_id: index
      }, '', new_url);
    }
  };

  function strokeFullProgress() {
    return 46.5 * 2 * Math.PI;
  }

  var setStepTitle = function setStepTitle(index) {
    if (index == 0) {
      return "Select channels";
    } else if (index == 1) {
      return "Widget customization";
    } else if (index == 2) {
      return "Triggers and targeting";
    }

    return "Add live Chat";
  };
  /**
   * bring content into view
   */


  showTab(activeTab);
  $header.find('.chaty-tab').on('click', function () {
    // show tab setter method takes only the index of the tab 
    showTab(tabList.indexOf(this.dataset.tabId));
    $widgetBody.removeClass(["step-0", "step-1", "step-2", "step-3"]);
    $widgetBody.addClass('step-' + tabList.indexOf(this.dataset.tabId));

    if ($header.css('position') === 'fixed') {
      window.scrollTo({
        top: (innerWidth > 768 ? $header.outerHeight() : 0) + 32 + 'px',
        left: 0,
        behavior: 'smooth'
      });
    }
  });
  /**
   * Next button handler
   */

  $nextButton.on('click', function () {
    showTab(activeTab + 1);
  });
  /**
   * Prev button handler
   */

  $backButton.on('click', function () {
    showTab(activeTab - 1);
  }); // save button handler

  (0,_components_save_button__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_compose__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_hoc_with_layout_change__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_hoc_with_route__WEBPACK_IMPORTED_MODULE_1__["default"])())(headerModule));

/***/ }),

/***/ "./src/modules/preview.js":
/*!********************************!*\
  !*** ./src/modules/preview.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preview)
/* harmony export */ });
var $ = window.jQuery;
function preview() {
  var handler = {
    init: function init() {
      this.$previewBtn = $('.preview-help-btn');
      this.$asidePreview = $('.preview-section-chaty');
      this.resizeHandler();
      /* set button position on initial page refresh */

      this.$previewBtn.on('click', this.showPreview.bind(this));
      /* show preview on clicking preview button */

      this.$asidePreview.on('click', this.removePreview.bind(this));
      /* remove preview on clicking overlay */

      $(window).resize(this.resizeHandler.bind(this));
      /* set button position on page resize */
    },
    showPreview: function showPreview(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      this.$asidePreview.removeClass('pb-20 hidden').addClass('fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/70').css('z-index', 9999999).attr('data-show', 1);
      this.$asidePreview.find('.preview').removeClass('sticky').css('max-width', '350px');
      return;
    },
    removeHandler: function removeHandler() {
      this.$asidePreview.addClass('pb-20 hidden').removeClass('fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/70').removeAttr('style').attr('data-show', 0);
      this.$asidePreview.find('.preview').addClass('sticky').removeAttr('style');
    },
    removePreview: function removePreview(ev) {
      if (ev && !ev.target.closest('.preview') && this.$asidePreview.attr('data-show') == 1) {
        this.removeHandler();
      }
    },
    position: function position() {
      var $contaienr = $('#chaty-widget-body-tab'); // return if container does not exists

      if ($contaienr.length === 0) return;
      var offset = $contaienr.offset();
      var width = jQuery(document).width();
      return {
        centerY: window.innerHeight / 2,
        left: offset.left,
        right: width - (offset.left + $contaienr.outerWidth()),
        width: width,
        containerWidth: $contaienr.outerWidth()
      };
    },
    resizeHandler: function resizeHandler() {
      // return if position property does not exists
      if (!this.position()) return;

      var _this$position = this.position(),
          centerY = _this$position.centerY,
          right = _this$position.right,
          width = _this$position.width;

      if (width <= 1024) {
        this.$previewBtn.css({
          top: centerY + 'px',
          right: 0,
          transform: 'rotate(-90deg) translateX(137%)',
          opacity: 1,
          zIndex: 999999
        });
        this.$asidePreview.addClass('hidden');
      } else {
        this.removeHandler();
        this.$asidePreview.removeClass('hidden');
        this.$previewBtn.css({
          opacity: 0
        });
      }
    }
  };
  handler.init();
}

/***/ }),

/***/ "./src/utils/extend.js":
/*!*****************************!*\
  !*** ./src/utils/extend.js ***!
  \*****************************/
/***/ (() => {

var $ = window.jQuery;

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/admin/assets/js/app": 0,
/******/ 			"admin/assets/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["admin/assets/css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["admin/assets/css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;