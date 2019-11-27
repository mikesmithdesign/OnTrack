(this["webpackJsonptrain-app"]=this["webpackJsonptrain-app"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/train.585577ad.svg"},19:function(e,a,t){e.exports=t(44)},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(17),r=t.n(s),c=t(2),i=t(3),o=t(5),m=t(4),u=t(6),d=(t(24),t(7)),f=t.n(d),p=(t(42),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={trains:[],arrivals:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.departureboard.io/api/v2.0/getDeparturesByCRS/".concat(this.props.startPoint.crs,"/?apiKey=68eaf87e-6cc1-49ca-9e95-f8f1da42ac99&filterStation=").concat(this.props.endPoint.crs,"&numServices=5")).then((function(a){console.log(a.data.trainServices),e.setState({trains:a.data.trainServices})})).catch((function(e){return console.log(e)})),f.a.get("https://api.departureboard.io/api/v2.0/getArrivalsByCRS/".concat(this.props.endPoint.crs,"/?apiKey=68eaf87e-6cc1-49ca-9e95-f8f1da42ac99&timeOffset=42&filterStation=").concat(this.props.startPoint.crs,"&numServices=5")).then((function(a){console.log(a.data.trainServices),e.setState({arrivals:a.data.trainServices})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,a=e.trains,t=e.arrivals,n=this.props,s=n.startPoint,r=n.endPoint;return l.a.createElement("div",{className:"timesContainer"},l.a.createElement("ul",{className:"trainTimes"},a.map((function(e,a){return l.a.createElement("li",{key:e.serviceID,className:"animated fadeInUp",style:{animationDelay:"".concat(1.45+.15*a,"s")}},l.a.createElement("div",{className:"cardTop"},l.a.createElement("div",{className:"times"},l.a.createElement("div",{className:"departure"},"On time"!==e.etd?l.a.createElement("span",{className:"delayed"},l.a.createElement("p",null,e.etd),l.a.createElement("s",null,e.std)):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,e.std),l.a.createElement("s",{className:"fade"},e.std))),l.a.createElement("div",{className:"dots"},l.a.createElement("ul",null,l.a.createElement("li",{className:"animated fadeInDown",style:{animationDelay:"".concat(1.6+.15*a,"s")}}),l.a.createElement("li",{className:"animated fadeInDown",style:{animationDelay:"".concat(1.7+.15*a,"s")}}),l.a.createElement("li",{className:"animated fadeInDown",style:{animationDelay:"".concat(1.8+.15*a,"s")}}),l.a.createElement("li",{className:"animated fadeInDown",style:{animationDelay:"".concat(1.9+.15*a,"s")}}),l.a.createElement("li",{className:"animated fadeInDown",style:{animationDelay:"".concat(2+.15*a,"s")}}))),e.subsequentCallingPointsList[0].subsequentCallingPoints.filter((function(e){return e.crs===r.crs})).map((function(a){return l.a.createElement("div",{className:"arrival",key:e.serviceID},"On time"!==a.et?l.a.createElement("span",{className:"delayed"},l.a.createElement("p",null,a.et),l.a.createElement("s",null,a.st)):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,a.st),l.a.createElement("s",{className:"fade"},a.st)))}))),l.a.createElement("div",{className:"location"},l.a.createElement("div",{className:"start"},l.a.createElement("p",null,s.crs," ",l.a.createElement("br",null),l.a.createElement("span",null,e.platform?"Platform ".concat(e.platform):"Platform --"))),l.a.createElement("div",{className:"time"},l.a.createElement("p",null,(new Date("01/01/2007 "+e.subsequentCallingPointsList[0].subsequentCallingPoints.filter((function(e){return e.crs===r.crs})).map((function(e){return function(){switch(e.et){case"On time":return e.st;default:return e.et}}()}))).getTime()-new Date("01/01/2007 "+function(){switch(e.etd){case"On time":return e.std;default:return e.etd}}()).getTime())/1e3/60,"m")),l.a.createElement("div",{className:"end"},l.a.createElement("p",null,r.crs," ",l.a.createElement("br",null),t.filter((function(a){return a.sta===e.subsequentCallingPointsList[0].subsequentCallingPoints[e.subsequentCallingPointsList[0].subsequentCallingPoints.length-1].st&&a.origin[0].locationName===e.origin[0].locationName})).map((function(a){return l.a.createElement("span",{key:e.serviceID},a.platform?"Platform ".concat(a.platform):"Platform --")})))))),l.a.createElement("div",{className:"cardBottom"},l.a.createElement("p",null,l.a.createElement("span",{className:"operator"},e.operator," ")," service"," ",l.a.createElement("br",null),"from"," ",l.a.createElement("span",{className:"location"},e.origin[0].locationName)," ","to"," ",l.a.createElement("span",{className:"location"},e.subsequentCallingPointsList[0].subsequentCallingPoints[e.subsequentCallingPointsList[0].subsequentCallingPoints.length-1].locationName)," "),l.a.createElement("a",{href:""},"+")))}))))}}]),a}(n.Component)),E=t(18),v=t.n(E);t(43);var N=function(e){var a=e.startPoint,t=e.endPoint;return l.a.createElement("header",null,l.a.createElement("div",{className:"headerLocation"},l.a.createElement("p",{className:"animated fadeIn"},a.location),l.a.createElement("p",{className:"animated fadeIn"},t.location)),l.a.createElement("div",{className:"headerCrs"},l.a.createElement("h2",{className:"animated fadeIn"},a.crs),l.a.createElement("div",{className:"graphicContainer"},l.a.createElement("ul",null,l.a.createElement("li",{className:"animated fadeInDown"}),l.a.createElement("li",{className:"animated fadeInDown"}),l.a.createElement("li",{className:"animated fadeInDown"})),l.a.createElement("img",{src:v.a,alt:"",className:"animated fadeInDown"}),l.a.createElement("ul",null,l.a.createElement("li",{className:"animated fadeInDown"}),l.a.createElement("li",{className:"animated fadeInDown"}),l.a.createElement("li",{className:"animated fadeInDown"}))),l.a.createElement("h2",{className:"animated fadeIn"},t.crs)))},h=(n.Component,function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={startPoint:{crs:"EGH",location:"Egham"},endPoint:{crs:"WAT",location:"London Waterloo"}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.startPoint,t=e.endPoint;return l.a.createElement("div",{className:"App"},l.a.createElement(N,{startPoint:a,endPoint:t}),l.a.createElement(p,{startPoint:a,endPoint:t}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7bd050b0.chunk.js.map