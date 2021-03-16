(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{581:function(e,t,a){"use strict";var s=a(30),i=Object(s.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"To get started, add an Ansible Tower cluster as a source."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summmary"},cloudConnectorId:{id:"platform.cloudConnectorId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}});t.a=i},608:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const s=a(2),i=s.__importStar(a(0)),r=s.__importDefault(a(50)),l=a(1),n=a(143);t.CardContext=i.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:a=null,id:o="",className:d="",component:m="article",isHoverable:c=!1,isCompact:f=!1,isSelectable:u=!1,isSelected:p=!1,isFlat:v=!1,isExpanded:x=!1,isRounded:T=!1,isLarge:L=!1,ouiaId:I,ouiaSafe:g=!0}=e,h=s.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","isExpanded","isRounded","isLarge","ouiaId","ouiaSafe"]);const b=m,E=n.useOUIAProps(t.Card.displayName,I,g);return f&&L&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),L=!1),i.createElement(t.CardContext.Provider,{value:{cardId:o,isExpanded:x}},i.createElement(b,Object.assign({id:o,className:l.css(r.default.card,c&&r.default.modifiers.hoverable,f&&r.default.modifiers.compact,u&&r.default.modifiers.selectable,p&&u&&r.default.modifiers.selected,x&&r.default.modifiers.expanded,v&&r.default.modifiers.flat,T&&r.default.modifiers.rounded,L&&r.default.modifiers.displayLg,d),tabIndex:u?"0":void 0},h,E),a))},t.Card.displayName="Card"},870:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const s=a(2),i=s.__importStar(a(0)),r=s.__importDefault(a(50)),l=a(1);t.CardBody=e=>{var{children:t=null,className:a="",component:n="div",isFilled:o=!0}=e,d=s.__rest(e,["children","className","component","isFilled"]);const m=n;return i.createElement(m,Object.assign({className:l.css(r.default.cardBody,!o&&r.default.modifiers.noFill,a)},d),t)},t.CardBody.displayName="CardBody"},900:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextList=t.TextListVariants=void 0;const s=a(2),i=s.__importStar(a(0)),r=a(1);var l;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(l=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:a="",component:n=l.ul}=e,o=s.__rest(e,["children","className","component"]);const d=n;return i.createElement(d,Object.assign({},o,{"data-pf-content":!0,className:r.css(a)}),t)},t.TextList.displayName="TextList"},901:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextListItem=t.TextListItemVariants=void 0;const s=a(2),i=s.__importStar(a(0)),r=a(1);var l;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(l=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:a="",component:n=l.li}=e,o=s.__rest(e,["children","className","component"]);const d=n;return i.createElement(d,Object.assign({},o,{"data-pf-content":!0,className:r.css(a)}),t)},t.TextListItem.displayName="TextListItem"},971:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),r=a(522),l=a(581),n=a(28),o=a(27),d=a(608),m=a(870),c=a(66),f=a(67),u=a(900),p=a(901),v=a(549);t.default=function(){var e,t,a,s,x=Object(n.a)(),T=Object(o.e)((function(e){return e.platformReducer.selectedPlatform}));return i.a.createElement(r.a,{type:"content"},i.a.createElement(d.Card,null,i.a.createElement(m.CardBody,null,i.a.createElement(f.TextContent,null,i.a.createElement(c.Text,{className:"pf-u-mb-md",component:c.TextVariants.h2},x(l.a.platformSummary)),i.a.createElement(u.TextList,{component:u.TextListVariants.dl},i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.platformVersion)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},null==T||null===(e=T.info)||void 0===e?void 0:e.version),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.ansibleVersion)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},null==T||null===(t=T.info)||void 0===t?void 0:t.ansible_version),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.dateAdded)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},i.a.createElement(v.a,{date:null==T?void 0:T.created_at})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.cloudConnectorId)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},null==T?void 0:T.cloud_connector_id),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.refreshState)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},null==T?void 0:T.refresh_state),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.refreshStarted)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},i.a.createElement(v.a,{date:null==T?void 0:T.refresh_started_at,variant:"relative"})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.refreshFinished)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},i.a.createElement(v.a,{date:T.refresh_finished_at,variant:"relative"})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.lastSuccessfulRefresh)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},i.a.createElement(v.a,{date:null==T?void 0:T.last_successful_refresh_at,variant:"relative"})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.lastRefreshMessage)),null==T||null===(a=T.last_refresh_message)||void 0===a?void 0:a.split(/\n/g).map((function(e,t){return i.a.createElement(p.TextListItem,{key:"message-key-".concat(t),component:p.TextListItemVariants.dd},e)})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.availabilityMessage)),null==T||null===(s=T.availability_message)||void 0===s?void 0:s.split(/\n/g).map((function(e,t){return i.a.createElement(p.TextListItem,{key:"availability-message-key-".concat(t),component:p.TextListItemVariants.dd},e)})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.lastChecked)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},i.a.createElement(v.a,{date:null==T?void 0:T.last_checked_at,variant:"relative"})),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dt},x(l.a.lastAvailable)),i.a.createElement(p.TextListItem,{component:p.TextListItemVariants.dd},i.a.createElement(v.a,{date:null==T?void 0:T.last_available_at,variant:"relative"}))))))," ")}}}]);
//# sourceMappingURL=../sourcemaps/platform-details~31ecd969.js.map