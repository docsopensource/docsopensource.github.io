"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[6652],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),h=s,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(m,n(n({ref:t},p),{},{components:a})):r.createElement(m,n({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var d=2;d<o;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5260:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=a(7462),s=a(3366),o=(a(7294),a(3905)),n=["components"],i={sidebar_position:14},l="The Update Framework",d={unversionedId:"CNCF Projects/5.14_TUF",id:"CNCF Projects/5.14_TUF",isDocsHomePage:!1,title:"The Update Framework",description:"The Update Framework (TUF) is a software framework designed to protect mechanisms that automatically identify and download updates to software. TUF uses a series of roles and keys to provide a means to retain security, even when some keys or servers are compromised. It does this with a stated goal of requiring minimal changes and effort from repository administrators, software developers, and end users. In this way, it protects software repositories, which are an increasingly desirable target for hackers.",source:"@site/docs/CNCF Projects/5.14_TUF.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.14_TUF",permalink:"/docs/CNCF Projects/5.14_TUF",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Harbor",permalink:"/docs/CNCF Projects/5.13_Harbor"},next:{title:"ETCD",permalink:"/docs/CNCF Projects/5.15_etcd"}},p=[{value:"TUF design :",id:"tuf-design-",children:[],level:2},{value:"What they are trying to do?",id:"what-they-are-trying-to-do",children:[],level:2},{value:"What Is a Software Update System?",id:"what-is-a-software-update-system",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Background",id:"background",children:[],level:2},{value:"What TUF Does?",id:"what-tuf-does",children:[],level:2},{value:"How TUF improves Software Distribution Security?",id:"how-tuf-improves-software-distribution-security",children:[],level:2}],u={toc:p};function c(e){var t=e.components,a=(0,s.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-update-framework"},"The Update Framework"),(0,o.kt)("img",{src:"https://theupdateframework.io/img/logos/tuf-stacked-color.png",height:"300",width:"400"}),(0,o.kt)("p",null,"The Update Framework (TUF) is a software framework designed to protect mechanisms that automatically identify and download updates to software. TUF uses a series of roles and keys to provide a means to retain security, even when some keys or servers are compromised. It does this with a stated goal of requiring minimal changes and effort from repository administrators, software developers, and end users. In this way, it protects software repositories, which are an increasingly desirable target for hackers."),(0,o.kt)("p",null,"A software update, sometimes referred to as a patch, can add functionalities and address flaws in existing code. Unfortunately, in delivering updates to neutralize flaws, these systems can unintentionally introduce vulnerabilities that, in turn, can be exploited by attackers."),(0,o.kt)("p",null,"The design of TUF acknowledges that all software repositories will likely be compromised at some point, so any security strategy must be prepared for that scenario. TUF-enabled systems focus on limiting the impact of attacks and providing a mechanism for recovery. This strategy of \u201ccompromise-resilience\u201d improves on existing methods based on keysigning by incorporating techniques, such as separation of signing duties and setting a threshold number of required signatures. Dividing the responsibility for authenticating a file or image ensures no single hacker can compromise the system. It also helps to ensure that keys used to perform a sensitive action can be stored in a secure, offline manner. Even if one party\u2014or the repository itself\u2014is compromised, the number of projects affected will be limited."),(0,o.kt)("p",null,"To date, the list of tech companies and organizations using TUF include IBM, VMware, Digital Ocean, Microsoft, Google, Amazon, Leap, Kolide, Docker, and Cloudflare."),(0,o.kt)("h2",{id:"tuf-design-"},"TUF design :"),(0,o.kt)("p",null,"The Update Framework (TUF) design helps developers maintain the security of a software update system, even against attackers that compromise the repository or signing keys. TUF provides a flexible specification defining functionality that developers can use in any software update system or re-implement to fit their needs."),(0,o.kt)("p",null,"TUF is hosted by the Linux Foundation as part of the Cloud Native Computing Foundation (CNCF) and its design is used in production by various tech companies and open source organizations. A variant of TUF called Uptane is used to secure over-the-air updates in automobiles."),(0,o.kt)("img",{src:"https://www.cncf.io/wp-content/uploads/2020/08/Screen-Shot-2017-10-24-at-12.19.35-PM-1-1.png"}),(0,o.kt)("h2",{id:"what-they-are-trying-to-do"},"What they are trying to do?"),(0,o.kt)("p",null,"There are literally thousands of different software update systems in common use today. In fact the average Windows user has about two dozen different software updaters on their machine"),(0,o.kt)("p",null,"They are building a library that can be universally (and in most cases transparently) be used to secure software update systems."),(0,o.kt)("h2",{id:"what-is-a-software-update-system"},"What Is a Software Update System?"),(0,o.kt)("p",null,"Generally, a software update system is an application (or part of an application) running on a client system that obtains and installs software. These systems typically update the applications installed on client systems to introduce new features, enhancements, and security fixes."),(0,o.kt)("p",null,"Three major classes of software update systems are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application updaters which are used by applications to update themselves. For example, Firefox updates itself through its own application updater."),(0,o.kt)("li",{parentName:"ul"},"Library package managers such as those offered by many programming languages for installing additional libraries. These are systems such as Python's pip/easy_install + PyPI, Perl's CPAN, Ruby's RubyGems, and PHP's Composer."),(0,o.kt)("li",{parentName:"ul"},"System package managers used by operating systems to update and install all of the software on a client system. Debian's APT, Red Hat's YUM, and openSUSE's YaST are examples of these.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"On the surface, the update procedure followed by a software update system can be regarded as straightforward. Obtaining and installing an update just means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Knowing when an update exists."),(0,o.kt)("li",{parentName:"ul"},"Downloading the update."),(0,o.kt)("li",{parentName:"ul"},"Applying the changes introduced by the update.")),(0,o.kt)("p",null,"The problem with this view is that it is only straightforward when there are no malicious parties involved throughout the update procedure. If an attacker is trying to interfere with these seemingly simple steps, there is plenty that they can do."),(0,o.kt)("p",null,"TUF is designed to perform the first two steps of the above update procedure, while guarding against the majority of attacks that malicious actors have at their disposal; especially those attacks that are overlooked by security-conscious developers."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Let's assume we take the approach that most systems do (at least, the ones that even try to be secure). We download both the file we want and a cryptographic signature of the file. We already know which key we trust to make the signature. We check that the signature is correct and was made by this trusted key. All seems well, right? Wrong. We are still at risk in many ways, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An attacker keeps giving us the same file, so we never realize there is an update."),(0,o.kt)("li",{parentName:"ul"},"An attacker gives us an older, insecure version of a file that we already have, so we download that one and blindly use it thinking it's newer."),(0,o.kt)("li",{parentName:"ul"},"An attacker gives us a newer version of a file we have but it's not the newest one. It's newer to us, but it may be insecure and exploitable by the attacker."),(0,o.kt)("li",{parentName:"ul"},"An attacker compromises the key used to sign these files and now we download a malicious file that is properly signed.",(0,o.kt)("img",{src:"https://image.slidesharecdn.com/tufdockersummit2016-161010203221/95/talking-tuf-securing-software-distribution-3-638.jpg?cb=1476131633"}))),(0,o.kt)("p",null,"These are just some of the attacks software update systems are vulnerable to when only using signed files. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/theupdateframework/python-tuf/blob/develop/docs/SECURITY.md"},"Security")," for a full list of attacks and updater weaknesses TUF is designed to prevent."),(0,o.kt)("p",null,"The following papers provide detailed information on securing software updater systems, TUF's design and implementation details, attacks on package managers, and package management security:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mercury: Bandwidth-Effective Prevention of Rollback Attacks Against Community Repositories ",(0,o.kt)("a",{parentName:"li",href:"https://theupdateframework.io/papers/attacks-on-package-managers-ccs2008.pdf"},"https://theupdateframework.io/papers/attacks-on-package-managers-ccs2008.pdf")),(0,o.kt)("li",{parentName:"ul"},"Diplomat: Using Delegations to Protect Community Repositories ",(0,o.kt)("a",{parentName:"li",href:"https://theupdateframework.io/papers/protect-community-repositories-nsdi2016.pdf"},"https://theupdateframework.io/papers/protect-community-repositories-nsdi2016.pdf")),(0,o.kt)("li",{parentName:"ul"},"Survivable Key Compromise in Software Update Systems ",(0,o.kt)("a",{parentName:"li",href:"https://theupdateframework.io/papers/survivable-key-compromise-ccs2010.pdf"},"https://theupdateframework.io/papers/survivable-key-compromise-ccs2010.pdf")),(0,o.kt)("li",{parentName:"ul"},"A Look In the Mirror: Attacks on Package Managers ",(0,o.kt)("a",{parentName:"li",href:"https://theupdateframework.io/papers/package-management-security-tr08-02.pdf"},"https://theupdateframework.io/papers/package-management-security-tr08-02.pdf")),(0,o.kt)("li",{parentName:"ul"},"Package Management Security ",(0,o.kt)("a",{parentName:"li",href:"https://theupdateframework.io/papers/attacks-on-package-managers-ccs2008.pdf"},"https://theupdateframework.io/papers/attacks-on-package-managers-ccs2008.pdf"))),(0,o.kt)("h2",{id:"what-tuf-does"},"What TUF Does?"),(0,o.kt)("p",null,"In order to securely download and verify target files, TUF requires a few extra files to exist on a repository. These are called metadata files. TUF metadata files contain additional information, including information about which keys are trusted, the cryptographic hashes of files, signatures on the metadata, metadata version numbers, and the date after which the metadata should be considered expired."),(0,o.kt)("p",null,"When a software update system using TUF wants to check for updates, it asks TUF to do the work. That is, your software update system never has to deal with this additional metadata or understand what's going on underneath. If TUF reports back that there are updates available, your software update system can then ask TUF to download these files. TUF downloads them and checks them against the TUF metadata that it also downloads from the repository. If the downloaded target files are trustworthy, TUF hands them over to your software update system. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/theupdateframework/python-tuf/blob/develop/docs/METADATA.md"},"Metadata")," for more information and examples."),(0,o.kt)("h2",{id:"how-tuf-improves-software-distribution-security"},"How TUF improves Software Distribution Security?"),(0,o.kt)("p",null,"In recent years that there been multiple cyber-attacks that compromised a software developer\u2019s network to enable the delivery of malware inside of software updates."),(0,o.kt)("p",null,"TUF defines an system in which software updates are cryptographically signed and secured in a validated way to help minimize the risk of software tampering. There have been multiple incidents in recent years, including one involving cCleaner, in which attackers were able to infiltrate and compromise development systems to send malicious updates to users."),(0,o.kt)("img",{src:"https://ssl.engineering.nyu.edu/img/projects/tuf_diagram.png"}),(0,o.kt)("p",null,"TUF became a Cloud Native Computing Foundation (CNCF) project in October 2017, alongside the Notary project. The CNCF is a Linux Foundation Collaborative Project and is home to multiple technology projects including the Kubernetes container orchestration system. Cappos said that being part of the CNCF has helped to advance the TUF project, in terms of having proper governance and validation. The CNCF also helps to promote TUF and the work that the project is doing."))}c.isMDXComponent=!0}}]);