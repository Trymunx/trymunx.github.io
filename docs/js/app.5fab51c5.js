(function(t){function e(e){for(var r,n,i=e[0],l=e[1],u=e[2],p=0,d=[];p<i.length;p++)n=i[p],o[n]&&d.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={1:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;s.push([5,0]),a()})({"00LD":function(t,e,a){},5:function(t,e,a){t.exports=a("Vtdi")},"7mOm":function(t,e,a){},"89TT":function(t,e,a){"use strict";var r=a("R2i9"),o=a.n(r);o.a},GU8h:function(t,e,a){},R2i9:function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var r=a("Kw5r"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"router"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),a("router-link",{attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" "),a("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),a("router-view")],1)},s=[],n=(a("ZL7j"),a("KHd+")),i={},l=Object(n["a"])(i,o,s,!1,null,null,null),u=l.exports,c=a("jE9Z"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"link-background"}),t._v(" "),r("div",{staticClass:"about"},[r("div",{staticClass:"background-image"},[r("img",{staticClass:"profile-picture",attrs:{src:a("aUmZ")}}),t._v(" "),r("div",{staticClass:"about-card"},[r("img",{staticClass:"card-profile-picture",attrs:{src:a("aUmZ")}}),t._v(" "),r("h2",[t._v("Alexander Houseago")]),t._v(" "),r("p",[t._v("Hobbyist web developer and Linux enthusiast.")]),t._v(" "),r("div",{staticClass:"social-links"},[r("a",{attrs:{href:"https://twitter.com/trymunx",target:"_blank"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"https://github.com/trymunx",target:"_blank"}},[r("i",{staticClass:"fab fa-github"})]),t._v(" "),r("a",{attrs:{href:"mailto:trymunx@gmail.com"}},[r("i",{staticClass:"fas fa-envelope"})])])])])]),t._v(" "),r("div",{staticClass:"about-me"},[r("h2",[t._v("Alexander Houseago")]),t._v(" "),r("p",[t._v("Hobbyist web developer and Linux enthusiast.")]),t._v(" "),r("div",{staticClass:"social-links"},[r("a",{attrs:{href:"https://twitter.com/trymunx",target:"_blank"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"https://github.com/trymunx",target:"_blank"}},[r("i",{staticClass:"fab fa-github"})]),t._v(" "),r("a",{attrs:{href:"mailto:trymunx@gmail.com"}},[r("i",{staticClass:"fas fa-envelope"})])])])])}],h={name:"about"},f=h,m=(a("emOn"),Object(n["a"])(f,p,d,!1,null,null,null)),g=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-background",on:{click:function(e){t.setActive("")}}},[a("div",{staticClass:"projects"},t._l(t.projects,function(e,r){return a("project-card",{key:r,attrs:{focused:t.active===r},nativeOn:{click:function(t){t.stopPropagation()}}},[a("img",{staticClass:"card-image",attrs:{slot:"card-image",src:e.img},on:{click:function(a){a.stopPropagation(),t.setActive(e.title)}},slot:"card-image"}),t._v(" "),a("h1",{attrs:{slot:"project-title"},slot:"project-title"},[t._v(t._s(e.title))]),t._v(" "),a("a",{attrs:{slot:"link-button",href:e.link.url,target:"_blank"},slot:"link-button"},[t._v(t._s(e.link.title))]),t._v(" "),a("a",{attrs:{slot:"source-button",href:e.source,target:"_blank"},slot:"source-button"},[a("i",{staticClass:"fab fa-github"})]),t._v(" "),a("p",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.description))]),t._v(" "),a("p",{attrs:{slot:"writeup"},slot:"writeup"},[t._v(t._s(e.writeup))])])}))])},b=[],w=(a("INYr"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"project-card "+(t.focused?"fullscreen":"")},[t._t("card-image"),t._v(" "),a("div",{staticClass:"card-title"},[a("div",{staticClass:"project-title"},[t._t("project-title")],2),t._v(" "),a("span",{staticClass:"link-button"},[t._t("link-button")],2),t._v(" "),a("span",{staticClass:"source-button"},[t._t("source-button")],2)]),t._v(" "),a("span",{class:t.focused?"focused-summary":"card-content"},[t._t("description")],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"writeup"},[t._t("writeup")],2)],2)}),_=[],y={props:{focused:{type:Boolean,default:!1}}},k=y,x=(a("ahz8"),Object(n["a"])(k,w,_,!1,null,null,null)),j=x.exports,C=a("WYXx"),I={data:function(){return{projects:C,active:-1}},components:{ProjectCard:j},methods:{setActive:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a||this.$router.push({path:"/projects/".concat(t||"")}),this.active=this.$route.params.post?this.projects.findIndex(function(t){return t.title.toLowerCase()===e.$route.params.post.toLowerCase()}):-1}},created:function(){this.setActive(this.$route.params.title,!0)}},O=I,A=(a("z7ti"),Object(n["a"])(O,v,b,!1,null,null,null)),S=A.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog"})},L=[],T={name:"blog"},$=T,z=(a("89TT"),Object(n["a"])($,P,L,!1,null,null,null)),D=z.exports;r["a"].use(c["a"]);var E=new c["a"]({routes:[{path:"/",redirect:"/about"},{path:"/about",name:"about",component:g},{path:"/blog",name:"blog",component:D},{path:"/projects/:post?",name:"projects",component:S}]}),U=a("L2JU");r["a"].use(U["a"]);var Z=new U["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:E,store:Z,render:function(t){return t(u)}}).$mount("#app")},WYXx:function(t){t.exports=[{title:"Spindelspel",img:"/projects/Spindelspel.png",link:{title:"PLAY",url:"https://trymunx.github.io/Spindelspel"},source:"https://github.com/trymunx/Spindelspel",description:"A top down swarm game created in p5js, a JavaScript port of Processing. This was completed from scratch over a weekend so has a lot of rough edges.",writeup:"This top down game was the result of spending a weekend learning the p5js library. I had a vague idea of what sort of mechanics I would like to have before I started, but a lot was worked out along the way.\nThe first problem I solved was getting a player 'blob' that I could move with the WASD or arrow keys. I tried adding zooming in and out at this stage but what I was really doing was scaling the size of the blob rather than moving the camera in and out. In the end I didn't have time to fix this, so I left it as a mechanic where the larger the player is, the easier it is for spiders to reach them but the quicker they can draw their bow.\nI used inkscape and GIMP to draw and colour the spiders, which look very beetle-like due to some fairly poor digital art skills. Getting these to rotate to follow the player was a bit of a challenge and required trying to remember my A level maths trigonometry lessons. The solution is not very performant which means the game really slows down if many spiders are present on screen at once. I would have liked to fix this but as spending time on performance increases was not really high priority I just hoped players wouldn't get a high enough score to see too many spiders.\nInstead of using pre-drawn assets for the arrows, I wanted to draw them using p5's canvas drawing tools. These were easy enough to use for things like the grass tufts randomly placed, but the arrows were more time-consuming so ended up just being sticks with white points. Similarly, I had intended on updating the player from just a white blob to be a top-down view of a person but ran out of time.\nA few things like this were programmatically decided; the number of spiders depends on the player's score, their speed on their size and the likelihood of the arrow piercing them and continuing on through depends both on the speed of the arrow and the size of the spider."},{title:"Dragon Slayer",img:"/projects/DragonSlayer.png",link:{title:"PLAY",url:"https://trymunx.github.io/Dragon-Slayer"},source:"https://github.com/trymunx/Dragon-Slayer",description:"An attempt at a text based RPG using electron. Over the course of creating this I found that what I was making was much more a roguelike than a text adventure, and didn't really suit the text-based style.",writeup:"Starting out as a development on a Codecademy task of writing a program that would print whether or not you killed a dragon based on a random number generator, I ended up taking this project a long way from its origins.\nThe first version was fairly similar, albeit slightly more complex through the addition of dragon and player hitpoints and attack damage. It had no player input but would output a battle log of all of the turns of the player and the dragon, with a summary of whether or not the player had defeated the dragon. I then began using objects as I learned more about JavaScript, and eventually wrote a version that would continue respawning dragons until the player was dead, giving the number of dragons killed as the final line in the long output of turns."}]},ZL7j:function(t,e,a){"use strict";var r=a("00LD"),o=a.n(r);o.a},aUmZ:function(t,e,a){t.exports=a.p+"img/Alex-Line.9caaf979.png"},ahz8:function(t,e,a){"use strict";var r=a("GU8h"),o=a.n(r);o.a},emOn:function(t,e,a){"use strict";var r=a("ld+O"),o=a.n(r);o.a},"ld+O":function(t,e,a){},z7ti:function(t,e,a){"use strict";var r=a("7mOm"),o=a.n(r);o.a}});
//# sourceMappingURL=app.5fab51c5.js.map