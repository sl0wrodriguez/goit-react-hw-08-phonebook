(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{174:function(e,a,t){e.exports={form:"RegisterView_form__jLkqR",textField:"RegisterView_textField__KY2Kj"}},210:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var r=t(164),n=t(0),s=t(13),o=t(17),i=t(23),c=t(206),l=t(152),u=t(57),b=t(174),m=t.n(b),d=t(2);function j(){var e=Object(s.b)(),a=Object(s.c)(o.b.getLoading),t=Object(n.useState)(""),b=Object(r.a)(t,2),j=b[0],p=b[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),h=g[0],O=g[1],v=Object(n.useState)(""),w=Object(r.a)(v,2),x=w[0],y=w[1],_=function(e){var a=e.target,t=a.name,r=a.value;switch(t){case"name":return p(r);case"email":return O(r);case"password":return y(r);default:return}};return Object(d.jsxs)("form",{onSubmit:function(a){return a.preventDefault(),""===j.trim()||""===h.trim()||""===x.trim()?i.b.error("\ud83d\udca9 Please fill in all fields!"):x.length<7?i.b.info("Passwords must be at least 7 characters long!"):(e(o.a.register({name:j,email:h,password:x})),p(""),O(""),void y(""))},className:m.a.form,autoComplete:"off",children:[Object(d.jsx)(c.a,{label:"Name",variant:"outlined",color:"secondary",type:"text",name:"name",value:j,onChange:_,className:m.a.textField}),Object(d.jsx)(c.a,{label:"Email",variant:"outlined",color:"secondary",type:"email",name:"email",value:h,onChange:_,className:m.a.textField}),Object(d.jsx)(c.a,{label:"Password",variant:"outlined",color:"secondary",type:"password",name:"password",value:x,onChange:_,className:m.a.textField}),!a&&Object(d.jsx)(l.a,{variant:"contained",color:"secondary",size:"large",type:"submit",children:"Sign up"}),a&&Object(d.jsx)(u.a,{})]})}}}]);
//# sourceMappingURL=register-view.5cc96cd3.chunk.js.map