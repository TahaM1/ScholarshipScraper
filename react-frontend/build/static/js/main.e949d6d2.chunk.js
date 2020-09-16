(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{67:function(e,t,a){e.exports=a(80)},72:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},74:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(72),a(17)),i=a(18),s=a(23),m=a(22),u=(a(73),a(74),a(51)),h=a(47),d=a.n(h),p=a(52),E=a(36),f=a(112),g=a(130),b=a(133),v=a(115),y=a(132),O=a(116),S=a(131),j=a(117),k=a(128),C=a(118),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={directory:"",search:"",location:""},n.handleFormChange=n.handleFormChange.bind(Object(E.a)(n)),n.handleFormSubmit=n.handleFormSubmit.bind(Object(E.a)(n)),n}return Object(i.a)(a,[{key:"handleFormSubmit",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={directory:this.state.directory,search:this.state.search,location:this.state.location},this.props.updateStatus(!0);try{fetch("/api/scrape",{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){n.props.updateResponse(e.links),n.props.updateStatus(!1)}))}catch(r){console.log(r),this.props.updateStatus(!1)}case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleFormChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(g.a,{marginTop:5},r.a.createElement(b.a,{component:"fieldset"},r.a.createElement(f.a,{item:!0},r.a.createElement(v.a,{component:"legend",color:"secondary"},"Which Directory would you like to Search?")),r.a.createElement(g.a,{marginTop:2},r.a.createElement(f.a,{container:!0,item:!0,xs:12},r.a.createElement(f.a,{item:!0,xs:2}),r.a.createElement(f.a,{item:!0,xs:8},r.a.createElement(y.a,{"aria-label":"quiz",name:"directory",onChange:this.handleFormChange},r.a.createElement(O.a,{value:"0",control:r.a.createElement(S.a,null),label:"Yellow Pages (CA)"}),r.a.createElement(O.a,{value:"1",control:r.a.createElement(S.a,null),label:"Yellow Pages (US)"})),r.a.createElement(f.a,{item:!0,xs:2})))),r.a.createElement(j.a,null))),r.a.createElement(f.a,{container:!0,item:!0,direction:"row",justify:"center",spacing:3},r.a.createElement(f.a,{item:!0},r.a.createElement(k.a,{color:"secondary",variant:"standard",name:"search",label:"Search",placeholder:"Eg. Soccer Club",onChange:this.handleFormChange})),r.a.createElement(f.a,{item:!0},r.a.createElement(k.a,{color:"secondary",variant:"standard",name:"location",label:"Location",placeholder:"Eg. Toronto ON",onChange:this.handleFormChange}))),r.a.createElement(g.a,{marginTop:5},r.a.createElement(C.a,{type:"submit",variant:"contained",color:"secondary"},"Submit")))))}}]),a}(n.Component),w=(a(119),a(120),a(82)),x=function(){return r.a.createElement(w.a,{variant:"overline",component:"p",color:"textSecondary"},"Find LOCAL scholarships faster")},T=(a(79),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{component:"div",variant:"h2",color:"textPrimary"},r.a.createElement(g.a,{marginTop:9,p:0},"Scholarship Scraper"))}}]),a}(n.Component)),L=a(121),A=a(122),N=a(123),P=a(124),D=a(125),I=a(126),J=a(127),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e;return e=this.props.data.length>0?this.props.data.map((function(e,t){return r.a.createElement(L.a,{key:t},r.a.createElement(A.a,{align:"center"},r.a.createElement("a",{href:e},e)))})):!0===this.props.status?r.a.createElement(g.a,{p:2},r.a.createElement(N.a,null)):r.a.createElement(L.a,null,r.a.createElement(A.a,{align:"center"},"The form has not been submitted yet.")),r.a.createElement("div",null,r.a.createElement(g.a,{p:4},r.a.createElement(f.a,{container:!0,direction:"column"},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:0,sm:1,md:2}),r.a.createElement(f.a,{item:!0,xs:12,sm:10,md:8,justify:"center"},r.a.createElement(P.a,null,r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement(L.a,null,r.a.createElement(A.a,{align:"center"},r.a.createElement("strong",null,"SCHOLARSHIPS FOUND")))),r.a.createElement(J.a,null,e)))),r.a.createElement(f.a,{item:!0,xs:0,sm:1,md:2})))))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={links:[],isFetching:!1},e.updateFetching=function(t){e.setState({isFetching:t}),console.log(e.state.isFetching)},e.updateLinks=function(t){e.setState({links:t}),console.log(e.state.links)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{container:!0,direction:"column"},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:1,sm:2,md:3}),r.a.createElement(f.a,{item:!0,xs:10,sm:8,md:6},r.a.createElement(T,null),r.a.createElement(x,null),r.a.createElement(F,{updateResponse:this.updateLinks,updateStatus:this.updateFetching}),r.a.createElement(R,{data:this.state.links,status:this.state.isFetching})),r.a.createElement(f.a,{item:!0,xs:1,sm:2,md:3}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.e949d6d2.chunk.js.map