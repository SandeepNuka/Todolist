(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{16:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(5),i=n.n(c),l=(n(3),n(4)),o=n(6),d=n(7),r=n(9),h=n(8),j=(n(14),n(0));var u=function(t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"shadow p-2 my-2 col-sm-9 ",children:t.value}),Object(j.jsxs)("button",{className:"btn btn-danger my-2 col-sm-2",onClick:function(){t.deldata(t.id)},children:["delete ",t.id+1]})]})},m=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={items:[],text:""},t.handlechange=function(e){t.setState({text:e.target.value})},t.handleAdd=function(e){if(""!==t.state.text){var n=[].concat(Object(l.a)(t.state.items),[t.state.text]);t.setState({items:n,text:""})}},t.deltedata=function(e){console.log("deleted",e);var n=Object(l.a)(t.state.items);console.log("olditems",n);var a=n.filter((function(t,n){return n!==e}));t.setState({items:a})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:" container-fluid my-5 bg-darkslategray p-3",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-6 mx-auto  shadow-lg text-white",children:[Object(j.jsx)("h1",{className:"text-center ",children:"Todo List"}),Object(j.jsxs)("div",{className:"row mx-auto",children:[Object(j.jsx)("div",{className:"col-9",children:Object(j.jsx)("input",{type:"text",className:"form-control  ",placeholder:" write anything you want to add",value:this.state.text,onChange:this.handlechange})}),Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("button",{className:"btn btn-primary ",style:{fontWeight:"bold"},onClick:this.handleAdd,children:"Add"})}),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("ol",{className:" m-5 row list-unstyled ",children:this.state.items.map((function(e,n){return Object(j.jsx)(u,{value:e,id:n,deldata:t.deltedata},n)}))})})]})]})})})}}]),n}(a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),b()},3:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.2d310a32.chunk.js.map