(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{219:function(e,t){},271:function(e,t,n){},272:function(e,t,n){},280:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},420:function(e,t,n){},421:function(e,t,n){},426:function(e,t,n){},431:function(e,t){},432:function(e,t){},433:function(e,t){},434:function(e,t){},435:function(e,t){},436:function(e,t,n){},437:function(e,t,n){},438:function(e,t,n){},439:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(51),i=n.n(c),r=(n(271),n(7)),o=(n(272),n(31));function d(e){var t=new a.useState(e),n=Object(r.a)(t,2),s=n[0],c=n[1],i=new o.useHistory;return[function(){setTimeout((function(){c(!0),i.push("/")}),1e3)},function(){setTimeout((function(){c(!1),i.push("/login")}),1e3)},s]}var l=n(505),u=(n(280),n(513)),j=n(29),m=n(1),h=function(e){var t=new a.useState(""),n=Object(r.a)(t,2),c=n[0],i=n[1],d=new a.useState(""),h=Object(r.a)(d,2),b=h[0],O=h[1],g=new o.useHistory;return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("div",{className:"form",children:Object(m.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.login(),g.push("/")}(t)},children:[Object(m.jsx)(l.a,{required:!0,id:"outlined-required",label:"username",value:c,className:"input_field",onChange:function(e){return i(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{required:!0,id:"outlined-required",label:"password",value:b,onChange:function(e){return O(e.target.value)},className:"input_field"}),Object(m.jsx)(j.b,{to:"forgat",className:"forgat_link",children:"forgat password"}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"contained",className:"login_button",type:"submit",children:"Login"})]})}),Object(m.jsxs)("h3",{style:{position:"absolute",bottom:"".concat(10,"%"),padding:"".concat(20,"px"),color:"white"},children:["for demo perpose username",Object(m.jsx)("sapn",{style:{fontStyle:"italic",color:"red"},children:" login "}),"and password",Object(m.jsx)("span",{style:{fontStyle:"italic",color:"red"},children:" login "})," forgat passwrod is not active for you"]})]})},b=n(514),O=n(515),g=n(225),x=n.n(g),p=n(226),f=n.n(p),_=n(227),v=n.n(_),w=n(228),k=n.n(w),y=(n(283),function(e){var t=a.useState("recents"),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(o.useRouteMatch)(),d=i.url;i.path;return Object(m.jsx)("div",{className:"Navbar",children:Object(m.jsxs)(b.a,{sx:{width:500},value:s,onChange:function(e,t){c(t)},className:"nav-items",children:[Object(m.jsx)(j.b,{to:"".concat(d,"home"),children:Object(m.jsx)(O.a,{label:"test",value:"test",icon:Object(m.jsx)(x.a,{className:"nav-icons"})})}),Object(m.jsx)(j.b,{to:"".concat(d,"performance"),children:Object(m.jsx)(O.a,{label:"performance",value:"performance",icon:Object(m.jsx)(f.a,{className:"nav-icons"})})}),Object(m.jsx)(j.b,{to:"".concat(d,"answerKey"),children:Object(m.jsx)(O.a,{label:"Answer Key",value:"Answer Key",icon:Object(m.jsx)(v.a,{className:"nav-icons"})})}),Object(m.jsx)(O.a,{label:"Logout",value:"Logout",icon:Object(m.jsx)(k.a,{className:"nav-icons"}),onClick:function(){e.logout()}})]})})}),N=(n(284),function(){return Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("h1",{className:"header_heading",children:"Aimers \ud83d\udd25 hub"})})}),q=n(81),D=n(252),I=["auth","Component"],S=function(e){var t=e.auth,n=e.Component,a=Object(D.a)(e,I);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o.Route,Object(q.a)(Object(q.a)({},a),{},{render:function(e){return t?Object(m.jsx)(n,Object(q.a)({},e)):t?void 0:Object(m.jsx)(o.Redirect,{to:"/login"})}}))})},M=(n(285),n(499)),C=n(500),F=n(504),T=n(241),E=n(242),R=n(118),P=n(115),A=n(253),L=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){!function(){if(null!=e.data.lineChartData1&&null!=e.data.lineChartData2){for(var t=e.data.lineChartData1[0].data,n=e.data.lineChartData2[0].data,a=[],s=0;s<5;s++){var i={TestId:t[s].test_id,Testname:n[s].test_name,marks1:t[s].precentageMarks,marks2:n[s].precentageMarks};a[s]=i}c(a)}}()}),[e]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(M.a,{width:"95%",height:"95%",children:Object(m.jsxs)(C.a,{data:s,margin:{top:10,left:10,right:10,bottom:10},children:[Object(m.jsx)(F.a,{strokeDasharray:"3 3"}),Object(m.jsx)(T.a,{dataKey:"Testname"}),Object(m.jsx)(E.a,{}),Object(m.jsx)(R.a,{}),Object(m.jsx)(P.a,{}),Object(m.jsx)(A.a,{type:"monotone",dataKey:"marks1",stroke:"#8884d8",activeDot:{r:8}}),Object(m.jsx)(A.a,{type:"monotone",dataKey:"marks2",stroke:"#82ca9d",activeDot:{r:8}})]})})})},K=(n(417),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],c=n[1],i=e.prompt,o=e.onchange,d=e.value,l=e.options,u=e.flag;return Object(m.jsx)("div",{className:"dropdown",children:Object(m.jsx)("div",{className:"control",children:Object(m.jsxs)("div",{className:"select-value",children:[d.name?d.name:i,Object(m.jsx)("div",{className:"arrow ".concat(s?"open":null),onClick:function(){c((function(e){return!e}))}}),Object(m.jsx)("div",{className:"options ".concat(s?"open":null),children:l.map((function(e){return Object(m.jsx)("div",{className:"option ".concat((u?e.sid:e.test_id)===d.sid?"selected":""),onClick:function(){var t={id:u?e.sid:e.test_id,name:e.name};o(t),c(!1)},children:e.name},u?e.sid:e.test_id)}))})]})})})}),B=n(509),H=n(243),z=n(245),Q=(n(418),["#0088FE","#00C49F","#FFBB28"]),Z=Math.PI/180,J=function(e){var t=e.cx,n=e.cy,a=e.midAngle,s=e.innerRadius,c=e.outerRadius,i=e.percent,r=(e.index,s+.5*(c-s)),o=t+r*Math.cos(-a*Z),d=n+r*Math.sin(-a*Z);return Object(m.jsx)("text",{x:o,y:d,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",children:"".concat((100*i).toFixed(0),"%")})},Y=function(e){var t=new a.useState([]),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){c(e.data)}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"label-box",children:[Object(m.jsx)("div",{style:{color:"#0088FE"},children:"right"}),Object(m.jsx)("div",{style:{color:"#00C49F"},children:"wrong"}),Object(m.jsx)("div",{style:{color:"#FFBB28"},children:"skip"})]}),Object(m.jsx)(M.a,{width:"90%",height:"90%",children:Object(m.jsx)(B.a,{width:200,height:200,children:Object(m.jsx)(H.a,{data:s,cx:"50%",cy:"50%",labelLine:!1,label:J,outerRadius:80,fill:"#8884d8",dataKey:"value",nameKey:"name",children:s.map((function(e,t){return Object(m.jsx)(z.a,{fill:Q[t%Q.length]},"cell-".concat(t))}))})})})]})},G=function(){var e=[{sid:1,name:"kohinoor khan",data:[{test_id:1,test_name:"test1",precentageMarks:80},{test_id:2,test_name:"test2",precentageMarks:50},{test_id:3,test_name:"test3",precentageMarks:60},{test_id:4,test_name:"test4",precentageMarks:40},{test_id:5,test_name:"test5",precentageMarks:90}],marks:[{test_id:1,name:"test1",precentageOfright:10,percentageOfwrong:30,percentageOfnegative_marks:60},{test_id:2,name:"test2",precentageOfright:20,percentageOfwrong:40,percentageOfnegative_marks:40},{test_id:3,name:"test3",precentageOfright:50,percentageOfwrong:40,percentageOfnegative_marks:10},{test_id:4,name:"test4",precentageOfright:80,percentageOfwrong:10,percentageOfnegative_marks:10},{test_id:5,name:"test5",precentageOfright:90,percentageOfwrong:5,percentageOfnegative_marks:5}]},{sid:2,name:"nishant",data:[{test_id:1,test_name:"test1",precentageMarks:70},{test_id:2,test_name:"test2",precentageMarks:20},{test_id:3,test_name:"test3",precentageMarks:90},{test_id:4,test_name:"test4",precentageMarks:10},{test_id:5,test_name:"test5",precentageMarks:60}],marks:[{test_id:1,name:"test1",precentageOfright:80,percentageOfwrong:5,percentageOfnegative_marks:15},{test_id:2,name:"test2",precentageOfright:60,percentageOfwrong:30,percentageOfnegative_marks:10},{test_id:3,name:"test3",precentageOfright:50,percentageOfwrong:40,percentageOfnegative_marks:10},{test_id:4,name:"test4",precentageOfright:90,percentageOfwrong:5,percentageOfnegative_marks:5},{test_id:5,name:"test5",precentageOfright:80,percentageOfwrong:10,percentageOfnegative_marks:10}]},{sid:3,name:"ankit",data:[{test_id:1,test_name:"test1",precentageMarks:90},{test_id:2,test_name:"test2",precentageMarks:10},{test_id:3,test_name:"test3",precentageMarks:60},{test_id:4,test_name:"test4",precentageMarks:50},{test_id:5,test_name:"test5",precentageMarks:80}],marks:[{test_id:1,name:"test1",precentageOfright:10,percentageOfwrong:80,percentageOfnegative_marks:10},{test_id:2,name:"test2",precentageOfright:50,percentageOfwrong:40,percentageOfnegative_marks:10},{test_id:3,name:"test3",precentageOfright:30,percentageOfwrong:60,percentageOfnegative_marks:10},{test_id:4,name:"test4",precentageOfright:80,percentageOfwrong:10,percentageOfnegative_marks:10},{test_id:5,name:"test5",precentageOfright:90,percentageOfwrong:5,percentageOfnegative_marks:5}]}],t=[{sid:1,name:"kohinoor"},{sid:2,name:"nishnat"},{sid:3,name:"ankit"}],n=Object(a.useState)({name:"kohinoor",id:1}),s=Object(r.a)(n,2),c=s[0],i=s[1],o=Object(a.useState)({name:"nishant",id:2}),d=Object(r.a)(o,2),l=d[0],u=d[1],j=Object(a.useState)({name:"test3",id:3}),h=Object(r.a)(j,2),b=h[0],O=h[1],g=function(){var t=c.id,n=e.filter((function(e){return e.sid===t}));return n=n[0].marks},x={lineChartData1:(g(),e.filter((function(e){return e.sid===c.id}))),lineChartData2:e.filter((function(e){return e.sid===l.id}))},p=g(),f=function(){var e=null;if(p){var t=p.filter((function(e){return b.id===e.test_id}));e=[{name:"right",value:(t=t[0]).precentageOfright},{name:"wrong",value:t.percentageOfwrong},{name:"negative",value:t.percentageOfnegative_marks}]}return e}();return Object(m.jsxs)("div",{className:"performance",children:[Object(m.jsxs)("div",{className:"custamize_LineChart",children:[Object(m.jsxs)("div",{className:"upper_dropdown",children:[Object(m.jsx)("div",{className:"dropdown_box",children:Object(m.jsx)(K,{prompt:"you select !!",options:t,value:c,onchange:function(e){i({id:e.id,name:e.name})},flag:1})}),Object(m.jsx)("div",{className:"dropdown_box",children:Object(m.jsx)(K,{prompt:"you select !!",options:t,value:l,onchange:function(e){u({id:e.id,name:e.name})},flag:1})})]}),Object(m.jsx)("div",{className:"Linechart",children:Object(m.jsx)(M.a,{width:"100%",height:"100%",children:Object(m.jsx)(L,{data:x})})})]}),Object(m.jsxs)("div",{className:"custamize_PieChart",children:[Object(m.jsx)("div",{className:"bottom_dropdown",children:Object(m.jsx)("div",{className:"dropdown_box",children:p&&Object(m.jsx)(K,{options:p,prompt:"you select !!",value:b,onchange:function(e){O({id:e.id,name:e.name})},flag:0})})}),Object(m.jsx)("div",{className:"Piechart",children:Object(m.jsx)(M.a,{width:"100%",height:"100%",children:Object(m.jsx)(Y,{data:f})})})]})]})},W=n(516),X=n(518),U=n(517),V=n(511),$=(n(420),function(e){var t=e.data,n=Object(a.useState)(""),s=Object(r.a)(n,2),c=s[0],i=s[1],o=function(e){return e<=9?"0"+e:e},d=function(e){var t=new Date(e).toLocaleString(void 0,{timeZone:"Asia/Kolkata"}),n=new Date(t);return n.getFullYear()+"-"+o(n.getMonth()+1)+"-"+o(n.getDate())},l=function(e){var t=new Date(e).toLocaleString(void 0,{timeZone:"Asia/Kolkata"}),n=new Date(t);return o(n.getHours())+":"+o(n.getMinutes())},h=d(t.timmingStart),b=d(t.timingEnd),O=l(t.timmingStart),g=l(t.timingEnd),x=(new Date(t.timingEnd)-new Date(t.timmingStart))/6e4;return!c&&function(){var e=new Date(t.timmingStart),n=new Date(t.timingEnd),a=new Date;a-n>0?i("ended"):a-e<0?i("upcoming"):a-e>=0&&n-a>=0&&i("goingon")}(),e&&Object(m.jsxs)(W.a,{sx:{minWidth:275},className:"".concat(c," card"),children:[Object(m.jsxs)(U.a,{children:[Object(m.jsx)(V.a,{variant:"h5",className:"card_heading",children:t.testName}),Object(m.jsxs)(V.a,{sx:{mb:1.5},className:"card_body",children:["starting date ",h," ",O,Object(m.jsx)("br",{}),"ending date ",b," ",g,Object(m.jsx)("br",{}),"number of question ",t.numberOfQuestion,Object(m.jsx)("br",{}),"Time ",x," minutes",Object(m.jsx)("br",{}),"Full Marks ",t.marks]})]}),Object(m.jsx)(X.a,{children:(t.testId,"ended"===c?Object(m.jsx)(j.b,{to:"review/".concat(t.testId),style:{textDecoration:"none"},children:Object(m.jsx)(u.a,{variant:"contained",className:"card-button",children:"Review"})}):"upcoming"===c?Object(m.jsx)(u.a,{variant:"contained",className:"card-button",disabled:!0,children:"disabled link"}):Object(m.jsx)(j.b,{to:"test/testInstruction/".concat(t.testId),children:Object(m.jsx)(u.a,{variant:"contained",className:"card-button",children:"start"})}))})]})}),ee=(n(421),n(506)),te=function(){var e=new Date,t=Date.parse(e)-24192e5,n=Date.parse(e)+864e5,s=Object(a.useState)({startDate:t,endDate:n}),c=Object(r.a)(s,2),i=c[0],o=c[1],d=Object(a.useState)(null),l=Object(r.a)(d,2),u=l[0],j=l[1],h={test:[{testId:456,testName:"test1",timmingStart:new Date(Date.parse(e)),timingEnd:new Date(Date.parse(e)+36e5),marks:"30",numberOfQuestion:30},{testId:546,testName:"test2",timmingStart:new Date(Date.parse(e)+72e5),timingEnd:new Date(Date.parse(e)+108e5),marks:"30",numberOfQuestion:30},{testId:390,testName:"test3",timmingStart:"2021-12-12T12:00:00",timingEnd:"2021-12-12T12:50:00",marks:"30",numberOfQuestion:30},{testId:378,testName:"test4",status:"running",timmingStart:"2021-12-15T12:00:00",timingEnd:"2021-12-15T15:50:00",marks:"30",numberOfQuestion:30},{testId:456,testName:"test5",timmingStart:"2021-12-13T12:00:00",timingEnd:"2021-12-02T13:50:00",marks:"30",numberOfQuestion:30}]},b=function(e){return e<=9?"0"+e:e},O=function(e){var t=new Date(e).toLocaleString(void 0,{timeZone:"Asia/Kolkata"}),n=new Date(t),a=n.getFullYear()+"-"+b(n.getMonth()+1)+"-"+b(n.getDate());return Date.parse(a)},g=function(e,t){return h.test.filter((function(n){return e<=O(n.timingEnd)&&t>=O(n.timingEnd)}))};return!u&&j(g(i.startDate,i.endDate)),Object(a.useEffect)((function(){j(g(i.startDate,i.endDate))}),[i.startDate,i.endDate]),Object(m.jsxs)("div",{className:"all-test",children:[Object(m.jsx)("div",{className:"DatePicker",children:Object(m.jsx)(ee.a,{placeholder:"Enter Date Range",className:"DateField",format:"dd-MM-yy",change:function(e){!function(e){var t=O(e.endDate),n=O(e.startDate);o({startDate:n,endDate:t})}(e)}})}),Object(m.jsx)("div",{className:"test-body",children:u&&u.map((function(e){return Object(m.jsx)($,{data:e})}))})]})},ne=n(248),ae=n.n(ne),se=n(249),ce=n.n(se),ie=(n(426),function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],c=[{test_name:"test4",testId:4,date:"2021-12-10T12:00:00Z",marks_get:38,max_marks:100},{test_name:"test3",testId:3,date:"2021-12-01T12:00:00Z",marks_get:38,max_marks:100}];!n&&function(){var e=c.sort((function(e,t){return Date.parse(e.date)>Date.parse(t.date)?-1:1}));s(e)}();var i=function(e){return e<=9?"0"+e:e},o=function(e){var t=new Date(e);return t.getFullYear()+"-"+i(t.getMonth()+1)+"-"+i(t.getDate())},d=function(e){var t=new Date(e);return i(t.getHours()+1)+":"+i(t.getMinutes()+1)},l=function(e,t){var n=12*(t+t)*(t+t+1)+t;return"".concat(e).concat(n,".pdf")};return Object(m.jsxs)("div",{className:"answerkey",children:[Object(m.jsx)("div",{className:"search-bar"}),Object(m.jsx)("div",{class:"accordian",children:n&&n.map((function(e){return Object(m.jsxs)("div",{className:"accordian_item",children:[Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("h1",{className:"heading",children:e.test_name}),Object(m.jsxs)("div",{className:"heading_data",children:[Object(m.jsxs)("div",{className:"timing",children:[Object(m.jsx)("span",{className:"sdate",children:o(e.date)}),Object(m.jsxs)("span",{className:"timming",children:[d(e.date)," "]})]}),Object(m.jsxs)("div",{className:"marks",children:[Object(m.jsxs)("span",{className:"get_marks",children:["M.O:",e.marks_get]}),Object(m.jsxs)("span",{className:"max_marks",children:["F.M:",e.max_marks]})]})]})]}),Object(m.jsx)("div",{className:"preview",children:Object(m.jsx)(j.b,{to:"/preview/".concat(l(e.test_name,e.testId)),children:Object(m.jsx)(ae.a,{style:{width:"".concat(100,"%"),height:"".concat(100,"%")}})})}),Object(m.jsx)("div",{className:"download",onClick:function(){!function(e,t){var n=l(e,t);window.open("http://localhost:3000/".concat(n))}(e.test_name,e.testId)},children:Object(m.jsx)(ce.a,{style:{width:"".concat(100,"%"),height:"".concat(100,"%")}})})]},e.testId)}))})]})}),re=n(91),oe=n(174);n(436);var de=function(){var e=Object(o.useParams)().id,t=Object(a.useState)(null),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(1),d=Object(r.a)(i,2),l=d[0],u=d[1];return Object(m.jsxs)(m.Fragment,{children:["``",Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsxs)("button",{className:"btn",onClick:function(){u(l>1?l-1:l)},children:[Object(m.jsx)("i",{className:"fas fa-arrow-left"}),"Prev"]}),Object(m.jsxs)("button",{className:"btn",onClick:function(){u(l<s?l+1:l)},children:["Next",Object(m.jsx)("i",{className:"fas fa-arrow-right"})]}),Object(m.jsxs)("div",{className:"pdf-info",children:["Page",Object(m.jsx)("span",{id:"page-no",children:l}),"Of",Object(m.jsx)("span",{id:"page-count",children:s})]})]}),Object(m.jsx)("div",{className:"pdf-container",children:Object(m.jsx)(oe.a,{file:"https://kohi6118.github.io/pdf/".concat(e),className:"pdf-viewer",onLoadSuccess:function(e){var t=e.numPages;c(t),console.log(t)},loading:"Loading PDF\u2026",noData:"we are getting some errror in loading pdf...",children:Object(m.jsx)(oe.b,{pageNumber:l,scale:1})})})]})},le=(n(437),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("img",{src:e.src,style:Object(q.a)(Object(q.a)({},e.style),{},{cursor:"zoom-in"}),className:e.className,onClick:function(e){!function(e){e.target.classList.toggle("active")}(e)}})})}),ue=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{className:"",children:e.text})})},je=function(){(new o.useParams).id;var e={testId:456,test_name:"Test1",test_date:"2021-12-14T21:00:00",marks_obtained:50,total_marks:100,answer:[{questionId:456,question:"how are you",your_remark:1,correct:1,correct_answer_text:"good",your_answer_text:"good"},{questionId:654,question:"do you have home",your_remark:2,correct:1,correct_answer_text:"no",your_answer_text:"yes"},{questionId:621,question:"have you taken ",your_remark:3,correct:2,correct_answer_text:"no",your_answer_text:"yes"},{questionId:623,question:"hey what are you doing",your_remark:1,correct:1,correct_answer_text:"coding",your_answer_text:"codding"},{questionId:624,question:"how can i help you",correct:3,correct_answer_text:"yes i can"},{questionId:625,question:"what is your hobby",your_remark:2,correct:1,correct_answer_text:"cricket",your_answer_text:"footbal"},{questionId:623,question:"what is your name",your_remark:3,correct:1,correct_answer_text:"kohinoor",your_answer_text:"khan"},{questionId:624,question:"what are you doing",your_remark:2,correct:1,correct_answer_text:"work",your_answer_text:"work"},{questionId:625,question:"how is it going",your_remark:2,correct:1,correct_answer_text:"every thing fine",your_answer_text:"every thing not good"},{questionId:626,question:"how old are you",your_remark:2,correct:2,correct_answer_text:"15",your_answer_text:"15"},{questionId:627,question:"product of this company",question_image:"569.jpeg",your_answer_image:"561O1.png",your_remark:1,correct:1,correct_answer_image:"561O1.png",correct_answer_text:"google meet",your_answer_text:"google meet"}]},t=function(e){return e<=9?"0"+e:e},n="skip";return Object(m.jsxs)("div",{className:"review_contianer",children:[Object(m.jsxs)("div",{className:"review_header",children:[Object(m.jsx)("div",{className:"review_test_name",children:e.test_name}),Object(m.jsx)("div",{className:"review_test_date",children:function(e){var n=new Date(e).toLocaleString(void 0,{timeZone:"Asia/Kolkata"}),a=new Date(n);return a.getFullYear()+"-"+t(a.getMonth()+1)+"-"+t(a.getDate())}(e.test_date)}),Object(m.jsxs)("div",{className:"review_marks",children:[Object(m.jsx)("span",{className:"marks_obtained",children:e.marks_obtained}),Object(m.jsx)("span",{className:"total_marks",children:e.total_marks})]})]}),Object(m.jsxs)("div",{className:"label-box",children:[Object(m.jsx)("div",{style:{color:"#0088FE"},children:"right"}),Object(m.jsx)("div",{style:{color:"#00C49F"},children:"wrong"}),Object(m.jsx)("div",{style:{color:"#FFBB28"},children:"skip"})]}),Object(m.jsx)("div",{className:"review_main_section",children:e.answer.map((function(e){return function(e){void 0===e.your_remark?n="skip":void 0!==e.your_remark&&e.your_remark===e.correct?n="correct":void 0!==e.your_remark&&e.your_remark!==e.correct&&(n="wrong")}(e),Object(m.jsxs)("div",{className:"review_main_section_body ".concat(n),children:[Object(m.jsxs)("div",{className:"review_main_section_body_question",children:[Object(m.jsx)(ue,{text:e.question}),void 0===e.question_image?"":Object(m.jsx)(le,{src:"http://localhost:3000/Images/".concat(e.question_image),style:{width:"".concat(200,"px"),height:"".concat(200,"px")}})]}),Object(m.jsxs)("div",{className:"review_main_section_option",children:[Object(m.jsxs)("div",{className:"your_choice",children:[void 0===e.your_remark?"":Object(m.jsx)(ue,{text:e.your_answer_text}),void 0===e.your_answer_image?"":Object(m.jsx)(le,{src:"http://localhost:3000/Images/".concat(e.your_answer_image),style:{width:"".concat(150,"px"),height:"".concat(150,"px")}})]}),Object(m.jsxs)("div",{className:"right_answer",children:[Object(m.jsx)(ue,{text:e.correct_answer_text}),void 0===e.correct_answer_image?"":Object(m.jsx)(le,{src:"http://localhost:3000/Images/".concat(e.correct_answer_image),style:{width:"".concat(150,"px"),height:"".concat(150,"px")}})]})]})]},e.questionId)}))})]})},me=function(e){var t=e.isAuth,n=e.logout,a=new o.useRouteMatch,s=a.path;a.url;return console.log(t),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{}),Object(m.jsx)("div",{className:"app_main_content",children:Object(m.jsxs)(re.Switch,{children:[Object(m.jsx)(S,{path:"".concat(s,"answerKey"),auth:t,Component:ie}),Object(m.jsx)(S,{path:"".concat(s,"performance"),auth:t,Component:G}),Object(m.jsx)(S,{path:"".concat(s,"preview/:id"),auth:t,Component:de}),Object(m.jsx)(S,{path:"".concat(s,"review/:id"),auth:t,Component:je}),Object(m.jsx)(S,{path:"".concat(s),auth:t,Component:te})]})}),Object(m.jsx)(y,{logout:n})]})},he=(n(438),n(439),function(e){var t=Object(a.useState)("00:00:00"),n=Object(r.a)(t,2),s=n[0],c=n[1],i=e.time,o=e.clickHandler,d=Object(a.useRef)(""),l=function(e){var t=function(e){if(Date.parse(e)-Date.parse(new Date)<0)return[-1,0,0,0];var t=Date.parse(e)-Date.parse(new Date);return[t,Math.floor(t/1e3)%60,Math.floor(t/6e4%60),Math.floor(t/36e5)%24]}(e),n=Object(r.a)(t,4),a=n[0],s=n[1],i=n[2],d=n[3];a>=0?c((d>9?d:"0"+d)+":"+(i>9?i:"0"+i)+":"+(s>9?s:"0"+s)):o()},u=function(e){d.current&&clearInterval(d.current);var t=setInterval((function(){l(e)}),1e3);d.current=t},j=function(){var e=new Date;return e.setSeconds(e.getSeconds()+i),e};Object(a.useEffect)((function(){return u(j()),function(){clearInterval(d.current)}}),[]);return{ResetTimmer:function(){clearInterval(d.current),u(j())},render:Object(m.jsx)(m.Fragment,{children:s})}});var be=function(e){var t=e.chnageToNext,n=e.question,s=n.question_id,c=Object(a.useRef)(null),i=Object(a.useState)(null),o=Object(r.a)(i,2),d=o[0],l=o[1],u=function(){c.current&&(c.current.checked=!1,c.current=null,null),t(d),b()},j=he({time:n.question_time,clickHandler:u}),h=j.render,b=j.ResetTimmer;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"each_question_heading",children:[Object(m.jsx)("div",{className:"timmer",children:h}),Object(m.jsx)("div",{className:"submit_button_box",onClick:function(){u()},children:Object(m.jsx)("button",{className:"submit_button",children:"Next"})}),Object(m.jsx)("div",{className:"clear_response_box",onClick:function(){c.current?(c.current.checked=!1,c.current=null):alert("till now you have not select anythinng")},children:Object(m.jsx)("button",{className:"clear_response",children:"clear response"})})]}),Object(m.jsxs)("div",{className:"main_contnet",children:[Object(m.jsxs)("div",{className:"question_section",children:[Object(m.jsx)(ue,{text:n.question,style:{margin:"".concat(5,"px")}}),void 0===n.question_image?"":Object(m.jsx)(le,{src:"https://kohi6118.github.io/Images/".concat(n.question_image),style:{"box-shadow":"".concat(0,"px ",0,"px ",2,"px grey"),borderRadius:"".concat(5,"px"),marginTop:"".concat(5,"px")},className:"question_image"})]}),Object(m.jsx)("div",{className:"option",children:n.option.map((function(e,t){return Object(m.jsxs)("label",{className:"option_container",children:[Object(m.jsx)(ue,{text:e.text}),void 0===e.image?"":Object(m.jsx)(le,{src:"https://kohi6118.github.io/Images/".concat(e.image),className:"option_image",style:{"box-shadow":"".concat(0,"px ",0,"px ",1,"px grey"),borderRadius:"".concat(2,"px")}}),Object(m.jsx)("input",{type:"radio",onChange:function(e){!function(e){var t={question_id:s,yourRemark:e.target.dataset.option};c.current=e.target,l(t)}(e)},name:"radio","data-option":t+1}),Object(m.jsx)("span",{class:"checkmark"})]})}))})]})]})},Oe=function(){var e=Object(o.useParams)().id,t=[{test_name:"test1",testId:456,Timming:250,question:[{question_time:10,question_id:561,question:"which app do you like to fit here",question_image:"561.JPEG",option:[{text:"google meet",image:"561O1.png"},{text:"microsoft team",image:"561O2.png"},{text:"amazon"},{text:"adobe"}]},{question_time:10,question_id:568,question:"what do you  have now",question_image:"568.JPEG",option:[{text:"cctv",image:"568O1.png"},{text:"pen",image:"568O2.png"},{text:"brush",image:"568O3.png"},{text:"hammer",image:"568O4.png"}]},{question_time:10,question_id:570,question:"what he is doing",question_image:"570.JPEG",option:[{text:"siting"},{text:"dancing"},{text:"claping"},{text:"reading"}]}]},{test_name:"test2",testId:546,Timming:20,question:[{question_id:568,question:"how are you",option:["fine","good","superb","fantastic"]},{question_id:561,question:"what is your name",option:["kohinoor","khan","kohi","nishant"]},{question_id:570,question:"how old are you",option:["12","13","17","19"]}]},{test_name:"test3",testId:390,Timming:20,question:[{question_id:568,question:"how are you",option:["fine","good","superb","fantastic"]},{question_id:561,question:"what is your name",option:["kohinoor","khan","kohi","nishant"]},{question_id:570,question:"how old are you",option:["12","13","17","19"]}]},{test_name:"test4",testId:378,Timming:20,question:[{question_id:568,question:"how are you",option:["fine","good","superb","fantastic"]},{question_id:561,question:"what is your name",option:["kohinoor","khan","kohi","nishant"]},{question_id:570,question:"how old are you",option:["12","13","17","19"]}]},{test_name:"test5",testId:456,Timming:20,question:[{question_id:568,question:"how are you",option:["fine","good","superb","fantastic"]},{question_id:561,question:"what is your name",option:["kohinoor","khan","kohi","nishant"]},{question_id:570,question:"how old are you",option:["12","13","17","19"]}]}],n={sid:1,testId:e},s=Object(re.useHistory)(),c=Object(a.useState)(0),i=Object(r.a)(c,2),d=i[0],l=i[1],u=function(){d>=j.question.length&&s.push("/test/submit/".concat(e))},j=function(e){return e=parseInt(e),t.filter((function(t){return t.testId===e}))[0]}(e),h=function(e){return u(),j.question[e]}(d),b=he({time:j.Timming,clickHandler:function(){s.push("/test/submit/".concat(e)),g()}}),O=b.render,g=b.ResetTimmer;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h2",{className:"heading",children:" "}),Object(m.jsx)("span",{className:"timing_left",children:O})]}),Object(m.jsx)("p",{className:"warning_message",children:"*test will automaticly end after time. "}),Object(m.jsx)("div",{className:"question_Section",children:void 0===h?"":Object(m.jsx)(be,{data:n,chnageToNext:function(e){l((function(e){return e+1}))},question:h})})]})},ge=(n(440),function(){var e=30,t=1,n=2,a=.25,s=0,c="android 5.6",i="127.0.0.2",r="chrome 5.6",d="10:30",l=Object(o.useParams)().id;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"testInstruction",children:[Object(m.jsxs)("ul",{className:"testInstruction-list",children:[Object(m.jsx)("li",{className:"list-item",children:Object(m.jsxs)("p",{className:"list-text",children:["there is ",Object(m.jsx)("span",{children:e})," question each question carrry",Object(m.jsxs)("span",{children:[" ",t]})," marks  total time is "]})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsxs)("p",{className:"list-text",children:["for each question limit ",Object(m.jsx)("span",{children:n}),"minutes after the limit over the question will change automaticly"]})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsxs)("p",{className:"list-text",children:["each wrong answer will lead you ",Object(m.jsx)("span",{children:a}),"negative marking"]})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsxs)("p",{className:"list-text",children:["if you will skip the question there is ",Object(m.jsx)("span",{children:s}),"marks will dedicated"]})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)("p",{className:"list-text",children:Object(m.jsx)("span",{children:"*use updated version of chrome or firefox or edge and set accurate time according to +GMT5:30 otherwise you will face issue"})})}),Object(m.jsx)("li",{className:"list-item enviroment",children:Object(m.jsxs)("p",{className:"list-text",children:[Object(m.jsx)("span",{children:"*Your Enviroment Information"}),Object(m.jsx)("br",{}),"Operating system",Object(m.jsxs)("span",{children:[c,"  "]}),"Browser",Object(m.jsxs)("span",{children:[r,"  "]}),"IP",Object(m.jsxs)("span",{children:[i,"   "]}),"Time",Object(m.jsxs)("span",{children:[d,"    "]}),Object(m.jsx)("br",{}),"click next and start your test ",Object(m.jsx)("span",{children:" Best of Luck!"})]})})]}),Object(m.jsx)(j.b,{to:"/test/testEnviroment/".concat(l),children:Object(m.jsx)("button",{className:"next-button",children:"next"})})]})})}),xe=n(520),pe=n(524),fe=n(523),_e=n(519),ve=n(521),we=n(522),ke=n(512),ye=(n(441),function(){var e=new re.useHistory;setTimeout((function(){e.push("/home")}),5e3);var t=[{name:"number_of_attempted",number:"".concat(50,"%")},{name:"number_of_skip",number:"".concat(30,"%")},{name:"number_of_left",number:"".concat(20,"%")}];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"submit_heading",style:{alignItem:"center"},children:"submit ....."}),Object(m.jsx)("div",{className:"submit_table",children:Object(m.jsx)(_e.a,{component:ke.a,children:Object(m.jsxs)(xe.a,{sx:{minWidth:250},"aria-label":"simple table",children:[Object(m.jsx)(ve.a,{children:Object(m.jsxs)(we.a,{children:[Object(m.jsx)(fe.a,{children:"category"}),Object(m.jsx)(fe.a,{children:"number"})]})}),Object(m.jsx)(pe.a,{children:t.map((function(e,t){return Object(m.jsxs)(we.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(m.jsx)(fe.a,{component:"th",scope:"row",children:e.name}),Object(m.jsx)(fe.a,{component:"th",scope:"row",children:e.number})]},t)}))})]})})})]})}),Ne=function(e){var t=e.isAuth,n=Object(o.useRouteMatch)().path;return Object(m.jsx)("div",{className:"app_main_content",children:Object(m.jsxs)(o.Switch,{children:[Object(m.jsx)(S,{path:"".concat(n,"/testInstruction/:id"),auth:t,Component:ge}),Object(m.jsx)(S,{path:"".concat(n,"/testEnviroment/:id"),auth:t,Component:Oe}),Object(m.jsx)(S,{path:"".concat(n,"/submit/:id"),auth:t,Component:ye})]})})};var qe=function(){var e=new d(!1),t=Object(r.a)(e,3),n=t[0],a=t[1],s=t[2];return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(o.Switch,{children:[Object(m.jsx)(o.Route,{path:"/login",children:Object(m.jsx)(h,{login:n})}),Object(m.jsx)(o.Route,{path:"/test",render:function(){return Object(m.jsx)(Ne,{path:"/test",isAuth:s})}}),Object(m.jsx)(o.Route,{path:"/",render:function(){return Object(m.jsx)(me,{path:"/",isAuth:s,logout:a,style:{overflowX:"hidden"}})},excat:!0})]})})})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(qe,{})})}),document.getElementById("root"))}},[[442,1,2]]]);
//# sourceMappingURL=main.e84b1727.chunk.js.map