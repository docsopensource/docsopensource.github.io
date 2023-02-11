"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[5824],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9868:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={sidebar_position:40},l="CoreDNS",u={unversionedId:"CNCF Projects/5.40_CoreDNS",id:"CNCF Projects/5.40_CoreDNS",isDocsHomePage:!1,title:"CoreDNS",description:"What is DNS ?",source:"@site/docs/CNCF Projects/5.40_CoreDNS.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.40_CoreDNS",permalink:"/docs/CNCF Projects/5.40_CoreDNS",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"HELM",permalink:"/docs/CNCF Projects/5.39_Helm"},next:{title:"CNCF",permalink:"/docs/CNCF Projects/5.41_CNCF"}},c=[{value:"What is DNS ?",id:"what-is-dns-",children:[],level:2},{value:"How Does DNS work ?",id:"how-does-dns-work-",children:[],level:2},{value:"Steps in DNS Lookup",id:"steps-in-dns-lookup",children:[],level:2},{value:"What is CoreDNS ?",id:"what-is-coredns-",children:[],level:2},{value:"What is DNS Function ?",id:"what-is-dns-function-",children:[],level:2},{value:"How Queries are processed in CoreDns",id:"how-queries-are-processed-in-coredns",children:[],level:2},{value:"Features of CoreDNS:",id:"features-of-coredns",children:[],level:2},{value:"CoreDNS and Kubernetes",id:"coredns-and-kubernetes",children:[{value:"<strong>What is Kubernetes ?</strong>",id:"what-is-kubernetes-",children:[],level:3},{value:"<strong>Installing CoreDNS</strong>",id:"installing-coredns",children:[],level:3},{value:"<strong>Whar is DNS Cluster ?</strong>",id:"whar-is-dns-cluster-",children:[],level:3},{value:"<strong>CoreDNS vs Kube-DNS</strong>",id:"coredns-vs-kube-dns",children:[],level:3}],level:2},{value:"CoreDNS Community",id:"coredns-community",children:[],level:2}],d={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"coredns"},"CoreDNS"),(0,s.kt)("h2",{id:"what-is-dns-"},"What is DNS ?"),(0,s.kt)("p",null,"The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources."),(0,s.kt)("p",null,"Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6)."),(0,s.kt)("h2",{id:"how-does-dns-work-"},"How Does DNS work ?"),(0,s.kt)("p",null,"The process of DNS resolution involves converting a hostname (such as ",(0,s.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),") into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage."),(0,s.kt)("h2",{id:"steps-in-dns-lookup"},"Steps in DNS Lookup"),(0,s.kt)("p",null,"For most situations, DNS is concerned with a domain name being translated into the appropriate IP address. To learn how this process works, it helps to follow the path of a DNS lookup as it travels from a web browser, through the DNS lookup process, and back again. Let's take a look at the steps."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A user types example.com into a web browser and the query travels into the Internet and is received by a DNS recursive resolver."),(0,s.kt)("li",{parentName:"ol"},"The resolver then queries a DNS root nameserver (.)."),(0,s.kt)("li",{parentName:"ol"},"The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD."),(0,s.kt)("li",{parentName:"ol"},"The resolver then makes a request to the .com TLD."),(0,s.kt)("li",{parentName:"ol"},"The TLD server then responds with the IP address of the domain\u2019s nameserver, example.com."),(0,s.kt)("li",{parentName:"ol"},"Lastly, the recursive resolver sends a query to the domain\u2019s nameserver."),(0,s.kt)("li",{parentName:"ol"},"The IP address for example.com is then returned to the resolver from the nameserver."),(0,s.kt)("li",{parentName:"ol"},"The DNS resolver then responds to the web browser with the IP address of the domain requested initially."),(0,s.kt)("li",{parentName:"ol"},"The browser makes a HTTP request to the IP address."),(0,s.kt)("li",{parentName:"ol"},"The server at that IP returns the webpage to be rendered in the browser.")),(0,s.kt)("h2",{id:"what-is-coredns-"},"What is CoreDNS ?"),(0,s.kt)("p",null,"CoreDNS is a DNS server. It is written in Go."),(0,s.kt)("p",null,"CoreDNS is a flexible, extensible DNS server that can serve as the Kubernetes cluster DNS. Like Kubernetes, the CoreDNS project is hosted by the CNCF."),(0,s.kt)("p",null,"CoreDNS is different from other DNS servers, such as (all excellent) BIND, Knot, PowerDNS and Unbound (technically a resolver, but still worth a mention), because it is very flexible, and almost all functionality is outsourced into plugins."),(0,s.kt)("p",null,"Plugins can be stand-alone or work together to perform a \u201cDNS function\u201d."),(0,s.kt)("h2",{id:"what-is-dns-function-"},"What is DNS Function ?"),(0,s.kt)("p",null,"For the purpose of CoreDNS, we define it as a piece of software that implements the CoreDNS Plugin API. The functionality implemented can wildly deviate. There are plugins that don\u2019t themselves create a response, such as metrics or cache, but that add functionality. Then there are plugins that do generate a response. These can also do anything: There are plugins that communicate with Kubernetes to provide service discovery, plugins that read data from a file or a database."),(0,s.kt)("p",null,"There are currently about 30 plugins included in the default CoreDNS install, but there are also a whole bunch of external plugins that you can compile into CoreDNS to extend its functionality."),(0,s.kt)("p",null,"CoreDNS is powered by plugins."),(0,s.kt)("h2",{id:"how-queries-are-processed-in-coredns"},"How Queries are processed in CoreDns"),(0,s.kt)("p",null,"CoreDNS will gather up all of the server blocks associated with the same port and combine them in to the same dnsserver.Server. The server will multiplex the queries on the port, passing them to the different plugin chains depending upon the zone. It chooses the most specific matching server block for the zone. If no server block matches, SERVFAIL is returned. This is shown visually in the diagram below."),(0,s.kt)("img",{src:"https://coredns.io/images/query-processing.png",width:"500"}),(0,s.kt)("h2",{id:"features-of-coredns"},"Features of CoreDNS:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use k8s (kubernetes) as a backend (kubernetes)."),(0,s.kt)("li",{parentName:"ul"},"Load balancing of responses (loadbalance)."),(0,s.kt)("li",{parentName:"ul"},"Caching of DNS responses (cache)."),(0,s.kt)("li",{parentName:"ul"},"Use etcd as a backend (replacing SkyDNS) (etcd)."),(0,s.kt)("li",{parentName:"ul"},"Serve as a proxy to forward queries to some other (recursive) nameserver (forward)."),(0,s.kt)("li",{parentName:"ul"},"Provide metrics (by using Prometheus) (prometheus)."),(0,s.kt)("li",{parentName:"ul"},"Provide query (log) and error (errors) logging."),(0,s.kt)("li",{parentName:"ul"},"Integrate with cloud providers (route53)."),(0,s.kt)("li",{parentName:"ul"},"Support the CH class: version.bind and friends (chaos)."),(0,s.kt)("li",{parentName:"ul"},"Support the RFC 5001 DNS name server identifier (NSID) option (nsid)."),(0,s.kt)("li",{parentName:"ul"},"Profiling support (pprof)."),(0,s.kt)("li",{parentName:"ul"},"Rewrite queries (qtype, qclass and qname) (rewrite and template)."),(0,s.kt)("li",{parentName:"ul"},"Block ANY queries (any)."),(0,s.kt)("li",{parentName:"ul"},"Provide DNS64 IPv6 Translation (dns64).")),(0,s.kt)("h2",{id:"coredns-and-kubernetes"},"CoreDNS and Kubernetes"),(0,s.kt)("p",null,"You can use CoreDNS instead of kube-dns in your cluster by replacing kube-dns in an existing deployment, or by using tools like kubeadm that will deploy and upgrade the cluster for you."),(0,s.kt)("h3",{id:"what-is-kubernetes-"},(0,s.kt)("strong",{parentName:"h3"},"What is Kubernetes ?")),(0,s.kt)("p",null,'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation. It aims to provide a "platform for automating deployment, scaling, and operations of database management systems".'),(0,s.kt)("h3",{id:"installing-coredns"},(0,s.kt)("strong",{parentName:"h3"},"Installing CoreDNS")),(0,s.kt)("p",null,"Visit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/coredns/deployment/tree/master/kubernetes"},"CoreDNS GitHub project")," for manual deployment or replacement of kube-dns."),(0,s.kt)("h3",{id:"whar-is-dns-cluster-"},(0,s.kt)("strong",{parentName:"h3"},"Whar is DNS Cluster ?")),(0,s.kt)("p",null,"A DNS cluster is a group of nameservers that share records, which allows you to physically separate nameservers that handle the DNS requests from your web servers. This interface allows you to configure a DNS cluster and add servers to an existing DNS cluster."),(0,s.kt)("h3",{id:"coredns-vs-kube-dns"},(0,s.kt)("strong",{parentName:"h3"},"CoreDNS vs Kube-DNS")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"CoreDNS is a single container per instance, vs kube-dns which uses three."),(0,s.kt)("li",{parentName:"ul"},"Kube-dns uses dnsmasq for caching, which is single threaded C. CoreDNS is multi-threaded Go."),(0,s.kt)("li",{parentName:"ul"},"CoreDNS enables negative caching in the default deployment. Kube-dns does not.")),(0,s.kt)("h2",{id:"coredns-community"},"CoreDNS Community"),(0,s.kt)("p",null,"Dev and contribution:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Github: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/coredns/coredns"},"https://github.com/coredns/coredns")),(0,s.kt)("li",{parentName:"ul"},"Slack: #coredns on ",(0,s.kt)("a",{parentName:"li",href:"https://slack.cncf.io"},"https://slack.cncf.io"))),(0,s.kt)("p",null,"More resources can be found at:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Website: ",(0,s.kt)("a",{parentName:"li",href:"https://coredns.io"},"https://coredns.io")),(0,s.kt)("li",{parentName:"ul"},"Blog: ",(0,s.kt)("a",{parentName:"li",href:"https://blog.coredns.io"},"https://blog.coredns.io")),(0,s.kt)("li",{parentName:"ul"},"Twitter: @corednsio")))}h.isMDXComponent=!0}}]);