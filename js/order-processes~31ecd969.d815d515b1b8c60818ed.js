(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{556:function(e,t,a){"use strict";t.__esModule=!0,a(576),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},560:function(e,t,a){"use strict";var r=a(9),n=a.n(r),o=a(169),c=a.n(o),s=a(78);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?l(l({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,a=e.keepHash,r=Object(s.g)();return l(l({},r),{},{push:function(e){var n=e;return a&&r.location.hash.length>0&&(n="object"===c()(n)?l(l({},n),{},{hash:r.location.hash}):"".concat(n).concat(r.location.hash)),t?r.push(p(n)):r.push(n)}})}},562:function(e,t,a){"use strict";var r=(0,a(27).defineMessages)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=r},575:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(2),n=r.__importStar(a(0)),o=a(4),c=r.__importDefault(a(556));var s;!function(e){e.small="small",e.large="large",e.xl="xl",e.full="full"}(s=t.EmptyStateVariant||(t.EmptyStateVariant={})),t.EmptyState=e=>{var{children:t,className:a="",variant:i=s.full,isFullHeight:l}=e,p=r.__rest(e,["children","className","variant","isFullHeight"]);return n.createElement("div",Object.assign({className:o.css(c.default.emptyState,"small"===i&&c.default.modifiers.sm,"large"===i&&c.default.modifiers.lg,"xl"===i&&c.default.modifiers.xl,l&&c.default.modifiers.fullHeight,a)},p),n.createElement("div",{className:o.css(c.default.emptyStateContent)},t))},t.EmptyState.displayName="EmptyState"},576:function(e,t,a){var r=a(7),n=a(577);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},577:function(e,t,a){(t=a(8)(!1)).push([e.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),e.exports=t},578:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(2),n=r.__importStar(a(0)),o=a(4),c=r.__importDefault(a(556));t.EmptyStateIcon=e=>{var{className:t="",icon:a,component:s,variant:i="icon"}=e,l=r.__rest(e,["className","icon","component","variant"]);const p=o.css(c.default.emptyStateIcon,t);return"icon"===i?n.createElement(a,Object.assign({className:p},l,{"aria-hidden":"true"})):n.createElement("div",{className:p},n.createElement(s,null))},t.EmptyStateIcon.displayName="EmptyStateIcon"},579:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(2),n=r.__importStar(a(0)),o=a(4),c=r.__importDefault(a(556));t.EmptyStateBody=e=>{var{children:t,className:a=""}=e,s=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({className:o.css(c.default.emptyStateBody,a)},s),t)},t.EmptyStateBody.displayName="EmptyStateBody"},596:function(e,t,a){"use strict";t.__esModule=!0,t.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0,transform:""},t.ExclamationTriangleIcon=a(72).createIcon(t.ExclamationTriangleIconConfig),t.default=t.ExclamationTriangleIcon},599:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(2),n=r.__importStar(a(0)),o=a(4),c=r.__importDefault(a(556));t.EmptyStateSecondaryActions=e=>{var{children:t=null,className:a=""}=e,s=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({className:o.css(c.default.emptyStateSecondary,a)},s),t)},t.EmptyStateSecondaryActions.displayName="EmptyStateSecondaryActions"},718:function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),a(121);var n=a(167),o=a(166),c=a(282),s=r(a(0)),i=r(a(3)),l=r(a(284)),p=function(e){var t=e.centered,a=e.className,r=e.children,i=c._objectWithoutProperties(e,["centered","className","children"]),p=l("ins-c-table__empty",o._defineProperty({},"is-centered",t),a);return s.createElement("div",n._extends({className:p},i)," ",r)};p.propTypes={centered:i.bool,children:i.any,className:i.string},t.EmptyTable=p},892:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a.n(r),o=a(48),c=a.n(o),s=a(9),i=a.n(s),l=a(0),p=a.n(l),m=a(17),u=a(78),f=a(64),d=a(58),y=a(10),g=a(14),b=a(286),_=a(561),h=a.n(_),v=a(769),O=a(749),P=a(182),E=a(3),j=a.n(E),M=a(281),S=a(88),x=Object(l.createContext)({selectedOrderProcesses:[]}),F=function(e){var t=e.id,a=Object(l.useContext)(x),r=a.selectedOrderProcesses,n=a.setSelectedOrderProcesses;return p.a.createElement(M.Checkbox,{id:"select-".concat(t),isChecked:r.includes(t),onChange:function(){return n(t)}})};F.propTypes={id:j.a.string.isRequired};var T=function(e){return e.map((function(e){var t=e.id,a=e.name,r=e.description,n=e.created_at;return{id:t,cells:[p.a.createElement(p.a.Fragment,{key:"".concat(t,"-checkbox")},p.a.createElement(F,{id:t})),a,r,p.a.createElement(p.a.Fragment,{key:t},p.a.createElement(S.a,{date:n}))]}}))},w=a(36),C=a.n(w),N=a(592),D=a(669),R=a(668),B=a(23),k=a(80),z=a(214),V=a(174),I=a(658),L=a(35);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(e){var t=e.columns,a=e.fetchData,r=e.toolbarButtons,n=e.actionResolver,o=e.routes,s=e.plural,i=e.pagination,m=e.filterValue,u=e.onFilterChange,f=e.isLoading,d=e.renderEmptyState,y=e.sortBy,g=e.onSort,b=e.activeFiltersConfig,_=e.filterConfig,h=e.rows,v=Object(z.a)(),O={itemCount:i.count,page:Object(B.b)(i.limit,i.offset),perPage:i.limit,onSetPage:function(e,t){return a(q(q({},i),{},{offset:Object(B.c)(t,i.limit)}))},onPerPageSelect:function(e,t){return a(q(q({},i),{},{limit:t}))},isDisabled:f};return p.a.createElement(V.Section,{type:"content","page-type":"tab-".concat(s),id:"tab-".concat(s)},o(),p.a.createElement(I.PrimaryToolbar,C()({className:"pf-u-p-lg",pagination:O},r&&{actionsConfig:{dropdownProps:{position:"right"},actions:[r()]}},{filterConfig:{items:[{label:v.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{id:"filter-by-name",placeholder:v.formatMessage(L.a.orderProcessesFilter),"aria-label":v.formatMessage(L.a.orderProcessesFilter),onChange:function(e,t){return u(t)},value:m}}].concat(c()(_))},activeFiltersConfig:b})),f&&p.a.createElement(k.e,null),f||0!==h.length?p.a.createElement(l.Fragment,null,!f&&p.a.createElement(N.b,{"aria-label":"".concat(s," table"),rows:h,cells:t,actionResolver:n,className:"pf-u-pt-0",sortBy:y,onSort:g},p.a.createElement(D.a,null),p.a.createElement(R.a,null)),i.count>0&&p.a.createElement(I.PrimaryToolbar,{className:"pf-u-pl-lg pf-u-pr-lg",pagination:q(q({},O),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):d())};H.propTypes={columns:j.a.array.isRequired,toolbarButtons:j.a.func,fetchData:j.a.func.isRequired,pagination:j.a.shape({limit:j.a.number,offset:j.a.number,count:j.a.number}),plural:j.a.string,singular:j.a.string,routes:j.a.func,actionResolver:j.a.func,filterValue:j.a.string,onFilterChange:j.a.func,isLoading:j.a.bool,renderEmptyState:j.a.func,sortBy:j.a.object,onSort:j.a.func,activeFiltersConfig:j.a.object,filterConfig:j.a.array,rows:j.a.array},H.defaultProps={requests:[],isLoading:!1,pagination:B.a,routes:function(){return null},renderEmptyState:function(){return null},filterConfig:[]};var W=a(623),U=a(99),J=a(575),X=a(578),Q=a(579),G=a(599),K=a(718),Y=function(e){var t=e.title,a=e.Icon,r=e.description,n=e.PrimaryAction,o=e.renderDescription;return p.a.createElement(K.EmptyTable,{centered:!0,"aria-label":"No records"},p.a.createElement(J.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},p.a.createElement(X.EmptyStateIcon,{icon:a}),p.a.createElement(g.TextContent,null,p.a.createElement(y.Text,{component:y.TextVariants.h1},t)),p.a.createElement(Q.EmptyStateBody,null,r,o&&o()),p.a.createElement(G.EmptyStateSecondaryActions,null,n&&p.a.createElement(n,null))))};Y.propTypes={title:j.a.string.isRequired,Icon:j.a.any.isRequired,description:j.a.string.isRequired,PrimaryAction:j.a.any,renderDescription:j.a.func};var Z=Y,$=a(562),ee=a(165),te=a(180),ae=a(11),re=a(170),ne=a(34),oe=a.n(ne),ce=a(25),se=a.n(ce),ie=a(44),le=a(85),pe=Object(U.a)((function(e,t,a){return Object(ie.fetchOrderProcessByName)(e).then((function(r){var n=r.data;if(t?n.find((function(a){return e===a.name&&t!==a.id})):n.find((function(t){return e===t.name})))throw a.formatMessage(le.a.nameTaken)}))})),me=Object(U.a)(ie.loadProductOptions),ue=a(5),fe=function(e,t){return[{component:oe.a.SELECT,name:"".concat(e,"_portfolio_item_id"),label:t.formatMessage(e===ue.d?le.a.beforeProvision:le.a.afterProvision),loadOptions:me,noValueUpdates:!0,isSearchable:!0,isClearable:!0}]},de=function(e,t){return{fields:[{component:oe.a.TEXT_FIELD,name:"name",isRequired:!0,id:"order-process-name",label:e.formatMessage(L.a.orderProcessName),validate:[function(a){return pe(a,t,e)},{type:se.a.REQUIRED,message:e.formatMessage(L.a.enterOrderProcessName)}]},{component:oe.a.TEXTAREA,name:"description",id:"order-process-description",label:e.formatMessage(ee.a.description)}].concat(c()(fe(ue.d,e)),c()(fe(ue.a,e)))}},ye=a(172),ge=a(79),be=a(560),_e=function(e){var t,a=Object(m.useSelector)((function(e){return{orderProcesses:e.orderProcessReducer.orderProcesses}}),m.shallowEqual).orderProcesses;return null==a||null===(t=a.data)||void 0===t?void 0:t.find((function(t){return t.id===e}))};function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Oe=function(e,t){var a=t.type,r=t.initialValues,n=t.schema;switch(a){case"loaded":return ve(ve({},e),{},{initialValues:r,schema:n,isLoading:!1});default:return e}},Pe=function(e){var t=e.edit,a=Object(m.useDispatch)(),r=Object(ge.a)(["order_process"]),o=n()(r,1)[0].order_process,c=Object(m.useSelector)((function(e){var a=e.orderProcessReducer.orderProcesses.data;return t?a.find((function(e){return e.id===o})):{}})),s=Object(be.a)({keepHash:!0}).push,i=Object(z.a)(),u=_e(o),f=Object(l.useReducer)(Oe,{isLoading:!0}),d=n()(f,2),y=d[0].initialValues,g=d[1];Object(l.useEffect)((function(){u||void 0===u?void 0!==u&&g({type:"loaded",initialValues:u,schema:de(i,u.id)}):Object(P.b)(o).then((function(e){return g({type:"loaded",initialValues:e,schema:de(i,e.id)})}))}),[]);var b=function(){return s(ae.n)};return t&&!c?null:p.a.createElement(re.Modal,{isOpen:!0,onClose:b,title:i.formatMessage(t?L.a.updateOrderProcess:L.a.createOrderProcess),variant:"small"},p.a.createElement(ye.c,{initialValues:y,onSubmit:function(e){var r=t?function(){return Object(P.h)(o,e,i)}:function(){return Object(P.a)(e,i)};return b(),a(r()).then((function(){return a(Object(P.c)())}))},onCancel:b,schema:de(i,o),templateProps:{submitLabel:t?i.formatMessage(ee.a.save):i.formatMessage(ee.a.create),disableSubmit:["validating","pristine"]}}))};Pe.propTypes={edit:j.a.bool},Pe.defaultProps={edit:!1};var Ee=Pe,je=a(178),Me=a(168),Se=a(287),xe=a(596),Fe=a.n(xe),Te=a(101),we=function(e){var t=e.ids,a=void 0===t?[]:t,r=e.fetchData,o=e.resetSelectedOrderProcesses,c=Object(m.useDispatch)(),s=Object(l.useState)(),i=n()(s,2),u=i[0],f=i[1],b=Object(l.useState)(!1),_=n()(b,2),h=_[0],v=_[1],O=Object(be.a)({keepHash:!0}).push,E=Object(ge.a)(["order_process"]),j=n()(E,1)[0].order_process||1===a.length&&a[0],M=Object(z.a)(),S=_e(j);if(Object(l.useEffect)((function(){j&&!S&&c(Object(P.b)(j)).then((function(e){var t=e.value;return f(t)})).catch((function(){return O(ae.n)}))}),[]),!j&&0===a.length)return null;var x=function(){return O(ae.n)},F=p.a.createElement("b",{key:"remove-key"},j?u&&u.name||S&&S.name:p.a.createElement(p.a.Fragment,null,a.length," ",M.formatMessage(L.a.orderProcesses))),T=j&&!S&&!u;return p.a.createElement(re.Modal,{isOpen:!0,variant:"small","aria-label":M.formatMessage(L.a.removeProcessAriaLabel,{count:j?1:a.length}),header:p.a.createElement(Se.Title,{size:"2xl",headingLevel:"h1"},p.a.createElement(Fe.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),M.formatMessage(L.a.removeProcessTitle,{count:j?1:a.length})),onClose:x,actions:[p.a.createElement(d.Button,{id:"submit-remove-order-process",key:"submit",variant:"danger",type:"button",isDisabled:h,onClick:function(){return v(!0),c(j?Object(P.d)(j,M):Object(P.e)(a,M)).catch((function(){return v(!1)})).then((function(){return O(ae.n)})).then((function(){return o()})).then((function(){return r()}))}},h?p.a.createElement(p.a.Fragment,null,p.a.createElement(Me.Spinner,{size:"sm",className:"pf-u-mr-md"}),M.formatMessage(Te.a.deleting)):M.formatMessage(Te.a.delete)),p.a.createElement(d.Button,{id:"cancel-remove-order-process",key:"cancel",variant:"link",type:"button",isDisabled:h,onClick:x},M.formatMessage(ee.a.cancel))]},p.a.createElement(g.TextContent,null,p.a.createElement(y.Text,{component:y.TextVariants.p},T?p.a.createElement(k.c,null):M.formatMessage(L.a.removeProcessDescription,{name:F}))))};we.propTypes={fetchData:j.a.func.isRequired,ids:j.a.array,resetSelectedOrderProcesses:j.a.func.isRequired};var Ce=we;function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function De(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Re=function(e,t,a){return[{title:p.a.createElement(M.Checkbox,{onChange:a,isChecked:t,id:"select-all"}),transforms:[Object(v.a)(1)]},{title:e.formatMessage(ee.a.name),transforms:[O.a]},{title:e.formatMessage(ee.a.description),transforms:[O.a]},{title:e.formatMessage(ee.a.created),transforms:[O.a]}]},Be=Object(U.a)((function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.a;return a(!0),t(Object(P.c)(De({filterValue:e},r))).then((function(){return a(!1)}))}),1e3),ke=function(e,t){return e?[{category:t.formatMessage(ee.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},ze={filter:"",isFetching:!0,isFiltering:!1,selectedOrderProcesses:[],allSelected:!1,rows:[]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},Ie=function(e,t,a){return a.indexOf(e)===t},Le=function(e,t){switch(t.type){case"setRows":return De(De({},e),{},{rows:t.payload,allSelected:Ve(t.payload,e.selectedOrderProcesses)});case"setFetching":return De(De({},e),{},{isFetching:t.payload});case"setFilterValue":return De(De({},e),{},{filterValue:t.payload});case"select":return De(De({},e),{},{allSelected:!1,selectedOrderProcesses:e.selectedOrderProcesses.includes(t.payload)?e.selectedOrderProcesses.filter((function(e){return e!==t.payload})):[].concat(c()(e.selectedOrderProcesses),[t.payload])});case"selectAll":return De(De({},e),{},{selectedOrderProcesses:[].concat(c()(e.selectedOrderProcesses),c()(t.payload)).filter(Ie),allSelected:!0});case"unselectAll":return De(De({},e),{},{selectedOrderProcesses:e.selectedOrderProcesses.filter((function(e){return!t.payload.includes(e)})),allSelected:!1});case"resetSelected":return De(De({},e),{},{selectedOrderProceses:[],allSelected:!1});case"setFilteringFlag":return De(De({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(je.a)(),t=Object(m.useSelector)((function(e){var t=e.orderProcessReducer;return{orderProcesses:t.orderProcesses,sortBy:t.sortBy}}),m.shallowEqual),a=t.orderProcesses,r=a.data,o=a.meta,c=t.sortBy,s=Object(l.useReducer)(Le,De(De({},ze),{},{filterValue:(null==e?void 0:e.orderProcesses.filter)||ze.filterValue})),i=n()(s,2),_=i[0],v=_.filterValue,O=_.isFetching,E=_.isFiltering,j=_.selectedOrderProcesses,M=_.allSelected,F=_.rows,w=i[1],C=Object(m.useDispatch)(),N=Object(z.a)(),D=Object(be.a)({keepHash:!0}),R=function(e){return w({type:"setFetching",payload:!0}),C(Object(P.c)(e)).then((function(){return w({type:"setFetching",payload:!1})})).catch((function(){return w({type:"setFetching",payload:!1})}))};Object(l.useEffect)((function(){insights.chrome.appNavClick({id:"order-processes",secondaryNav:!0}),R((null==e?void 0:e.orderProcesses)?De(De({},e.orderProcesses),{},{filterValue:v}):B.a),Object(S.d)()}),[]),Object(l.useEffect)((function(){w({type:"setRows",payload:T(r)})}),[r]);var k=function(e){w({type:"setFilterValue",payload:e}),Be(e,C,(function(e){return w({type:"setFilteringFlag",payload:e})}),De(De({},o),{},{offset:0}))},V=j.length>0;return p.a.createElement(l.Fragment,null,p.a.createElement(W.b,null,p.a.createElement(g.TextContent,{className:"pf-u-ml-md"},p.a.createElement(y.Text,{component:y.TextVariants.h1},N.formatMessage(L.a.title)))),p.a.createElement(x.Provider,{value:{selectedOrderProcesses:j,setSelectedOrderProcesses:function(e){return w({type:"select",payload:e})}}},p.a.createElement(H,{sortBy:c,onSort:function(e,t,a,r){var n=r.property;return C(Object(P.g)({index:t,direction:a,property:n})),R(De(De({},o),{},{filterValue:v}))},rows:F,columns:Re(N,M,(function(){return w(M?{type:"unselectAll",payload:r.map((function(e){return e.id}))}:{type:"selectAll",payload:r.map((function(e){return e.id}))})})),routes:function(){return p.a.createElement(l.Fragment,null,p.a.createElement(u.b,{exact:!0,path:ae.a},p.a.createElement(Ee,{postMethod:R})),p.a.createElement(u.b,{exact:!0,path:ae.z},p.a.createElement(Ce,{ids:j,fetchData:R,resetSelectedOrderProcesses:function(){return w({type:"resetSelected"})}})),p.a.createElement(u.b,{exact:!0,path:ae.C},p.a.createElement(Ee,{edit:!0})))},fetchData:R,titlePlural:N.formatMessage(L.a.title),titleSingular:N.formatMessage(L.a.orderProcess),pagination:o,filterValue:v,onFilterChange:k,isLoading:O||E,toolbarButtons:function(){return p.a.createElement(te.b,{className:"pf-u-pl-lg top-toolbar"},p.a.createElement(b.ToolbarItem,null,p.a.createElement(f.a,{id:"add-order-process-link",to:{pathname:ae.a}},p.a.createElement(d.Button,{variant:"primary","aria-label":N.formatMessage(ee.a.create)},N.formatMessage(ee.a.create)))),p.a.createElement(b.ToolbarItem,null,p.a.createElement(f.a,{id:"remove-multiple-order-processes'",className:V?"":"disabled-link",to:{pathname:ae.z}},p.a.createElement(d.Button,{variant:"secondary",isDisabled:!V,"aria-label":N.formatMessage(L.a.deleteOrderProcess)},N.formatMessage(Te.a.delete)))))},actionResolver:function(){return[{title:N.formatMessage(Te.a.edit),onClick:function(e,t,a){return D.push({pathname:ae.C,search:"?order_process=".concat(a.id)})}},{title:N.formatMessage(Te.a.delete),onClick:function(e,t,a){return D.push({pathname:ae.z,search:"?order_process=".concat(a.id)})}}]},renderEmptyState:function(){return p.a.createElement(Z,{title:""===v?N.formatMessage(L.a.noOrderProcesses):N.formatMessage($.a.noResultsFound),Icon:h.a,PrimaryAction:function(){return""!==v?p.a.createElement(d.Button,{onClick:function(){return k("")},variant:"link"},N.formatMessage($.a.clearFilters)):null},description:""===v?N.formatMessage(L.a.noOrderProcesses):N.formatMessage($.a.noResultsDescription)})},activeFiltersConfig:{filters:ke(v,N),onDelete:function(){return k("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/order-processes~31ecd969.js.map