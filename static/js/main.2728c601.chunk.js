(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(12),o=a.n(r),c=(a(18),a(19),a(6)),s=a(7),l=a(8),m=a(9),d=a(30),u=a(31),h=a(24),g=a(25),p=a(29),y=a(27),v=a(26),E=a(28),f=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"RenderDish",value:function(e){return i.a.createElement(h.a,null,i.a.createElement(g.a,{width:"100%",src:e.image,alt:e.name}),i.a.createElement(v.a,null,i.a.createElement(y.a,null,e.name),i.a.createElement(E.a,null,e.description)))}},{key:"RenderComments",value:function(e){if(null!=e){var t=e.map((function(e){return i.a.createElement("ul",{key:e.id,className:"list-unstyled"},i.a.createElement("li",null,i.a.createElement("p",null," ",e.comment," "),i.a.createElement("p",null," -- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}));return i.a.createElement("div",null,i.a.createElement("h4",null," Comments "),t)}return i.a.createElement("div",null)}},{key:"render",value:function(){return null!=this.props.dish?i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-5 m-1"},this.RenderDish(this.props.dish)),i.a.createElement("div",{className:"col-12 col-md-5 m-1"},this.RenderComments(this.props.dish.comments))):i.a.createElement("div",null)}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={selectedDish:null},n}return Object(s.a)(a,[{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this,t=this.props.dishes.map((function(t){return i.a.createElement("div",{className:"col-12 col-md-5 m-1"},i.a.createElement(h.a,{key:t.id,onClick:function(){return e.onDishSelect(t)}},i.a.createElement(g.a,{width:"100%",src:t.image,alt:t.name}),i.a.createElement(p.a,null,i.a.createElement(y.a,null,t.name))))}));return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},t),i.a.createElement(f,{dish:this.state.selectedDish}))}}]),a}(n.Component),b=[{id:0,name:"Uthappizza",image:"assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:1,name:"Zucchipakoda",image:"assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:2,name:"Vadonut",image:"assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:3,name:"ElaiCheese Cake",image:"assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]}],k=(a(22),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={dishes:b},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{dark:!0,color:"primary"},i.a.createElement("div",{className:"container"},i.a.createElement(u.a,{href:"/"},"Ristorante Con Fusion"))),i.a.createElement(w,{dishes:this.state.dishes}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.2728c601.chunk.js.map