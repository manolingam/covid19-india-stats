(this.webpackJsonpcovid19stats=this.webpackJsonpcovid19stats||[]).push([[0],[,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAABvAAAAbwHxotxDAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANJQTFRF////gICAVVVVZmZmVYBVSW1tVXFVSYBbVYBVUXleTYBZToBYUXpdTnpeUX1cUHpaTn1eT31dUXteT3xeT3tdUoBfUXxdUXtdUH1cUHtcVoJeVYFdUH1dUHxbUHxcWoViUH1bUH1cWIRhWYNgUHxcWYVhUXtcUHxcUHxdWoVhWIRhUH1bUHxdUHtcUHxcXIdjUHxcWIRhWoRhUHxdUHxcUHxcUHtcWINgUHxcW4ZiaJJpZI5mfKRzhat3bJZrmsCDstaPt9qSw+WYy+ycze6dz/Ce2ah3uQAAAEB0Uk5TAAIDBQYHCQ4SExQaLC4vMDE3PERNTlJVVllcXWZtb32JjZGSlpibnKWlqLCzur3ExcfHydja3efs8PHy9PT4+lgg7O8AAADBSURBVBgZBcGLQsFQAADQI6lF6KEHEkKpyUqKLcWm+/+/1DmAaDaLAKC+7PWWdQDaXxdcfLUBB8O3muMjtbfhAVTn40Pnn2ccjudVTO+5WzaVL7mfIm5Wnl5Prq5Kr4+VZoy49TEoP3x/P5QHH60Y8fomet/s95v36GYd4/q0sdqGEMJ21Ti9hW66C38/P39hl3ahnxWhyCaTrAhF1keSh13aoZPuQp4gyberBjRW2zxB8ruIgGjxm+B5VAIojV78AxRKGOEwt2rDAAAAAElFTkSuQmCC"},,,,,function(e,t,a){e.exports=a.p+"static/media/logo.22f5a4e9.png"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(9),i=a.n(r),c=(a(17),a(7)),o=a.n(c),l=a(10),d=a(2),m=a(3),h=a(4),u=a(5),p=a(1),A=a.n(p),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("pieChart");new A.a(e,{type:"pie",data:{labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{data:[this.props.total,this.props.active,this.props.discharged,this.props.deaths],backgroundColor:["#fe346e","mediumpurple","#1eb2a6","#323232"]}]},options:{legend:{align:"center"},maintainAspectRatio:!1}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"pie-chart-container"},n.a.createElement("canvas",{id:"pieChart"}))}}]),a}(n.a.Component),v=a(6),E=a.n(v),g=(a(21),function(e){return console.log(e),n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"num-div"},n.a.createElement("p",{className:"overall-count",id:"cases"},"Cases: ",e.stats.statewise[0].confirmed),n.a.createElement("div",{className:"increase-stat animated flash"},n.a.createElement("p",null,e.stats.statewise[0].deltaconfirmed),n.a.createElement("img",{className:"arrow",src:E.a,alt:"arrow"}))),n.a.createElement("div",{className:"active"},n.a.createElement("p",{id:"active",className:"overall-count"},"Active: ",e.stats.statewise[0].active)),n.a.createElement("div",{className:"num-div"},n.a.createElement("p",{id:"recovered",className:"overall-count"},"Recovered: ",e.stats.statewise[0].recovered),n.a.createElement("div",{className:"increase-stat animated flash"},n.a.createElement("p",null,e.stats.statewise[0].deltarecovered),n.a.createElement("img",{className:"arrow",src:E.a,alt:"arrow"}))),n.a.createElement("div",{className:"num-div"},n.a.createElement("p",{className:"overall-count"},"Deaths: ",e.stats.statewise[0].deaths),n.a.createElement("div",{className:"increase-stat animated flash"},n.a.createElement("p",null,e.stats.statewise[0].deltadeaths),n.a.createElement("img",{className:"arrow",src:E.a,alt:"arrow"}))))}),b=a(11),C=a.n(b),x=(a(22),a(23),[]),y=[],w=[],U=[],B=[],N=[],H=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).drawCharts=function(){e.state.historyStats.data.map((function(e){x.push(e.day),y.push(e.summary.total)})),e.state.rawStats.statewise.map((function(e){w.push(e.state),U.push(e.active)}));var t=e.state.districtStats["Tamil Nadu"].districtData;for(var a in t)B.push(a),N.push(t[a].confirmed);var s=document.getElementById("districtBarChart");new A.a(s,{type:"horizontalBar",data:{labels:B,datasets:[{label:"Confirmed Cases",data:N,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1,minBarLength:5}]},options:{title:{display:!0,text:"Confirmed cases (TamilNadu)"},maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,99,132,0.2)"}}],xAxes:[{gridLines:{display:!0}}]}}});var n=document.getElementById("stateBarChart");new A.a(n,{type:"horizontalBar",data:{labels:w,datasets:[{label:"Confirmed Cases",data:U,backgroundColor:"#d8345f",borderColor:"#d8345f",borderWidth:1,minBarLength:5}]},options:{title:{display:!0,text:"Confirmed cases (State)"},maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,99,132,0.2)"}}],xAxes:[{gridLines:{display:!0}}]}}});var r=document.getElementById("countryChart").getContext("2d");new A.a(r,{type:"line",data:{labels:x,datasets:[{label:"Confirmed Cases",data:y,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1}]},options:{title:{display:!0,text:"Confirmed cases in India"},maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,99,132,0.2)"}}],xAxes:[{gridLines:{display:!1}}]}}})},e.state={},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,s,n,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){t=e}));case 2:return e.next=4,fetch("https://api.rootnet.in/covid19-in/stats/history").then((function(e){return e.json()})).then((function(e){n=e}));case 4:return e.next=6,fetch("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){return e.json()})).then((function(e){a=e}));case 6:return e.next=8,fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(e){s=e}));case 8:this.setState({rawStats:t,stateStats:a,districtStats:s,historyStats:n},(function(){r.drawCharts()}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.districtStats?n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"container"},n.a.createElement("section",{id:"home"},n.a.createElement("div",{className:"corner-ribbon top-left sticky red shadow"},n.a.createElement("a",{className:"white",href:"https://manolingam.github.io/portfolio",target:"_blank",rel:"noopener noreferrer"},"Design by Mano")),n.a.createElement("p",{id:"data-source"},"* data from Covid19India"),n.a.createElement("p",{id:"last-updated"},"* ",this.state.stateStats.lastRefreshed),n.a.createElement("div",{className:"nav-container"},n.a.createElement("img",{src:C.a,height:"100px",width:"auto",alt:"logo",id:"logo"}),n.a.createElement("p",{id:"app-title"},"Covid-19 India Stats"),n.a.createElement(g,{stats:this.state.rawStats}),n.a.createElement(f,{total:this.state.rawStats.statewise[0].confirmed,active:this.state.rawStats.statewise[0].active,discharged:this.state.rawStats.statewise[0].recovered,deaths:this.state.rawStats.statewise[0].deaths}),n.a.createElement("a",{href:"#country-section"},"More"))),n.a.createElement("section",null,n.a.createElement("div",{id:"country-section",className:"chart-container"},n.a.createElement("canvas",{id:"countryChart"})),n.a.createElement("a",{href:"#state-section"},"More")),n.a.createElement("section",null,n.a.createElement("div",{id:"state-section",className:"chart-container"},n.a.createElement("canvas",{id:"stateBarChart"})),n.a.createElement("a",{href:"#district-section"},"More")),n.a.createElement("section",null,n.a.createElement("div",{id:"district-section",className:"chart-container"},n.a.createElement("canvas",{id:"districtBarChart"})),n.a.createElement("a",{href:"#home"},"Back to top")))):n.a.createElement("div",null)}}]),a}(n.a.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.67f3d648.chunk.js.map