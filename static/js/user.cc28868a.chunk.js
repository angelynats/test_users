(this.webpackJsonpswivl=this.webpackJsonpswivl||[]).push([[5],{117:function(e,t,a){"use strict";t.a=a.p+"static/media/default-avatar.522560c8.png"},118:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u}));var s,c=a(28),n=a(119),r=a.n(n).a.create({baseURL:"https://api.github.com"});(s=r).interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("accessToken"));return t&&(e.headers.Authorization="Bearer ".concat(t.accessToken)),e.headers["Content-Type"]="application/json",e}),(function(e){Promise.reject(e)})),s.interceptors.response.use((function(e){if(e.data.accessToken){var t=JSON.stringify({accessToken:e.data.accessToken});localStorage.setItem("accessToken",t)}if(e.data.refreshToken){var a=JSON.stringify({refreshToken:e.data.refreshToken});localStorage.setItem("refreshToken",a)}return e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")),Promise.reject(e)}));var i=r,o=a(30);function l(e){var t=e.type,a=void 0===t?"success":t,s=e.title,c=void 0===s?"":s,n=e.message,r=void 0===n?"":n;o.store.addNotification({title:c,message:r,type:a,insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:4e3},slidingEnter:{duration:800,timingFunction:"ease-out",delay:0},slidingExit:{duration:800,timingFunction:"ease-out",delay:0}})}var d=function(e){return function(t){t(Object(c.f)()),i.get("/users?since=".concat(e,"&per_page=12")).then((function(e){t(Object(c.g)(e.data))})).catch((function(e){t(Object(c.e)(e.response)),l({type:"danger",title:"Oops!",message:"Something went wrong"})}))}},u=function(e){return function(t){t(Object(c.c)()),i.get("/users/".concat(e)).then((function(e){t(Object(c.d)(e.data)),l({type:"success",title:"Great!",message:"User was loaded successfully"})})).catch((function(e){t(Object(c.b)(e.response)),l({type:"danger",title:"Oops!",message:"Something went wrong"})}))}}},146:function(e,t,a){e.exports={overlay:"Modal_overlay__355g0",modal:"Modal_modal__1fn-M"}},154:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a(5),r=a(12),i=a(13),o=a(39),l=a(152),d=a(31),u=a(32),m=a(40),j=a(38),b=a(146),h=a.n(b),f=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).backdropRef=Object(c.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){var a=e.backdropRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return Object(s.jsx)("div",{className:h.a.overlay,ref:this.backdropRef,onClick:this.handleBackdropClick,children:Object(s.jsx)("div",{className:h.a.modal,children:this.props.children})})}}]),a}(c.Component),p=a(117),O=function(e){var t=e.user,a=e.onLike,n=e.onUnlike,r=e.isFavourite,i=t.name,d=t.followers,u=t.following,m=t.created_at,j=t.updated_at,b=t.company,h=t.email,O=t.location,x=t.blog,g=t.bio,v=t.login,N=t.avatar_url,k=t.html_url,y=Object(c.useState)(!1),w=Object(o.a)(y,2),_=w[0],S=w[1],T=Object(c.useMemo)((function(){var e=Date.parse(m)+60*(new Date).getTimezoneOffset()*1e3;return new Date(e).toLocaleDateString("en-US")}),[m]),C=function(){S((function(e){return!e}))};return Object(s.jsxs)("div",{className:"card mb-3 position-relative",children:[Object(s.jsx)("button",{type:"button",title:r?"Dislike":"Like",className:"position-absolute btn shadow-none",style:{right:0,zIndex:100},onClick:function(){return r?n(t.id):a(t)},children:r?Object(s.jsx)("i",{className:"bi bi-heart-fill text-danger h2"}):Object(s.jsx)("i",{className:"bi bi-heart h2"})}),Object(s.jsxs)("div",{className:"row g-0",children:[Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)("img",{src:N||p.a,className:"img-fluid rounded-start image_standart image_card",alt:v,onClick:C,type:"button"})}),Object(s.jsx)("div",{className:"col-md-8",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:i||v||"No name"}),Object(s.jsx)("p",{className:"card-text",children:Object(s.jsx)("a",{href:k,target:"_blank",rel:"noreferrer",className:"card-link",children:"GitHub"})}),h&&Object(s.jsxs)("p",{className:"card-text",children:["Email: ",h]}),b&&Object(s.jsxs)("p",{className:"card-text",children:["Company: ",b]}),O&&Object(s.jsxs)("p",{className:"card-text",children:["Location: ",O]}),g&&Object(s.jsx)("p",{className:"card-text",children:g}),x&&Object(s.jsx)("p",{className:"card-text",children:x}),Object(s.jsxs)("p",{className:"card-text",children:["Followers: ",d]}),Object(s.jsxs)("p",{className:"card-text",children:["Following: ",u]}),Object(s.jsxs)("p",{className:"card-text",children:["Registered in ",T]}),Object(s.jsx)("p",{className:"card-text",children:Object(s.jsxs)("small",{className:"text-muted",children:["Last updated",Object(s.jsx)(l.a,{date:Date.parse(j),timeStyle:"round-minute",locale:"en-US",className:"ml-1"})]})})]})})]}),N&&_&&Object(s.jsx)(f,{onClose:C,children:Object(s.jsx)("img",{src:N,alt:v,className:"img-fluid"})})]})},x=a(36),g=a(118),v=a(28),N=a(20);t.default=function(){var e=Object(i.b)(),t=Object(n.f)(),a=Object(n.g)(),o=Object(i.c)((function(e){return e.users.user})),l=Object(i.c)((function(e){return e.users.error})),d=Object(i.c)((function(e){return N.b(e,o&&o.id)}));Object(c.useEffect)((function(){return e(g.a(a.params.id)),function(){return e(v.a())}}),[]),Object(c.useEffect)((function(){l&&404===l.status&&t.push("/error404")}),[l]);return Object(s.jsxs)("div",{className:"container pt-5",children:[Object(s.jsx)("div",{className:"page-header",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 mb-3",children:Object(s.jsx)("h3",{className:"page-title ",children:"User Information"})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("ul",{className:"breadcrumb",children:[Object(s.jsx)("li",{className:"breadcrumb-item",children:Object(s.jsx)(r.b,{to:"/",className:"text-secondary",children:"Home"})}),Object(s.jsx)("li",{className:"breadcrumb-item",children:Object(s.jsx)(r.b,{to:"/users",className:"text-secondary",children:"Users"})}),Object(s.jsx)("li",{className:"breadcrumb-item active text-secondary",children:"User Information"})]})})]})}),!o&&Object(s.jsx)(x.a,{}),o&&Object(s.jsx)(O,{onLike:function(t){e(v.h(t))},onUnlike:function(t){e(v.j(t))},user:o,isFavourite:d})]})}}}]);
//# sourceMappingURL=user.cc28868a.chunk.js.map