(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a.p+"static/media/footer.27eed871.jpg"},224:function(e,t,a){e.exports=a(405)},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),o=a.n(i),s=a(20),c=a(408),l=a(410),u=a(409),m=a(11),g=a(10),p=a(65),d=a.n(p),v=a(145),f={root:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",backgroundImage:"url(".concat(a.n(v).a,")"),backgroundSize:"cover",height:200},media:{width:140,height:124,marginRight:"6rem",alignSelf:"center"}},h=Object(m.withStyles)(f)(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(g.c,{className:t.media,image:d.a,title:"Logo"}))}),y=a(407),E=a(24),b=a.n(E),O=a(50),w="SET_ACTIVE_PAGE",j="SET_YEAR",S="SET_GENRE",x="SET_KEYWORD",k="CLEAN_KEYWORD_MOVIES",C=a(51),M=a.n(C),N="5874acfd11651a28c55771624f7021f4",_=function(e,t){return function(){var a=Object(O.a)(b.a.mark(function a(n){var r,i;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r="https://api.themoviedb.org/3/discover/movie?api_key=".concat(N,"&primary_release_year=").concat(t,"&page=").concat(e),a.next=3,M.a.get(r);case 3:i=a.sent,n({type:"GET_MOVIES",payload:i.data});case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},I=function(e,t,a){return function(){var n=Object(O.a)(b.a.mark(function n(r){var i,o;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i="https://api.themoviedb.org/3/discover/movie?api_key=".concat(N,"&primary_release_year=").concat(t,"&with_genres=").concat(a,"&page=").concat(e),n.next=3,M.a.get(i);case 3:o=n.sent,r({type:"GET_MOVIES_FILTERS",payload:o.data});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()};function G(e){return{type:w,payload:e}}function P(e){return{type:j,payload:e}}function T(e){return{type:S,payload:e}}var Y=Object(s.b)(null,{setActivePage:G,setGenre:T,setYear:P,getMovies:_})(Object(m.withStyles)({toolbar:{display:"flex",width:"100%",justifyContent:"center",backgroundColor:"black"},media:{width:60,height:53,margin:".5rem"},marginLeft:{marginLeft:30}})(function(e){var t=e.classes;return r.a.createElement(g.a,{position:"fixed",color:"primary"},r.a.createElement("div",{className:t.toolbar},r.a.createElement(g.k,null,r.a.createElement(y.a,{to:"/",onClick:function(){var t=e.setActivePage,a=e.setGenre,n=e.setYear,r=e.getMovies;t(1),a(0),n(2018),r(1,2018),window.scrollTo(0,0)}},r.a.createElement(g.c,{className:t.media,image:d.a,title:"Logo"})),r.a.createElement("div",{className:t.marginLeft},r.a.createElement(g.l,{variant:"h5",color:"inherit"},"Discover New Movies")))))})),R=a(39),B=a(40),F=a(42),A=a(41),D=a(43),L=function(e){function t(){return Object(R.a)(this,t),Object(F.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.activePage,a=e.activeYear;this.props.getMovies(t,a)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.items;return r.a.createElement("div",{className:t.root,elevation:1},r.a.createElement(g.f,{item:!0,xl:10,className:t.container},r.a.createElement("div",{className:t.main},r.a.createElement("div",{className:t.sortPanel},r.a.createElement(ne,null)),r.a.createElement("div",{className:t.cards},a.map(function(e){return r.a.createElement($,Object.assign({key:e.id},e))})))),r.a.createElement(ee,null))}}]),t}(n.Component),V=Object(s.b)(function(e){return{items:e.movies.itemsOnPage,activePage:e.movies.activePage,activeYear:e.movies.year}},{getMovies:_})(Object(m.withStyles)({root:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto",flexGrow:1,width:"100%"},container:{display:"flex",margin:"0 auto",justifyContent:"center",paddingTop:"6rem"},main:{display:"flex",flexDirection:"column",padding:"0 4rem"},sortPanel:{display:"flex",margin:"0 auto",justifyContent:"center"},cards:{display:"flex",flexWrap:"wrap",margin:"0 auto",marginTop:"1.5rem",justifyContent:"center"}})(L)),W=a(62),K=a.n(W),z=a(61),q=a.n(z),H=a(60),U=a.n(H),J=a(22),Q=a.n(J),X=a(38),Z=a.n(X);var $=Object(m.withStyles)({card:{maxWidth:483,height:278,display:"flex",margin:"1rem"},details:{display:"flex",flexDirection:"column",width:298},content:{flex:"1 0 auto"},media:{width:185,height:278}})(function(e){var t=e.classes,a=e.title,n=e.overview,i=e.release_date,o=e.poster_path;return r.a.createElement(g.b,{className:t.card},r.a.createElement(U.a,{className:t.media,image:"https://image.tmdb.org/t/p/w185_and_h278_bestv2".concat(o),title:"Live from space album cover"}),r.a.createElement("div",{className:t.details},r.a.createElement(q.a,{className:t.content},r.a.createElement(Z.a,{variant:"h6",style:{lineHeight:1.2}},a),r.a.createElement(Z.a,{gutterBottom:!0,variant:"subtitle1",color:"textSecondary"},i),r.a.createElement(Z.a,{component:"p",style:{overflow:"hidden",maxHeight:100}},n)),r.a.createElement(g.e,null),r.a.createElement(K.a,null,r.a.createElement(Q.a,{size:"small",color:"inherit"},"More info"))))}),ee=Object(s.b)(function(e){return{items:e.movies.itemsOnPage,pages:e.movies.pages,activePage:e.movies.activePage,activeYear:e.movies.year,activeGenre:e.movies.activeGenre}},{getMovies:_,getMoviesFilters:I,setActivePage:G})(Object(m.withStyles)({root:{marginBottom:"2rem"},button:{minWidth:"40px"},active:{minWidth:"40px",fontSize:"1rem"}})(function(e){var t=e.getMovies,a=e.getMoviesFilters,n=e.setActivePage,i=e.activePage,o=e.activeYear,s=e.activeGenre,c=e.pages,l=e.classes,u=function(e){n(e),s?a(e,o,s):t(e,o),window.scrollTo(0,0)};return r.a.createElement("div",{className:l.root},r.a.createElement(Q.a,{size:"small",className:l.button,disabled:1===i,component:y.a,to:"/page/".concat(1),onClick:function(){return u(1)}},"\xab"),r.a.createElement(Q.a,{size:"small",className:l.button,disabled:1===i,component:y.a,to:"/page/".concat(i-1),onClick:function(){return u(i-1)}},"Previous"),r.a.createElement(Q.a,{className:l.active,size:"large"},i),r.a.createElement(Q.a,{size:"small",className:l.button,disabled:i===i+1,component:y.a,to:"/page/".concat(i+1),onClick:function(){return u(i+1)}},"Next"),r.a.createElement(Q.a,{size:"small",className:l.button,disabled:i===c,component:y.a,to:"/page/".concat(c),onClick:function(){return u(c)}},"\xbb"))})),te=Object(m.withStyles)(function(e){return{root:{"label + &":{marginTop:3*e.spacing.unit}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,minWidth:100,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}})(g.g),ae=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(F.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={year:2018,genre:""},a.handleChangeYear=function(){return function(e){var t=a.props,n=t.activeGenre,r=t.setYear,i=t.getMovies,o=t.getMoviesFilters;r(e.target.value),n?o(1,e.target.value,n):i(1,e.target.value)}},a.handleChangeGenre=function(){return function(e){var t=a.props,n=t.activeYear,r=t.setGenre,i=t.getMoviesFilters;r(e.target.value),i(1,n,e.target.value)}},a}return Object(D.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.classes,a=e.activeYear,n=e.activeGenre,i=[],o=0;o<=42;o++)i[o]=2019-o;return r.a.createElement("form",{className:t.root,autoComplete:"off"},r.a.createElement(ce,{BootstrapInput:te,years:i,handleChange:this.handleChangeYear,activeYear:a}),r.a.createElement(le,{BootstrapInput:te,genres:[{id:28,name:"Action"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:14,name:"Fantasy"},{id:27,name:"Horror"},{id:53,name:"Thriller"}],handleChange:this.handleChangeGenre,activeGenre:n}),r.a.createElement(Oe,null))}}]),t}(n.Component),ne=Object(s.b)(function(e){return{activePage:e.movies.activePage,activeYear:e.movies.year,activeGenre:e.movies.activeGenre}},{setYear:P,setGenre:T,getMovies:_,getMoviesFilters:I})(Object(m.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"}}})(ae)),re=a(30),ie=a.n(re),oe=a(31),se=a.n(oe),ce=Object(m.withStyles)(function(e){return{form:{margin:e.spacing.unit},name:{marginBottom:".5rem"}}})(function(e){var t=e.classes,a=e.BootstrapInput,n=e.handleChange,i=e.years,o=e.activeYear;return r.a.createElement(ie.a,{className:t.form},r.a.createElement("div",{className:t.name},r.a.createElement(g.l,{variant:"button",color:"inherit"},"Year")),r.a.createElement(se.a,{value:o,onChange:n(),input:r.a.createElement(a,{name:"year"})},r.a.createElement(g.h,{value:0},r.a.createElement("em",null,"None")),i.map(function(e){return r.a.createElement(g.h,{key:e,value:e},e)})))}),le=Object(m.withStyles)(function(e){return{form:{margin:e.spacing.unit},name:{marginBottom:".5rem"}}})(function(e){var t=e.classes,a=e.BootstrapInput,n=e.handleChange,i=e.genres,o=e.activeGenre;return r.a.createElement(ie.a,{className:t.form},r.a.createElement("div",{className:t.name},r.a.createElement(g.l,{variant:"button",color:"inherit"},"Genres")),r.a.createElement(se.a,{value:o,onChange:n(),input:r.a.createElement(a,{name:"genre"})},r.a.createElement(g.h,{value:""},r.a.createElement("em",null,"None")),i.map(function(e){return r.a.createElement(g.h,{key:e.id,value:e.id},e.name)})))}),ue=a(146),me=a(49),ge=a(147),pe=a.n(ge),de=a(148),ve=a.n(de),fe=a(149),he=a.n(fe),ye=a(150),Ee=a.n(ye),be=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(F.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={single:"",popper:"",suggestions:[]},a.handleSuggestionsFetchRequested=function(e){var t=e.value;a.props.setKeyword(t),a.props.getMoviesByKeyword(t),a.setState({suggestions:a.getSuggestions(t)})},a.handleSuggestionsClearRequested=function(){a.setState({suggestions:[]}),a.props.cleanKeywordMovies()},a.handleChange=function(e){return function(t,n){var r=n.newValue;if(a.setState(Object(me.a)({},e,r)),t.target.innerText){var i=a.state.suggestions.filter(function(e){return e.label===r})[0].id;a.props.getMovieById(i),a.setState(Object(me.a)({},e,""))}}},a}return Object(D.a)(t,e),Object(B.a)(t,[{key:"suggestions",value:function(){var e=this.props.keywordMovies.map(function(e){return{label:e.title,id:e.id}});return e}},{key:"renderInputComponent",value:function(e){var t=e.classes,a=e.inputRef,n=void 0===a?function(){}:a,i=e.ref,o=Object(ue.a)(e,["classes","inputRef","ref"]);return r.a.createElement(g.j,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){i(e),n(e)},classes:{input:t.input}}},o))}},{key:"renderSuggestion",value:function(e,t){var a=t.query,n=t.isHighlighted,i=he()(e.label,a),o=Ee()(e.label,i);return r.a.createElement(g.h,{selected:n,component:"div"},r.a.createElement("div",null,o.map(function(e,t){return e.highlight?r.a.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):r.a.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text)})))}},{key:"getSuggestions",value:function(e){var t=pe()(e.trim()).toLowerCase(),a=t.length,n=0,r=this.suggestions();return 0===a?[]:r.filter(function(e){var r=n<5&&e.label.slice(0,a).toLowerCase()===t;return r&&(n+=1),r})}},{key:"getSuggestionValue",value:function(e){return e.label}},{key:"render",value:function(){var e=this.props.classes,t={renderInputComponent:this.renderInputComponent,suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion};return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.name},r.a.createElement(g.l,{variant:"button",color:"inherit"},"Keywords")),r.a.createElement(ve.a,Object.assign({},t,{inputProps:{classes:e,placeholder:"Filter by keywords...",value:this.state.single,onChange:this.handleChange("single")},theme:{container:e.container,suggestionsContainerOpen:e.suggestionsContainerOpen,suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:function(e){return r.a.createElement(g.i,Object.assign({},e.containerProps,{square:!0}),e.children)}})))}}]),t}(n.Component),Oe=Object(s.b)(function(e){return{keyword:e.movies.keyword,keywordMovies:e.movies.keywordMovies}},{setKeyword:function(e){return{type:x,payload:e}},getMoviesByKeyword:function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=".concat(N,"&query=").concat(e,"&page=1"),t.next=3,M.a.get(n);case 3:r=t.sent,a({type:"GET_KEYWORD_MOVIES",payload:r.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},cleanKeywordMovies:function(){return{type:k}},getMovieById:function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(N),t.next=3,M.a.get(n);case 3:r=t.sent,a({type:"GET_MOVIE_BY_ID",payload:r.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(Object(m.withStyles)(function(e){return{root:{flexGrow:1,margin:e.spacing.unit},name:{marginBottom:".8rem"},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:2*e.spacing.unit}}})(be)),we=function(){return r.a.createElement("div",{style:{margin:"10rem"}},r.a.createElement(g.l,{variant:"h3",gutterBottom:!0},"404 Path Not Found"),r.a.createElement(g.l,{variant:"h6",gutterBottom:!0},"Sorry, that page does not exist"))},je=Object(m.withStyles)({root:{height:"100%",display:"flex",flexDirection:"column",width:"100%"},content:{flex:"1 0 auto"},footer:{flex:"0 0 auto"}})(function(e){var t=e.classes;return r.a.createElement(c.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(g.d,null),r.a.createElement(Y,null),r.a.createElement("div",{className:t.content},r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:V}),r.a.createElement(u.a,{exact:!0,path:"/page/:id",component:V}),r.a.createElement(u.a,{component:we}))),r.a.createElement("div",{className:t.footer},r.a.createElement(h,null))))}),Se=a(28),xe=a(152),ke=a(23),Ce={itemsOnPage:[],pages:null,year:2018,activePage:1,activeGenre:0,keyword:"",keywordMovies:[]},Me=Object(Se.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":case"GET_MOVIES_FILTERS":return Object(ke.a)({},e,{itemsOnPage:t.payload.results,pages:t.payload.total_pages});case w:return Object(ke.a)({},e,{activePage:t.payload});case j:return Object(ke.a)({},e,{year:t.payload,activePage:1});case S:return Object(ke.a)({},e,{activeGenre:t.payload,activePage:1});case x:return Object(ke.a)({},e,{keyword:t.payload});case"GET_KEYWORD_MOVIES":return Object(ke.a)({},e,{keywordMovies:t.payload.results});case k:return Object(ke.a)({},e,{keyword:"",keywordMovies:[]});case"GET_MOVIE_BY_ID":return Object(ke.a)({},e,{itemsOnPage:[t.payload]});default:return e}}}),Ne=[xe.a],_e=Object(Se.e)(Me,{},Object(Se.d)(Se.a.apply(void 0,Ne)));a(404);o.a.render(r.a.createElement(s.a,{store:_e},r.a.createElement(je,null)),document.getElementById("root"))},65:function(e,t,a){e.exports=a.p+"static/media/logo.02a9430b.svg"}},[[224,1,2]]]);
//# sourceMappingURL=main.8ae50287.chunk.js.map