(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{19:function(t,n,e){},20:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e(0),i=e.n(r),u=e(7),o=e.n(u),s=(e(19),e(2)),a=e(3),h=e(5),l=e(4),p=(e(20),e(8)),b=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props.question;return Object(c.jsx)("h2",{className:"question",children:t})}}]),e}(r.Component),d=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=n.call.apply(n,[this].concat(i))).showQuestionCount=function(t,n){return Object(c.jsxs)("h2",{children:["Question ",t," of ",n]})},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props,n=t.numberQuiz,e=t.quiz;return Object(c.jsx)("div",{className:"questionCount",children:this.showQuestionCount(e.id,n)})}}]),e}(r.Component),j=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).show=function(){return t.props.type?"Ch\xednh x\xe1c!!":"Nooo!"},t}return Object(a.a)(e,[{key:"render",value:function(){return Object(c.jsx)("h4",{className:"container result-question",children:this.show()})}}]),e}(r.Component),O=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).OnNextQuiz=function(n,e){var c=t.props,r=c.ans,i=c.ind;t.props.OnNextQuiz(n,e);for(var u=document.getElementById(r.content),o=document.getElementsByClassName("result-question")[i],s=document.getElementsByClassName("answerOption"),a=0;a<s.length;a++)s[a].classList.add("noClick");o.style.display="block",r.type?o.style.color="#8bc53f":o.style.color="red",null!==u&&(setTimeout((function(){u.checked=!1,o.style.display="none",o.style.color="black";for(var t=0;t<s.length;t++)s[t].classList.remove("noClick")}),1500),setTimeout((function(){u.checked=!1}),1400))},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this,n=this.props,e=n.ans,r=n.id;return Object(c.jsxs)("li",{className:"answerOption",children:[Object(c.jsx)("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",id:e.content,value:e,onClick:function(){return t.OnNextQuiz(r,e.type)}}),Object(c.jsx)("label",{className:"radioCustomLabel",htmlFor:e.content,children:e.content}),Object(c.jsx)(j,{type:e.type})]})}}]),e}(r.Component),m=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=n.call.apply(n,[this].concat(i))).answer=function(n){var e=t.props.quiz,r=t.props.OnNextQuiz;return n.map((function(t,n){return Object(c.jsx)(O,{ans:t,id:e.id,OnNextQuiz:r,ind:n},n)}))},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props,n=t.quiz,e=t.numberQuiz;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(d,{numberQuiz:e,quiz:n}),Object(c.jsx)(b,{question:n.question}),Object(c.jsx)("ul",{className:"answerOptions",children:this.answer(n.answers)})]})}}]),e}(r.Component),y=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props,n=t.result,e=t.numberQuiz;return Object(c.jsx)("h1",{className:"container result",children:n>0?"Ch\xfac m\u1eebng b\u1ea1n \u0111\xfang "+n+"/"+e:"B\u1ea1n kh\xf4ng \u0111\xfang c\xe2u n\xe0o :("})}}]),e}(r.Component),g="NEXT_QUESTION",v=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=n.call.apply(n,[this].concat(i))).showResult=function(){var n=t.props,e=n.questionReducer,r=n.OnNextQuiz;return e.end?Object(c.jsx)(y,{result:e.result,numberQuiz:e.numberQuiz}):Object(c.jsx)("div",{className:"quiz",children:Object(c.jsx)(m,{quiz:e.quiz,OnNextQuiz:r,numberQuiz:e.numberQuiz})})},t}return Object(a.a)(e,[{key:"render",value:function(){return Object(c.jsx)("div",{children:this.showResult()})}}]),e}(r.Component),f=Object(p.b)((function(t){return{questionReducer:t.questionReducer}}),(function(t,n){return{OnNextQuiz:function(n,e){setTimeout((function(){return t(function(t,n){return{type:g,id:t,res:n}}(n,e))}),1500)}}}))(v),x=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"App-header",children:Object(c.jsx)("h2",{children:"React Quiz"})}),Object(c.jsx)(f,{})]})}}]),e}(r.Component),z=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,u=n.getTTFB;e(t),c(t),r(t),i(t),u(t)}))},q=e(6),C=[{id:1,question:"\u0110\xe2u l\xe0 d\u1ea1ng l\u1ed7 h\u1ed5ng b\u1ea3o m\u1eadt th\u01b0\u1edfng g\u1eb7p trong h\u1ec7 \u0111i\u1ec1u h\xe0nh v\xe0 c\xe1c ph\u1ea7n m\u1ec1m \u1ee9ng d\u1ee5ng?",answers:[{type:!1,content:"L\u1ed7i qu\u1ea3n tr\u1ecb"},{type:!0,content:"L\u1ed7i tr\xe0n b\u1ed9 \u0111\u1ec7m"},{type:!1,content:"L\u1ed7i c\u1ea5u h\xecnh"}]},{id:2,question:"Trong t\u1ea5n c\xf4ng khai th\xe1c l\u1ed7i tr\xe0n b\u1ed9 \u0111\u1ec7m, tin t\u1eb7c th\u01b0\u1eddng s\u1eed d\u1ee5ng shellcode. Shellcode \u0111\xf3 l\xe0 d\u1ea1ng:",answers:[{type:!1,content:"M\xe3 Java"},{type:!1,content:"M\xe3 C/C++"},{type:!0,content:"M\xe3 m\xe1y"}]},{id:3,question:"C\xe1c l\u1ed7 h\u1ed5ng b\u1ea3o m\u1eadt th\u01b0\u1eddng t\xf4n t\u1ea1i nhi\u1ec1u nh\u1ea5t trong th\xe0nh ph\xe2n n\xe0o c\u1ee7a h\u1ec7 th\u1ed1ng:",answers:[{type:!0,content:"C\xe1c \u1ee9ng dung"},{type:!1,content:"H\u1ec7 \u0111i\u1ec1u h\xe0nh"},{type:!1,content:"C\xe1c th\xe0nh ph\u1ea7n ph\u1ea7n c\u1ee9ng."}]},{id:4,question:" Nguy\xean nh\xe2n c\u1ee7a s\u1ef1 t\u1ed3n t\u1ea1i c\xe1c \u0111i\u1ec3m y\u1ebfu trong h\u1ec7 th\u1ed1ng c\xf3 th\u1ec3 do:",answers:[{type:!1,content:"L\u1ed7i thi\u1ebft k\u1ebf, l\u1ed7i c\xe0i \u0111\u1eb7t v\xe0 l\u1eadp tr\xecnh."},{type:!0,content:"T\u1ea5t c\u1ea3 c\xe1c kh\xe2u trong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n v\xe0 v\u1eadn h\xe0nh"},{type:!1,content:"L\u1ed7i c\u1ea5u h\xecnh ho\u1ea1t \u0111\u1ed9ng"}]},{id:5,question:"L\u1ed7 h\u1ed5ng b\u1ea3o m\u1eadt (Security vulnerability) l\xe0 m\u1ed9t \u0111i\u1ec3m y\u1ebfu t\xf4n t\u1ea1i trong m\u1ed9t h\u1ec7 th\u1ed1ng cho ph\xe9p tin t\u1eb7c:",answers:[{type:!0,content:"Khai th\xe1c g\xe2y t\u1ed1n h\u1ea1i \u0111\u1ebfn c\xe1c thu\u1ed9c t\xednh an ninh c\u1ee7a h\u1ec7 th\u1ed1ng \u0111\xf3"},{type:!1,content:"Khai th\xe1c nh\u1eb1m chi\u1ebfm quy\u1ec1n \u0111i\u1ec1u khi\u1ebfn h\u1ec7 th\u1ed1ng"},{type:!1,content:"Khai th\xe1c, t\u1ea5n c\xf4ng ph\xe1 ho\u1ea1i v\xe0 g\xe2y t\xea li\u1ec7t h\u1ec7 th\u1ed1ng"}]}],N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{end:!1,quiz:C[0],ind:0,numberQuiz:C.length,result:0},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:console.log(n);var e=0,c=!0,r=t.result;return n.id<C.length&&(e=n.id,c=!1,n.res&&r++),t={end:c,ind:e,quiz:C[e],numberQuiz:C.length,result:r};default:return t}},w=Object(q.b)({questionReducer:N}),Q=Object(q.c)(w);o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p.a,{store:Q,children:Object(c.jsx)(x,{})})}),document.getElementById("root")),z()}},[[27,1,2]]]);
//# sourceMappingURL=main.fbf96c2c.chunk.js.map