webpackJsonp([3],{631:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(10),c=n(l),p=o(310),m=o(63),d=n(m),f=o(993);o(314);var h=function(e){function t(e){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){d.default.changeValue([{which:"solutionPLPIsLoaded",value:!0},{which:"solutionIsLoaded",value:!1},{which:"mapUiIsLoaded",value:!1}])},0),this.props.uiData.isUserServicesReceivedCounter&&setTimeout(function(){d.default.changeValue([{which:"isUserServicesReceivedCounter",value:e.props.uiData.isUserServicesReceivedCounter+1}])},0)}},{key:"componentDidUpdate",value:function(e){e.uiData.isUserServicesReceivedCounter!==this.props.uiData.isUserServicesReceivedCounter&&this.props.uiData.isUserServicesReceivedCounter&&(0,f.zopim_init)(!0)}},{key:"componentWillUnmount",value:function(){setTimeout(function(){d.default.changeValue([{which:"solutionPLPIsLoaded",value:!1}])},0)}},{key:"renderSolutionsPLPLayout",value:function(e){var t=this.props.industry+"/"+this.props.bundle,o=void 0,n=void 0,i=this.props,r=i.BrokerageMonitorYourMarket,a=i.LogisticsMonitorYourMarket,u=i.TrackYourCargo,l=i.ShipManagementMonitorYourMarket,p=i.MonitorYourFleet,m=i.FindNewCustomers,d=i.ServeYourCustomers;switch(t){case"ship-management/monitor-your-fleet":o=p,n=this.props.uiData.lexikon.shipManagementPLP.monitorFleet;break;case"ship-management/monitor-your-market":o=l,n=this.props.uiData.lexikon.shipManagementPLP.monitorMarket;break;case"ship-supply/serve-your-customers":o=d,n=this.props.uiData.lexikon.shipSupply.serveCustomers;break;case"ship-supply/find-new-customers":o=m,n=this.props.uiData.lexikon.shipSupply.newCustomers;break;case"logistics/track-your-cargo":o=u,n=this.props.uiData.lexikon.logisticsPLP.trackCargo;break;case"logistics/monitor-your-market":o=a,n=this.props.uiData.lexikon.logisticsPLP.monitorMarket;break;case"brokerage/monitor-your-market":o=r,n=this.props.uiData.lexikon.brokeragePLP.monitorMarket}return c.default.createElement(o,s({},e,{lexikon:n}))}},{key:"render",value:function(){return c.default.createElement("div",null,this.renderSolutionsPLPLayout(this.props))}}]),t}(c.default.Component);t.default=(0,p.lazilyLoadFactory)(h,{BrokerageMonitorYourMarket:function(){return(0,p.importLazy)(o.e(14).then(o.bind(null,1375)))},LogisticsMonitorYourMarket:function(){return(0,p.importLazy)(o.e(13).then(o.bind(null,1376)))},TrackYourCargo:function(){return(0,p.importLazy)(o.e(11).then(o.bind(null,1377)))},ShipManagementMonitorYourMarket:function(){return(0,p.importLazy)(o.e(12).then(o.bind(null,1378)))},MonitorYourFleet:function(){return(0,p.importLazy)(o.e(10).then(o.bind(null,1379)))},FindNewCustomers:function(){return(0,p.importLazy)(o.e(8).then(o.bind(null,1380)))},ServeYourCustomers:function(){return(0,p.importLazy)(o.e(7).then(o.bind(null,1381)))}})},993:function(e,t,o){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"SAT-PRO"!==mtGlobal.plan&&"SAT"!==mtGlobal.plan&&"PRO"!==mtGlobal.plan&&"PREMIUM"!==mtGlobal.plan&&!0!==e||($('footer[role="contentinfo"]').css("padding-bottom","45px"),window.zEmbed||function(e,t){var o,n,i,r,a,s=[],u=document.createElement("iframe");window.zEmbed=function(){s.push(arguments)},window.zE=window.zE||window.zEmbed,u.src="javascript:false",u.title="",u.role="presentation",(u.frameElement||u).style.cssText="display: none",i=document.getElementsByTagName("script"),i=i[i.length-1],i.parentNode.insertBefore(u,i),r=u.contentWindow,a=r.document;try{n=a}catch(e){o=document.domain,u.src='javascript:var d=document.open();d.domain="'+o+'";void(0);',n=a}n.open()._l=function(){var e=this.createElement("script");o&&(this.domain=o),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="marinetraffic.zendesk.com",this.zEQueue=s,this.body.appendChild(e)},n.write('<body onload="document._l();">'),n.close()}()),$(window).load(function(){$(".zopim").length>0&&$zopim(function(){function e(e){e>=1&&$zopim.livechat.window.show()}mtGlobal.fullName&&mtGlobal.email&&void 0!=$zopim&&($zopim.livechat.setName(mtGlobal.fullName),$zopim.livechat.setEmail(mtGlobal.email)),$zopim.livechat.setOnUnreadMsgs(e)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.zopim_init=n}});