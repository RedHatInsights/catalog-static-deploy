(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1e3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabButton=void 0;const i=a(2),r=i.__importStar(a(0)),n=a(148);t.TabButton=e=>{var{children:a,tabContentRef:s,ouiaId:o,ouiaSafe:l}=e,c=i.__rest(e,["children","tabContentRef","ouiaId","ouiaSafe"]);const d=c.href?"a":"button";return r.createElement(d,Object.assign({},n.getOUIAProps(t.TabButton.displayName,o,l),c),a)},t.TabButton.displayName="TabButton"},1001:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabContent=void 0;const i=a(2),r=i.__importStar(a(0)),n=i.__importDefault(a(692)),s=a(1),o=a(148),l=a(902),c={default:"",light300:n.default.modifiers.light_300},d=e=>{var{id:t,activeKey:a,"aria-label":n,child:d,children:u,className:f,eventKey:p,innerRef:m,ouiaId:h,ouiaSafe:b}=e,E=i.__rest(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(u||d){let e;return e=n?null:u?`pf-tab-${p}-${t}`:`pf-tab-${d.props.eventKey}-${t}`,r.createElement(l.TabsContextConsumer,null,({variant:i})=>r.createElement("section",Object.assign({ref:m,hidden:u?null:d.props.eventKey!==a,className:u?s.css("pf-c-tab-content",f,c[i]):s.css("pf-c-tab-content",d.props.className,c[i]),id:u?t:`pf-tab-section-${d.props.eventKey}-${t}`,"aria-label":n,"aria-labelledby":e,role:"tabpanel",tabIndex:0},o.getOUIAProps("TabContent",h,b),E),u||d.props.children))}return null};t.TabContent=r.forwardRef((e,t)=>r.createElement(d,Object.assign({},e,{innerRef:t})))},1002:function(e,t,a){"use strict";t.__esModule=!0,t.GripVerticalIconConfig={name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},t.GripVerticalIcon=a(98).createIcon(t.GripVerticalIconConfig),t.default=t.GripVerticalIcon},1003:function(e,t,a){"use strict";t.__esModule=!0,t.EyeSlashIconConfig={name:"EyeSlashIcon",height:512,width:640,svgPath:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",yOffset:0,xOffset:0},t.EyeSlashIcon=a(98).createIcon(t.EyeSlashIconConfig),t.default=t.EyeSlashIcon},1004:function(e,t,a){"use strict";t.__esModule=!0,t.TrashRestoreIconConfig={name:"TrashRestoreIcon",height:512,width:448,svgPath:"M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",yOffset:0,xOffset:0},t.TrashRestoreIcon=a(98).createIcon(t.TrashRestoreIconConfig),t.default=t.TrashRestoreIcon},1026:function(e,t,a){"use strict";a.r(t);var i,r=a(151),n=a.n(r),s=a(107),o=a.n(s),l=a(245),c=a.n(l),d=a(40),u=a.n(d),f=a(0),p=a.n(f),m=a(5),h=a.n(m),b=a(106),E=a(48),v=a.n(E),_=a(995),S=a.n(_),I=a(996),y=a(191),L=a(26),O=a(6),g=a(301),C=a(904),P=a(25),T=a(41),A=a(243),D=a(38),B=a.n(D);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=N(N({},I.fieldProperties.IS_DISABLED),{},{propertyName:"isSubstitution",label:"Substitution"}),M=(i={},u()(i,v.a.TEXT_FIELD,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.HELPER_TEXT,I.fieldProperties.PLACEHOLDER,I.fieldProperties.IS_DISABLED,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.HIDE_FIELD,j]}),u()(i,v.a.CHECKBOX,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.OPTIONS,I.fieldProperties.HIDE_FIELD]}),u()(i,v.a.SELECT,{attributes:[I.fieldProperties.OPTIONS,I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.PLACEHOLDER,I.fieldProperties.HELPER_TEXT,I.fieldProperties.HIDE_FIELD,j]}),u()(i,v.a.DATE_PICKER,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.TODAY_BUTTON_LABEL,I.fieldProperties.IS_CLEARABLE,I.fieldProperties.CLOSE_ON_DAY_SELECT,I.fieldProperties.SHOW_TODAY_BUTTON,I.fieldProperties.HIDE_FIELD,j]}),u()(i,v.a.PLAIN_TEXT,{attributes:[I.fieldProperties.MULTI_LINE_LABEL,j]}),u()(i,v.a.RADIO,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.OPTIONS,I.fieldProperties.HIDE_FIELD]}),u()(i,v.a.SWITCH,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.IS_DISABLED,I.fieldProperties.HIDE_FIELD]}),u()(i,v.a.TEXTAREA,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.HELPER_TEXT,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.IS_DISABLED,I.fieldProperties.HIDE_FIELD,j]}),i);M["select-field"]=M[v.a.SELECT],M["textarea-field"]=M[v.a.TEXTAREA];var x={componentMapper:N({},A.a),builderMapper:N({},I.builderMapper),pickerMapper:N(N({},I.pickerMapper),{},{"select-field":I.pickerMapper[v.a.SELECT],"textarea-field":I.pickerMapper[v.a.TEXTAREA]}),propertiesMapper:I.propertiesMapper,componentProperties:M},w=function(e){var t=N({},e);return t.fields=t.fields.map((function(e){var t=e.validate,a=c()(e,["validate"]);return t?N(N({},a),{},{validate:t.map((function(e){var t=e.type;return N(N({},c()(e,["type"])),{},{type:A.b[t]||t})}))}):a})),t},H=function(e){return p.a.createElement(S.a,e)},K=function(e){var t=e.closeUrl,a=e.search,i=e.portfolioItem,r=Object(f.useState)(),s=o()(r,2),l=s[0],d=s[1],u=Object(f.useState)(!1),m=o()(u,2),h=m[0],E=m[1],v=Object(f.useState)(),_=o()(v,2),S=_[0],A=_[1],D=Object(f.useState)(),R=o()(D,2),j=R[0],M=R[1],K=Object(f.useState)(0),V=o()(K,2),F=V[0],U=V[1],k=Object(P.d)(),z=Object(b.g)().push,X=function(){return Object(L.a)().get("".concat(O.e,"/portfolio_items/").concat(i.id,"/service_plans")).then((function(e){var t=o()(e,1)[0].create_json_schema.schema;return M(e[0]),e[0].imported?Object(L.a)().get("".concat(O.e,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return A(w(e.create_json_schema.schema)),w(t)})):w(t)})).then((function(e){d(e),E(!1)}))};Object(f.useEffect)((function(){X()}),[]);var $=function(e){return Object(L.i)().patchServicePlanModified("".concat(j.id),{modified:{schema:e}})},q=function(e){return Object(L.i)().createServicePlan({portfolio_item_id:i.id}).then((function(e){return o()(e,1)[0].id})).then((function(t){return Object(L.i)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},Y=function(e){return E(!0),(j.imported?$:q)(function(e){var t=N({},e);return t.fields=t.fields.map((function(e){var t=e.validate,a=c()(e,["validate"]);return t?N(N({},a),{},{validate:t.map((function(e){var t=e.type;return N(N({},c()(e,["type"])),{},{type:t!==B.a.MAX_NUMBER_VALUE&&t!==B.a.MIN_NUMBER_VALUE?"".concat(t,"-validator"):t})}))}):a})),t}(function(e){var t=e.fields.map((function(e){var t=e;return t.isSubstitution&&(t.isDisabled=!0,t.placeholder=e.initialValue),t}));return N(N({},e),{},{fields:t})}(e))).then((function(){return E(!1),k(Object(T.c)({variant:"success",title:"Survey of ".concat(i.name," has been modified."),dismissable:!0})),z({pathname:t,search:a})})).catch((function(e){E(!1),k({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return p.a.createElement(f.Fragment,null,l?[p.a.createElement(H,n()({},x,{key:F,schema:l,disableDrag:!0,disableAdd:!0,schemaTemplate:S,mode:"subset",openEditor:!0}),(function(e){var r=e.getSchema,n=e.isValid,s=c()(e,["getSchema","isValid"]);return p.a.createElement(f.Fragment,null,p.a.createElement(C.b,{key:"survey-editor-toolbar",handleSaveSurvey:function(){return Y(r())},isValid:n,closeUrl:t,search:a,isFetching:h||!l,modified:null==j?void 0:j.modified,handleResetSurvey:function(){return e=j.id,d(void 0),void Object(L.i)().resetServicePlanModified(e).then(X).then((function(){return U((function(e){return e+1})),k(Object(T.c)({variant:"success",title:"Survey of ".concat(i.name," has been restored."),dismissable:!0}))}));var e}}),p.a.createElement(I.BuilderTemplate,s),";")}))]:p.a.createElement(f.Fragment,null,p.a.createElement(C.b,{handleSaveSurvey:Y,closeUrl:t,search:a,isFetching:!l||h}),p.a.createElement(g.Bullseye,null,p.a.createElement(y.Spinner,null))))};K.propTypes={closeUrl:h.a.string.isRequired,search:h.a.string.isRequired,portfolioItem:h.a.shape({id:h.a.string.isRequired,name:h.a.string.isRequired}).isRequired,portfolio:h.a.object.isRequired},t.default=K},619:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(2).__exportStar(a(362),t)},651:function(e,t,a){"use strict";t.__esModule=!0,t.AngleRightIconConfig={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},t.AngleRightIcon=a(98).createIcon(t.AngleRightIconConfig),t.default=t.AngleRightIcon},652:function(e,t,a){"use strict";t.__esModule=!0,t.TimesIconConfig={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},t.TimesIcon=a(98).createIcon(t.TimesIconConfig),t.default=t.TimesIcon},690:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const i=a(2),r=i.__importStar(a(0)),n=i.__importDefault(a(52)),s=a(1),o=a(148);t.CardContext=r.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:a=null,id:l="",className:c="",component:d="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:p=!1,isSelected:m=!1,isFlat:h=!1,isExpanded:b=!1,isRounded:E=!1,isLarge:v=!1,ouiaId:_,ouiaSafe:S=!0}=e,I=i.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","isExpanded","isRounded","isLarge","ouiaId","ouiaSafe"]);const y=d,L=o.useOUIAProps(t.Card.displayName,_,S);return f&&v&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),v=!1),r.createElement(t.CardContext.Provider,{value:{cardId:l,isExpanded:b}},r.createElement(y,Object.assign({id:l,className:s.css(n.default.card,u&&n.default.modifiers.hoverable,f&&n.default.modifiers.compact,p&&n.default.modifiers.selectable,m&&p&&n.default.modifiers.selected,b&&n.default.modifiers.expanded,h&&n.default.modifiers.flat,E&&n.default.modifiers.rounded,v&&n.default.modifiers.displayLg,c),tabIndex:p?"0":void 0},I,L),a))},t.Card.displayName="Card"},767:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const i=a(2),r=i.__importStar(a(0)),n=a(1),s=i.__importDefault(a(52)),o=a(690),l=a(619),c=i.__importDefault(a(651));t.CardHeader=e=>{var{children:t=null,className:a="",id:d,onExpand:u,toggleButtonProps:f}=e,p=i.__rest(e,["children","className","id","onExpand","toggleButtonProps"]);return r.createElement(o.CardContext.Consumer,null,({cardId:e})=>r.createElement("div",Object.assign({className:n.css(s.default.cardHeader,a),id:d},p),u&&r.createElement("div",{className:n.css(s.default.cardHeaderToggle)},r.createElement(l.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{u(t,e)}},f),r.createElement("span",{className:n.css(s.default.cardHeaderToggleIcon)},r.createElement(c.default,{"aria-hidden":"true"})))),t))},t.CardHeader.displayName="CardHeader"},867:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const i=a(2),r=i.__importStar(a(0)),n=i.__importDefault(a(52)),s=a(1);t.CardBody=e=>{var{children:t=null,className:a="",component:o="div",isFilled:l=!0}=e,c=i.__rest(e,["children","className","component","isFilled"]);const d=o;return r.createElement(d,Object.assign({className:s.css(n.default.cardBody,!l&&n.default.modifiers.noFill,a)},c),t)},t.CardBody.displayName="CardBody"},902:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabsContextConsumer=t.TabsContextProvider=void 0;const i=a(2).__importStar(a(0)).createContext({variant:"default"});t.TabsContextProvider=i.Provider,t.TabsContextConsumer=i.Consumer},998:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0,t.Tab=e=>null,t.Tab.displayName="Tab"},999:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=t.TabsComponent=void 0;const i=a(2),r=i.__importStar(a(0)),n=i.__importDefault(a(691)),s=i.__importDefault(a(33)),o=a(1),l=i.__importDefault(a(676)),c=i.__importDefault(a(651)),d=a(189),u=a(1e3),f=a(1001),p=a(902),m=a(148);var h;!function(e){e.div="div",e.nav="nav"}(h=t.TabsComponent||(t.TabsComponent={}));const b={default:"",light300:n.default.modifiers.colorSchemeLight_300};class E extends r.Component{constructor(e){super(e),this.tabList=r.createRef(),this.handleScrollButtons=()=>{if(this.tabList.current&&!this.props.isVertical){const e=this.tabList.current,t=!d.isElementInView(e,e.firstChild,!1),a=!d.isElementInView(e,e.lastChild,!1),i=t||a,r=!t,n=!a;this.setState({showScrollButtons:i,disableLeftScrollButton:r,disableRightScrollButton:n})}},this.scrollLeft=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let a,i,r;for(r=0;r<t.length&&!a;r++)d.isElementInView(e,t[r],!1)&&(a=t[r],i=t[r-1]);i&&(e.scrollLeft-=i.scrollWidth)}},this.scrollRight=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let a,i;for(let r=t.length-1;r>=0&&!a;r--)d.isElementInView(e,t[r],!1)&&(a=t[r],i=t[r+1]);i&&(e.scrollLeft+=i.scrollWidth)}},this.state={showScrollButtons:!1,disableLeftScrollButton:!1,disableRightScrollButton:!1,shownKeys:[this.props.activeKey],ouiaStateId:m.getDefaultOUIAId(E.displayName)}}handleTabClick(e,t,a,i){const{shownKeys:n}=this.state;this.props.onSelect(e,t),a&&(r.Children.toArray(this.props.children).map(e=>e).filter(e=>e.props&&e.props.tabContentRef&&e.props.tabContentRef.current).forEach(e=>e.props.tabContentRef.current.hidden=!0),a.current&&(a.current.hidden=!1)),i&&this.setState({shownKeys:n.concat(t)})}componentDidMount(){this.props.isVertical||(window.addEventListener("resize",this.handleScrollButtons,!1),this.handleScrollButtons())}componentWillUnmount(){this.props.isVertical||window.removeEventListener("resize",this.handleScrollButtons,!1)}componentDidUpdate(e){const{activeKey:t,mountOnEnter:a}=this.props,{shownKeys:i}=this.state;e.activeKey!==t&&a&&i.indexOf(t)<0&&this.setState({shownKeys:i.concat(t)})}render(){const e=this.props,{className:t,children:a,activeKey:v,id:_,isFilled:S,isSecondary:I,isVertical:y,isBox:L,leftScrollAriaLabel:O,rightScrollAriaLabel:g,"aria-label":C,component:P,ouiaId:T,ouiaSafe:A,mountOnEnter:D,unmountOnExit:B,inset:R,variant:N}=e,j=i.__rest(e,["className","children","activeKey","id","isFilled","isSecondary","isVertical","isBox","leftScrollAriaLabel","rightScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","inset","variant"]),{showScrollButtons:M,disableLeftScrollButton:x,disableRightScrollButton:w,shownKeys:H}=this.state,K=r.Children.toArray(a).filter(Boolean).filter(e=>!e.props.isHidden),V=_||d.getUniqueId(),F=P===h.nav?"nav":"div";return r.createElement(p.TabsContextProvider,{value:{variant:N}},r.createElement(F,Object.assign({"aria-label":C,className:o.css(n.default.tabs,S&&n.default.modifiers.fill,I&&n.default.modifiers.secondary,y&&n.default.modifiers.vertical,L&&n.default.modifiers.box,M&&!y&&n.default.modifiers.scrollable,d.formatBreakpointMods(R,n.default),b[N],t)},m.getOUIAProps(E.displayName,void 0!==T?T:this.state.ouiaStateId,A),{id:_&&_},j),r.createElement("button",{className:o.css(n.default.tabsScrollButton,I&&s.default.modifiers.secondary),"aria-label":O,onClick:this.scrollLeft,disabled:x,"aria-hidden":x},r.createElement(l.default,null)),r.createElement("ul",{className:o.css(n.default.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons},K.map((e,t)=>{const a=e.props,{title:s,eventKey:l,tabContentRef:c,id:d,tabContentId:f,className:p="",ouiaId:m,isHidden:h}=a,b=i.__rest(a,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isHidden"]);let E=f?""+f:`pf-tab-section-${l}-${d||V}`;return(D||B)&&l!==v&&(E=void 0),r.createElement("li",{key:t,className:o.css(n.default.tabsItem,l===v&&n.default.modifiers.current,p)},r.createElement(u.TabButton,Object.assign({className:o.css(n.default.tabsLink),onClick:e=>this.handleTabClick(e,l,c,D),id:`pf-tab-${l}-${d||V}`,"aria-controls":E,tabContentRef:c,ouiaId:m},b),s))})),r.createElement("button",{className:o.css(n.default.tabsScrollButton,I&&s.default.modifiers.secondary),"aria-label":g,onClick:this.scrollRight,disabled:w,"aria-hidden":w},r.createElement(c.default,null))),K.filter(e=>e.props.children&&!(B&&e.props.eventKey!==v)&&!(D&&-1===H.indexOf(e.props.eventKey))).map((e,t)=>r.createElement(f.TabContent,{key:t,activeKey:v,child:e,id:e.props.id||V,ouiaId:e.props.ouiaId})))}}t.Tabs=E,E.displayName="Tabs",E.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,leftScrollAriaLabel:"Scroll left",rightScrollAriaLabel:"Scroll right",component:h.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default"}}}]);
//# sourceMappingURL=../sourcemaps/survey-editor~31ecd969.js.map