"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[5870],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6697:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],p={sidebar_position:20},l="Buildpacks",s={unversionedId:"CNCF Projects/5.20_Buildpacks",id:"CNCF Projects/5.20_Buildpacks",isDocsHomePage:!1,title:"Buildpacks",description:"Buildpacks Logo",source:"@site/docs/CNCF Projects/5.20_Buildpacks.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.20_Buildpacks",permalink:"/docs/CNCF Projects/5.20_Buildpacks",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"ARGO",permalink:"/docs/CNCF Projects/5.19_argo"},next:{title:"CloudEvents",permalink:"/docs/CNCF Projects/5.21_CloudEvents"}},u=[{value:"How do they work?",id:"how-do-they-work",children:[],level:2},{value:"Features Of Buildpacks",id:"features-of-buildpacks",children:[],level:2},{value:"Extra Links for more info :",id:"extra-links-for-more-info-",children:[],level:2}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buildpacks"},"Buildpacks"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1MrOJB3xfN7_TMH4wo_rwmMvHZlEJe6b1",alt:"Buildpacks Logo"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/"},"Cloud Native Buildpacks")," transform your application source code into images that can run on any cloud.There are buildpacks for Ruby, Go, NodeJs, Java, Python, and more. Buildpacks provide framework and runtime support for applications. Buildpacks examine your apps to determine all the dependencies it needs and configure them appropriately to run on any cloud. It creates distinct layers that makes sense. It has an:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Application Layer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Runtime Layer ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dependency Layer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"App Layer"))),(0,i.kt)("p",null,"And this is without you having to write any Docker files."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1biysPds9ZOkxI15HFdgc3oLeaVizrvFR",alt:"Buildpacks Logo"})),(0,i.kt)("h2",{id:"how-do-they-work"},"How do they work?"),(0,i.kt)("p",null,"Each buildpack comprises of two phases -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Detect phase "),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"detect")," phase runs against your source code to determine if the buildpack is applicable or not. Once a buildpack is detected to be applicable, it proceeds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),"   stage. If the project fails detection the build stage for a specific buildpack is skipped.\nBuild phase ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," phase runs against your source code to -"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"}," Set up the build-time and run-time environment"),(0,i.kt)("li",{parentName:"ul"}," Download dependencies and compile your source code (if needed)"),(0,i.kt)("li",{parentName:"ul"}," Set appropriate entry point and start-up scripts")))),(0,i.kt)("p",null,"Builders are an ordered combination of buildpacks with a base ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," image and a ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," image. They take in your app source code and build the output app image. In a builder, each buildpack will inspect the application source code and detect if it should participate in the build process. Once a buildpack (or set of buildpacks) has matched, it moves on to the build step. That\u2019s when the buildpack does its job."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1qClyXsPuD0P8DMQrawvKcKkM3K9QaaCk",alt:"Builder"})),(0,i.kt)("h2",{id:"features-of-buildpacks"},"Features Of Buildpacks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Advanced Caching:")," Buildpack knows that it needs to rebuild the layer that contains all of the application\u2019s gems. It also knows how to do that in a way that keeps the gems that didn\u2019t change. This means that builds happen quickly and efficiently.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Auto-Detection:")," Has the ability to auto-detect the language of your source code. This is accomplished by a ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/detect")," executable in the buildpack. The detection scripts are invoked in a particular order and stop once an appropriate number of buildpacks have opted in to the build.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Bill of Materials:")," It can add additional metadata that tells you what version of software was installed, the process types that are available and the commands associated with them, the run-image the app image was based on, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modular/Pluggable:")," Multiple buildpacks can be used to create an app image.You may specify exactly what buildpacks are used during the build process by referencing them with a URI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multi-language:")," Performs the same operations or output independent of the programming language used to compile or interpret it. Supports more than one programming language family.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multi-Process:")," One of the benefits of buildpacks is that they are multi-process - an image can have multiple entrypoints for each operational mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Minimal App Image:")," Image contains only what is necessary. Users don't have to workaround to create minimal images, buildpacks does it for you.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rebasing"),": Instant updates of base images without re-building.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reproducibility"),": For image creation commands ",(0,i.kt)("inlineCode",{parentName:"p"},"pack")," creates container images in a reproducible fashion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reusability"),": Leverage production-ready buildpacks maintained by the community."))),(0,i.kt)("h2",{id:"extra-links-for-more-info-"},"Extra Links for more info :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/"},(0,i.kt)("strong",{parentName:"a"},"Buildpacks")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/buildpacks/"},(0,i.kt)("strong",{parentName:"a"},"Cloud Foundary")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/buildpacks/understand-buildpacks.html"},(0,i.kt)("strong",{parentName:"a"},"Cloud Foundary/Understanding Buildpacks"))))))}d.isMDXComponent=!0}}]);