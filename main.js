(()=>{"use strict";var n={16:(n,e,t)=>{t.d(e,{A:()=>h});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),d=t(417),l=t.n(d),s=new URL(t(409),t.b),c=new URL(t(492),t.b),p=new URL(t(823),t.b),u=a()(o()),g=l()(s),f=l()(c),m=l()(p);u.push([n.id,`/* default css */\n\n* {\n  color: aliceblue;\n  font-size: 14px;\n  font-family: "Roboto";\n  line-height: 1.5;\n}\n\nbody {\n  background-color: black;\n}\n\nheader {\n  max-width: 550px;\n  padding-left: 3vw;\n  padding-right: 3vw;\n  margin: 0 auto 5vh auto;\n  display: block;\n  background-image: url(${g});\n  background-repeat: no-repeat;\n  background-position: 0% 4.5%;\n}\n\nmain {\n  max-width: 600px;\n  margin: 0 auto;\n  display: block;\n  background-color: #000;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nh1 {\n  text-align: center;\n  font-size: 2em;\n  text-shadow: 0 0 2px #000;\n}\n\nh2 {\n  align-self: center;\n  justify-self: left;\n  font-size: 1.8em;\n  text-shadow: 0 0 2px #000;\n}\n\n.devicon-github-original {\n  align-self: center;\n}\n\n.desc {\n  display: none;\n}\n\n.my-name {\n  display: none;\n}\n\n.logos {\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  gap: 5vw;\n  text-align: center;\n  margin-top: 3vh;\n}\n\ni {\n  font-size: 3.5em;\n}\n\n.profile-picture {\n  display: none;\n}\n\n.profile-picture-name-under {\n  width: 70vw;\n  margin: 1.5em;\n  border-radius: 25px;\n  background-image: url(${f});\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#project-image {\n  display: flex;\n  margin: 0 auto;\n  width: 35vh;\n  border-radius: 25px;\n}\n\n.my-name {\n  display: none;\n}\n\nheader p,\n#card p {\n  border-radius: 25px;\n  color: aliceblue;\n  margin: 1vw;\n  padding: 1em;\n}\n.devicon-github-original-wordmark.colored,\n.devicon-linkedin-plain.colored {\n  background-color: transparent;\n}\n\ni.devicon-github-original {\n  font-size: 29px;\n}\n\n.subheader {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  grid-template-rows: auto 1fr;\n  margin: 0 10vw;\n}\n\n.subheader > p {\n  grid-column: span 3;\n  padding: 0;\n}\n\n.github-icon {\n  display: flex;\n  align-self: center;\n}\n\n#card {\n  margin-bottom: 5vh;\n}\n\ndel {\n  color: aliceblue;\n}\n\nfooter {\n  max-width: 600px;\n  margin: 0 auto;\n  display: block;\n  background-color: #add8e6;\n  border-radius: 25px;\n}\n\n.footer-container {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.footer-container h1 {\n  padding-top: 2vh !important;\n}\n\n.footer-container p,\n.footer-container h1,\n.footer-container > .footer-logos {\n  color: #000;\n  text-shadow: none;\n  padding: 0 5vw;\n}\n\n.external-link {\n  align-self: center;\n}\n\n.footer-container img {\n  position: relative;\n  text-align: center;\n  max-width: inherit;\n  width: 95.5vw;\n  border-radius: 25px;\n  margin: 3vh 0 0 0;\n}\n\n/* Tablet */\n@media (min-width: 481px) and (max-width: 1080px) {\n  /* Header */\n\n  header {\n    background-image: url(${m});\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    background-position: 0;\n    width: 85vw;\n    max-width: none;\n    max-height: max-content;\n    margin-top: 0;\n    position: relative;\n  }\n\n  .profile-picture {\n    border-radius: 25px;\n    top: 5vh;\n    height: 100%;\n    display: block;\n    width: auto;\n    justify-content: left;\n    max-width: 35vw;\n    margin: 0 5vw 5vh 0;\n    float: left;\n  }\n\n  .desc :not(.profile-picture) wa {\n    text-shadow: 0 0 5px #000;\n    font-size: 36px;\n  }\n\n  .profile-picture-name-under {\n    display: none;\n  }\n\n  .my-name {\n    position: relative;\n    display: flex;\n    top: 8vh;\n    justify-content: center;\n    font-size: 44px;\n    text-shadow: 0 0 5px #000;\n    background: transparent;\n  }\n\n  .desc {\n    display: block;\n    top: -5vh;\n    justify-self: center;\n    /* max-width: 62vw; */\n    right: 0vw;\n    font-size: 20px;\n    overflow: hidden;\n  }\n  \n  .desc-mob-desk {\n    display: none;\n  }\n\n  .desc :not(.profile-picture) {\n    font-size: 20px;\n    line-height: 2.5px;\n  }\n\n  del {\n    font-size: 20px;\n  }\n\n  .about-me {\n    display: none;\n  }\n\n  .logos {\n    margin-bottom: 2vh;\n  }\n\n  /* Main */\n\n  main {\n    max-width: 80vw;\n    justify-content: center;\n    display: flex;\n    line-height: 1.8;\n  }\n\n  .projects {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr 1fr 1fr;\n    grid-auto-flow: column;\n    column-gap: 3vw;\n    row-gap: 3vh;\n  }\n\n  .my-work {\n    grid-column: 1 / span 2;\n    grid-row: 1;\n    align-content: center;\n    justify-self: left;\n    margin-left: 1vw;\n    font-size: 32px;\n  }\n\n  #card {\n    justify-self: center;\n    align-content: center;\n    border-width: auto;\n    border-radius: 25px;\n    border: aliceblue solid 2px;\n    column-gap: 5vh;\n    margin-bottom: 0;\n    font-size: 14px;\n  }\n\n  .subheader {\n    margin: 0;\n    justify-content: center;\n  }\n\n  .subheader p {\n    font-size: 24px;\n  }\n\n  .subheader h2 {\n    justify-content: left;\n    padding-left: 2vw;\n    font-size: 30px;\n  }\n\n  .external-link {\n    margin-right: 3vw;\n  }\n\n  #project-image {\n    max-height: 13vh;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    padding-top: 1.5vh;\n    height: 100%;\n    width: auto;\n  }\n\n  /* footer */\n\n  footer {\n    margin-top: 10vh;\n    max-width: 99vw;\n    line-height: 1.8;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .footer-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto auto auto auto auto auto auto;\n    max-width: fit-content;\n  }\n\n  .footer-container p {\n    font-size: 24px;\n  }\n\n  .footer-container img {\n    max-width: fit-content;\n    width: 37vw;\n    margin-right: 2vw;\n  }\n\n  .profile-picture-alt {\n    grid-column: 2;\n    grid-row: 1 / span 6;\n    align-self: center;\n  }\n\n  .contact-me {\n    justify-self: left;\n    font-weight: 600;\n    grid-column: 1;\n    grid-row: 1;\n    font-size: 32px;\n  }\n\n  .footer-message {\n    grid-column: 1;\n    grid-row: 2;\n  }\n\n  .address {\n    grid-column: 1;\n    grid-row: 3;\n  }\n\n  .phone {\n    grid-column: 1;\n    grid-row: 4;\n  }\n\n  .email {\n    grid-column: 1;\n    grid-row: 5;\n  }\n\n  .footer-logos {\n    grid-column: 1;\n    grid-row: 6;\n    justify-self: left;\n    align-self: center;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1081px) {\n  /* Header */\n\n  header {\n    margin-top: 3vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr auto;\n    background-image: url(${g});\n    position: relative;\n    max-width: 99vw;\n    background-size: cover;\n    min-height: 75vh;\n    grid-auto-flow: column;\n    margin-bottom: 3vh;\n    line-height: 1.8;\n  }\n\n  .desc-mob-desk {\n    grid-column: 2;\n    grid-row: 2;\n    align-content: center;\n    font-size: 28px;\n    line-height: 1.8;\n  }\n\n  del {\n    font-size: 28px;\n  }\n\n  .about-me {\n    font-size: 36px;\n    margin-top: 15vh;\n    grid-column: 2;\n    grid-row: 1;\n  }\n\n  .profile-picture {\n    display: none;\n  }\n\n  .profile-picture-name-under {\n    display: flex;\n    flex: 1;\n    grid-column: 1;\n    grid-row: 1 / span 2;\n    height: 100%;\n    width: auto;\n    max-height: 75vh;\n    margin-right: 5vw;\n    justify-self: center;\n    align-self: center;\n  }\n\n  .my-name {\n    display: none;\n  }\n\n  .logos {\n    grid-column: 1 / span 2;\n    grid-row: 3;\n    margin-bottom: 2vh;\n  }\n\n  /* Main */\n\n  main {\n    display: flex;\n    margin-left: 0;\n    margin-right: 0;\n    max-width: none;\n    justify-content: center;\n    line-height: 1.8;\n    height: auto;\n  }\n\n\n  .projects {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: auto 1fr 1fr;\n    grid-auto-flow: column;\n    /* gap: 5vh; */\n  }\n\n  .my-work {\n    padding-left: 3vw;\n    grid-column: 1 / span 3;\n    grid-row: 1;\n    align-content: center;\n    justify-self: left;\n    font-size: 32px;\n  }\n\n  #card {\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    align-content: center;\n    width:fit-content;\n    border-radius: 25px;\n    border: aliceblue solid 2px;\n    margin-bottom: 0;\n    font-size: 24px;\n    margin: max(2vh) max(2vw) max(2vw) max(2vh);\n  }\n\n  .subheader {\n    margin: 0;\n    justify-content: center;\n    /* column-gap: 1vw; */\n  }\n\n  .subheader p {\n    font-size: 24px;\n  }\n\n  .subheader h2 {\n    justify-content: left;\n    padding-left: 2vw;\n    font-size: 30px;\n  }\n\n  .external-link {\n    margin-right: 3vw;\n  }\n\n  #project-image {\n    max-height: max-content;\n    max-width: max-content;\n    /* padding-left: 1.5vw;\n    padding-right: 1.5vw;*/\n    border-radius: 25px;\n    padding-top: 5vh;\n    height: 30vh; \n    width: 25vw;\n  }\n\n  /* footer */\n\n  footer {\n    margin-top: 10vh;\n    max-width: none;\n    line-height: 1.8;\n    justify-content: center;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .footer-container {\n    display: grid;\n\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto auto auto auto auto auto;\n    justify-content: center;\n    max-width: fit-content;\n  }\n\n  .footer-container p {\n    font-size: 24px;\n  }\n\n  .footer-container img {\n    max-width: 600px;\n    margin-right: 10vw;\n  }\n\n  .profile-picture-alt {\n    grid-column: 2;\n    grid-row: 1 / span 6;\n    align-self: center;\n  }\n\n  .contact-me {\n    justify-self: left;\n    font-weight: 600;\n    grid-column: 1;\n    grid-row: 1;\n    font-size: 32px;\n  }\n\n  .footer-message {\n    grid-column: 1;\n    grid-row: 2;\n  }\n\n  .address {\n    grid-column: 1;\n    grid-row: 3;\n  }\n\n  .phone {\n    grid-column: 1;\n    grid-row: 4;\n  }\n\n  .email {\n    grid-column: 1;\n    grid-row: 5;\n  }\n\n  .footer-logos {\n    grid-column: 1;\n    grid-row: 6;\n    justify-self: left;\n    align-self: center;\n    margin-bottom: 2vh;\n  }\n\n  .devicon-github-original-wordmark,\n  .devicon-linkedin-plain {\n    font-size: 64px;\n  }\n}\n`,""]);const h=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var l=n[d],s=r.base?l[0]+r.base:l[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var u=t(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=o(g,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var l=r(n,o),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},823:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cpolygon points=%27100,0 100,100 0,100 100,0%27 fill=%27%232AB7CA%27 transform=%27rotate%28180, 50, 50%29%27%3E%3C/polygon%3E%3C/svg%3E"},492:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 200%27%3E%3Cpath d=%27M0 0 L400 0 L0 200 Z%27 fill=%27black%27/%3E%3Cpath d=%27M400 0 L0 200 L400 200 Z%27 fill=%27lightblue%27/%3E%3C/svg%3E"},409:(n,e,t)=>{n.exports=t.p+"9962116c1736b6b35a53.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),d=t(659),l=t.n(d),s=t(56),c=t.n(s),p=t(540),u=t.n(p),g=t(113),f=t.n(g),m=t(16),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=l().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals})();