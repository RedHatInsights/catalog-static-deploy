(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1031:function(e,t,a){"use strict";a.r(t);var s=a(107),l=a.n(s),r=a(0),i=a.n(r),n=a(26),o=a(198),m=a(199),f=a(69),c=a(68),d=a(720),u=a(863),p=a.n(u),g=a(241),v=a(238),h=a(109),b=a(673),M=a(108),E=a(681),T=a(654),y=a(116),x=a(129),N=a(656),S=a(27),w=["service","platform"];t.default=function(){var e=Object(S.a)(),t=Object(h.a)(w),a=l()(t,1)[0],s=Object(r.useState)(!0),u=l()(s,2),C=u[0],_=u[1],O=Object(n.d)(),j=Object(n.e)((function(e){return e.platformReducer.serviceOffering})),k=j.service,R=j.source;return Object(r.useEffect)((function(){_(!0),O(Object(b.e)(a.service,a.platform)).then((function(){return _(!1)})).catch((function(){return _(!1)}))}),[a.service,a.platform]),C?i.a.createElement(g.Section,{className:"global-primary-background full-height pf-u-p-lg"},i.a.createElement(M.h,null)):i.a.createElement(g.Section,{className:"global-primary-background full-height"},i.a.createElement(o.Grid,{hasGutter:!0,className:"pf-u-p-lg"},i.a.createElement("div",{className:"pf-u-mb-sm"},i.a.createElement(T.a,null)),i.a.createElement(m.GridItem,{sm:12,className:"pf-u-mb-md"},i.a.createElement(d.Level,null,i.a.createElement(y.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},i.a.createElement(E.a,{src:R.icon_url,height:64}),i.a.createElement(f.TextContent,null,i.a.createElement(c.Text,{component:"h1"},k.name),i.a.createElement(c.Text,{component:"small"},e(N.a.offeringTitle)))))),i.a.createElement(m.GridItem,{md:3,lg:2},i.a.createElement(f.TextContent,null,i.a.createElement(c.Text,{className:"font-14"},e(x.a.platform)),i.a.createElement(c.Text,{id:"source",className:"overflow-wrap",component:c.TextVariants.p},R.name),i.a.createElement(c.Text,{className:"font-14"},e(x.a.created)),i.a.createElement(c.Text,{id:"created_at",className:"overflow-wrap",component:c.TextVariants.p},i.a.createElement(v.DateFormat,{type:"relative",date:k.created_at})))),i.a.createElement(m.GridItem,{md:9,lg:10},i.a.createElement(f.TextContent,null,i.a.createElement(c.Text,{className:"font-14"},e(x.a.name)),i.a.createElement(c.Text,{id:"description",component:c.TextVariants.p},k.name),i.a.createElement(c.Text,{className:"font-14"},e(x.a.description)),i.a.createElement(c.Text,{id:"long_description",component:c.TextVariants.p},k.description),i.a.createElement("hr",{className:"pf-c-divider"}),i.a.createElement(c.Text,{component:"h2"},e(N.a.offeringParameters)),i.a.createElement(p.a,{src:k.extra})))))}},656:function(e,t,a){"use strict";var s=a(29),l=Object(s.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"To get started, add an Ansible Tower cluster as a source."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summmary"},cloudConnectorId:{id:"platform.cloudConnectorId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}});t.a=l},720:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Level=void 0;const s=a(2),l=s.__importStar(a(0)),r=a(1),i=s.__importDefault(a(194));t.Level=e=>{var{hasGutter:t,className:a="",children:n=null}=e,o=s.__rest(e,["hasGutter","className","children"]);return l.createElement("div",Object.assign({},o,{className:r.css(i.default.level,t&&i.default.modifiers.gutter,a)}),n)},t.Level.displayName="Level"}}]);
//# sourceMappingURL=../sourcemaps/service-offering-detail~31ecd969.js.map