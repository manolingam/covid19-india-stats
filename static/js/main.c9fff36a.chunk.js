(this.webpackJsonpcovid19stats=this.webpackJsonpcovid19stats||[]).push([[0],{19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAABvAAAAbwHxotxDAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANJQTFRF////gICAVVVVZmZmVYBVSW1tVXFVSYBbVYBVUXleTYBZToBYUXpdTnpeUX1cUHpaTn1eT31dUXteT3xeT3tdUoBfUXxdUXtdUH1cUHtcVoJeVYFdUH1dUHxbUHxcWoViUH1bUH1cWIRhWYNgUHxcWYVhUXtcUHxcUHxdWoVhWIRhUH1bUHxdUHtcUHxcXIdjUHxcWIRhWoRhUHxdUHxcUHxcUHtcWINgUHxcW4ZiaJJpZI5mfKRzhat3bJZrmsCDstaPt9qSw+WYy+ycze6dz/Ce2ah3uQAAAEB0Uk5TAAIDBQYHCQ4SExQaLC4vMDE3PERNTlJVVllcXWZtb32JjZGSlpibnKWlqLCzur3ExcfHydja3efs8PHy9PT4+lgg7O8AAADBSURBVBgZBcGLQsFQAADQI6lF6KEHEkKpyUqKLcWm+/+/1DmAaDaLAKC+7PWWdQDaXxdcfLUBB8O3muMjtbfhAVTn40Pnn2ccjudVTO+5WzaVL7mfIm5Wnl5Prq5Kr4+VZoy49TEoP3x/P5QHH60Y8fomet/s95v36GYd4/q0sdqGEMJ21Ti9hW66C38/P39hl3ahnxWhyCaTrAhF1keSh13aoZPuQp4gyberBjRW2zxB8ruIgGjxm+B5VAIojV78AxRKGOEwt2rDAAAAAElFTkSuQmCC"},28:function(e,t,a){e.exports=a.p+"static/media/logo.22f5a4e9.png"},35:function(e,t,a){e.exports=a(51)},40:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),i=a.n(r),c=(a(40),a(20)),o=a.n(c),l=a(23),d=a(24),m=a(11),u=a(31),h=a(30),p=a(7),f=a.n(p),E=a(25),v=a(26),g=a(29),A=a(32),b=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(E.a)(this,a),(e=t.call(this)).state={},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("pieChart");new f.a(e,{type:"pie",data:{labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{data:[this.props.total,this.props.active,this.props.discharged,this.props.deaths],backgroundColor:["#fe346e","mediumpurple","#1eb2a6","#323232"]}]},options:{legend:{align:"center"},maintainAspectRatio:!1}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"pie-chart-container"},s.a.createElement("canvas",{id:"pieChart"}))}}]),a}(s.a.Component),y=a(19),C=a.n(y),w=(a(44),function(e){return console.log(e),s.a.createElement("nav",{className:"nav"},s.a.createElement("div",{className:"num-div"},s.a.createElement("p",{className:"overall-count",id:"cases"},"Cases: ",e.stats.statewise[0].confirmed),s.a.createElement("div",{className:"increase-stat animated flash"},s.a.createElement("p",null,e.stats.statewise[0].deltaconfirmed),s.a.createElement("img",{className:"arrow",src:C.a,alt:"arrow"}))),s.a.createElement("div",{className:"active"},s.a.createElement("p",{id:"active",className:"overall-count"},"Active: ",e.stats.statewise[0].active)),s.a.createElement("div",{className:"num-div"},s.a.createElement("p",{id:"recovered",className:"overall-count"},"Recovered: ",e.stats.statewise[0].recovered),s.a.createElement("div",{className:"increase-stat animated flash"},s.a.createElement("p",null,e.stats.statewise[0].deltarecovered),s.a.createElement("img",{className:"arrow",src:C.a,alt:"arrow"}))),s.a.createElement("div",{className:"num-div"},s.a.createElement("p",{className:"overall-count"},"Deaths: ",e.stats.statewise[0].deaths),s.a.createElement("div",{className:"increase-stat animated flash"},s.a.createElement("p",null,e.stats.statewise[0].deltadeaths),s.a.createElement("img",{className:"arrow",src:C.a,alt:"arrow"}))))}),x=a(4),S=a(72),U=a(75),B=a(77),N=a(78),H=a(74),W=a(76),j=a(71),k=a(73),V=(a(45),Object(x.a)((function(e){return{root:{padding:"10px"},head:{backgroundColor:"white",color:"#fe346e",fontFamily:"'Share Tech Mono', monospace",fontSize:12},body:{fontSize:10,fontFamily:"'Share Tech Mono', monospace"},padding:"10px"}}))(N.a)),T=Object(x.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(j.a),I=Object(S.a)({container:{maxHeight:440}}),R=function(e){var t=I();return s.a.createElement("div",{className:"regional-stats"},s.a.createElement(k.a,{className:t.root},s.a.createElement(H.a,{className:t.container},s.a.createElement(U.a,{stickyHeader:!0,"aria-label":"sticky table"},s.a.createElement(W.a,null,s.a.createElement(j.a,null,s.a.createElement(V,null,"State"),s.a.createElement(V,{align:"right"},"Confirmed"),s.a.createElement(V,{align:"right"},"Cured"),s.a.createElement(V,{align:"right"},"Deaths"))),s.a.createElement(B.a,null,e.stats.map((function(e,t){return s.a.createElement(T,{key:t},s.a.createElement(V,{component:"th",scope:"row"},e.state),s.a.createElement(V,{align:"right"},e.confirmed),s.a.createElement(V,{align:"right"},e.recovered),s.a.createElement(V,{align:"right"},e.deaths))})))))))},D=a(28),O=a.n(D),F=(a(50),[]),L=[],Q=[],M=[],X=[],Z=[];f.a.defaults.global.defaultFontColor="black",f.a.defaults.global.defaultFontFamily="'Share Tech Mono', monospace",f.a.defaults.global.defaultFontSize=10;var Y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).drawCharts=function(){e.state.historyStats.data.map((function(e){F.push(e.day),L.push(e.summary.total)}));e.state.rawStats.statewise.shift();e.state.rawStats.statewise.map((function(e){Q.push(e.state),M.push(e.active)}));var t=e.state.districtStats["Tamil Nadu"].districtData;for(var a in t)X.push(a),Z.push(t[a].confirmed);var n=document.getElementById("districtBarChart");new f.a(n,{type:"horizontalBar",data:{labels:X,datasets:[{label:"Confirmed Cases",data:Z,backgroundColor:"#d8345f",borderColor:"#d8345f",borderWidth:1,minBarLength:5}]},options:{title:{display:!0,text:"Confirmed cases (TamilNadu)"},maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,99,132,0.2)"}}],xAxes:[{gridLines:{display:!0}}]}}});var s=document.getElementById("stateBarChart");new f.a(s,{type:"horizontalBar",data:{labels:Q,datasets:[{label:"Confirmed Cases",data:M,backgroundColor:"#d8345f",borderColor:"#d8345f",borderWidth:1,minBarLength:5}]},options:{title:{display:!0,text:"Confirmed cases (State)"},maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,99,132,0.2)"}}],xAxes:[{gridLines:{display:!0}}]}}});var r=document.getElementById("countryChart").getContext("2d");new f.a(r,{type:"line",data:{labels:F,datasets:[{label:"Confirmed Cases",data:L,backgroundColor:"white",borderColor:"#d8345f",borderWidth:1}]},options:{title:{display:!0,text:"Confirmed cases in India"},maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,99,132,0.2)"}}],xAxes:[{gridLines:{display:!1}}]}}})},e.state={},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,s,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){t=e}));case 2:return e.next=4,fetch("https://api.rootnet.in/covid19-in/stats/history").then((function(e){return e.json()})).then((function(e){s=e}));case 4:return e.next=6,fetch("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){return e.json()})).then((function(e){a=e}));case 6:return e.next=8,fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(e){n=e}));case 8:this.setState({rawStats:t,stateStats:a,districtStats:n,historyStats:s},(function(){r.drawCharts()}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.districtStats?s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"container"},s.a.createElement("section",{id:"home"},s.a.createElement("a",{id:"developer",href:"https://manolingam.github.io/portfolio",target:"_blank",rel:"noopener noreferrer"},"Design by Mano"),s.a.createElement("p",{id:"data-source"},"* data from Covid19India"),s.a.createElement("p",{id:"last-updated"},"* ",this.state.rawStats.statewise[0].lastupdatedtime),s.a.createElement("div",{className:"nav-container"},s.a.createElement("img",{src:O.a,height:"100px",width:"auto",alt:"logo",id:"logo"}),s.a.createElement("p",{id:"app-title"},"Covid-19 India Stats"),s.a.createElement(w,{stats:this.state.rawStats}),s.a.createElement(b,{total:this.state.rawStats.statewise[0].confirmed,active:this.state.rawStats.statewise[0].active,discharged:this.state.rawStats.statewise[0].recovered,deaths:this.state.rawStats.statewise[0].deaths}),s.a.createElement("a",{href:"#country-section"},"More"))),s.a.createElement("section",null,s.a.createElement(R,{stats:this.state.rawStats.statewise})),s.a.createElement("section",null,s.a.createElement("div",{id:"country-section",className:"chart-container"},s.a.createElement("canvas",{id:"countryChart"})),s.a.createElement("a",{href:"#state-section"},"More")),s.a.createElement("section",null,s.a.createElement("div",{id:"state-section",className:"chart-container"},s.a.createElement("canvas",{id:"stateBarChart"})),s.a.createElement("a",{href:"#district-section"},"More")),s.a.createElement("section",null,s.a.createElement("div",{id:"district-section",className:"chart-container"},s.a.createElement("canvas",{id:"districtBarChart"})),s.a.createElement("a",{href:"#home"},"Back to top")))):s.a.createElement("div",{className:"spinner-container"},s.a.createElement("div",{className:"spinner"}))}}]),a}(s.a.Component);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Y,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c9fff36a.chunk.js.map