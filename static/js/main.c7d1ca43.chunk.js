(window.webpackJsonpmonsters=window.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),l=(t(13),t(3)),i=t(4),s=t(6),u=t(5),h=t(7),p=(t(14),t(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"player",src:e.player.picture}),r.a.createElement("h2",null," ",e.player.name," "),r.a.createElement("p",null," Position: ",e.player.position),r.a.createElement("p",null," ",e.player.birthplace))}),m=(t(16),function(e){return r.a.createElement("div",{className:"card-list"},e.players.map((function(e){return r.a.createElement(p,{key:e.id,player:e})})))}),d=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={players:[],searchField:""},e}return Object(h.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://json-server-blackhawks.herokuapp.com/profile").then((function(e){return e.json()})).then((function(n){return e.setState({players:n})}))}},{key:"render",value:function(){var e=this.state,n=e.players,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Blackhawks 2019 Roster"),r.a.createElement(d,{placeholder:"search players",handleChange:this.handleChange}),r.a.createElement(m,{players:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c7d1ca43.chunk.js.map