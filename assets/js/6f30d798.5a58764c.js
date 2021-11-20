"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[8045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:17},l="TiKV",c={unversionedId:"CNCF Projects/5.17_TiKV",id:"CNCF Projects/5.17_TiKV",isDocsHomePage:!1,title:"TiKV",description:"TiKV is an open source distributed Key-Value database which is based on the design of Google Spanner and HBase, but it is much simpler without dependency on any distributed file system. It's has primary features including Geo-Replication, Horizontal scalability, Consistent distributed transactions, Coprocessor support.",source:"@site/docs/CNCF Projects/5.17_TiKV.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.17_TiKV",permalink:"/docs/CNCF Projects/5.17_TiKV",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Open Policy Agent",permalink:"/docs/CNCF Projects/5.16_Open_Policy_Agent"},next:{title:"Linkerd",permalink:"/docs/CNCF Projects/5.18_Linkerd"}},u=[{value:"History of TiKV",id:"history-of-tikv",children:[],level:2},{value:"Architecture of TiKV",id:"architecture-of-tikv",children:[],level:2},{value:"<strong>Region and RocksDB</strong>",id:"region-and-rocksdb",children:[],level:2},{value:"Consensus algorithm",id:"consensus-algorithm",children:[],level:2},{value:"<strong>Distributed transaction</strong>",id:"distributed-transaction",children:[],level:2},{value:"<strong>Why TiKV?</strong>",id:"why-tikv",children:[],level:2}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tikv"},"TiKV"),(0,o.kt)("img",{src:"https://tikv.org/img/logos/horizontal/color/tikv-horizontal-color.png",height:"250",width:"500"}),(0,o.kt)("p",null,"TiKV is an open source distributed Key-Value database which is based on the design of Google Spanner and HBase, but it is much simpler without dependency on any distributed file system. It's has primary features including Geo-Replication, Horizontal scalability, Consistent distributed transactions, Coprocessor support. "),(0,o.kt)("h2",{id:"history-of-tikv"},"History of TiKV"),(0,o.kt)("p",null,"Inspired by Google Spanner, released the first version of TiKV along with TiDB in 2016. TiKV has been accepted by Cloud Nature Computing Foundation (CNCF) as a Sandbox project in August 2018 and an Incubating project in May 2019."),(0,o.kt)("h2",{id:"architecture-of-tikv"},"Architecture of TiKV"),(0,o.kt)("p",null,"TiKV implements the multi-raft-group replica mechanism based on the design of Google Spanner. A Region is a basic unit of the key-value data movement and refers to a data range in a Store. Each Region is replicated to multiple nodes. These multiple replicas form a Raft group. A replica of a Region is called a Peer. Typically there are 3 peers in a Region. One of them is the leader, which provides the read and write services. The PD component balances all the Regions automatically to guarantee that the read and write throughput is balanced among all the nodes in the TiKV cluster. With PD and carefully designed Raft groups, TiKV excels in horizontal scalability and can easily scale to store more than 100 TBs of data."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Placement Driver:- PD is the cluster manager of TiKV, which periodically checks replication constraints to balance load and data automatically."),(0,o.kt)("li",{parentName:"ul"},"Store:- There is a RocksDB within each Store and it stores data into the local disk."),(0,o.kt)("li",{parentName:"ul"},"Region:- Region is the basic unit of Key-Value data movement. Each Region is replicated to multiple Nodes. These multiple replicas form a Raft group."),(0,o.kt)("li",{parentName:"ul"},"Node:- A physical node in the cluster. Within each node, there are one or more Stores. Within each Store, there are many Regions."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/875/1*VERb0SB8P2sBXRj3NsZwEA.png",alt:"Image of Yaktocat"})),(0,o.kt)("h2",{id:"region-and-rocksdb"},(0,o.kt)("strong",{parentName:"h2"},"Region and RocksDB")),(0,o.kt)("p",null,"There is a RocksDB database within each Store and it stores data into the local disk. All the Region data are stored in the same RocksDB instance in each Store. All the logs used for the Raft consensus algorithm is stored in another RocksDB instance in each Store. This is because the performance of sequential I/O is better than random I/O. With different RocksDB instances storing raft logs and Region data, TiKV combines all the data write operations of raft logs and TiKV Regions into one I/O operation to improve the performance."),(0,o.kt)("h2",{id:"consensus-algorithm"},"Consensus algorithm"),(0,o.kt)("p",null,"When building a distributed system, one principal goal is to build in fault-tolerance. That is, if one particular node in the network goes down, or if there is a network partition, the system should continue to operate in a consistent way, i.e., nodes in the system should have a consensus on the state  of the system. The consensus should be considered final once it is reached, even if some nodes were in faulty states at the time of decision.\\\nDistributed consensus algorithms often take the form of a replicated state machine and log. Each state machine accepts inputs from its log, and represents the value(s) to be replicated, for example, a change to a hash table. They allow a collection of machines to work as a coherent group that can survive the failures of some of its members.\\\nTwo well known distributed consensus algorithms are Paxos and Raft. Paxos is used in systems like Chubby by Google, and Raft is used in systems like TiKV or etc. Raft is generally seen as more understandable and simpler to implement than Paxos.\\\nIn TiKV we harness Raft for distributed consensus. We found it much easier to understand both the algorithm, and how it will behave in even truly perverse scenarios."),(0,o.kt)("h2",{id:"distributed-transaction"},(0,o.kt)("strong",{parentName:"h2"},"Distributed transaction")),(0,o.kt)("p",null,"As TiKV is a distributed transactional key-value database, transaction is a core feature of TiKV. In this chapter we will talk about general implementations of distributed transaction and some implementation details in TiKV.\\\nA database transaction, by definition, must be atomic, consistent, isolated and durable. Database practitioners often refer to these properties of database transactions using the acronym ACID.\\\nTransactions provide an \u201call-or-nothing\u201d proposition: each work-unit performed in a database must either complete in its entirety or have no effect whatsoever. Furthermore, the system must isolate each transaction from other transactions, results must conform to existing constraints in the database, and transactions that complete successfully must get written to durable storage.\\\nA distributed transaction is a database transaction in which two or more network hosts are involved. Usually, hosts provide transactional resources, while the transaction manager is responsible for creating and managing a global transaction that encompasses all operations against such resources. Distributed transactions, as any other transactions, must have all four ACID properties.\\\nA common algorithm for ensuring correct completion of a distributed transaction is the two-phase commit (2PC)."),(0,o.kt)("h2",{id:"why-tikv"},(0,o.kt)("strong",{parentName:"h2"},"Why TiKV?")),(0,o.kt)("p",null,"Because it has following properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High scalability"),(0,o.kt)("li",{parentName:"ul"},"Low and stable latency"),(0,o.kt)("li",{parentName:"ul"},"Easy to use"),(0,o.kt)("li",{parentName:"ul"},"Easy to maintain"),(0,o.kt)("li",{parentName:"ul"},"Adjustable consistency"),(0,o.kt)("li",{parentName:"ul"},"Consistent distributed transactions")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usefull links:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tikv/tikv"},"TiKV github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tikv.org/"},"TiKV website"))))}h.isMDXComponent=!0}}]);