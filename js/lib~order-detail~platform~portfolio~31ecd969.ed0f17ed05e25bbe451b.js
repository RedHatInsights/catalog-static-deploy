(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{557:function(t,a,n){"use strict";var r=n(102),e=function(){return(e=Object.assign||function(t){for(var a,n=1,r=arguments.length;n<r;n++)for(var e in a=arguments[n])Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);return t}).apply(this,arguments)};a.a=function(t){var a=void 0===t?{}:t,n=a.removeSearch,s=a.keepHash,o=Object(r.g)();return e(e({},o),{push:function(t){var a=t;return s&&o.location.hash.length>0&&(a="object"==typeof a?e(e({},a),{hash:o.location.hash}):""+a+o.location.hash),n?o.push(function(t){return"string"==typeof t?t.split("?")[0]:"object"==typeof t?e(e({},t),{search:void 0}):t}(a)):o.push(a)}})}},575:function(t,a,n){"use strict";n.d(a,"c",(function(){return g})),n.d(a,"b",(function(){return h})),n.d(a,"d",(function(){return u})),n.d(a,"a",(function(){return x})),n.d(a,"e",(function(){return k})),n.d(a,"f",(function(){return B}));var r=n(3),e=n(18),s=n(6),o=n(37),i=function(){return(i=Object.assign||function(t){for(var a,n=1,r=arguments.length;n<r;n++)for(var e in a=arguments[n])Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);return t}).apply(this,arguments)},l=Object(e.a)(),f=Object(e.b)().post,c=function(){return f(s.n+"/graphql",{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(t){return t.data.application_types})).then((function(t){var a,n=t[0].sources;return(a=n.map((function(t){return t.id})),l.get(s.f+"/sources?limit="+(a.length||o.a.limit)+(a.length?"&":"")+a.map((function(t){return"filter[id][]="+t})).join("&"))).then((function(t){return n.map((function(a){return i(i({},a),t.data.find((function(t){return t.id===a.id})))}))}))}))},p=function(t){return l.patch(s.f+"/sources/"+t+"/refresh")},b=function(t,a,n){var r=a?"&filter[name][contains_i]="+a:"";return t?l.get(s.f+"/sources/"+t+"/service_offerings?filter[archived_at][nil]"+r+(n?"&limit="+n.limit+"&offset="+n.offset:"")):l.get(s.f+"/service_offerings")},_=function(t,a,n){return void 0===a&&(a=""),void 0===n&&(n=o.a),t?l.get(s.f+"/sources/"+t+"/service_inventories?filter[name][contains_i]="+a+(n?"&limit="+n.limit+"&offset="+n.offset:"")):l.get(s.f+"/service_inventories?limit="+n.limit+"&offset="+n.offset)},m=function(t,a){return Promise.all([l.get(s.f+"/service_offerings/"+t),l.get(s.n+"/sources/"+a).then((function(t){return l.get(s.n+"/source_types/"+t.source_type_id).then((function(a){var n=a.icon_url;return i(i({},t),{icon_url:n})}))}))]).then((function(t){return{service:t[0],source:t[1]}}))},d=n(41),v=function(){return(v=Object.assign||function(t){for(var a,n=1,r=arguments.length;n<r;n++)for(var e in a=arguments[n])Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);return t}).apply(this,arguments)},g=function(){return function(t){return t({type:r.n+"_PENDING"}),c().then((function(a){return t({type:r.n+"_FULFILLED",payload:a})})).catch((function(a){return t({type:r.n+"_REJECTED",payload:a})}))}},h=function(t,a,n){return{type:r.q,payload:b(t,a,n),meta:v({platformId:t,filter:a},n)}},u=function(t){return{type:r.m,payload:(a=t,l.get(s.f+"/sources/"+a))};var a},x=function(t,a,n){return{type:r.o,payload:_(t,a,n)}},k=function(t,a){return{type:r.y,payload:m(t,a)}},B=function(t){return function(a){return a({type:r.H,payload:p(t).then((function(){return a(Object(d.c)({variant:"success",title:"Success starting the platform refresh",dismissable:!0,description:"The platform refresh started successfully"}))})).catch((function(t){429===t.status?a(Object(d.c)({variant:"info",title:"Platform refresh in progress",dismissable:!0,description:"Platform refresh already running."})):a({type:r.H+"_REJECTED",payload:t})}))})}}},612:function(t,a,n){var r=n(9),e=n(629);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[t.i,e,""]]);var s={insert:"head",singleton:!1};r(e,s);t.exports=e.locals||{}},629:function(t,a,n){(a=n(10)(!1)).push([t.i,'.pf-c-tabs {\n  --pf-c-tabs--inset: 0;\n  --pf-c-tabs--Width: auto;\n  --pf-c-tabs--before--BorderColor: var(--pf-global--BorderColor--100);\n  --pf-c-tabs--before--border-width--base: var(--pf-global--BorderWidth--sm);\n  --pf-c-tabs--before--BorderTopWidth: 0;\n  --pf-c-tabs--before--BorderRightWidth: 0;\n  --pf-c-tabs--before--BorderBottomWidth: var(--pf-c-tabs--before--border-width--base);\n  --pf-c-tabs--before--BorderLeftWidth: 0;\n  --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n  --pf-c-tabs--m-page-insets--inset: var(--pf-global--spacer--md);\n  --pf-c-tabs--m-page-insets--xl--inset: var(--pf-global--spacer--lg);\n  --pf-c-tabs--m-vertical--Width: 100%;\n  --pf-c-tabs--m-vertical--MaxWidth: 15.625rem;\n  --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl);\n  --pf-c-tabs--m-vertical__list--before--BorderColor: var(--pf-c-tabs--before--BorderColor);\n  --pf-c-tabs--m-vertical__list--before--BorderTopWidth: 0;\n  --pf-c-tabs--m-vertical__list--before--BorderRightWidth: 0;\n  --pf-c-tabs--m-vertical__list--before--BorderBottomWidth: 0;\n  --pf-c-tabs--m-vertical__list--before--BorderLeftWidth: var(--pf-c-tabs--before--border-width--base);\n  --pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth: var(--pf-c-tabs__link--before--border-width--base);\n  --pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth: var(--pf-c-tabs--before--border-width--base);\n  --pf-c-tabs--m-color-scheme--light-300__link--BackgroundColor: transparent;\n  --pf-c-tabs--m-color-scheme--light-300__item--m-current__link--BackgroundColor: var(--pf-global--BackgroundColor--light-300);\n  --pf-c-tabs__list--Display: flex;\n  --pf-c-tabs__list--Visibility: visible;\n  --pf-c-tabs__link--Color: var(--pf-global--Color--200);\n  --pf-c-tabs__link--FontSize: var(--pf-global--FontSize--md);\n  --pf-c-tabs__link--BackgroundColor: transparent;\n  --pf-c-tabs__link--OutlineOffset: calc(-1 * 0.375rem);\n  --pf-c-tabs__link--PaddingTop: var(--pf-global--spacer--sm);\n  --pf-c-tabs__link--PaddingRight: var(--pf-global--spacer--md);\n  --pf-c-tabs__link--PaddingBottom: var(--pf-global--spacer--sm);\n  --pf-c-tabs__link--PaddingLeft: var(--pf-global--spacer--md);\n  --pf-c-tabs__item--m-current__link--Color: var(--pf-global--Color--100);\n  --pf-c-tabs__item--m-current__link--BackgroundColor: var(--pf-global--BackgroundColor--100);\n  --pf-c-tabs--m-vertical__link--PaddingTop: var(--pf-global--spacer--md);\n  --pf-c-tabs--m-vertical__link--PaddingBottom: var(--pf-global--spacer--md);\n  --pf-c-tabs--m-box__link--BackgroundColor: var(--pf-global--BackgroundColor--200);\n  --pf-c-tabs--m-secondary__link--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-tabs__link--before--border-color--base: var(--pf-global--BorderColor--100);\n  --pf-c-tabs__link--before--BorderRightColor: var(--pf-c-tabs__link--before--border-color--base);\n  --pf-c-tabs__link--before--BorderBottomColor: var(--pf-c-tabs__link--before--border-color--base);\n  --pf-c-tabs__link--before--border-width--base: var(--pf-global--BorderWidth--sm);\n  --pf-c-tabs__link--before--BorderTopWidth: 0;\n  --pf-c-tabs__link--before--BorderRightWidth: 0;\n  --pf-c-tabs__link--before--BorderBottomWidth: 0;\n  --pf-c-tabs__link--before--BorderLeftWidth: 0;\n  --pf-c-tabs__link--before--Left: calc(var(--pf-c-tabs__link--before--border-width--base) * -1);\n  --pf-c-tabs__link--after--Top: auto;\n  --pf-c-tabs__link--after--Right: 0;\n  --pf-c-tabs__link--after--Bottom: 0;\n  --pf-c-tabs__link--after--BorderColor: var(--pf-global--BorderColor--light-100);\n  --pf-c-tabs__link--after--BorderWidth: 0;\n  --pf-c-tabs__link--after--BorderTopWidth: 0;\n  --pf-c-tabs__link--after--BorderRightWidth: 0;\n  --pf-c-tabs__link--after--BorderLeftWidth: 0;\n  --pf-c-tabs__link--hover--after--BorderWidth: var(--pf-global--BorderWidth--lg);\n  --pf-c-tabs__link--focus--after--BorderWidth: var(--pf-global--BorderWidth--lg);\n  --pf-c-tabs__link--active--after--BorderWidth: var(--pf-global--BorderWidth--lg);\n  --pf-c-tabs__item--m-current__link--after--BorderColor: var(--pf-global--active-color--100);\n  --pf-c-tabs__item--m-current__link--after--BorderWidth: var(--pf-global--BorderWidth--lg);\n  --pf-c-tabs__link--child--MarginRight: var(--pf-global--spacer--md);\n  --pf-c-tabs__scroll-button--Color: var(--pf-global--Color--100);\n  --pf-c-tabs__scroll-button--hover--Color: var(--pf-global--active-color--100);\n  --pf-c-tabs__scroll-button--disabled--Color: var(--pf-global--disabled-color--200);\n  --pf-c-tabs__scroll-button--BackgroundColor: var(--pf-global--BackgroundColor--100);\n  --pf-c-tabs__scroll-button--Width: var(--pf-global--spacer--2xl);\n  --pf-c-tabs__scroll-button--xl--Width: var(--pf-global--spacer--3xl);\n  --pf-c-tabs__scroll-button--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs));\n  --pf-c-tabs__scroll-button--TransitionDuration--margin: .125s;\n  --pf-c-tabs__scroll-button--TransitionDuration--transform: .125s;\n  --pf-c-tabs__scroll-button--TransitionDuration--opacity: .125s;\n  --pf-c-tabs__scroll-button--before--BorderColor: var(--pf-c-tabs--before--BorderColor);\n  --pf-c-tabs__scroll-button--before--border-width--base: var(--pf-global--BorderWidth--sm);\n  --pf-c-tabs__scroll-button--before--BorderRightWidth: 0;\n  --pf-c-tabs__scroll-button--before--BorderBottomWidth: var(--pf-c-tabs__scroll-button--before--border-width--base);\n  --pf-c-tabs__scroll-button--before--BorderLeftWidth: 0;\n  --pf-c-tabs__list--ScrollSnapTypeAxis: x;\n  --pf-c-tabs__list--ScrollSnapTypeStrictness: proximity;\n  --pf-c-tabs__list--ScrollSnapType: var(--pf-c-tabs__list--ScrollSnapTypeAxis) var(--pf-c-tabs__list--ScrollSnapTypeStrictness);\n  --pf-c-tabs__item--ScrollSnapAlign: end;\n  --pf-c-tabs--m-vertical__list--ScrollSnapTypeAxis: y;\n  --pf-c-tabs__toggle--Display: flex;\n  --pf-c-tabs__toggle--Visibility: hidden;\n  --pf-c-tabs__toggle--MarginBottom: 0;\n  --pf-c-tabs--m-expanded__toggle--MarginBottom: var(--pf-global--spacer--md);\n  --pf-c-tabs__toggle-icon--Color: currentColor;\n  --pf-c-tabs__toggle-icon--Transition: var(--pf-global--Transition);\n  --pf-c-tabs__toggle-icon--Rotate: 0;\n  --pf-c-tabs__toggle-button--MarginTop: calc(-1 * var(--pf-global--spacer--form-element));\n  --pf-c-tabs__toggle-button--MarginBottom: calc(-1 * var(--pf-global--spacer--form-element));\n  --pf-c-tabs__toggle-button--MarginLeft: calc(-1 * var(--pf-global--spacer--md));\n  --pf-c-tabs--m-expanded__toggle-icon--Color: var(--pf-global--Color--100);\n  --pf-c-tabs--m-expanded__toggle-icon--Rotate: 90deg;\n  position: relative;\n  display: flex;\n  width: var(--pf-c-tabs--Width);\n  padding-right: var(--pf-c-tabs--inset);\n  padding-left: var(--pf-c-tabs--inset);\n  overflow: hidden; }\n  @media screen and (min-width: 1200px) {\n    .pf-c-tabs {\n      --pf-c-tabs__scroll-button--Width: var(--pf-c-tabs__scroll-button--xl--Width);\n      --pf-c-tabs--m-page-insets--inset: var(--pf-c-tabs--m-page-insets--xl--inset); } }\n  .pf-c-tabs::before {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border: solid var(--pf-c-tabs--before--BorderColor);\n    border-width: var(--pf-c-tabs--before--BorderTopWidth) var(--pf-c-tabs--before--BorderRightWidth) var(--pf-c-tabs--before--BorderBottomWidth) var(--pf-c-tabs--before--BorderLeftWidth); }\n  .pf-c-tabs.pf-m-fill .pf-c-tabs__list {\n    flex-basis: 100%; }\n  .pf-c-tabs.pf-m-fill .pf-c-tabs__item {\n    flex-grow: 1; }\n    .pf-c-tabs.pf-m-fill .pf-c-tabs__item:first-child {\n      --pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth: 0; }\n    .pf-c-tabs.pf-m-fill .pf-c-tabs__item:last-child {\n      --pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth: 0; }\n  .pf-c-tabs.pf-m-fill .pf-c-tabs__link {\n    flex-basis: 100%;\n    justify-content: center; }\n  .pf-c-tabs.pf-m-scrollable .pf-c-tabs__scroll-button {\n    opacity: 1; }\n  .pf-c-tabs.pf-m-scrollable .pf-c-tabs__scroll-button:nth-of-type(1) {\n    margin-right: 0;\n    transform: translateX(0); }\n  .pf-c-tabs.pf-m-scrollable .pf-c-tabs__scroll-button:nth-of-type(2) {\n    margin-left: 0;\n    transform: translateX(0); }\n  .pf-c-tabs.pf-m-secondary, .pf-c-tabs.pf-m-no-border-bottom {\n    --pf-c-tabs--before--BorderBottomWidth: 0; }\n  .pf-c-tabs.pf-m-box .pf-c-tabs__link, .pf-c-tabs.pf-m-vertical .pf-c-tabs__link {\n    --pf-c-tabs__link--after--BorderBottomWidth: 0; }\n  .pf-c-tabs.pf-m-box {\n    --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs--m-box__link--BackgroundColor);\n    --pf-c-tabs__link--before--BorderBottomWidth: var(--pf-c-tabs__link--before--border-width--base);\n    --pf-c-tabs__link--before--BorderRightWidth: var(--pf-c-tabs__link--before--border-width--base);\n    --pf-c-tabs__link--after--Top: 0;\n    --pf-c-tabs__link--after--Bottom: auto; }\n    .pf-c-tabs.pf-m-box .pf-c-tabs__link {\n      --pf-c-tabs__link--after--BorderTopWidth: var(--pf-c-tabs__link--after--BorderWidth); }\n    .pf-c-tabs.pf-m-box .pf-c-tabs__item:last-child {\n      --pf-c-tabs__link--before--BorderRightWidth: 0; }\n    .pf-c-tabs.pf-m-box .pf-c-tabs__item.pf-m-current {\n      --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs__item--m-current__link--BackgroundColor);\n      --pf-c-tabs__link--before--BorderBottomColor: var(--pf-c-tabs__link--BackgroundColor); }\n    .pf-c-tabs.pf-m-box .pf-c-tabs__item.pf-m-current:first-child .pf-c-tabs__link::before {\n      border-left-width: var(--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth); }\n    .pf-c-tabs.pf-m-box .pf-c-tabs__item.pf-m-current:last-child .pf-c-tabs__link::before {\n      border-right-width: var(--pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth); }\n    .pf-c-tabs.pf-m-box.pf-m-scrollable .pf-c-tabs__item.pf-m-current:first-child .pf-c-tabs__link::before {\n      left: calc(var(--pf-c-tabs__link--before--border-width--base) * -1); }\n    .pf-c-tabs.pf-m-box.pf-m-scrollable .pf-c-tabs__scroll-button:nth-of-type(2)::before {\n      left: calc(var(--pf-c-tabs__link--before--border-width--base) * -1); }\n    .pf-c-tabs.pf-m-box .pf-c-tabs__item.pf-m-current + .pf-c-tabs__item {\n      --pf-c-tabs__link--before--Left: 0; }\n    .pf-c-tabs.pf-m-box.pf-m-color-scheme--light-300 {\n      --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs--m-color-scheme--light-300__link--BackgroundColor);\n      --pf-c-tabs__item--m-current__link--BackgroundColor: var(--pf-c-tabs--m-color-scheme--light-300__item--m-current__link--BackgroundColor); }\n  .pf-c-tabs.pf-m-vertical {\n    --pf-c-tabs--Width: var(--pf-c-tabs--m-vertical--Width);\n    --pf-c-tabs--inset: var(--pf-c-tabs--m-vertical--inset);\n    --pf-c-tabs--before--BorderBottomWidth: 0;\n    --pf-c-tabs__link--PaddingTop: var(--pf-c-tabs--m-vertical__link--PaddingTop);\n    --pf-c-tabs__link--PaddingBottom: var(--pf-c-tabs--m-vertical__link--PaddingBottom);\n    --pf-c-tabs__link--before--Left: 0;\n    --pf-c-tabs__link--after--Top: 0;\n    --pf-c-tabs__link--after--Bottom: 0;\n    --pf-c-tabs__link--after--Right: auto;\n    --pf-c-tabs__list--ScrollSnapTypeAxis: var(--pf-c-tabs--m-vertical__list--ScrollSnapTypeAxis);\n    display: inline-flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 0;\n    overflow: visible; }\n    .pf-c-tabs.pf-m-vertical .pf-c-tabs__list {\n      position: relative;\n      flex-direction: column;\n      flex-grow: 1;\n      max-width: var(--pf-c-tabs--m-vertical--MaxWidth); }\n      .pf-c-tabs.pf-m-vertical .pf-c-tabs__list::before {\n        position: absolute;\n        right: auto;\n        border: solid var(--pf-c-tabs--m-vertical__list--before--BorderColor);\n        border-width: var(--pf-c-tabs--m-vertical__list--before--BorderTopWidth) var(--pf-c-tabs--m-vertical__list--before--BorderRightWidth) var(--pf-c-tabs--m-vertical__list--before--BorderBottomWidth) var(--pf-c-tabs--m-vertical__list--before--BorderLeftWidth); }\n    .pf-c-tabs.pf-m-vertical .pf-c-tabs__item:first-child {\n      margin-top: var(--pf-c-tabs--inset); }\n    .pf-c-tabs.pf-m-vertical .pf-c-tabs__item:last-child {\n      margin-bottom: var(--pf-c-tabs--inset); }\n    .pf-c-tabs.pf-m-vertical .pf-c-tabs__link {\n      --pf-c-tabs__link--after--BorderTopWidth: 0;\n      --pf-c-tabs__link--after--BorderLeftWidth: var(--pf-c-tabs__link--after--BorderWidth);\n      max-width: 100%;\n      text-align: left; }\n    .pf-c-tabs.pf-m-vertical .pf-c-tabs__item-text {\n      max-width: 100%;\n      overflow-wrap: break-word; }\n    .pf-c-tabs.pf-m-vertical.pf-m-expandable {\n      --pf-c-tabs__list--Display: none;\n      --pf-c-tabs__list--Visibility: hidden;\n      --pf-c-tabs__toggle--Display: flex;\n      --pf-c-tabs__toggle--Visibility: visible; }\n    .pf-c-tabs.pf-m-vertical.pf-m-non-expandable {\n      --pf-c-tabs__list--Display: flex;\n      --pf-c-tabs__list--Visibility: visible;\n      --pf-c-tabs__toggle--Display: none;\n      --pf-c-tabs__toggle--Visibility: hidden; }\n    @media (min-width: 576px) {\n      .pf-c-tabs.pf-m-vertical.pf-m-expandable-on-sm {\n        --pf-c-tabs__list--Display: none;\n        --pf-c-tabs__list--Visibility: hidden;\n        --pf-c-tabs__toggle--Display: flex;\n        --pf-c-tabs__toggle--Visibility: visible; }\n      .pf-c-tabs.pf-m-vertical.pf-m-non-expandable-on-sm {\n        --pf-c-tabs__list--Display: flex;\n        --pf-c-tabs__list--Visibility: visible;\n        --pf-c-tabs__toggle--Display: none;\n        --pf-c-tabs__toggle--Visibility: hidden; } }\n    @media (min-width: 768px) {\n      .pf-c-tabs.pf-m-vertical.pf-m-expandable-on-md {\n        --pf-c-tabs__list--Display: none;\n        --pf-c-tabs__list--Visibility: hidden;\n        --pf-c-tabs__toggle--Display: flex;\n        --pf-c-tabs__toggle--Visibility: visible; }\n      .pf-c-tabs.pf-m-vertical.pf-m-non-expandable-on-md {\n        --pf-c-tabs__list--Display: flex;\n        --pf-c-tabs__list--Visibility: visible;\n        --pf-c-tabs__toggle--Display: none;\n        --pf-c-tabs__toggle--Visibility: hidden; } }\n    @media (min-width: 992px) {\n      .pf-c-tabs.pf-m-vertical.pf-m-expandable-on-lg {\n        --pf-c-tabs__list--Display: none;\n        --pf-c-tabs__list--Visibility: hidden;\n        --pf-c-tabs__toggle--Display: flex;\n        --pf-c-tabs__toggle--Visibility: visible; }\n      .pf-c-tabs.pf-m-vertical.pf-m-non-expandable-on-lg {\n        --pf-c-tabs__list--Display: flex;\n        --pf-c-tabs__list--Visibility: visible;\n        --pf-c-tabs__toggle--Display: none;\n        --pf-c-tabs__toggle--Visibility: hidden; } }\n    @media (min-width: 1200px) {\n      .pf-c-tabs.pf-m-vertical.pf-m-expandable-on-xl {\n        --pf-c-tabs__list--Display: none;\n        --pf-c-tabs__list--Visibility: hidden;\n        --pf-c-tabs__toggle--Display: flex;\n        --pf-c-tabs__toggle--Visibility: visible; }\n      .pf-c-tabs.pf-m-vertical.pf-m-non-expandable-on-xl {\n        --pf-c-tabs__list--Display: flex;\n        --pf-c-tabs__list--Visibility: visible;\n        --pf-c-tabs__toggle--Display: none;\n        --pf-c-tabs__toggle--Visibility: hidden; } }\n    @media (min-width: 1450px) {\n      .pf-c-tabs.pf-m-vertical.pf-m-expandable-on-2xl {\n        --pf-c-tabs__list--Display: none;\n        --pf-c-tabs__list--Visibility: hidden;\n        --pf-c-tabs__toggle--Display: flex;\n        --pf-c-tabs__toggle--Visibility: visible; }\n      .pf-c-tabs.pf-m-vertical.pf-m-non-expandable-on-2xl {\n        --pf-c-tabs__list--Display: flex;\n        --pf-c-tabs__list--Visibility: visible;\n        --pf-c-tabs__toggle--Display: none;\n        --pf-c-tabs__toggle--Visibility: hidden; } }\n    .pf-c-tabs.pf-m-vertical.pf-m-expanded {\n      --pf-c-tabs__list--Display: flex;\n      --pf-c-tabs__list--Visibility: visible;\n      --pf-c-tabs__toggle--MarginBottom: var(--pf-c-tabs--m-expanded__toggle--MarginBottom);\n      --pf-c-tabs__toggle-icon--Color: var(--pf-c-tabs--m-expanded__toggle-icon--Color);\n      --pf-c-tabs__toggle-icon--Rotate: var(--pf-c-tabs--m-expanded__toggle-icon--Rotate); }\n  .pf-c-tabs.pf-m-box.pf-m-vertical {\n    --pf-c-tabs--inset: var(--pf-c-tabs--m-vertical--m-box--inset);\n    --pf-c-tabs--m-vertical__list--before--BorderLeftWidth: 0;\n    --pf-c-tabs--m-vertical__list--before--BorderRightWidth: var(--pf-c-tabs--before--border-width--base); }\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__list::before {\n      right: 0;\n      left: auto; }\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__item:last-child {\n      --pf-c-tabs__link--before--BorderBottomWidth: 0;\n      --pf-c-tabs__link--before--BorderRightWidth: var(--pf-c-tabs__link--before--border-width--base); }\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__item.pf-m-current {\n      --pf-c-tabs__link--before--BorderRightColor: var(--pf-c-tabs__item--m-current__link--BackgroundColor);\n      --pf-c-tabs__link--before--BorderBottomColor: var(--pf-c-tabs__link--before--border-color--base);\n      --pf-c-tabs__link--before--BorderBottomWidth: var(--pf-c-tabs__link--before--border-width--base); }\n      .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__item.pf-m-current:first-child {\n        --pf-c-tabs__link--before--BorderTopWidth: var(--pf-c-tabs__link--before--border-width--base); }\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__item:first-child.pf-m-current {\n      --pf-c-tabs__link--before--BorderTopWidth: var(--pf-c-tabs__link--before--border-width--base); }\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__link::after {\n      top: calc(var(--pf-c-tabs__link--before--border-width--base) * -1); }\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__item:first-child .pf-c-tabs__link::after,\n    .pf-c-tabs.pf-m-box.pf-m-vertical .pf-c-tabs__item.pf-m-current + .pf-c-tabs__item .pf-c-tabs__link::after {\n      top: 0; }\n  .pf-c-tabs.pf-m-secondary {\n    --pf-c-tabs__link--FontSize: var(--pf-c-tabs--m-secondary__link--FontSize); }\n  .pf-c-tabs.pf-m-page-insets {\n    --pf-c-tabs--inset: var(--pf-c-tabs--m-page-insets--inset); }\n\n.pf-c-tabs__toggle {\n  display: var(--pf-c-tabs__toggle--Display);\n  align-items: center;\n  margin-bottom: var(--pf-c-tabs__toggle--MarginBottom);\n  visibility: var(--pf-c-tabs__toggle--Visibility); }\n\n.pf-c-tabs__toggle-button {\n  margin-top: var(--pf-c-tabs__toggle-button--MarginTop);\n  margin-bottom: var(--pf-c-tabs__toggle-button--MarginBottom);\n  margin-left: var(--pf-c-tabs__toggle-button--MarginLeft); }\n\n.pf-c-tabs__toggle-icon {\n  display: inline-block;\n  color: var(--pf-c-tabs__toggle-icon--Color);\n  transition: var(--pf-c-tabs__toggle-icon--Transition);\n  transform: rotate(var(--pf-c-tabs__toggle-icon--Rotate)); }\n\n.pf-c-tabs__list {\n  scrollbar-width: none;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n  display: var(--pf-c-tabs__list--Display);\n  max-width: 100%;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scroll-snap-type: var(--pf-c-tabs__list--ScrollSnapType);\n  visibility: var(--pf-c-tabs__list--Visibility);\n  -webkit-overflow-scrolling: touch; }\n  .pf-c-tabs__list::-webkit-scrollbar {\n    display: none; }\n\n.pf-c-tabs__item {\n  display: flex;\n  flex: none;\n  scroll-snap-align: var(--pf-c-tabs__item--ScrollSnapAlign); }\n  .pf-c-tabs__item.pf-m-current {\n    --pf-c-tabs__link--Color: var(--pf-c-tabs__item--m-current__link--Color);\n    --pf-c-tabs__link--after--BorderColor: var(--pf-c-tabs__item--m-current__link--after--BorderColor);\n    --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__item--m-current__link--after--BorderWidth); }\n\n.pf-c-tabs::before,\n.pf-c-tabs__list::before,\n.pf-c-tabs__link::before,\n.pf-c-tabs__link::after,\n.pf-c-tabs__scroll-button::before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  border-style: solid; }\n\n.pf-c-tabs__list::before,\n.pf-c-tabs__link::before,\n.pf-c-tabs__link::after,\n.pf-c-tabs__scroll-button::before {\n  top: 0; }\n\n.pf-c-tabs__link,\n.pf-c-tabs__scroll-button,\n.pf-c-tabs__list::before {\n  border: 0; }\n\n.pf-c-tabs__link {\n  --pf-c-tabs__link--after--BorderBottomWidth: var(--pf-c-tabs__link--after--BorderWidth);\n  position: relative;\n  display: flex;\n  flex: 1;\n  padding: var(--pf-c-tabs__link--PaddingTop) var(--pf-c-tabs__link--PaddingRight) var(--pf-c-tabs__link--PaddingBottom) var(--pf-c-tabs__link--PaddingLeft);\n  font-size: var(--pf-c-tabs__link--FontSize);\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n  background-color: var(--pf-c-tabs__link--BackgroundColor);\n  outline-offset: var(--pf-c-tabs__link--OutlineOffset); }\n  .pf-c-tabs__link::before {\n    pointer-events: none;\n    border-color: var(--pf-c-tabs__link--before--border-color--base);\n    border-width: var(--pf-c-tabs__link--before--BorderTopWidth) var(--pf-c-tabs__link--before--BorderRightWidth) var(--pf-c-tabs__link--before--BorderBottomWidth) var(--pf-c-tabs__link--before--BorderLeftWidth);\n    border-right-color: var(--pf-c-tabs__link--before--BorderRightColor);\n    border-bottom-color: var(--pf-c-tabs__link--before--BorderBottomColor); }\n  .pf-c-tabs__link::after {\n    top: var(--pf-c-tabs__link--after--Top);\n    right: var(--pf-c-tabs__link--after--Right);\n    bottom: var(--pf-c-tabs__link--after--Bottom);\n    left: var(--pf-c-tabs__link--before--Left);\n    border-color: var(--pf-c-tabs__link--after--BorderColor);\n    border-width: var(--pf-c-tabs__link--after--BorderTopWidth) var(--pf-c-tabs__link--after--BorderRightWidth) var(--pf-c-tabs__link--after--BorderBottomWidth) var(--pf-c-tabs__link--after--BorderLeftWidth); }\n  .pf-c-tabs__link:hover {\n    --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__link--hover--after--BorderWidth); }\n  .pf-c-tabs__link:focus {\n    --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__link--focus--after--BorderWidth); }\n  .pf-c-tabs__link:active {\n    --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__link--active--after--BorderWidth); }\n  .pf-c-tabs__link .pf-c-tabs__item-icon,\n  .pf-c-tabs__link .pf-c-tabs__item-text {\n    margin-right: var(--pf-c-tabs__link--child--MarginRight); }\n    .pf-c-tabs__link .pf-c-tabs__item-icon:last-child,\n    .pf-c-tabs__link .pf-c-tabs__item-text:last-child {\n      --pf-c-tabs__link--child--MarginRight: 0; }\n\n.pf-c-tabs__scroll-button {\n  flex: none;\n  width: var(--pf-c-tabs__scroll-button--Width);\n  line-height: 1;\n  color: var(--pf-c-tabs__scroll-button--Color);\n  background-color: var(--pf-c-tabs__scroll-button--BackgroundColor);\n  outline-offset: var(--pf-c-tabs__scroll-button--OutlineOffset);\n  opacity: 0;\n  transition: margin var(--pf-c-tabs__scroll-button--TransitionDuration--margin), transform var(--pf-c-tabs__scroll-button--TransitionDuration--transform), opacity var(--pf-c-tabs__scroll-button--TransitionDuration--opacity); }\n  .pf-c-tabs__scroll-button:hover, .pf-c-tabs__scroll-button:active, .pf-c-tabs__scroll-button:focus {\n    --pf-c-tabs__scroll-button--Color: var(--pf-c-tabs__scroll-button--hover--Color); }\n  .pf-c-tabs__scroll-button::before {\n    border-color: var(--pf-c-tabs__scroll-button--before--BorderColor);\n    border-width: 0 var(--pf-c-tabs__scroll-button--before--BorderRightWidth) var(--pf-c-tabs__scroll-button--before--BorderBottomWidth) var(--pf-c-tabs__scroll-button--before--BorderLeftWidth); }\n  .pf-c-tabs__scroll-button:nth-of-type(1) {\n    --pf-c-tabs__scroll-button--before--BorderRightWidth: var(--pf-c-tabs__scroll-button--before--border-width--base);\n    margin-right: calc(var(--pf-c-tabs__scroll-button--Width) * -1);\n    transform: translateX(-100%); }\n  .pf-c-tabs__scroll-button:nth-of-type(2) {\n    --pf-c-tabs__scroll-button--before--BorderLeftWidth: var(--pf-c-tabs__scroll-button--before--border-width--base);\n    margin-left: calc(var(--pf-c-tabs__scroll-button--Width) * -1);\n    transform: translateX(100%); }\n  .pf-c-tabs__scroll-button:disabled {\n    --pf-c-tabs__scroll-button--Color: var(--pf-c-tabs__scroll-button--disabled--Color);\n    pointer-events: none; }\n\n.pf-c-tabs.pf-m-inset-none {\n  --pf-c-tabs--inset: 0;\n  --pf-c-tabs--m-vertical--inset: 0;\n  --pf-c-tabs--m-vertical--m-box--inset: 0; }\n\n.pf-c-tabs.pf-m-inset-sm {\n  --pf-c-tabs--inset: var(--pf-global--spacer--sm);\n  --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--sm);\n  --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--sm); }\n\n.pf-c-tabs.pf-m-inset-md {\n  --pf-c-tabs--inset: var(--pf-global--spacer--md);\n  --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--md);\n  --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--md); }\n\n.pf-c-tabs.pf-m-inset-lg {\n  --pf-c-tabs--inset: var(--pf-global--spacer--lg);\n  --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n  --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--lg); }\n\n.pf-c-tabs.pf-m-inset-xl {\n  --pf-c-tabs--inset: var(--pf-global--spacer--xl);\n  --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--xl);\n  --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl); }\n\n.pf-c-tabs.pf-m-inset-2xl {\n  --pf-c-tabs--inset: var(--pf-global--spacer--2xl);\n  --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--2xl);\n  --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--2xl); }\n\n@media (min-width: 576px) {\n  .pf-c-tabs.pf-m-inset-none-on-sm {\n    --pf-c-tabs--inset: 0;\n    --pf-c-tabs--m-vertical--inset: 0;\n    --pf-c-tabs--m-vertical--m-box--inset: 0; }\n  .pf-c-tabs.pf-m-inset-sm-on-sm {\n    --pf-c-tabs--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--sm); }\n  .pf-c-tabs.pf-m-inset-md-on-sm {\n    --pf-c-tabs--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--md); }\n  .pf-c-tabs.pf-m-inset-lg-on-sm {\n    --pf-c-tabs--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--lg); }\n  .pf-c-tabs.pf-m-inset-xl-on-sm {\n    --pf-c-tabs--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl); }\n  .pf-c-tabs.pf-m-inset-2xl-on-sm {\n    --pf-c-tabs--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--2xl); } }\n\n@media (min-width: 768px) {\n  .pf-c-tabs.pf-m-inset-none-on-md {\n    --pf-c-tabs--inset: 0;\n    --pf-c-tabs--m-vertical--inset: 0;\n    --pf-c-tabs--m-vertical--m-box--inset: 0; }\n  .pf-c-tabs.pf-m-inset-sm-on-md {\n    --pf-c-tabs--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--sm); }\n  .pf-c-tabs.pf-m-inset-md-on-md {\n    --pf-c-tabs--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--md); }\n  .pf-c-tabs.pf-m-inset-lg-on-md {\n    --pf-c-tabs--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--lg); }\n  .pf-c-tabs.pf-m-inset-xl-on-md {\n    --pf-c-tabs--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl); }\n  .pf-c-tabs.pf-m-inset-2xl-on-md {\n    --pf-c-tabs--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--2xl); } }\n\n@media (min-width: 992px) {\n  .pf-c-tabs.pf-m-inset-none-on-lg {\n    --pf-c-tabs--inset: 0;\n    --pf-c-tabs--m-vertical--inset: 0;\n    --pf-c-tabs--m-vertical--m-box--inset: 0; }\n  .pf-c-tabs.pf-m-inset-sm-on-lg {\n    --pf-c-tabs--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--sm); }\n  .pf-c-tabs.pf-m-inset-md-on-lg {\n    --pf-c-tabs--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--md); }\n  .pf-c-tabs.pf-m-inset-lg-on-lg {\n    --pf-c-tabs--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--lg); }\n  .pf-c-tabs.pf-m-inset-xl-on-lg {\n    --pf-c-tabs--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl); }\n  .pf-c-tabs.pf-m-inset-2xl-on-lg {\n    --pf-c-tabs--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--2xl); } }\n\n@media (min-width: 1200px) {\n  .pf-c-tabs.pf-m-inset-none-on-xl {\n    --pf-c-tabs--inset: 0;\n    --pf-c-tabs--m-vertical--inset: 0;\n    --pf-c-tabs--m-vertical--m-box--inset: 0; }\n  .pf-c-tabs.pf-m-inset-sm-on-xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--sm); }\n  .pf-c-tabs.pf-m-inset-md-on-xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--md); }\n  .pf-c-tabs.pf-m-inset-lg-on-xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--lg); }\n  .pf-c-tabs.pf-m-inset-xl-on-xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl); }\n  .pf-c-tabs.pf-m-inset-2xl-on-xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--2xl); } }\n\n@media (min-width: 1450px) {\n  .pf-c-tabs.pf-m-inset-none-on-2xl {\n    --pf-c-tabs--inset: 0;\n    --pf-c-tabs--m-vertical--inset: 0;\n    --pf-c-tabs--m-vertical--m-box--inset: 0; }\n  .pf-c-tabs.pf-m-inset-sm-on-2xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--sm);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--sm); }\n  .pf-c-tabs.pf-m-inset-md-on-2xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--md);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--md); }\n  .pf-c-tabs.pf-m-inset-lg-on-2xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--lg);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--lg); }\n  .pf-c-tabs.pf-m-inset-xl-on-2xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--xl); }\n  .pf-c-tabs.pf-m-inset-2xl-on-2xl {\n    --pf-c-tabs--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--inset: var(--pf-global--spacer--2xl);\n    --pf-c-tabs--m-vertical--m-box--inset: var(--pf-global--spacer--2xl); } }\n',""]),t.exports=a},878:function(t,a,n){"use strict";var r,e,s=n(0),o=n(102),i=n(27),l=n(3),f=n(12),c=(f.v,{"portfolio-item":["source"]}),p=((r={})[f.A]=function(t){return t().portfolioReducer.selectedPortfolio.name},r[f.y]=function(t){return t().portfolioReducer.portfolioItem.portfolioItem.name},r[f.g]=function(){return"Edit survey"},r[f.c]=function(){return"Add products"},r[f.s]=function(t){return t().platformReducer.selectedPlatform.name},r[f.t]=function(t){return t().platformReducer.serviceOffering.service.name},r[f.o]=function(t){var a=t().orderReducer.orderDetail,n=a.portfolioItem,r=a.order;return n.name+" # "+r.id},r[f.z]=function(){return"Edit product"},r),b=((e={})[f.A]={pathname:f.v,title:"Portfolios",searchParams:{}},e[f.s]={pathname:f.p,title:"Platforms",searchParams:{}},e[f.o]={pathname:f.m,title:"Orders",searchParams:{}},e),_=function(){return(_=Object.assign||function(t){for(var a,n=1,r=arguments.length;n<r;n++)for(var e in a=arguments[n])Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);return t}).apply(this,arguments)},m=function(){for(var t=0,a=0,n=arguments.length;a<n;a++)t+=arguments[a].length;var r=Array(t),e=0;for(a=0;a<n;a++)for(var s=arguments[a],o=0,i=s.length;o<i;o++,e++)r[e]=s[o];return r},d=function(t,a){return void 0===t&&(t=""),void 0===a&&(a={}),function(n,r){if(0===t.length)return n({type:l.D,payload:[]});var e=t.replace(/^\//,"").split("/").reduce((function(t,n,e){var s,o=(e>0&&t[e-1]?t[e-1].pathname:"")+"/"+n,i=p[o];if(!i)return t;var l=_(_({},e>0&&t[e-1].searchParams),a[n]?((s={})[n]=a[n],s):{});return c[n]&&c[n].forEach((function(t){l[t]=a[t]})),m(t,[{pathname:o,searchParams:l,title:i(r)}])}),[]);return e.length>0&&b[e[0].pathname]&&(e=m([b[e[0].pathname]],e)),n({type:l.D,payload:e})}},v=function(){for(var t=0,a=0,n=arguments.length;a<n;a++)t+=arguments[a].length;var r=Array(t),e=0;for(a=0;a<n;a++)for(var s=arguments[a],o=0,i=s.length;o<i;o++,e++)r[e]=s[o];return r};a.a=function(t){void 0===t&&(t=[]);var a=Object(i.d)(),n=Object(o.h)(),r=n.pathname,e=n.search;if(0===t.length)return a(d("",{}));var l=new URLSearchParams(e),f={};return l.forEach((function(t,a){f[a]=t})),Object(s.useEffect)((function(){a(d(r,f))}),v([r],t)),function(){return a(d("",{}))}}}}]);
//# sourceMappingURL=../sourcemaps/lib~order-detail~platform~portfolio~31ecd969.js.map