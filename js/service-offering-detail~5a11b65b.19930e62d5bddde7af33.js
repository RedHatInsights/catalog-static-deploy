(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{434:function(e,t,a){"use strict";var n=a(49),r=Object(n.defineMessages)({shared:{id:"common.labels.shared",defaultMessage:"Shared"},portfolio:{id:"common.labels.portfolio",defaultMessage:"Portfolio"},platform:{id:"common.labels.platform",defaultMessage:"Platform"},name:{id:"common.labels.name",defaultMessage:"Name"},description:{id:"common.labels.description",defaultMessage:"Description"},loading:{id:"common.labels.loading",defaultMessage:"Loading"},cancel:{id:"common.labels.cancel",defaultMessage:"Cancel"},save:{id:"common.labels.save",defaultMessage:"Save"},confirm:{id:"common.labels.confirm",defaultMessage:"Confirm"},create:{id:"common.labels.create",defaultMessage:"Create"},owner:{id:"common.labels.owner",defaultMessage:"Owner"},sortBy:{id:"common.labels.sort-by",defaultMessage:"Sort by"},updated:{id:"common.labels.updated",defaultMessage:"Updated"},created:{id:"common.states.created",defaultMessage:"Created"}});t.a=r},469:function(e,t,a){"use strict";var n=(0,a(49).defineMessages)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},553:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(29),r=a.n(n),l=a(30),o=a.n(l),s=a(0),i=a.n(s),c=a(31),m=a(209);function f(){var e=o()(["\n  align-self: ",";\n  align-items: ",";\n  flex: ",";\n"]);return f=function(){return e},e}var d=Object(c.b)((function(e){e.alignStart,e.alignSelf,e.grow;var t=r()(e,["alignStart","alignSelf","grow"]);return i.a.createElement(m.LevelItem,t)}))(f(),(function(e){var t=e.alignSelf;return t||"inherit"}),(function(e){return e.alignStart?"flex-start !important":"inherit"}),(function(e){return e.grow?"1":"0"}))},834:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a.n(n),l=a(0),o=a.n(l),s=a(16),i=a(75),c=a(76),m=a(71),f=a(50),d=a(90),u=a(682),p=a.n(u),g=a(130),v=a(131),b=a(73),E=a(454),M=a(74),T=a(460),h=a(632),x=a(553),w=a(86),S=a(434),N=a(469),y=["service","platform"];t.default=function(){var e=Object(w.a)().formatMessage,t=Object(b.a)(y),a=r()(t,1)[0],n=Object(l.useState)(!0),u=r()(n,2),C=u[0],O=u[1],j=Object(s.useDispatch)(),k=Object(s.useSelector)((function(e){return e.platformReducer.serviceOffering})),D=k.service,F=k.source;return Object(l.useEffect)((function(){O(!0),j(Object(E.e)(a.service,a.platform)).then((function(){return O(!1)})).catch((function(){return O(!1)}))}),[a.service,a.platform]),C?o.a.createElement(g.Section,{className:"global-primary-background full-height pf-u-p-lg"},o.a.createElement(M.g,null)):o.a.createElement(g.Section,{className:"global-primary-background full-height"},o.a.createElement(i.Grid,{hasGutter:!0,className:"pf-u-p-lg"},o.a.createElement("div",{className:"pf-u-mb-sm"},o.a.createElement(h.a,null)),o.a.createElement(c.GridItem,{sm:12,className:"pf-u-mb-md"},o.a.createElement(d.Level,null,o.a.createElement(x.a,{alignStart:!0,className:"pf-l-flex"},o.a.createElement(T.a,{src:F.icon_url,height:64}),o.a.createElement(m.TextContent,null,o.a.createElement(f.Text,{component:"h1"},D.name),o.a.createElement(f.Text,{component:"small"},e(N.a.offeringTitle)))))),o.a.createElement(c.GridItem,{md:3,lg:2},o.a.createElement(m.TextContent,null,o.a.createElement(f.Text,{className:"font-14"},e(S.a.platform)),o.a.createElement(f.Text,{id:"source",className:"overflow-wrap",component:f.TextVariants.p},F.name),o.a.createElement(f.Text,{className:"font-14"},e(S.a.created)),o.a.createElement(f.Text,{id:"created_at",className:"overflow-wrap",component:f.TextVariants.p},o.a.createElement(v.DateFormat,{type:"relative",date:D.created_at})))),o.a.createElement(c.GridItem,{md:9,lg:10},o.a.createElement(m.TextContent,null,o.a.createElement(f.Text,{className:"font-14"},e(S.a.name)),o.a.createElement(f.Text,{id:"description",component:f.TextVariants.p},D.name),o.a.createElement(f.Text,{className:"font-14"},e(S.a.description)),o.a.createElement(f.Text,{id:"long_description",component:f.TextVariants.p},D.description),o.a.createElement("hr",{className:"pf-c-divider"}),o.a.createElement(f.Text,{component:"h2"},e(N.a.offeringParameters)),o.a.createElement(p.a,{src:D.extra})))))}}}]);
//# sourceMappingURL=../sourcemaps/service-offering-detail~5a11b65b.js.map