"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[6591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Collect from existing form",l={unversionedId:"guides/collect-into-form-guide",id:"guides/collect-into-form-guide",title:"Collect from existing form",description:"Learn how to integrate a Right Consents Collect Form in an existing HTML Form that handle personal information.",source:"@site/docs/03-guides/304-collect-into-form-guide.md",sourceDirName:"03-guides",slug:"/guides/collect-into-form-guide",permalink:"/fr/docs/guides/collect-into-form-guide",draft:!1,tags:[],version:"current",sidebarPosition:304,frontMatter:{},sidebar:"docSidebar",previous:{title:"Discover API basics",permalink:"/fr/docs/guides/discover-api-guide"},next:{title:"Install from Sources",permalink:"/fr/docs/techdoc/full-install-guide"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"SDK integration guide",id:"sdk-integration-guide",level:2},{value:"Create the models",id:"create-the-models",level:3},{value:"Create an HTML From",id:"create-an-html-from",level:3},{value:"Integrate Javascript SDK in the HTML Form",id:"integrate-javascript-sdk-in-the-html-form",level:3},{value:"Test, validate and generate a consent",id:"test-validate-and-generate-a-consent",level:3},{value:"Consult collected consents via the back-office",id:"consult-collected-consents-via-the-back-office",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collect-from-existing-form"},"Collect from existing form"),(0,r.kt)("p",null,"Learn how to integrate a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://right-consents.fairandsmart.io/about/integrate-html-form/"},"Right Consents Collect Form"))," in an existing HTML Form that handle personal information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start a local docker image to host an HTML Form for collecting personal information"),(0,r.kt)("li",{parentName:"ul"},"Define specific processing and preferences for the collected data in the Right Consent Backoffice"),(0,r.kt)("li",{parentName:"ul"},"Test the consent form generated until desired result"),(0,r.kt)("li",{parentName:"ul"},"Integrate Javascript SDK in the HTML Form"),(0,r.kt)("li",{parentName:"ul"},"Consult and export collected consents")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete this guide you need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Roughly 30 minutes"),(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"Right Consents running")),(0,r.kt)("p",null,"Right Consents Community is designed to be integrated in digital solutions, but if you are ",(0,r.kt)("strong",{parentName:"p"},"not a developer"),", you can still use the back office to collect consents manually."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this guide you will learn how to ",(0,r.kt)("strong",{parentName:"p"},"use the SDK")," to integrate Consent Collect in an existing online HTML Form."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Full Install Guide - Overview",src:n(170).Z,width:"844",height:"547"})),(0,r.kt)("p",null,"This guide also covers some basic aspects of consent form building for some desired processing and preferences."),(0,r.kt)("h2",{id:"sdk-integration-guide"},"SDK integration guide"),(0,r.kt)("h3",{id:"create-the-models"},"Create the models"),(0,r.kt)("p",null,"First, define the ",(0,r.kt)("strong",{parentName:"p"},"processings, preferences or terms and conditions")," you want to use. The terms and\nconditions body supports HTML, but plain text will work just fine."),(0,r.kt)("p",null,"You will also need to create an ",(0,r.kt)("strong",{parentName:"p"},"information")," model, especially if you intend to use processings."),(0,r.kt)("p",null,"You can create an ",(0,r.kt)("strong",{parentName:"p"},"email")," model if you want to send a ",(0,r.kt)("strong",{parentName:"p"},"consent receipt"),"  to your users. This is\nnot mandatory. Again, some fields support HTML as well as plain text."),(0,r.kt)("p",null,"If you are well-versed in CSS, you can play with a ",(0,r.kt)("strong",{parentName:"p"},"theme")," model to customize your form's look'n'feel, otherwise the\ndefault theme will be applied. Even if CSS is a mystery for you, don't hesitate to create a theme simply to register\nyour own ",(0,r.kt)("strong",{parentName:"p"},"logo")," which will appear in your forms, receipts and emails."),(0,r.kt)("p",null,"Don't forget to ",(0,r.kt)("strong",{parentName:"p"},"activate")," each model!"),(0,r.kt)("h3",{id:"create-an-html-from"},"Create an HTML From"),(0,r.kt)("p",null,"The basic use case here, is collecting the consent from users before collecting their data."),(0,r.kt)("p",null,"We need an HTML form to plug the SDK to it, either you take an existing one from your personal project, or you follow\nalong with a basic HTML form."),(0,r.kt)("p",null,"This HTML form can be served using docker or docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name apache -v /path/to/consent-example:/app bitnami/apache:latest -p 1180:1180\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up -d\n")),(0,r.kt)("p",null,"Once the docker container up and running, go to this ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:1180/index.html"},"page"),"."),(0,r.kt)("h3",{id:"integrate-javascript-sdk-in-the-html-form"},"Integrate Javascript SDK in the HTML Form"),(0,r.kt)("p",null,"At this point you have a simple HTML form, with some input elements that can be filled with personal data, for example."),(0,r.kt)("p",null,"The next step is to connect this form to the SDK and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentCollector"),". It will create a consent\nform based on a ",(0,r.kt)("strong",{parentName:"p"},"subject ID")," (basically a phone number, an email address ...), and a ",(0,r.kt)("strong",{parentName:"p"},"consent context"),"."),(0,r.kt)("p",null,"You will need, first, to import the script file in your HTML file like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- With consent.js stored locally --\x3e\n<script src="/path/to/consent.js"><\/script>\n\n\x3c!-- With consent.js from Fair&Smart CDN --\x3e\n<script src="https://assets.fairandsmart.tech/consent.js"><\/script>\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," More on the SDK configuration and integration ",(0,r.kt)("a",{parentName:"p",href:"../techdoc/sdk#balise-script"},"here"))),(0,r.kt)("p",null,"Then, write a function that calls the Consent Collector. This function has to declare a\nnew ",(0,r.kt)("inlineCode",{parentName:"p"},"FairAndSmart.ConsentCollector")," instance and call the collect()\nmethod from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentCollector")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," function collect() {\n\n    /** Page is awaiting the response from the consent window: disabling submit button **/\n    const submitBtnElement = document.getElementById('submit');\n    const formElement = document.getElementById('demo-form');\n    const message = document.getElementById('message');\n    const subject = document.getElementById('input-email').value;\n\n    submitBtnElement.setAttribute('disabled', 'true');\n\n    /** Collect objet creation */\n    const consentCollector = new FairAndSmart.ConsentCollector({\n        tokenBrokerEndpoint: 'http://localhost:3001/profile/form',\n        consentContext: {\n            subject: subject,\n            author: subject,\n            origin: \"WEBFORM\",\n            confirmation: \"NONE\",\n            language: \"en\",\n            userinfos: {},\n            validity: \"P6M\",\n            layout: \"layout.001\"\n        },\n        mode: 'window'\n    });\n\n    /** Consent collection can begin **/\n    consentCollector.collect()\n        .then(() => {\n            /** Sucess callback: collect is done */\n            submitBtnElement.classList.add('hidden');\n            formElement.classList.add('hidden');\n            message.classList.remove('hidden');\n            /** We can check the collect reponse here */\n\n        })\n        .catch((err) => {\n            /** Error callback, something went wrong. Reset button to retry the consent collect */\n            console.error(err);\n            submitBtnElement.setAttribute('disabled', 'false');\n        })\n}\n")),(0,r.kt)("admonition",{type:"info"}," ",(0,r.kt)("b",null,"Notice:")," The **subject ID** here is retrieved from the email input, it can be another identifier such as a phone number, a unique ID from your platform ..."),(0,r.kt)("p",null,"Finally, create a button in your HTML Form that will call the function ",(0,r.kt)("inlineCode",{parentName:"p"},"collect()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button id="submit" class="submit-btn" onclick="collect()">Send</button>\n')),(0,r.kt)("h3",{id:"test-validate-and-generate-a-consent"},"Test, validate and generate a consent"),(0,r.kt)("p",null,"Once everything is set up, you are ready to test the consent collection."),(0,r.kt)("p",null,"Go to the following ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:1180/index.html"},"web page"),", fill the form and click on the submit button at the bottom of the page."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"popup window")," will appear with the desired consent form. Submit your preferences, processings and/or terms and conditions of your choice by clicking on the submit button."),(0,r.kt)("p",null,"Done, you have attached a consent collector to an existing HTML form. Moreover, you have created a consent record that can be accessible from the backoffice."),(0,r.kt)("h3",{id:"consult-collected-consents-via-the-back-office"},"Consult collected consents via the back-office"),(0,r.kt)("p",null,"The final step, in order to access consents records created using the form, go to the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4200"},"GUI / Back Office")," under the page ",(0,r.kt)("strong",{parentName:"p"},"Integration > Search"),"."),(0,r.kt)("p",null,"Here, you can access the consent records generated by users and filter them by entry and value entry like so:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search consent records - Back office",src:n(8307).Z,width:"432",height:"241"})),(0,r.kt)("p",null,"Then click on search, a list of consent will be displayed on a table."),(0,r.kt)("p",null,"From here you can export all the consent records generated by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"export")," button:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export consent records - Back office",src:n(5109).Z,width:"1922",height:"951"})),(0,r.kt)("p",null,"A .CSV file will be created, containing all the information linked to the user consent record (Record key, Record value, Email Address, ...)."))}u.isMDXComponent=!0},5109:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/existing-form-records-export-a12b21e71771a10e058930de96425ea8.png"},8307:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/existing-form-records-search-8a3291373e80af2356f602f9b0c58a79.png"},170:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/integratehtml-overview-b70fdede37af408e072087d9e17d829c.jpg"}}]);