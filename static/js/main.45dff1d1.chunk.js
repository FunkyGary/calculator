(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{28:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return reducer}));var initState={result:0,firstNumber:"",SecondNumber:"",operator:null},reducer=function reducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"OPERATOR":return"="===action.value?""!==state.firstNumber&&""!==state.SecondNumber&&(state.result=eval("".concat(state.firstNumber," ").concat(state.operator," ").concat(state.SecondNumber)),state.firstNumber=state.result,state.SecondNumber="",state.operator="="):"AC"===action.value?state={result:0,firstNumber:"",SecondNumber:"",operator:null}:state.operator=action.value,state;case"NUMBER":if(state.result>0&&""===state.SecondNumber&&"="===state.operator)state.firstNumber="",state.firstNumber=state.firstNumber+=action.value,state.result=state.firstNumber,state.operator=null;else if(null===state.operator){if("0"===action.value&&0===state.result)return state;state.firstNumber=state.firstNumber+=action.value,state.result=state.firstNumber}else state.SecondNumber=state.SecondNumber+=action.value,state.result=state.SecondNumber;return state;default:return state}}},42:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c(0),r=c.n(a),o=c(11),i=c.n(o),s=c(7),u=c(60),l=c(64),b=c(25),d=c(13),j=c(62),O=c(19),m=function(){var t=Object(a.useState)(null),e=Object(s.a)(t,2),c=e[0],n=e[1],r=function(){window.innerWidth>=576?n("PC"):n("mobile")};return Object(a.useEffect)((function(){return window.addEventListener("resize",r),r(),function(){window.removeEventListener("resize",r)}}),[]),c},f=Object(u.a)((function(t){var e;return{layout:(e={width:"480px",position:"absolute",background:"linear-gradient(to bottom, #84BAFF, #0B0E1C)",paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},Object(d.a)(e,t.breakpoints.down(768),{width:"360px"}),Object(d.a)(e,t.breakpoints.down(576),{bottom:0,width:"100%",height:"50%",overflowY:"scroll"}),e),input:Object(d.a)({textAlign:"right",color:"white",fontSize:"8rem"},t.breakpoints.down(768),{fontSize:"5rem"}),"background#AFAFAF":{background:"#AFAFAF"},"background#3091FD":{background:"#3091FD"},"background#333333":{background:"#333333"},colorBlack:{color:"black"},colorWhite:{color:"white"},circle:{position:"relative",paddingBottom:"100%",cursor:"pointer",userSelect:"none",borderRadius:"50%","&:hover":{opacity:"0.8"},"&:active":{transform:"scale(0.9)"}},circleW:{borderRadius:"50px",paddingBottom:"45%"},circleText:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"2rem"}}}));var p=function(t){var e=f(),c=Object(O.c)((function(t){return t.result})),r=Object(a.useState)(null),o=Object(s.a)(r,2),i=o[0],u=o[1],l=Object(a.useState)(null),d=Object(s.a)(l,2),p=d[0],h=d[1],v=Object(a.useState)(null),g=Object(s.a)(v,2),x=g[0],N=g[1],k=Object(a.useState)(null),S=Object(s.a)(k,2),w=S[0],_=S[1],F=Object(a.useState)(null),A=Object(s.a)(F,2),C=A[0],y=A[1],E=Object(a.useState)(0),B=Object(s.a)(E,2),R=B[0],T=B[1],M=Object(a.useState)(0),D=Object(s.a)(M,2),P=D[0],W=D[1],z=["\xf7","\xd7","-","+","+/-","%","=","AC"],L=Object(O.b)(),U=m(),Y=t.calculatorEl,q=t.showCalculator,I=function(t){var e=t.target.innerText;z.includes(e)?L({type:"OPERATOR",value:e}):L({type:"NUMBER",value:e})};return Object(n.jsx)(n.Fragment,{children:q&&Object(n.jsx)("div",Object(b.a)(Object(b.a)({ref:Y,className:e.layout},"PC"===U&&{onMouseDown:function(t){u(!0),_(t.clientX-R),y(t.clientY-P)},onMouseMove:function(t){i&&(t.preventDefault(),h(t.clientX-w),N(t.clientY-C),T(p),W(x))},onMouseUp:function(t){_(p),y(x),u(!1)}}),{},{id:"calculator",style:{left:p,top:x},children:Object(n.jsxs)(j.a,{container:!0,spacing:2,children:[Object(n.jsx)(j.a,{item:!0,xs:12,children:Object(n.jsx)("div",{className:"".concat(e.input),id:"input",children:c})}),Object(n.jsx)(j.a,{item:!0,xs:9,children:Object(n.jsxs)(j.a,{container:!0,spacing:2,children:[["AC","+/-","%"].map((function(t){return Object(n.jsx)(j.a,{item:!0,xs:4,children:Object(n.jsx)("div",{className:"".concat(e["background#AFAFAF"],"  \n                      ").concat(e.circle),onClick:I,children:Object(n.jsx)("div",{className:"".concat(e.colorBlack," ").concat(e.circleText),children:t})})},t)})),[7,8,9,4,5,6,1,2,3,0,"."].map((function(t){return Object(n.jsx)(j.a,{item:!0,xs:0===t?8:4,children:Object(n.jsx)("div",{className:"".concat(e["background#333333"],"\n                                  ").concat(e.circle,"\n                                  ").concat(0===t&&e.circleW),onClick:I,children:Object(n.jsx)("div",{className:"".concat(e.colorWhite," ").concat(e.circleText),children:t})})},t)}))]})}),Object(n.jsx)(j.a,{item:!0,xs:3,children:Object(n.jsx)(j.a,{container:!0,spacing:2,children:["\xf7","\xd7","-","+","="].map((function(t){return Object(n.jsx)(j.a,{item:!0,xs:12,children:Object(n.jsx)("div",{className:"".concat(e["background#3091FD"],"  \n                      ").concat(e.circle),onClick:I,children:Object(n.jsx)("div",{className:"".concat(e.colorWhite," ").concat(e.circleText),children:t})})},t)}))})})]})}))})},h=c(63),v=Object(u.a)((function(t){return{body:{height:"100vh",background:"black"}}}));var g=function(){var t=v(),e=Object(a.useRef)(null),c=Object(a.useState)(!1),r=Object(s.a)(c,2),o=r[0],i=r[1];return Object(n.jsxs)("div",{className:t.body,id:"body",onClick:function(t){e.current&&!e.current.contains(t.target)&&i(!1)},children:[Object(n.jsx)(h.a,{}),Object(n.jsx)(l.a,{variant:"contained",onClick:function(){i(!o)},children:"Open calculator"}),Object(n.jsx)(p,{calculatorEl:e,showCalculator:o})]})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),n(t),a(t),r(t),o(t)}))},N=c(20),k=c(28),S=Object(N.b)(k.a);i.a.render(Object(n.jsx)(O.a,{store:S,children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.45dff1d1.chunk.js.map