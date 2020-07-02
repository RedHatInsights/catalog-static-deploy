(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{164:function(e,r,o){"use strict";function t(e){for(var o in e)r.hasOwnProperty(o)||(r[o]=e[o])}Object.defineProperty(r,"__esModule",{value:!0}),t(o(339)),t(o(341))},339:function(e,r,o){"use strict";var t,i=this&&this.__extends||(t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(e,r)},function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}),n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var i in r=arguments[o])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0});var u=o(81),a=o(32),s=o(340);!function(e){e.Equal="equal",e.In="in"}(r.ResourceDefinitionFilterOperationEnum||(r.ResourceDefinitionFilterOperationEnum={})),r.AccessApiAxiosParamCreator=function(e){return{getPrincipalAccess:function(r,o,t,i,a){if(void 0===a&&(a={}),null==r)throw new s.RequiredError("application","Required parameter application was null or undefined when calling getPrincipalAccess.");var p,d=u.parse("/access/",!0);e&&(p=e.baseOptions);var l=n(n({method:"GET"},p),a),c={};e&&(e.username||e.password)&&(l.auth={username:e.username,password:e.password}),void 0!==r&&(c.application=r),void 0!==o&&(c.username=o),void 0!==t&&(c.limit=t),void 0!==i&&(c.offset=i),d.query=n(n(n({},d.query),c),a.query),delete d.search;var h=p&&p.headers?p.headers:{};return l.headers=n(n(n({},{}),h),a.headers),{url:u.format(d),options:l}}}},r.AccessApiFp=function(e){return{getPrincipalAccess:function(o,t,i,u,p){var d=r.AccessApiAxiosParamCreator(e).getPrincipalAccess(o,t,i,u,p);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},d.options),{url:r+d.url});return e.request(o)}}}},r.AccessApiFactory=function(e,o,t){return{getPrincipalAccess:function(i,n,u,a,s){return r.AccessApiFp(e).getPrincipalAccess(i,n,u,a,s)(t,o)}}};var p=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.getPrincipalAccess=function(e,o,t,i,n){return r.AccessApiFp(this.configuration).getPrincipalAccess(e,o,t,i,n)(this.axios,this.basePath)},o}(s.BaseAPI);r.AccessApi=p,r.GroupApiAxiosParamCreator=function(e){return{addPrincipalToGroup:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling addPrincipalToGroup.");if(null==o)throw new s.RequiredError("groupPrincipalIn","Required parameter groupPrincipalIn was null or undefined when calling addPrincipalToGroup.");var i,a="/groups/{uuid}/principals/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"POST"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),l["Content-Type"]="application/json",p.query=n(n(n({},p.query),{}),t.query),delete p.search;var c=i&&i.headers?i.headers:{};d.headers=n(n(n({},l),c),t.headers);var h="string"!=typeof o||"application/json"===d.headers["Content-Type"];return d.data=h?JSON.stringify(void 0!==o?o:{}):o||"",{url:u.format(p),options:d}},addRoleToGroup:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling addRoleToGroup.");if(null==o)throw new s.RequiredError("groupRoleIn","Required parameter groupRoleIn was null or undefined when calling addRoleToGroup.");var i,a="/groups/{uuid}/roles/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"POST"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),l["Content-Type"]="application/json",p.query=n(n(n({},p.query),{}),t.query),delete p.search;var c=i&&i.headers?i.headers:{};d.headers=n(n(n({},l),c),t.headers);var h="string"!=typeof o||"application/json"===d.headers["Content-Type"];return d.data=h?JSON.stringify(void 0!==o?o:{}):o||"",{url:u.format(p),options:d}},createGroup:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("group","Required parameter group was null or undefined when calling createGroup.");var t,i=u.parse("/groups/",!0);e&&(t=e.baseOptions);var a=n(n({method:"POST"},t),o),p={};e&&(e.username||e.password)&&(a.auth={username:e.username,password:e.password}),p["Content-Type"]="application/json",i.query=n(n(n({},i.query),{}),o.query),delete i.search;var d=t&&t.headers?t.headers:{};a.headers=n(n(n({},p),d),o.headers);var l="string"!=typeof r||"application/json"===a.headers["Content-Type"];return a.data=l?JSON.stringify(void 0!==r?r:{}):r||"",{url:u.format(i),options:a}},deleteGroup:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling deleteGroup.");var t,i="/groups/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),a=u.parse(i,!0);e&&(t=e.baseOptions);var p=n(n({method:"DELETE"},t),o);e&&(e.username||e.password)&&(p.auth={username:e.username,password:e.password}),a.query=n(n(n({},a.query),{}),o.query),delete a.search;var d=t&&t.headers?t.headers:{};return p.headers=n(n(n({},{}),d),o.headers),{url:u.format(a),options:p}},deletePrincipalFromGroup:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling deletePrincipalFromGroup.");if(null==o)throw new s.RequiredError("usernames","Required parameter usernames was null or undefined when calling deletePrincipalFromGroup.");var i,a="/groups/{uuid}/principals/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"DELETE"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),void 0!==o&&(l.usernames=o),p.query=n(n(n({},p.query),l),t.query),delete p.search;var c=i&&i.headers?i.headers:{};return d.headers=n(n(n({},{}),c),t.headers),{url:u.format(p),options:d}},deleteRoleFromGroup:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling deleteRoleFromGroup.");if(null==o)throw new s.RequiredError("roles","Required parameter roles was null or undefined when calling deleteRoleFromGroup.");var i,a="/groups/{uuid}/roles/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"DELETE"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),void 0!==o&&(l.roles=o),p.query=n(n(n({},p.query),l),t.query),delete p.search;var c=i&&i.headers?i.headers:{};return d.headers=n(n(n({},{}),c),t.headers),{url:u.format(p),options:d}},getGroup:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling getGroup.");var t,i="/groups/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),a=u.parse(i,!0);e&&(t=e.baseOptions);var p=n(n({method:"GET"},t),o);e&&(e.username||e.password)&&(p.auth={username:e.username,password:e.password}),a.query=n(n(n({},a.query),{}),o.query),delete a.search;var d=t&&t.headers?t.headers:{};return p.headers=n(n(n({},{}),d),o.headers),{url:u.format(a),options:p}},getPrincipalsFromGroup:function(r,o,t,i,a,p){if(void 0===p&&(p={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling getPrincipalsFromGroup.");var d,l="/groups/{uuid}/principals/".replace("{uuid}",encodeURIComponent(String(r))),c=u.parse(l,!0);e&&(d=e.baseOptions);var h=n(n({method:"GET"},d),p),f={};e&&(e.username||e.password)&&(h.auth={username:e.username,password:e.password}),void 0!==o&&(f.principal_username=o),void 0!==t&&(f.limit=t),void 0!==i&&(f.offset=i),void 0!==a&&(f.order_by=a),c.query=n(n(n({},c.query),f),p.query),delete c.search;var v=d&&d.headers?d.headers:{};return h.headers=n(n(n({},{}),v),p.headers),{url:u.format(c),options:h}},listGroups:function(r,o,t,i,a,p,d,l,c,h){void 0===h&&(h={});var f,v=u.parse("/groups/",!0);e&&(f=e.baseOptions);var m=n(n({method:"GET"},f),h),P={};e&&(e.username||e.password)&&(m.auth={username:e.username,password:e.password}),void 0!==r&&(P.limit=r),void 0!==o&&(P.offset=o),void 0!==t&&(P.name=t),void 0!==i&&(P.scope=i),void 0!==a&&(P.username=a),p&&(P.uuid=p.join(s.COLLECTION_FORMATS.csv)),d&&(P.role_names=d.join(s.COLLECTION_FORMATS.csv)),void 0!==l&&(P.role_discriminator=l),void 0!==c&&(P.order_by=c),v.query=n(n(n({},v.query),P),h.query),delete v.search;var A=f&&f.headers?f.headers:{};return m.headers=n(n(n({},{}),A),h.headers),{url:u.format(v),options:m}},listRolesForGroup:function(r,o,t,i,a,p,d,l){if(void 0===l&&(l={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling listRolesForGroup.");var c,h="/groups/{uuid}/roles/".replace("{uuid}",encodeURIComponent(String(r))),f=u.parse(h,!0);e&&(c=e.baseOptions);var v=n(n({method:"GET"},c),l),m={};e&&(e.username||e.password)&&(v.auth={username:e.username,password:e.password}),void 0!==o&&(m.exclude=o),void 0!==t&&(m.role_name=t),void 0!==i&&(m.role_description=i),void 0!==a&&(m.limit=a),void 0!==p&&(m.offset=p),void 0!==d&&(m.order_by=d),f.query=n(n(n({},f.query),m),l.query),delete f.search;var P=c&&c.headers?c.headers:{};return v.headers=n(n(n({},{}),P),l.headers),{url:u.format(f),options:v}},updateGroup:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling updateGroup.");if(null==o)throw new s.RequiredError("group","Required parameter group was null or undefined when calling updateGroup.");var i,a="/groups/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"PUT"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),l["Content-Type"]="application/json",p.query=n(n(n({},p.query),{}),t.query),delete p.search;var c=i&&i.headers?i.headers:{};d.headers=n(n(n({},l),c),t.headers);var h="string"!=typeof o||"application/json"===d.headers["Content-Type"];return d.data=h?JSON.stringify(void 0!==o?o:{}):o||"",{url:u.format(p),options:d}}}},r.GroupApiFp=function(e){return{addPrincipalToGroup:function(o,t,i){var u=r.GroupApiAxiosParamCreator(e).addPrincipalToGroup(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}},addRoleToGroup:function(o,t,i){var u=r.GroupApiAxiosParamCreator(e).addRoleToGroup(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}},createGroup:function(o,t){var i=r.GroupApiAxiosParamCreator(e).createGroup(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},deleteGroup:function(o,t){var i=r.GroupApiAxiosParamCreator(e).deleteGroup(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},deletePrincipalFromGroup:function(o,t,i){var u=r.GroupApiAxiosParamCreator(e).deletePrincipalFromGroup(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}},deleteRoleFromGroup:function(o,t,i){var u=r.GroupApiAxiosParamCreator(e).deleteRoleFromGroup(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}},getGroup:function(o,t){var i=r.GroupApiAxiosParamCreator(e).getGroup(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},getPrincipalsFromGroup:function(o,t,i,u,p,d){var l=r.GroupApiAxiosParamCreator(e).getPrincipalsFromGroup(o,t,i,u,p,d);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},l.options),{url:r+l.url});return e.request(o)}},listGroups:function(o,t,i,u,p,d,l,c,h,f){var v=r.GroupApiAxiosParamCreator(e).listGroups(o,t,i,u,p,d,l,c,h,f);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},v.options),{url:r+v.url});return e.request(o)}},listRolesForGroup:function(o,t,i,u,p,d,l,c){var h=r.GroupApiAxiosParamCreator(e).listRolesForGroup(o,t,i,u,p,d,l,c);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},h.options),{url:r+h.url});return e.request(o)}},updateGroup:function(o,t,i){var u=r.GroupApiAxiosParamCreator(e).updateGroup(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}}}},r.GroupApiFactory=function(e,o,t){return{addPrincipalToGroup:function(i,n,u){return r.GroupApiFp(e).addPrincipalToGroup(i,n,u)(t,o)},addRoleToGroup:function(i,n,u){return r.GroupApiFp(e).addRoleToGroup(i,n,u)(t,o)},createGroup:function(i,n){return r.GroupApiFp(e).createGroup(i,n)(t,o)},deleteGroup:function(i,n){return r.GroupApiFp(e).deleteGroup(i,n)(t,o)},deletePrincipalFromGroup:function(i,n,u){return r.GroupApiFp(e).deletePrincipalFromGroup(i,n,u)(t,o)},deleteRoleFromGroup:function(i,n,u){return r.GroupApiFp(e).deleteRoleFromGroup(i,n,u)(t,o)},getGroup:function(i,n){return r.GroupApiFp(e).getGroup(i,n)(t,o)},getPrincipalsFromGroup:function(i,n,u,a,s,p){return r.GroupApiFp(e).getPrincipalsFromGroup(i,n,u,a,s,p)(t,o)},listGroups:function(i,n,u,a,s,p,d,l,c,h){return r.GroupApiFp(e).listGroups(i,n,u,a,s,p,d,l,c,h)(t,o)},listRolesForGroup:function(i,n,u,a,s,p,d,l){return r.GroupApiFp(e).listRolesForGroup(i,n,u,a,s,p,d,l)(t,o)},updateGroup:function(i,n,u){return r.GroupApiFp(e).updateGroup(i,n,u)(t,o)}}};var d=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.addPrincipalToGroup=function(e,o,t){return r.GroupApiFp(this.configuration).addPrincipalToGroup(e,o,t)(this.axios,this.basePath)},o.prototype.addRoleToGroup=function(e,o,t){return r.GroupApiFp(this.configuration).addRoleToGroup(e,o,t)(this.axios,this.basePath)},o.prototype.createGroup=function(e,o){return r.GroupApiFp(this.configuration).createGroup(e,o)(this.axios,this.basePath)},o.prototype.deleteGroup=function(e,o){return r.GroupApiFp(this.configuration).deleteGroup(e,o)(this.axios,this.basePath)},o.prototype.deletePrincipalFromGroup=function(e,o,t){return r.GroupApiFp(this.configuration).deletePrincipalFromGroup(e,o,t)(this.axios,this.basePath)},o.prototype.deleteRoleFromGroup=function(e,o,t){return r.GroupApiFp(this.configuration).deleteRoleFromGroup(e,o,t)(this.axios,this.basePath)},o.prototype.getGroup=function(e,o){return r.GroupApiFp(this.configuration).getGroup(e,o)(this.axios,this.basePath)},o.prototype.getPrincipalsFromGroup=function(e,o,t,i,n,u){return r.GroupApiFp(this.configuration).getPrincipalsFromGroup(e,o,t,i,n,u)(this.axios,this.basePath)},o.prototype.listGroups=function(e,o,t,i,n,u,a,s,p,d){return r.GroupApiFp(this.configuration).listGroups(e,o,t,i,n,u,a,s,p,d)(this.axios,this.basePath)},o.prototype.listRolesForGroup=function(e,o,t,i,n,u,a,s){return r.GroupApiFp(this.configuration).listRolesForGroup(e,o,t,i,n,u,a,s)(this.axios,this.basePath)},o.prototype.updateGroup=function(e,o,t){return r.GroupApiFp(this.configuration).updateGroup(e,o,t)(this.axios,this.basePath)},o}(s.BaseAPI);r.GroupApi=d,r.PolicyApiAxiosParamCreator=function(e){return{createPolicies:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("policyIn","Required parameter policyIn was null or undefined when calling createPolicies.");var t,i=u.parse("/policies/",!0);e&&(t=e.baseOptions);var a=n(n({method:"POST"},t),o),p={};e&&(e.username||e.password)&&(a.auth={username:e.username,password:e.password}),p["Content-Type"]="application/json",i.query=n(n(n({},i.query),{}),o.query),delete i.search;var d=t&&t.headers?t.headers:{};a.headers=n(n(n({},p),d),o.headers);var l="string"!=typeof r||"application/json"===a.headers["Content-Type"];return a.data=l?JSON.stringify(void 0!==r?r:{}):r||"",{url:u.format(i),options:a}},deletePolicy:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling deletePolicy.");var t,i="/policies/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),a=u.parse(i,!0);e&&(t=e.baseOptions);var p=n(n({method:"DELETE"},t),o);e&&(e.username||e.password)&&(p.auth={username:e.username,password:e.password}),a.query=n(n(n({},a.query),{}),o.query),delete a.search;var d=t&&t.headers?t.headers:{};return p.headers=n(n(n({},{}),d),o.headers),{url:u.format(a),options:p}},getPolicy:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling getPolicy.");var t,i="/policies/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),a=u.parse(i,!0);e&&(t=e.baseOptions);var p=n(n({method:"GET"},t),o);e&&(e.username||e.password)&&(p.auth={username:e.username,password:e.password}),a.query=n(n(n({},a.query),{}),o.query),delete a.search;var d=t&&t.headers?t.headers:{};return p.headers=n(n(n({},{}),d),o.headers),{url:u.format(a),options:p}},listPolicies:function(r,o,t,i,a,s,p,d){void 0===d&&(d={});var l,c=u.parse("/policies/",!0);e&&(l=e.baseOptions);var h=n(n({method:"GET"},l),d),f={};e&&(e.username||e.password)&&(h.auth={username:e.username,password:e.password}),void 0!==r&&(f.limit=r),void 0!==o&&(f.offset=o),void 0!==t&&(f.name=t),void 0!==i&&(f.scope=i),void 0!==a&&(f.group_name=a),void 0!==s&&(f.group_uuid=s),void 0!==p&&(f.order_by=p),c.query=n(n(n({},c.query),f),d.query),delete c.search;var v=l&&l.headers?l.headers:{};return h.headers=n(n(n({},{}),v),d.headers),{url:u.format(c),options:h}},updatePolicy:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling updatePolicy.");if(null==o)throw new s.RequiredError("policyIn","Required parameter policyIn was null or undefined when calling updatePolicy.");var i,a="/policies/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"PUT"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),l["Content-Type"]="application/json",p.query=n(n(n({},p.query),{}),t.query),delete p.search;var c=i&&i.headers?i.headers:{};d.headers=n(n(n({},l),c),t.headers);var h="string"!=typeof o||"application/json"===d.headers["Content-Type"];return d.data=h?JSON.stringify(void 0!==o?o:{}):o||"",{url:u.format(p),options:d}}}},r.PolicyApiFp=function(e){return{createPolicies:function(o,t){var i=r.PolicyApiAxiosParamCreator(e).createPolicies(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},deletePolicy:function(o,t){var i=r.PolicyApiAxiosParamCreator(e).deletePolicy(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},getPolicy:function(o,t){var i=r.PolicyApiAxiosParamCreator(e).getPolicy(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},listPolicies:function(o,t,i,u,p,d,l,c){var h=r.PolicyApiAxiosParamCreator(e).listPolicies(o,t,i,u,p,d,l,c);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},h.options),{url:r+h.url});return e.request(o)}},updatePolicy:function(o,t,i){var u=r.PolicyApiAxiosParamCreator(e).updatePolicy(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}}}},r.PolicyApiFactory=function(e,o,t){return{createPolicies:function(i,n){return r.PolicyApiFp(e).createPolicies(i,n)(t,o)},deletePolicy:function(i,n){return r.PolicyApiFp(e).deletePolicy(i,n)(t,o)},getPolicy:function(i,n){return r.PolicyApiFp(e).getPolicy(i,n)(t,o)},listPolicies:function(i,n,u,a,s,p,d,l){return r.PolicyApiFp(e).listPolicies(i,n,u,a,s,p,d,l)(t,o)},updatePolicy:function(i,n,u){return r.PolicyApiFp(e).updatePolicy(i,n,u)(t,o)}}};var l=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.createPolicies=function(e,o){return r.PolicyApiFp(this.configuration).createPolicies(e,o)(this.axios,this.basePath)},o.prototype.deletePolicy=function(e,o){return r.PolicyApiFp(this.configuration).deletePolicy(e,o)(this.axios,this.basePath)},o.prototype.getPolicy=function(e,o){return r.PolicyApiFp(this.configuration).getPolicy(e,o)(this.axios,this.basePath)},o.prototype.listPolicies=function(e,o,t,i,n,u,a,s){return r.PolicyApiFp(this.configuration).listPolicies(e,o,t,i,n,u,a,s)(this.axios,this.basePath)},o.prototype.updatePolicy=function(e,o,t){return r.PolicyApiFp(this.configuration).updatePolicy(e,o,t)(this.axios,this.basePath)},o}(s.BaseAPI);r.PolicyApi=l,r.PrincipalApiAxiosParamCreator=function(e){return{listPrincipals:function(r,o,t,i,a,s){void 0===s&&(s={});var p,d=u.parse("/principals/",!0);e&&(p=e.baseOptions);var l=n(n({method:"GET"},p),s),c={};e&&(e.username||e.password)&&(l.auth={username:e.username,password:e.password}),void 0!==r&&(c.limit=r),void 0!==o&&(c.offset=o),void 0!==t&&(c.usernames=t),void 0!==i&&(c.sort_order=i),void 0!==a&&(c.email=a),d.query=n(n(n({},d.query),c),s.query),delete d.search;var h=p&&p.headers?p.headers:{};return l.headers=n(n(n({},{}),h),s.headers),{url:u.format(d),options:l}}}},r.PrincipalApiFp=function(e){return{listPrincipals:function(o,t,i,u,p,d){var l=r.PrincipalApiAxiosParamCreator(e).listPrincipals(o,t,i,u,p,d);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},l.options),{url:r+l.url});return e.request(o)}}}},r.PrincipalApiFactory=function(e,o,t){return{listPrincipals:function(i,n,u,a,s,p){return r.PrincipalApiFp(e).listPrincipals(i,n,u,a,s,p)(t,o)}}};var c=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.listPrincipals=function(e,o,t,i,n,u){return r.PrincipalApiFp(this.configuration).listPrincipals(e,o,t,i,n,u)(this.axios,this.basePath)},o}(s.BaseAPI);r.PrincipalApi=c,r.RoleApiAxiosParamCreator=function(e){return{createRoles:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("roleIn","Required parameter roleIn was null or undefined when calling createRoles.");var t,i=u.parse("/roles/",!0);e&&(t=e.baseOptions);var a=n(n({method:"POST"},t),o),p={};e&&(e.username||e.password)&&(a.auth={username:e.username,password:e.password}),p["Content-Type"]="application/json",i.query=n(n(n({},i.query),{}),o.query),delete i.search;var d=t&&t.headers?t.headers:{};a.headers=n(n(n({},p),d),o.headers);var l="string"!=typeof r||"application/json"===a.headers["Content-Type"];return a.data=l?JSON.stringify(void 0!==r?r:{}):r||"",{url:u.format(i),options:a}},deleteRole:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling deleteRole.");var t,i="/roles/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),a=u.parse(i,!0);e&&(t=e.baseOptions);var p=n(n({method:"DELETE"},t),o);e&&(e.username||e.password)&&(p.auth={username:e.username,password:e.password}),a.query=n(n(n({},a.query),{}),o.query),delete a.search;var d=t&&t.headers?t.headers:{};return p.headers=n(n(n({},{}),d),o.headers),{url:u.format(a),options:p}},getRole:function(r,o){if(void 0===o&&(o={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling getRole.");var t,i="/roles/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),a=u.parse(i,!0);e&&(t=e.baseOptions);var p=n(n({method:"GET"},t),o);e&&(e.username||e.password)&&(p.auth={username:e.username,password:e.password}),a.query=n(n(n({},a.query),{}),o.query),delete a.search;var d=t&&t.headers?t.headers:{};return p.headers=n(n(n({},{}),d),o.headers),{url:u.format(a),options:p}},getRoleAccess:function(r,o,t,i){if(void 0===i&&(i={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling getRoleAccess.");var a,p="/roles/{uuid}/access/".replace("{uuid}",encodeURIComponent(String(r))),d=u.parse(p,!0);e&&(a=e.baseOptions);var l=n(n({method:"GET"},a),i),c={};e&&(e.username||e.password)&&(l.auth={username:e.username,password:e.password}),void 0!==o&&(c.limit=o),void 0!==t&&(c.offset=t),d.query=n(n(n({},d.query),c),i.query),delete d.search;var h=a&&a.headers?a.headers:{};return l.headers=n(n(n({},{}),h),i.headers),{url:u.format(d),options:l}},listRoles:function(r,o,t,i,a,p,d,l){void 0===l&&(l={});var c,h=u.parse("/roles/",!0);e&&(c=e.baseOptions);var f=n(n({method:"GET"},c),l),v={};e&&(e.username||e.password)&&(f.auth={username:e.username,password:e.password}),void 0!==r&&(v.limit=r),void 0!==o&&(v.offset=o),void 0!==t&&(v.name=t),void 0!==i&&(v.scope=i),void 0!==a&&(v.order_by=a),p&&(v.add_fields=p.join(s.COLLECTION_FORMATS.csv)),void 0!==d&&(v.username=d),h.query=n(n(n({},h.query),v),l.query),delete h.search;var m=c&&c.headers?c.headers:{};return f.headers=n(n(n({},{}),m),l.headers),{url:u.format(h),options:f}},updateRole:function(r,o,t){if(void 0===t&&(t={}),null==r)throw new s.RequiredError("uuid","Required parameter uuid was null or undefined when calling updateRole.");if(null==o)throw new s.RequiredError("roleWithAccess","Required parameter roleWithAccess was null or undefined when calling updateRole.");var i,a="/roles/{uuid}/".replace("{uuid}",encodeURIComponent(String(r))),p=u.parse(a,!0);e&&(i=e.baseOptions);var d=n(n({method:"PUT"},i),t),l={};e&&(e.username||e.password)&&(d.auth={username:e.username,password:e.password}),l["Content-Type"]="application/json",p.query=n(n(n({},p.query),{}),t.query),delete p.search;var c=i&&i.headers?i.headers:{};d.headers=n(n(n({},l),c),t.headers);var h="string"!=typeof o||"application/json"===d.headers["Content-Type"];return d.data=h?JSON.stringify(void 0!==o?o:{}):o||"",{url:u.format(p),options:d}}}},r.RoleApiFp=function(e){return{createRoles:function(o,t){var i=r.RoleApiAxiosParamCreator(e).createRoles(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},deleteRole:function(o,t){var i=r.RoleApiAxiosParamCreator(e).deleteRole(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},getRole:function(o,t){var i=r.RoleApiAxiosParamCreator(e).getRole(o,t);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},i.options),{url:r+i.url});return e.request(o)}},getRoleAccess:function(o,t,i,u){var p=r.RoleApiAxiosParamCreator(e).getRoleAccess(o,t,i,u);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},p.options),{url:r+p.url});return e.request(o)}},listRoles:function(o,t,i,u,p,d,l,c){var h=r.RoleApiAxiosParamCreator(e).listRoles(o,t,i,u,p,d,l,c);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},h.options),{url:r+h.url});return e.request(o)}},updateRole:function(o,t,i){var u=r.RoleApiAxiosParamCreator(e).updateRole(o,t,i);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},u.options),{url:r+u.url});return e.request(o)}}}},r.RoleApiFactory=function(e,o,t){return{createRoles:function(i,n){return r.RoleApiFp(e).createRoles(i,n)(t,o)},deleteRole:function(i,n){return r.RoleApiFp(e).deleteRole(i,n)(t,o)},getRole:function(i,n){return r.RoleApiFp(e).getRole(i,n)(t,o)},getRoleAccess:function(i,n,u,a){return r.RoleApiFp(e).getRoleAccess(i,n,u,a)(t,o)},listRoles:function(i,n,u,a,s,p,d,l){return r.RoleApiFp(e).listRoles(i,n,u,a,s,p,d,l)(t,o)},updateRole:function(i,n,u){return r.RoleApiFp(e).updateRole(i,n,u)(t,o)}}};var h=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.createRoles=function(e,o){return r.RoleApiFp(this.configuration).createRoles(e,o)(this.axios,this.basePath)},o.prototype.deleteRole=function(e,o){return r.RoleApiFp(this.configuration).deleteRole(e,o)(this.axios,this.basePath)},o.prototype.getRole=function(e,o){return r.RoleApiFp(this.configuration).getRole(e,o)(this.axios,this.basePath)},o.prototype.getRoleAccess=function(e,o,t,i){return r.RoleApiFp(this.configuration).getRoleAccess(e,o,t,i)(this.axios,this.basePath)},o.prototype.listRoles=function(e,o,t,i,n,u,a,s){return r.RoleApiFp(this.configuration).listRoles(e,o,t,i,n,u,a,s)(this.axios,this.basePath)},o.prototype.updateRole=function(e,o,t){return r.RoleApiFp(this.configuration).updateRole(e,o,t)(this.axios,this.basePath)},o}(s.BaseAPI);r.RoleApi=h,r.StatusApiAxiosParamCreator=function(e){return{getStatus:function(r){void 0===r&&(r={});var o,t=u.parse("/status/",!0);e&&(o=e.baseOptions);var i=n(n({method:"GET"},o),r);e&&(e.username||e.password)&&(i.auth={username:e.username,password:e.password}),t.query=n(n(n({},t.query),{}),r.query),delete t.search;var a=o&&o.headers?o.headers:{};return i.headers=n(n(n({},{}),a),r.headers),{url:u.format(t),options:i}}}},r.StatusApiFp=function(e){return{getStatus:function(o){var t=r.StatusApiAxiosParamCreator(e).getStatus(o);return function(e,r){void 0===e&&(e=a.default),void 0===r&&(r=s.BASE_PATH);var o=n(n({},t.options),{url:r+t.url});return e.request(o)}}}},r.StatusApiFactory=function(e,o,t){return{getStatus:function(i){return r.StatusApiFp(e).getStatus(i)(t,o)}}};var f=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.getStatus=function(e){return r.StatusApiFp(this.configuration).getStatus(e)(this.axios,this.basePath)},o}(s.BaseAPI);r.StatusApi=f},340:function(e,r,o){"use strict";var t,i=this&&this.__extends||(t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(e,r)},function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)});Object.defineProperty(r,"__esModule",{value:!0});var n=o(32);r.BASE_PATH="https://raw.githubusercontent.com/api/rbac/v1".replace(/\/+$/,""),r.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};var u=function(e,o,t){void 0===o&&(o=r.BASE_PATH),void 0===t&&(t=n.default),this.basePath=o,this.axios=t,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)};r.BaseAPI=u;var a=function(e){function r(r,o){var t=e.call(this,o)||this;return t.field=r,t.name="RequiredError",t}return i(r,e),r}(Error);r.RequiredError=a},341:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(e){void 0===e&&(e={}),this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions};r.Configuration=t}}]);
//# sourceMappingURL=../sourcemaps/lib~App~c6d1b060.js.map