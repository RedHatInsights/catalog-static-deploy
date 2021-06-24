(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{621:function(e,t,a){"use strict";var s=a(29),i=Object(s.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"Ansible Automation Services Catalog can be added by following the"},platformsDocTitle:{id:"platforms.doc.title",defaultMessage:"Ansible Automation Platform 2.0 BETA documentation"},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summary"},platformDetails:{id:"platforms.details",defaultMessage:"Details"},platformActivity:{id:"platforms.activity",defaultMessage:"Activity"},cloudConnectorId:{id:"platform.cloudConnectorId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}});t.a=i},641:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const s=a(2),i=s.__importStar(a(0)),l=s.__importDefault(a(41)),n=a(1),r=a(152);t.CardContext=i.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:a=null,id:o="",className:d="",component:m="article",isHoverable:c=!1,isCompact:f=!1,isSelectable:u=!1,isSelected:p=!1,isFlat:v=!1,isExpanded:x=!1,isRounded:T=!1,isLarge:L=!1,isFullHeight:g=!1,isPlain:I=!1,ouiaId:h,ouiaSafe:E=!0}=e,b=s.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const y=m,_=r.useOUIAProps(t.Card.displayName,h,E);return f&&L&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),L=!1),i.createElement(t.CardContext.Provider,{value:{cardId:o,isExpanded:x}},i.createElement(y,Object.assign({id:o,className:n.css(l.default.card,c&&l.default.modifiers.hoverable,f&&l.default.modifiers.compact,u&&l.default.modifiers.selectable,p&&u&&l.default.modifiers.selected,x&&l.default.modifiers.expanded,v&&l.default.modifiers.flat,T&&l.default.modifiers.rounded,L&&l.default.modifiers.displayLg,g&&l.default.modifiers.fullHeight,I&&l.default.modifiers.plain,d),tabIndex:u?"0":void 0},b,_),a))},t.Card.displayName="Card"},816:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const s=a(2),i=s.__importStar(a(0)),l=s.__importDefault(a(41)),n=a(1);t.CardBody=e=>{var{children:t=null,className:a="",component:r="div",isFilled:o=!0}=e,d=s.__rest(e,["children","className","component","isFilled"]);const m=r;return i.createElement(m,Object.assign({className:n.css(l.default.cardBody,!o&&l.default.modifiers.noFill,a)},d),t)},t.CardBody.displayName="CardBody"},835:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextList=t.TextListVariants=void 0;const s=a(2),i=s.__importStar(a(0)),l=a(1);var n;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:a="",component:r=n.ul}=e,o=s.__rest(e,["children","className","component"]);const d=r;return i.createElement(d,Object.assign({},o,{"data-pf-content":!0,className:l.css(a)}),t)},t.TextList.displayName="TextList"},836:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextListItem=t.TextListItemVariants=void 0;const s=a(2),i=s.__importStar(a(0)),l=a(1);var n;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:a="",component:r=n.li}=e,o=s.__rest(e,["children","className","component"]);const d=r;return i.createElement(d,Object.assign({},o,{"data-pf-content":!0,className:l.css(a)}),t)},t.TextListItem.displayName="TextListItem"},881:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),l=a(577),n=a(621),r=a(28),o=a(27),d=a(641),m=a(816),c=a(195),f=a(196),u=a(66),p=a(68),v=a(835),x=a(836),T=a(605);t.default=function(){var e,t,a,s,L=Object(r.a)(),g=Object(o.e)((function(e){return e.platformReducer.selectedPlatform}));return i.a.createElement(l.a,{type:"content"},i.a.createElement(c.Grid,{hasGutter:!0},i.a.createElement(f.GridItem,{span:5,className:"info-bar pf-u-p-0"},i.a.createElement(d.Card,null,i.a.createElement(m.CardBody,null,i.a.createElement(p.TextContent,null,i.a.createElement(u.Text,{className:"pf-u-mb-md",component:u.TextVariants.h2},L(n.a.platformDetails)),i.a.createElement(v.TextList,{component:v.TextListVariants.dl},i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.platformVersion)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},null==g||null===(e=g.info)||void 0===e?void 0:e.version),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.ansibleVersion)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},null==g||null===(t=g.info)||void 0===t?void 0:t.ansible_version),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.dateAdded)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},i.a.createElement(T.a,{date:null==g?void 0:g.created_at})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.cloudConnectorId)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},null==g?void 0:g.cloud_connector_id)))))," "),i.a.createElement(f.GridItem,{span:7,className:"info-bar pf-u-p-0"},i.a.createElement(d.Card,null,i.a.createElement(m.CardBody,null,i.a.createElement(p.TextContent,null,i.a.createElement(u.Text,{className:"pf-u-mb-md",component:u.TextVariants.h2},L(n.a.platformActivity)),i.a.createElement(v.TextList,{component:v.TextListVariants.dl},i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.refreshState)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},null==g?void 0:g.refresh_state),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.refreshStarted)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},i.a.createElement(T.a,{date:null==g?void 0:g.refresh_started_at,variant:"relative"})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.refreshFinished)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},i.a.createElement(T.a,{date:g.refresh_finished_at,variant:"relative"})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.lastSuccessfulRefresh)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},i.a.createElement(T.a,{date:null==g?void 0:g.last_successful_refresh_at,variant:"relative"})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.lastRefreshMessage)),null==g||null===(a=g.last_refresh_message)||void 0===a?void 0:a.split(/\n/g).map((function(e,t){return i.a.createElement(x.TextListItem,{key:"message-key-".concat(t),component:x.TextListItemVariants.dd},e)})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.availabilityMessage)),null==g||null===(s=g.availability_message)||void 0===s?void 0:s.split(/\n/g).map((function(e,t){return i.a.createElement(x.TextListItem,{key:"availability-message-key-".concat(t),component:x.TextListItemVariants.dd},e)})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.lastChecked)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},i.a.createElement(T.a,{date:null==g?void 0:g.last_checked_at,variant:"relative"})),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dt},L(n.a.lastAvailable)),i.a.createElement(x.TextListItem,{component:x.TextListItemVariants.dd},i.a.createElement(T.a,{date:null==g?void 0:g.last_available_at,variant:"relative"}))))))," ")))}}}]);
//# sourceMappingURL=../sourcemaps/platform-details~31ecd969.js.map