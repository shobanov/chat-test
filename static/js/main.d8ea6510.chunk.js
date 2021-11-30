(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{200:function(e,n,t){},201:function(e,n,t){"use strict";t.r(n);var i,a,r,o,c,s,l,b,j,u,h,d,p,x,m,O,f,g,A,w,v,N=t(39),y=t.n(N),E=t(9),C=t(40),F=t(5),I=t(10),z=t(2),k=t(3),D=k.b.div(i||(i=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  background-color: #252527;\n  height: 100vh;\n"]))),R=k.b.div(a||(a=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  margin: 0 auto;\n  @media (max-width: 480px) {\n    width: 300px;\n  }\n"]))),B=k.b.h2(r||(r=Object(z.a)(["\n  text-align: center;\n  color: aliceblue;\n  margin-bottom: 30px;\n  font-weight: 300;\n"]))),V=Object(k.b)(I.b)(o||(o=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  height: 100%;\n  margin: auto 15px;\n  text-align: center;\n  position: relative;\n  & :first-child {\n    margin-bottom: 15px;\n  }\n"]))),G=t(25),K=G.a().shape({firstName:G.b().min(2,"First name is too short").max(15,"First name is too long").required("First name required"),lastName:G.b().min(2,"Last name is too short").max(15,"Last name is too long").required("Last name required")}),P=t(7),Y=t(17),Z=Object(k.b)(I.a)(c||(c=Object(z.a)(["\n  height: 35px;\n  border-radius: 10px;\n  padding-left: 15px;\n  font-size: 90%;\n  border: 1px solid;\n  outline: none;\n  position: relative;\n  & ~ p {\n    top: 26px;\n    & ~ p {\n      top: 80px;\n    }\n  }\n"]))),L=k.b.p(s||(s=Object(z.a)(["\n  color: red;\n  position: absolute;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  background: transparent;\n  border: none;\n  left: 5px;\n"]))),H=t(1),Q=function(e){var n=Object(I.d)(e.name),t=Object(Y.a)(n,2),i=t[0],a=t[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Z,Object(P.a)(Object(P.a)({},i),e)),a.error&&a.touched&&Object(H.jsx)(L,{children:a.error})]})},S=k.b.button(l||(l=Object(z.a)(["\n  height: 35px;\n  width: 30%;\n  border-radius: 8px;\n  margin-top: 15px;\n  font-size: 16px;\n  border: 1px solid;\n  margin: 0 auto;\n  margin-top: 20px;\n  font-weight: 400;\n"]))),q=function(e){var n=e.type,t=e.children;return Object(H.jsx)(S,{type:n,children:t})},X=k.b.img(b||(b=Object(z.a)(["\n  width: ",";\n  margin: ",";\n"])),(function(e){return"small"===e.size?"45px":"60px"}),(function(e){return"small"===e.size?"15px 0 15px 28px":"0"})),T=function(e){return Object(H.jsx)(X,Object(P.a)({src:"data:image/png;base64,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"},e))},U=t(0),J=k.b.textarea(j||(j=Object(z.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 69px;\n  background-color: #3A3A3A;\n  overflow: hidden;\n  outline: none;\n  border: none;\n  resize: none;\n  color: #FFFFFF;\n  flex: 0 0 auto;\n  font-weight: 400;\n  font-size: 26px;\n  padding: 20px 60px 15px 20px;\n  & ::placeholder {\n    color: #D1D1D1;\n    font-weight: 300;\n  }\n"]))),W=function(e){var n,t=e.name,i=e.placeholder,a=void 0===i?"Enter text message...":i,r=Object(U.useRef)(null),o=Object(I.d)(t),c=Object(Y.a)(o,1)[0];return Object(U.useEffect)((function(){if(r&&r.current){r.current.style.height="69px";var e=r.current.scrollHeight;r.current.style.height=e+"px"}}),[null===(n=r.current)||void 0===n?void 0:n.textLength]),Object(H.jsx)(J,Object(P.a)(Object(P.a)({ref:r},c),{},{name:t,placeholder:a}))},M=t.p+"static/media/send.7fb78605.svg",$=t.p+"static/media/sendFill.735bf47a.svg",_=k.b.input(u||(u=Object(z.a)(["\n  position: absolute;\n  color: transparent;\n  cursor: pointer;\n  right: 20px;\n  bottom: 15px;\n  width: 35px;\n  height: 35px;\n  border: none;\n  outline: none;\n  padding: 0;\n  background-image: url(",");\n  background-color: transparent;\n  &:disabled {\n    background-image: url(",");\n  }\n"])),$,M),ee=function(e){var n=e.type,t=void 0===n?"button":n,i=e.isValid;return Object(H.jsx)(_,{type:t,disabled:!i})},ne=t(8),te=t(204),ie=t(90),ae={messages:[],firstName:"",lastName:""},re=function(){return Object(te.a)(new Date,"HH':'mm a",{locale:ie.a})},oe={firstName:"",lastName:""},ce=function(){var e=Object(E.b)(),n=Object(F.g)();return Object(H.jsx)(D,{children:Object(H.jsx)(I.c,{initialValues:oe,validationSchema:K,onSubmit:function(t){e({type:"SAVE-NAME",payload:t}),n.push("/chat")},children:Object(H.jsxs)(R,{children:[Object(H.jsx)(B,{children:"Enter your first and last name to enter the chat"}),Object(H.jsxs)(V,{children:[Object(H.jsx)(Q,{type:"text",name:"firstName",placeholder:"First name"}),Object(H.jsx)(Q,{type:"text",name:"lastName",placeholder:"Last name"}),Object(H.jsx)(q,{type:"submit",children:"Login"})]})]})})})},se=new WebSocket("wss://ws.qexsystems.ru"),le=G.a().shape({message:G.b().required()}),be={message:""},je=function(){var e=Object(E.c)((function(e){return e.chat.firstName})),n=Object(E.c)((function(e){return e.chat.lastName})),t=Object(E.b)();return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(de,{}),Object(H.jsx)(Oe,{}),Object(H.jsx)(I.c,{initialValues:be,validationSchema:le,validateOnMount:!0,onSubmit:function(i,a){var r=i.message;t(function(e){return{type:"ADD-OWNER-MESSAGE",payload:{message:e,time:re()}}}(r)),se.send(JSON.stringify({message:r,firstName:e,lastName:n})),a.resetForm()},children:Object(H.jsx)(xe,{})})]})},ue=k.b.div(h||(h=Object(z.a)(["\n  background-color: #0F0F0F;\n  height: 75px;\n  position: relative;\n  margin-bottom: 35px;\n"]))),he=k.b.p(d||(d=Object(z.a)(["\n  color: #D9D9D9;\n  margin: 0;\n  position: absolute;\n  top: 20px;\n  left: 91px;\n  font-weight: 600;\n  font-size: 26px;\n  @media (max-width: 527px) {\n    top: 5px;\n  }\n"]))),de=function(){var e=Object(E.c)((function(e){return e.chat.firstName})),n=Object(E.c)((function(e){return e.chat.lastName}));return Object(H.jsxs)(ue,{children:[Object(H.jsx)(T,{size:"small"}),Object(H.jsx)(he,{children:"".concat(e," ").concat(n)})]})},pe=Object(k.b)(I.b)(p||(p=Object(z.a)(["\n  width: 100%;\n  display: flex;\n  height: auto;\n  position: fixed;\n  bottom: 0;\n"]))),xe=function(){var e=Object(I.e)(),n=e.submitForm,t=e.isValid;return Object(H.jsxs)(pe,{onKeyDown:function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),n())},children:[Object(H.jsx)(W,{name:"message"}),Object(H.jsx)(ee,{type:"submit",isValid:t})]})},me=k.b.div(x||(x=Object(z.a)(["\n  padding: 10px 0 69px 0;\n"]))),Oe=function(){var e=Object(E.c)((function(e){return e.chat.messages})),n=Object(E.b)();return se.onmessage=function(e){var t;n((t=JSON.parse(e.data),{type:"ADD-RESEIVED-MESSAGE",payload:Object(P.a)(Object(P.a)({},t),{},{time:re()})}))},Object(H.jsx)(me,{children:e.map((function(e,n){return Object(H.jsx)(Ne,Object(P.a)({},e),n)}))})},fe=k.b.div(m||(m=Object(z.a)(["\n  display: flex;\n  ",";\n  margin: 0 28px 9px 28px;\n"])),(function(e){return e.isOwner?"align-items: flex-end;":"justify-content: end;"})),ge=k.b.div(O||(O=Object(z.a)(["\n  max-width: 449px;\n  width: 449px;\n  min-height: 76px;\n  margin-left: 17px;\n  border-radius: 9px;\n  background-color: ",";\n  position: relative;\n"])),(function(e){return e.isOwner?"#464646":"rgb(20,255,114,0.7)"})),Ae=k.b.p(f||(f=Object(z.a)(["\n  color: #ECECEC;\n  font-weight: 700;\n  font-size: 20px;\n  margin: 10px 10px 5px 16px;\n"]))),we=k.b.p(g||(g=Object(z.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  margin: ",";\n  word-wrap: break-word;\n"])),(function(e){return e.isOwner?"#ECECEC":"#FFFFFF"}),(function(e){return e.isOwner?"0 28px 11px 16px":"11px 28px 11px 16px"})),ve=k.b.span(A||(A=Object(z.a)(["\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  width: 79px;\n  font-size: 17px;\n  font-weight: 300;\n  color: ",";\n"])),(function(e){return e.isOwner?"#14FF72":"#DFDFDF"})),Ne=function(e){var n=e.firstName,t=e.lastName,i=e.message,a=e.time,r=Object(E.c)((function(e){return e.chat.firstName})),o=Object(E.c)((function(e){return e.chat.lastName})),c=r===n&&o===t;return Object(H.jsxs)(fe,{isOwner:c,children:[c&&Object(H.jsx)(T,{size:"large"}),Object(H.jsxs)(ge,{isOwner:c,children:[c&&Object(H.jsx)(Ae,{children:"".concat(n," ").concat(t)}),Object(H.jsx)(we,{isOwner:c,children:i}),Object(H.jsx)(ve,{isOwner:c,children:a})]})]})};t(200);"serviceWorker"in navigator?navigator.serviceWorker.register("sw.js").then((function(e){console.log("Service worker registered:",e)})).catch((function(e){console.log("Service workers registration error",e)})):console.log("Current browser does not support service workers");var ye=k.b.div(w||(w=Object(z.a)(["\n  min-height: 100%;\n  background-color: #1A1A1A;\n"]))),Ee=Object(k.a)(v||(v=Object(z.a)(["\n\nbody { \n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont,'Inter', 'Segoe UI', 'Roboto', 'Oxygen',\n  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml, body, #root {\n  height: 100%;\n}\n\n* { \n  font-family: 'Inter';\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n"]))),Ce=function(e){var n=e.children;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Ee,{}),Object(H.jsx)(ye,{children:n})]})},Fe=function(){return Object(H.jsxs)(Ce,{children:[Object(H.jsx)(F.b,{path:"/",children:Object(H.jsx)(F.a,{to:"/auth"})}),Object(H.jsxs)(F.d,{children:[Object(H.jsx)(F.b,{path:"/auth",children:Object(H.jsx)(ce,{})}),Object(H.jsx)(F.b,{path:"/chat",children:Object(H.jsx)(je,{})})]})]})},Ie=t(56),ze=Object(Ie.a)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-OWNER-MESSAGE":return Object(P.a)(Object(P.a)({},e),{},{messages:[].concat(Object(ne.a)(e.messages),[{firstName:e.firstName,lastName:e.lastName,message:n.payload.message,time:n.payload.time}])});case"ADD-RESEIVED-MESSAGE":return Object(P.a)(Object(P.a)({},e),{},{messages:[].concat(Object(ne.a)(e.messages),[{firstName:n.payload.firstName,lastName:n.payload.lastName,message:n.payload.message,time:n.payload.time}])});case"SAVE-NAME":return Object(P.a)(Object(P.a)({},e),{},{firstName:n.payload.firstName,lastName:n.payload.lastName});default:return e}}}),ke=Object(Ie.b)(ze),De=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,205)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),a(e),r(e),o(e)}))};y.a.render(Object(H.jsx)(C.a,{children:Object(H.jsx)(E.a,{store:ke,children:Object(H.jsx)(Fe,{})})}),document.getElementById("root")),De()}},[[201,1,2]]]);
//# sourceMappingURL=main.d8ea6510.chunk.js.map