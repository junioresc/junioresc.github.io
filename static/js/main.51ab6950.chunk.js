(this.webpackJsonpjuniorescobar=this.webpackJsonpjuniorescobar||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){var n={"./dc-adopt.PNG":13,"./horiseon-nav-with-hero.jpg":14,"./nomadica.jpg":15,"./password-gen-site.PNG":16,"./pizza-hunt.PNG":17,"./portfolio.jpg":18,"./run-buddy.jpg":19};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=12},function(e,t,a){e.exports=a.p+"static/media/dc-adopt.3ff47898.PNG"},function(e,t,a){e.exports=a.p+"static/media/horiseon-nav-with-hero.e84f862b.jpg"},function(e,t,a){e.exports=a.p+"static/media/nomadica.c0fa71c6.jpg"},function(e,t,a){e.exports=a.p+"static/media/password-gen-site.4288d574.PNG"},function(e,t,a){e.exports=a.p+"static/media/pizza-hunt.180aef31.PNG"},function(e,t,a){e.exports=a.p+"static/media/portfolio.430894fa.jpg"},function(e,t,a){e.exports=a.p+"static/media/run-buddy.36c81afe.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(5),c=a.n(i),r=(a(11),a(1));var s=function(e){var t=e.contactSelected,a=e.setContactSelected,n=e.workSelected,i=e.setWorkSelected;return o.a.createElement("nav",{className:"select"},o.a.createElement("a",{href:"#about",onClick:function(){a(!1),i(!1)}},"About Me"),o.a.createElement("a",{href:"#work",className:"".concat(n&&"navActive"),onClick:function(){i(!0),a(!1)}},"Work"),o.a.createElement("a",{href:"#contact",className:"".concat(t&&"navActive"),onClick:function(){a(!0),i(!1)}},"Contact Me"))};var l=function(e){var t=e.contactSelected,a=e.setContactSelected,n=e.workSelected,i=e.setWorkSelected;return o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement("a",{href:"/"},"Junior Escobar")),o.a.createElement(s,{contactSelected:t,setContactSelected:a,workSelected:n,setWorkSelected:i}))};var u=function(){return o.a.createElement("section",{className:"hero"},o.a.createElement("div",{className:"selfie"}))};var m=function(){return o.a.createElement("section",{className:"page-section",id:"about"},o.a.createElement("h2",null,"About Me"),o.a.createElement("div",null,o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus mollitia nemo deleniti distinctio ab labore aliquid laudantium numquam, quam laboriosam doloribus accusantium quidem, cum commodi impedit ipsum placeat inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae explicabo optio provident esse, fugit consectetur cumque dicta? Esse unde minima temporibus adipisci maxime harum cupiditate alias explicabo, exercitationem ipsa?"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed soluta cum non magni laudantium eum illo autem quae accusamus nihil expedita quam illum odio atque, architecto necessitatibus dignissimos odit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque officia quis, exercitationem maiores tempora aspernatur excepturi earum commodi nihil sit ab, facilis corrupti molestiae obcaecati pariatur hic quia perspiciatis.")))},d=a(2);var p=function(e){var t=e.onClose,n=e.currentProject,i=n.name,c=n.tools,r=n.deployed,s=n.github,l=n.description,u=n.photo;return o.a.createElement("div",{className:"modalBackdrop"},o.a.createElement("div",{className:"modalContainer"},o.a.createElement("h3",{className:"modalTitle"},i),o.a.createElement("img",{src:a(12)("./".concat(u)),alt:"current project"}),o.a.createElement("p",{className:"tools"},c),o.a.createElement("address",null,o.a.createElement("a",{href:s},o.a.createElement("i",{className:"fab fa-github-square big"})," View code on GitHub"),o.a.createElement("a",{href:r},o.a.createElement("i",{className:"fab fa-product-hunt"})," View deployed application")),o.a.createElement("p",null,l),o.a.createElement("button",{type:"button",onClick:t},"Close this modal")))};var h=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),s=Object(r.a)(c,2),l=s[0],u=s[1],m=function(e,t){i(Object(d.a)(Object(d.a)({},e),{},{index:t})),u(!l)};return o.a.createElement("section",{className:"page-section",id:"work"},o.a.createElement("h2",null,"Work"),l&&o.a.createElement(p,{currentProject:a,onClose:m}),o.a.createElement("div",{className:"grid-container"},[{name:"Run Buddy",class:"run-buddy",tools:"HTML/CSS",deployed:"https://junioresc.github.io/run-buddy/",github:"https://github.com/junioresc/run-buddy",description:"This webpage made to showcase what can be achieved with HTML5 and CSS3. Run Buddy is a fictional fitness website and it has all the features to attract and keep the attention of the visitor. A nice big Jumbotron with a call to action and form to collect the visitor's information if they are interested in the service being advertised.",photo:"run-buddy.jpg"},{name:"Nomadica",class:"nomadica",tools:"HTML/CSS-Tailwind/JS",deployed:"https://dj-viking.github.io/Nomadica/",github:"https://github.com/Dj-Viking/Nomadica",description:"Have you ever thought about packing your bags and starting over somewhere new? It's tempting, but it can be distressing not knowing how people with your occupation fare financially in a foreign land. Nomadica\u2019s purpose is to give you the information needed to make an informed, confident decision about relocating.",photo:"nomadica.jpg"},{name:"Horiseon Refactor",class:"horiseon-refactor",tools:"HTML/CSS",deployed:"https://junioresc.github.io/horiseon-refactor/",github:"https://github.com/junioresc/horiseon-refactor",description:"When I first saw this website, I saw that there was div soup and changed many of the elements to follow HTML5 semantics. The CSS for the website also had a bunch of repeated code so I also cleaned up the stylings. The last important thing I added was comments in the HTML file to distiguish what the code is rendering.",photo:"horiseon-nav-with-hero.jpg"},{name:"JavaScript Password Generator",class:"js-password-generator",tools:"HTML/CSS/JS",deployed:"https://junioresc.github.io/js-password-generator/",github:"https://github.com/junioresc/js-password-generator",description:"This application was made in order to produce a random password at the request of the user. The password must be at least 8 characters long and no more than 128. It handles edge cases in case the user decides to not input a response. The generator will accept at least one of the following character types: Uppercase, Lowercase, Numbers, Special Characters.",photo:"password-gen-site.PNG"},{name:"Pizza Hunt",class:"pizza-hunt",tools:"MongoDB, Express, Node",deployed:"https://glacial-sands-00852.herokuapp.com/",github:"https://github.com/junioresc/pizza-hunt",description:"Pizza Hunt\u2014a self-aware riff on social-media applications that already exist for other topics\u2014lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. Pizza is ubiquitous in everyday life all over the world, and no application has ever been created with the sole purpose of facilitating discussions about it.",photo:"pizza-hunt.PNG"},{name:"DC-Adopt",class:"dc-adopt",tools:"HTML-Handlebars/CSS/JS",deployed:"https://dc-adopt.herokuapp.com/signup",github:"https://github.com/hannahbrijenkins/DC-Adopt",description:"Sometimes we find ourselves in a situation where we have to make a difficult decision. Perhaps we get sick, have to move far away, or maybe you come across a stray that you can\u2019t keep. Finding a no-kill shelter can be tough, and even with finding one, shelters can be filled with diseases, and pets too often do not get the best care. We decided to cut out the middle-man, allowing pet owners to connect with each other online and find a forever-home for their pet.",photo:"dc-adopt.PNG"}].map((function(e,t){return o.a.createElement("div",{className:"grid-item ".concat(e.class),onClick:function(){return m(e,t)},key:e.name},o.a.createElement("div",{className:"text"},o.a.createElement("h3",null,e.name),o.a.createElement("span",null,e.tools)))}))))},f=a(3);var b=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),s=Object(r.a)(c,2),l=s[0],u=s[1],m=a.name,p=a.email,h=a.message;function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."))}return o.a.createElement("section",{className:"page-section",id:"contact-section"},o.a.createElement("h1",{"data-testid":"h1tag"},"Contact Me"),o.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||(i(Object(d.a)(Object(d.a)({},a),{},Object(f.a)({},e.target.name,e.target.value))),console.log(a))}},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Name:"),o.a.createElement("input",{type:"text",name:"name",defaultValue:m,onBlur:b})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"email"},"Email address:"),o.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:b})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"message"},"Message:"),o.a.createElement("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:b})),l&&o.a.createElement("div",null,o.a.createElement("p",{className:"error-text"},l)),o.a.createElement("button",{"data-testid":"button",type:"submit",className:"select"},"Submit")))};var g=function(){return o.a.createElement("section",{className:"page-section contact",id:"contact"},o.a.createElement("address",null,o.a.createElement("a",{href:"tel:+5615778575"},o.a.createElement("i",{className:"fas fa-mobile-alt big"})," Phone Number"),o.a.createElement("a",{href:"mailto:junioresc1092@gmail.com"},o.a.createElement("i",{className:"far fa-envelope big"})," Email"),o.a.createElement("a",{href:"https://github.com/junioresc"},o.a.createElement("i",{className:"fab fa-github-square big"})," GitHub"),o.a.createElement("a",{href:"https://www.linkedin.com/in/junior-escobar-87a8541a7/"},o.a.createElement("i",{className:"fab fa-linkedin big"})," LinkedIn")))};var E=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),s=Object(r.a)(c,2),d=s[0],p=s[1];return o.a.createElement("div",null,o.a.createElement(l,{contactSelected:a,setContactSelected:i,workSelected:d,setWorkSelected:p}),o.a.createElement(u,null),o.a.createElement("main",null,d?o.a.createElement(h,null):a?o.a.createElement(b,null):o.a.createElement(m,null),o.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.51ab6950.chunk.js.map