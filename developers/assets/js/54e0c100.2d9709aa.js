"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Install from Sources",l={unversionedId:"techdoc/full-install-guide",id:"techdoc/full-install-guide",title:"Install from Sources",description:"Learn how to build sources to start your own Right Consent server locally. This guide covers:",source:"@site/docs/04-techdoc/400-full-install-guide.md",sourceDirName:"04-techdoc",slug:"/techdoc/full-install-guide",permalink:"/developers/docs/techdoc/full-install-guide",draft:!1,tags:[],version:"current",sidebarPosition:402,frontMatter:{},sidebar:"docSidebar",previous:{title:"Manage Terms Of Services",permalink:"/developers/docs/guides/manage-tos-mobile-app-guide"},next:{title:"Configuration Reference",permalink:"/developers/docs/techdoc/config-ref"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Keycloak",id:"keycloak",level:2},{value:"Mail Dev",id:"mail-dev",level:2},{value:"Backend",id:"backend",level:2},{value:"Web Application",id:"web-application",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-from-sources"},"Install from Sources"),(0,o.kt)("p",null,"Learn how to build sources to start your own Right Consent server locally. This guide covers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Starting needed docker components (auth, smtp)"),(0,o.kt)("li",{parentName:"ul"},"Getting the latest sources"),(0,o.kt)("li",{parentName:"ul"},"Building components from source"),(0,o.kt)("li",{parentName:"ul"},"Starting built components"),(0,o.kt)("li",{parentName:"ul"},"Accessing the back office")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete this guide you need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Roughly 20 minutes"),(0,o.kt)("li",{parentName:"ul"},"Git"),(0,o.kt)("li",{parentName:"ul"},"Java 11"),(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"Maven >= 3.8.4;"),(0,o.kt)("li",{parentName:"ul"},"NodeJS >= 12.20.0;"),(0,o.kt)("li",{parentName:"ul"},"npm >= 6.14.8;")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this guide you will learn how to ",(0,o.kt)("strong",{parentName:"p"},"install")," needed external components (Keycloak, MailDev) and to ",(0,o.kt)("strong",{parentName:"p"},"compile")," and run Right Consents backend and frontend."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Full Install Guide - Overview",src:n(5576).Z,width:"843",height:"434"})),(0,o.kt)("p",null,"This guide also covers some basic aspects of configuration for the backend."),(0,o.kt)("h2",{id:"keycloak"},"Keycloak"),(0,o.kt)("p",null,"Keycloak is a ready to run ",(0,o.kt)("strong",{parentName:"p"},"Identification Provider (IdP)")," compatible with OIDC protocol and wel integrated in Quarkus (Backend Framework).",(0,o.kt)("br",{parentName:"p"}),"\n","Unless needed, use keycloak in a dedicated container with either a named volume or (as below) a mapped folder to allow data persistence when the container is redeployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://raw.githubusercontent.com/fairandsmart/right-consents/main/imports/right-consents.json\n$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/right-consents.json  -v keycloak-data:/opt/jboss/keycloak/standalone/data --mount type=bind,source=$PWD/right-consents.json,target=/tmp/right-consents.json jboss/keycloak:11.0.3\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To delete keycloak data, stop the container then run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker volume rm keycloak-data"))),(0,o.kt)("p",null,"If you want to use a local instance instead of the docker one you can visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/index.html"},"keycloak website")," for details."),(0,o.kt)("h2",{id:"mail-dev"},"Mail Dev"),(0,o.kt)("p",null,"Outgoing ",(0,o.kt)("strong",{parentName:"p"},"SMTP Service")," is also an external tool used to avoid any SMTP configuration, it is based on ",(0,o.kt)("a",{parentName:"p",href:"http://maildev.github.io/maildev/"},"MailDev"),". A dedicated web interface that allows to consult outgoing emails, and email will be also routed to any external SMTP relay if you configure the relay (check ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/maildev/maildev"},"upstream"),") for documentation)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -p 1080:80 -p 1025:25 maildev/maildev\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can also replace this component by any existing outgoing smtp server by changing configuration, or even a postifx local install if you are the kind of person running a local SMTP server on your computer.")),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("p",null,"Backend service is developed in Java using ",(0,o.kt)("a",{parentName:"p",href:"https://quarkus.io"},"Quarkus"),". It exposes a REST API that is accessed from other services. It also integrates configuration elements for working with keycloak."),(0,o.kt)("p",null,"In order to run the backend, you need to ",(0,o.kt)("strong",{parentName:"p"},"clone")," the github repository and to ",(0,o.kt)("strong",{parentName:"p"},"compile")," and ",(0,o.kt)("strong",{parentName:"p"},"run")," a local instance using Java and Maven:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:fairandsmart/consent-manager-back.git\n$ cd consent-manager-back\n$ mvn clean package -DskipTests quarkus:dev\n")),(0,o.kt)("p",null,"This could take a while as maven is going to download all dependencies but in the end you should see the server running with a message like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[io.quarkus] (Quarkus Main Thread) consent-manager-back 1.1.0-SNAPSHOT on JVM (powered by Quarkus 2.6.2.Final) started in 5.476s. Listening on: http://127.0.0.1:8087\n")),(0,o.kt)("h2",{id:"web-application"},"Web Application"),(0,o.kt)("p",null,"Front Web Application is developed using ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io"},"Angular"),". It is also built to work with keycloak by default."),(0,o.kt)("p",null,"In order to run the frontend, you need to clone the github repository and to run a local instance using NodeJS, npm and angular cli:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:fairandsmart/consent-manager-gui.git\n$ cd consent-manager-gui\n$ npm install\n$ ng serve\n")),(0,o.kt)("p",null,"This could take a while as maven is going to download all dependencies but in the end you should see the server running with a message like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **\n")),(0,o.kt)("p",null,"Now you can use the backoffice by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4200"},"http://localhost:4200"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In the backend, all the configuration is located in a dedicated file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ nano src/main/resources/application.properties\n")),(0,o.kt)("p",null,"You can change some configuration aspects like port or public url if needed. A restart is sometimes needed for some configuration parameters where some of them apply directly if started in dev mode.",(0,o.kt)("br",{parentName:"p"}),"\n","More information on the configuration options can be found in the ",(0,o.kt)("a",{parentName:"p",href:"config-ref"},"configuration reference"),"."))}p.isMDXComponent=!0},5576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fullinstallguide-overview-1dcbe8d6d535683d704c441fa5b2dc3f.jpg"}}]);
