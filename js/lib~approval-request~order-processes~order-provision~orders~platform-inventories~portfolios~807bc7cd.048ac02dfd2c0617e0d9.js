(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{764:function(o,e,t){"use strict";e.__esModule=!0,t(886),e.default={button:"pf-c-button",modifiers:{noPadding:"pf-m-no-padding",widthAuto:"pf-m-width-auto",top:"pf-m-top",bottom:"pf-m-bottom",left:"pf-m-left",right:"pf-m-right"},popover:"pf-c-popover",popoverArrow:"pf-c-popover__arrow",popoverBody:"pf-c-popover__body",popoverContent:"pf-c-popover__content",popoverFooter:"pf-c-popover__footer",title:"pf-c-title"}},808:function(o,e,t){"use strict";t.d(e,"a",(function(){return l}));var r=t(2),a=t(0),n=t(17),p=t(267),i=t(374),c=t(86);const l=o=>{var{className:e="",ref:t,ouiaId:s,ouiaSafe:d}=o,f=Object(r.__rest)(o,["className","ref","ouiaId","ouiaSafe"]);const v=Object(c.d)(l.displayName,s,d);return a.createElement(n.a.Consumer,null,o=>a.createElement(p.a,Object.assign({},f,{context:o,component:a.createElement(i.a,{component:i.b.div}),className:e,role:"separator"},v)))};l.displayName="DropdownSeparator"},875:function(o,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(2),a=t(0),n=t(876),p=t(268);const i=o=>{var{id:e="",children:t=null,className:i="",isOpen:c=!1,"aria-label":l="Actions",parentRef:s=null,getMenuRef:d=null,isActive:f=!1,isPlain:v=!1,isDisabled:u=!1,bubbleEvent:m=!1,onToggle:_=(()=>{}),ref:g}=o,b=Object(r.__rest)(o,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return a.createElement(p.a,Object.assign({id:e,className:i,isOpen:c,"aria-label":l,parentRef:s,getMenuRef:d,isActive:f,isPlain:v,isDisabled:u,onToggle:_,bubbleEvent:m},b),a.createElement(n.a,null))};i.displayName="KebabToggle"},886:function(o,e,t){var r=t(6),a=t(887);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[o.i,a,""]]);var n={insert:"head",singleton:!1};r(a,n);o.exports=a.locals||{}},887:function(o,e,t){(e=t(7)(!1)).push([o.i,".pf-c-popover {\n  --pf-c-popover--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-popover--MinWidth: calc(var(--pf-c-popover__content--PaddingLeft) + var(--pf-c-popover__content--PaddingRight) + 18.75rem);\n  --pf-c-popover--MaxWidth: calc(var(--pf-c-popover__content--PaddingLeft) + var(--pf-c-popover__content--PaddingRight) + 18.75rem);\n  --pf-c-popover--BoxShadow: var(--pf-global--BoxShadow--md);\n  --pf-c-popover__content--BackgroundColor: var(--pf-global--BackgroundColor--100);\n  --pf-c-popover__content--PaddingTop: var(--pf-global--spacer--md);\n  --pf-c-popover__content--PaddingRight: var(--pf-global--spacer--md);\n  --pf-c-popover__content--PaddingBottom: var(--pf-global--spacer--md);\n  --pf-c-popover__content--PaddingLeft: var(--pf-global--spacer--md);\n  --pf-c-popover__arrow--Width: var(--pf-global--arrow--width-lg);\n  --pf-c-popover__arrow--Height: var(--pf-global--arrow--width-lg);\n  --pf-c-popover__arrow--BoxShadow: var(--pf-global--BoxShadow--md);\n  --pf-c-popover__arrow--BackgroundColor: var(--pf-global--BackgroundColor--100);\n  --pf-c-popover__arrow--m-top--TranslateX: -50%;\n  --pf-c-popover__arrow--m-top--TranslateY: 50%;\n  --pf-c-popover__arrow--m-top--Rotate: 45deg;\n  --pf-c-popover__arrow--m-right--TranslateX: -50%;\n  --pf-c-popover__arrow--m-right--TranslateY: -50%;\n  --pf-c-popover__arrow--m-right--Rotate: 45deg;\n  --pf-c-popover__arrow--m-bottom--TranslateX: -50%;\n  --pf-c-popover__arrow--m-bottom--TranslateY: -50%;\n  --pf-c-popover__arrow--m-bottom--Rotate: 45deg;\n  --pf-c-popover__arrow--m-left--TranslateX: 50%;\n  --pf-c-popover__arrow--m-left--TranslateY: -50%;\n  --pf-c-popover__arrow--m-left--Rotate: 45deg;\n  --pf-c-popover--c-button--MarginLeft: var(--pf-global--spacer--sm);\n  --pf-c-popover--c-button--Top: calc(var(--pf-c-popover__content--PaddingTop) - var(--pf-global--spacer--form-element));\n  --pf-c-popover--c-button--Right: var(--pf-global--spacer--md);\n  --pf-c-popover--c-button--sibling--PaddingRight: var(--pf-global--spacer--2xl);\n  --pf-c-popover--c-title--MarginBottom: var(--pf-global--spacer--sm);\n  --pf-c-popover__footer--MarginTop: var(--pf-global--spacer--md);\n  position: relative;\n  min-width: var(--pf-c-popover--MinWidth);\n  max-width: var(--pf-c-popover--MaxWidth);\n  font-size: var(--pf-c-popover--FontSize);\n  box-shadow: var(--pf-c-popover--BoxShadow); }\n  .pf-c-popover.pf-m-no-padding {\n    --pf-c-popover__content--PaddingTop: 0px;\n    --pf-c-popover__content--PaddingRight: 0px;\n    --pf-c-popover__content--PaddingBottom: 0px;\n    --pf-c-popover__content--PaddingLeft: 0px; }\n  .pf-c-popover.pf-m-width-auto {\n    --pf-c-popover--MinWidth: auto;\n    --pf-c-popover--MaxWidth: none; }\n  .pf-c-popover.pf-m-top .pf-c-popover__arrow {\n    bottom: 0;\n    left: 50%;\n    transform: translateX(var(--pf-c-popover__arrow--m-top--TranslateX)) translateY(var(--pf-c-popover__arrow--m-top--TranslateY)) rotate(var(--pf-c-popover__arrow--m-top--Rotate)); }\n  .pf-c-popover.pf-m-bottom .pf-c-popover__arrow {\n    top: 0;\n    left: 50%;\n    transform: translateX(var(--pf-c-popover__arrow--m-bottom--TranslateX)) translateY(var(--pf-c-popover__arrow--m-bottom--TranslateY)) rotate(var(--pf-c-popover__arrow--m-bottom--Rotate)); }\n  .pf-c-popover.pf-m-left .pf-c-popover__arrow {\n    top: 50%;\n    right: 0;\n    transform: translateX(var(--pf-c-popover__arrow--m-left--TranslateX)) translateY(var(--pf-c-popover__arrow--m-left--TranslateY)) rotate(var(--pf-c-popover__arrow--m-left--Rotate)); }\n  .pf-c-popover.pf-m-right .pf-c-popover__arrow {\n    top: 50%;\n    left: 0;\n    transform: translateX(var(--pf-c-popover__arrow--m-right--TranslateX)) translateY(var(--pf-c-popover__arrow--m-right--TranslateY)) rotate(var(--pf-c-popover__arrow--m-right--Rotate)); }\n\n.pf-c-popover__content {\n  position: relative;\n  padding: var(--pf-c-popover__content--PaddingTop) var(--pf-c-popover__content--PaddingRight) var(--pf-c-popover__content--PaddingBottom) var(--pf-c-popover__content--PaddingLeft);\n  background-color: var(--pf-c-popover__content--BackgroundColor); }\n  .pf-c-popover__content > .pf-c-title {\n    margin-bottom: var(--pf-c-popover--c-title--MarginBottom); }\n  .pf-c-popover__content > .pf-c-button {\n    position: absolute;\n    top: var(--pf-c-popover--c-button--Top);\n    right: var(--pf-c-popover--c-button--Right); }\n    .pf-c-popover__content > .pf-c-button + * {\n      padding-right: var(--pf-c-popover--c-button--sibling--PaddingRight); }\n\n.pf-c-popover__arrow {\n  position: absolute;\n  width: var(--pf-c-popover__arrow--Width);\n  height: var(--pf-c-popover__arrow--Height);\n  pointer-events: none;\n  background-color: var(--pf-c-popover__arrow--BackgroundColor);\n  box-shadow: var(--pf-c-popover__arrow--BoxShadow); }\n\n.pf-c-popover__body {\n  word-wrap: break-word; }\n\n.pf-c-popover__footer {\n  margin-top: var(--pf-c-popover__footer--MarginTop); }\n",""]),o.exports=e},960:function(o,e,t){"use strict";t.d(e,"a",(function(){return s}));var r=t(2),a=t(0),n=t(11),p=t.n(n),i=t(17),c=t(613),l=t(86);const s=o=>{var{onSelect:e,ref:t,ouiaId:n,ouiaSafe:d}=o,f=Object(r.__rest)(o,["onSelect","ref","ouiaId","ouiaSafe"]);return a.createElement(i.b.Provider,{value:{onSelect:o=>e&&e(o),toggleTextClass:p.a.dropdownToggleText,toggleIconClass:p.a.dropdownToggleImage,toggleIndicatorClass:p.a.dropdownToggleIcon,menuClass:p.a.dropdownMenu,itemClass:p.a.dropdownMenuItem,toggleClass:p.a.dropdownToggle,baseClass:p.a.dropdown,baseComponent:"div",sectionClass:p.a.dropdownGroup,sectionTitleClass:p.a.dropdownGroupTitle,sectionComponent:"section",disabledClass:p.a.modifiers.disabled,plainTextClass:p.a.modifiers.text,ouiaId:Object(l.c)(s.displayName,n),ouiaSafe:d,ouiaComponentType:s.displayName}},a.createElement(c.a,Object.assign({},f)))};s.displayName="Dropdown"},970:function(o,e,t){"use strict";t.d(e,"a",(function(){return E}));var r=t(2),a=t(0),n=t(18),p=t(764),i=t.n(p),c=t(1);const l=o=>{var{className:e=null,children:t}=o,n=Object(r.__rest)(o,["className","children"]);return a.createElement("div",Object.assign({className:Object(c.css)(i.a.popoverContent,e)},n),t)};l.displayName="PopoverContent";const s=o=>{var{children:e,id:t}=o,n=Object(r.__rest)(o,["children","id"]);return a.createElement("div",Object.assign({className:Object(c.css)(i.a.popoverBody),id:t},n),e)};s.displayName="PopoverBody";var d=t(739);const f=o=>{var{children:e,id:t}=o,n=Object(r.__rest)(o,["children","id"]);return a.createElement(d.a,Object.assign({headingLevel:"h6",size:d.b.md,id:t},n),e)};f.displayName="PopoverHeader";const v=o=>{var{children:e,className:t=""}=o,n=Object(r.__rest)(o,["children","className"]);return a.createElement("footer",Object.assign({className:Object(c.css)(i.a.popoverFooter,t)},n),e)};v.displayName="PopoverFooter";var u=t(75),m=t(110),_=t(215);const g=o=>{var{onClose:e=(()=>{})}=o,t=Object(r.__rest)(o,["onClose"]);const[n,p]=a.useState(null);return a.useEffect(()=>(n&&n.addEventListener("click",e,!1),()=>{n&&n.removeEventListener("click",e,!1)}),[n]),a.createElement(_.a,{onFoundRef:o=>p(o)},a.createElement(u.a,Object.assign({variant:"plain","aria-label":!0},t,{style:{pointerEvents:"auto"}}),a.createElement(m.a,null)))};g.displayName="PopoverCloseButton";const b=o=>{var{className:e=""}=o,t=Object(r.__rest)(o,["className"]);return a.createElement("div",Object.assign({className:Object(c.css)(i.a.popoverArrow,e)},t))};b.displayName="PopoverArrow";var h,w=t(885),T=t(884),C=t(305),O=t(134),y=t(24);!function(o){o.auto="auto",o.top="top",o.bottom="bottom",o.left="left",o.right="right"}(h||(h={}));const E=o=>{var{children:e,position:t="top",enableFlip:p=!0,className:d="",isVisible:u=null,shouldClose:m=(()=>null),shouldOpen:_=(()=>null),"aria-label":h="",bodyContent:E,headerContent:P=null,footerContent:N=null,appendTo:x=(()=>document.body),hideOnOutsideClick:j=!0,onHide:R=(()=>null),onHidden:S=(()=>null),onShow:B=(()=>null),onShown:M=(()=>null),onMount:k=(()=>null),zIndex:W=9999,minWidth:A=T.a&&T.a.value,maxWidth:D=w.a&&w.a.value,closeBtnAriaLabel:F="Close",showClose:I=!0,distance:Y=25,flipBehavior:X=["top","right","bottom","left","top","right","bottom"],animationDuration:L=300,id:z,withFocusTrap:H,boundary:$,tippyProps:K,reference:V,hasNoPadding:G=!1,hasAutoWidth:J=!1}=o,q=Object(r.__rest)(o,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","boundary","tippyProps","reference","hasNoPadding","hasAutoWidth"]);const Q=z||Object(y.g)(),U=null!==u,[Z,oo]=a.useState(!1),[eo,to]=a.useState(0),[ro,ao]=a.useState(Boolean(H)),no=a.useRef(null),po=a.useRef(null),io=a.useRef(null);a.useEffect(()=>{k()},[]),a.useEffect(()=>{U&&(u?co():lo())},[u,U]);const co=o=>{B(),no.current&&clearTimeout(no.current),io.current&&clearTimeout(io.current),po.current=setTimeout(()=>{oo(!0),to(1),!1!==H&&o&&ao(!0),M()},0)},lo=()=>{R(),po.current&&clearTimeout(po.current),io.current=setTimeout(()=>{to(0),ao(!1),no.current=setTimeout(()=>{oo(!1),S()},L)},0)},so={top:i.a.modifiers.top,bottom:i.a.modifiers.bottom,left:i.a.modifiers.left,right:i.a.modifiers.right},fo=A!==T.a.value,vo=D!==w.a.value,uo=a.createElement(C.a,Object.assign({active:ro,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,fallbackFocus:()=>{let o=null;return document&&document.activeElement&&(o=document.activeElement),o}},preventScrollOnDeactivate:!0,className:Object(c.css)(i.a.popover,G&&i.a.modifiers.noPadding,J&&i.a.modifiers.widthAuto,d),role:"dialog","aria-modal":"true","aria-label":P?void 0:h,"aria-labelledby":P?`popover-${Q}-header`:void 0,"aria-describedby":`popover-${Q}-body`,onMouseDown:()=>{ro&&ao(!1)},style:{minWidth:fo?A:null,maxWidth:vo?D:null,opacity:eo,transition:Object(O.b)(L)}},q),a.createElement(b,null),a.createElement(l,null,I&&a.createElement(g,{onClose:o=>{o.stopPropagation(),U?m(null,lo,o):lo()},"aria-label":F}),P&&a.createElement(f,{id:`popover-${Q}-header`},"function"==typeof P?P(lo):P),a.createElement(s,{id:`popover-${Q}-body`},"function"==typeof E?E(lo):E),N&&a.createElement(v,{id:`popover-${Q}-footer`},"function"==typeof N?N(lo):N)));return a.createElement(O.a,{trigger:e,reference:V,popper:uo,popperMatchesTriggerWidth:!1,appendTo:x,isVisible:Z,positionModifiers:so,distance:Y,placement:t,onTriggerClick:o=>{U?Z?m(null,lo,o):_(co,o):Z?lo():co()},onTriggerEnter:o=>{o.keyCode===n.b.ENTER&&(Z?U?m(null,lo,o):lo():U?_(co,o):co(!0))},onDocumentClick:(o,e,t)=>{if(j&&Z){if(t&&t.contains(o.target))return;U?m(null,lo,o):lo()}},onDocumentKeyDown:o=>{o.keyCode===n.b.ESCAPE_KEY&&Z&&(U?m(null,lo,o):lo())},enableFlip:p,zIndex:W,flipBehavior:X})};E.displayName="Popover"}}]);
//# sourceMappingURL=../sourcemaps/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~807bc7cd.js.map