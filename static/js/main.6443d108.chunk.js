(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),s=a(13),c=a.n(s),o=a(3),i=a(14),l=a(15),h=a(19),m=a(18),d=a(16);var u=function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last})}),Object(n.jsx)("th",{scope:"row",children:e.name.first+" "+e.name.last}),Object(n.jsx)("td",{children:e.gender}),Object(n.jsx)("td",{children:e.dob.age}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.location.city+","+e.location.country})]},e.email)};var b=function(e){return Object(n.jsx)("tbody",{children:e.employees.map((function(e){return Object(n.jsx)(u,Object(d.a)({},e))}))})},j=a(17),p=a.n(j),f=function(e){return p.a.get("https://randomuser.me/api/?results="+e)};var O=function(e){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"image"}),Object(n.jsxs)("th",{scope:"col",children:["Name ",Object(n.jsx)("button",{className:"btn btn-light",onClick:e.handleSort,children:Object(n.jsx)("i",{className:"fas fa-sort"})})]}),Object(n.jsx)("th",{scope:"col",children:"Gender"}),Object(n.jsx)("th",{scope:"col",children:"Age"}),Object(n.jsx)("th",{scope:"col",children:"email"}),Object(n.jsx)("th",{scope:"col",children:"City"})]})})};var x=function(e){return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search by employee name",id:"search"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})},g=function(e,t){return e.name.first>t.name.first||e.name.first===t.name.first&&e.name.last>t.name.last?1:-1},y=function(e,t){return e.name.first<t.name.first||e.name.first===t.name.first&&e.name.last<t.name.last?1:-1},v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={result:[{gender:"male",name:{title:"Mr",first:"Logan",last:"Matthews"},location:{street:{number:2636,name:"Hunters Creek Dr"},city:"Gresham",state:"Oregon",country:"United States",postcode:28761,coordinates:{latitude:"89.9416",longitude:"-0.7126"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"logan.matthews@example.com",login:{uuid:"a8d466b3-65de-4445-b576-1491993bbf9b",username:"heavygoose158",password:"foxtrot",salt:"zuZ6rsu7",md5:"36b0223638ce21aa97c0a2404924e49a",sha1:"69401acb7352eb51745025042ef9e04571cb8fff",sha256:"f2a828aea495deec96549ed5b7b43e8e30a923422761a5cb33833578d82dbd81"},dob:{date:"1961-06-23T21:17:33.011Z",age:60},registered:{date:"2012-09-14T14:27:42.118Z",age:9},phone:"(552)-779-6778",cell:"(242)-985-5593",id:{name:"SSN",value:"966-91-6892"},picture:{large:"https://randomuser.me/api/portraits/men/7.jpg",medium:"https://randomuser.me/api/portraits/med/men/7.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/7.jpg"},nat:"US"}],search:"",sort:!0},e.searchEmpl=function(t){f(t).then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(o.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.setState({search:""})},e.handleSort=function(){!0===e.state.sort?e.setState({sort:!1}):e.setState({sort:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.searchEmpl("15")}},{key:"render",value:function(){var e=this,t=this.state.result.filter((function(t){return(t.name.first+" "+t.name.last).toLowerCase().includes(e.state.search)})),a=[];return a=!0===this.state.sort?t.sort(g):t.sort(y),Object(n.jsxs)("main",{children:[Object(n.jsx)("h1",{children:"Our International company"}),Object(n.jsx)(x,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(n.jsxs)("table",{className:"table table-striped table-hover",children:[Object(n.jsx)(O,{handleSort:this.handleSort}),Object(n.jsx)(b,{employees:a})]})]})}}]),a}(r.Component);var S=function(){return Object(n.jsx)(v,{})};a(43);c.a.render(Object(n.jsx)(S,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6443d108.chunk.js.map