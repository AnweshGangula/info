(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8413],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return d},I:function(){return u}});var o=n(7294),a=/{\w+}/g,i="{}";function r(e,t){var n=[],r=e.replace(a,(function(e){var a=e.substr(1,e.length-2),r=null==t?void 0:t[a];if(void 0!==r){var l=o.isValidElement(r)?r:String(r);return n.push(l),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?r.split(i).reduce((function(e,t,o){var a;return e.concat(t).concat(null!==(a=n[o])&&void 0!==a?a:"")}),""):r.split(i).reduce((function(e,t,a){return[].concat(e,[o.createElement(o.Fragment,{key:a},t,n[a])])}),[])}function l(e){return r(e.children,e.values)}var s=n(4644);function c(e){var t,n=e.id,o=e.message;return null!==(t=s[null!=n?n:o])&&void 0!==t?t:o}function u(e,t){var n,o=e.message;return r(null!==(n=c({message:o,id:e.id}))&&void 0!==n?n:o,t)}function d(e){var t,n=e.children,a=e.id,i=e.values,r=null!==(t=c({message:n,id:a}))&&void 0!==t?t:n;return o.createElement(l,{values:i},r)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var o=n(7294),a=n(9205),i="titleOffset_2I3u",r="iconContainer_1xRA",l=function(e){var t=e.title?o.createElement("div",{className:"card__header"},o.createElement("span",{className:r},e.icon&&o.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),o.createElement("h3",{className:e.icon&&i},e.title)):"";return o.createElement("div",{className:"card-demo",style:{margin:"2rem"}},o.createElement("div",{className:"card"},t,o.createElement("div",{className:"card__body"},o.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var o=n(7294),a="hidden_2JtY",i="iconContainer_2Rnc",r="visible_2147",l="link_Lh4h",s="clickable_3vcc",c=function(e){var t=" "+(e.active?r:a),n=l+" "+(e.link&&s);return o.createElement("div",{className:i+t},o.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},5308:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var o=n(7294),a=n(4973),i=function(e){return console.log(e),o.createElement("div",null,e.image,o.createElement("a",{target:"_blank",href:e.ifcLink}," ",o.createElement("i",null,function(e){return e.hideSource?null:o.createElement(a.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},1513:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=n(5308),l=n(983),s=["components"],c={slug:"Build a CDE in 30 minutes",title:"Build a CDE in 30 minutes",author:"Ansoni",author_title:"Make you own CDE from scratch!",author_url:"https://github.com/agviegas",author_image_url:"https://secure.gravatar.com/avatar/9263b9f81d351788e46bc64000c03cb6",tags:["tutorial","CDE","Google"]},u={permalink:"/info/blog/Build a CDE in 30 minutes",source:"@site/blog/2021-09-27-cde-in-30-minutes.mdx",title:"Build a CDE in 30 minutes",description:"All the big companies are selling their CDE. Why don't YOU make your own CDE?",date:"2021-09-27T00:00:00.000Z",formattedDate:"September 27, 2021",tags:[{label:"tutorial",permalink:"/info/blog/tags/tutorial"},{label:"CDE",permalink:"/info/blog/tags/cde"},{label:"Google",permalink:"/info/blog/tags/google"}],readingTime:8.35,truncated:!0,prevItem:{title:"Why IFC doesn't work",permalink:"/info/blog/Why IFC doesnt work"},nextItem:{title:"The BIM that we need",permalink:"/info/blog/prometheus"}},d=[{value:"But wait, what is a CDE?",id:"but-wait-what-is-a-cde",children:[]},{value:"Ok, but why would I want a CDE?",id:"ok-but-why-would-i-want-a-cde",children:[]},{value:"I get it, CDEs rock. But I will never be able to develop one myself",id:"i-get-it-cdes-rock-but-i-will-never-be-able-to-develop-one-myself",children:[]},{value:"CDE design",id:"cde-design",children:[{value:"Strategy",id:"strategy",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"IFC.js app",id:"ifcjs-app",children:[]},{value:"Chrome extension",id:"chrome-extension",children:[]},{value:"All toguether!",id:"all-toguether",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:d};function p(e){var t=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"All the big companies are selling their CDE. Why don't YOU make your own CDE?")),(0,i.kt)(r.Q,{hideSource:!0,image:(0,i.kt)("img",{src:n(5038).Z,alt:"Lego image"}),ifcLink:"https://www.pexels.com/photo/set-of-multicolored-plastic-construction-toys-scattered-on-floor-7444982/",mdxType:"IfcImage"}),(0,i.kt)("h2",{id:"but-wait-what-is-a-cde"},"But wait, what is a CDE?"),(0,i.kt)("p",null,"\ud83d\udce6\nInformally speaking, ",(0,i.kt)("strong",{parentName:"p"},"CDE")," is nothing more than a place where the information of a construction project is centralised and accesible through internet."),(0,i.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udd27\ud83d\udd28 CDEs can have all the functionalities of traditional BIM applications: 3D viewers, reading and editing data, energy simulations, automatic measurements and budgets, etc."),"\ufe0f",(0,i.kt)("p",null,"\ud83c\udf0e\ud83c\udf0d\ud83c\udf0f\nHowever, they have a fundamental advantage: they are ",(0,i.kt)("strong",{parentName:"p"},"on the web"),", and that means they are accessible from anywhere and from any device without having to install anything."),(0,i.kt)("h2",{id:"ok-but-why-would-i-want-a-cde"},"Ok, but why would I want a CDE?"),(0,i.kt)("p",null,"\ud83d\udcb8\nWell, the truth is that right now, CDEs are the new black. ",(0,i.kt)("strong",{parentName:"p"},"Almost every major company in the industry is building a CDE")," and selling them to their customers at exorbitant prices."),(0,i.kt)("p",null,"\ud83c\udfc3\u200d\u2640\ufe0f\ud83c\udfc3\u200d\u2642\ufe0f\ud83c\udfc3\u200d\u2640\ufe0f\nWith internet getting faster and better, there will come a day when desktop applications as we know them will lose relevance, and a large part of our tasks will be performed in web applications or server applications. In other words, ",(0,i.kt)("strong",{parentName:"p"},"CDEs are the future"),", and right now there is a big race to build the best one."),(0,i.kt)("h2",{id:"i-get-it-cdes-rock-but-i-will-never-be-able-to-develop-one-myself"},"I get it, CDEs rock. But I will never be able to develop one myself"),(0,i.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nWrong! The biggest beneficiary of you thinking you can't do BIM solutions is the current BIM vendors. At IFC.js we wanted to bust that myth and make a simple CDE from scratch to show that ",(0,i.kt)("strong",{parentName:"p"},"starting to develop BIM applications is not that difficult"),"."),(0,i.kt)("p",null,"\u261d\nObviously, this tutorial is a minimal example. But from the simple CDE of this tutorial to the CDEs of large companies, there is not as much distance as it might seem. ",(0,i.kt)("strong",{parentName:"p"},"Enough chit-chat, let's get on with it!")),(0,i.kt)("h2",{id:"cde-design"},"CDE design"),(0,i.kt)("h3",{id:"strategy"},"Strategy"),(0,i.kt)("p",null,"\u23f3\nWe only have ",(0,i.kt)("strong",{parentName:"p"},"half an hour")," to do this CDE, so we have to choose carefully how to do it in order not to waste any time. First things first: we need ",(0,i.kt)("strong",{parentName:"p"},"a place to store project documentation"),". Do you know of an existing tool that allows us to do that? We have thought of ",(0,i.kt)("strong",{parentName:"p"},"Google Drive"),"!"),(0,i.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udcaa Google Drive has a lot of power: we can control read and write access to files, version control, an open API... In short, it has many of the things that BIM software companies charge you for, but totally free."),"\ufe0f",(0,i.kt)("p",null,"\ud83d\uded1\nHowever, Google Drive has a fundamental limitation: it does not have a 3D viewer and does not allow easy access to data in BIM models (e.g. IFC models)."),(0,i.kt)("p",null,"\ud83e\udd1d\n",(0,i.kt)("strong",{parentName:"p"},"This is where IFC.js comes in"),", allowing us to build BIM applications directly on the web. Combining the storage and permissions power of google drive with the 3d and data reading and editing capabilities of IFC.js, we could build our basic CDE in 30 minutes. Here's how:"),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"\ud83e\udd37\u200d\u2640\ufe0f\n",(0,i.kt)("strong",{parentName:"p"},"How to connect")," IFC.js and google drive to be able to use both as a CDE? Our design proposal is as follows. It may look complicated, but it's actually very very simple."),(0,i.kt)(r.Q,{image:(0,i.kt)("img",{src:n(9927).Z,alt:"Schema explaining the concept of the CDE"}),mdxType:"IfcImage"}),(0,i.kt)("p",null,"\ud83c\udfe0\nFirst we are going to create an ",(0,i.kt)("strong",{parentName:"p"},"3D BIM web application that is able to download files from google drive"),". Specifically, it will download the file from google drive whose ID it finds in its URL parameter. For example, if your URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://.../?id=123&name=TEST.ifc"),", it will download the file whose ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," from the google account of the user who is logged into the app."),(0,i.kt)("p",null,"\ud83c\udf10\nThen we are going to create a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/"},"google chrome extension")," that is going to do three things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Read the name of the HTML element")," that the user clicks on via web scraping.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Find out the ID of that element")," using the google drive API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a menu that allows the user to open the URL with the IFC.js web application"),". In addition, you are going to add two url parameters: the name and the id of the file."),(0,i.kt)(l.M,{mdxType:"IfcCard"},"In short: a google chrome extension gets the name of a file when the user clicks on it and opens a web app that knows how to download files by their ID. That's all."),"\ufe0f")),(0,i.kt)("h3",{id:"ifcjs-app"},"IFC.js app"),(0,i.kt)("h4",{id:"bim-app"},"BIM app"),(0,i.kt)("p",null,"\ud83c\udfe2\nThanks to IFC.js, ",(0,i.kt)("strong",{parentName:"p"},"this is the easiest part"),". Specifically, we are going to create it with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer"),", which allows to make BIM applications in 50 lines of code. You can find all the code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc-viewer/google-drive-viewer"},"here"),"."),(0,i.kt)("p",null,"\ud83d\ude09\nYes, you read that right: ",(0,i.kt)("strong",{parentName:"p"},"a full 3D BIM app in 50 lines"),". And it includes functionalities such as section drawings and 3D dimensions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    import {IfcViewerAPI} from 'web-ifc-viewer';\n    import {Color} from 'three'\n\n    // Get div container where 3d scene is rendered\n    const container = document.getElementById('viewer-container');\n\n    // Initialize IFC.js API and add it as global variable\n    const viewer = new IfcViewerAPI({\n                            container,\n                            backgroundColor: new Color(0xffffff)\n                                });\n    viewer.IFC.applyWebIfcConfig({\n                            COORDINATE_TO_ORIGIN: true,\n                            USE_FAST_BOOLS: true\n                                });\n    window.webIfcAPI = viewer;\n\n    // Set up scene\n    viewer.addAxes();\n    viewer.addGrid(50, 50);\n    viewer.IFC.setWasmPath('wasm/');\n    viewer.clipper.active = true;\n    let dimensionsActive = false;\n\n    // Add basic input logic\n    const handleKeyDown = (event) => {\n        if (event.code === 'KeyE') {\n            dimensionsActive = !dimensionsActive;\n            viewer.dimensions.active = dimensionsActive;\n            viewer.dimensions.previewActive = dimensionsActive;\n            viewer.IFC.unPrepickIfcItems();\n            window.onmousemove = dimensionsActive ?\n                                            null :\n                                .IFC.prePickIfcItem;\n        }\n        if (event.code === 'KeyD') {\n            viewer.dimensions.create();\n        }\n        if (event.code === 'KeyG') {\n            viewer.clipper.createPlane();\n        }\n        if (event.code === 'Delete') {\n            viewer.dimensions.deleteAll();\n            viewer.clipper.deletePlane();\n            viewer.IFC.unpickIfcItems();\n        }\n    };\n    window.onkeydown = handleKeyDown;\n\n    // Highlight items when hovering over them\n    window.onmousemove = viewer.IFC.prePickIfcItem;\n\n    // Select items and log properties\n    window.ondblclick = async () => {\n        const item = await viewer.IFC.pickIfcItem(true);\n        if(item.modelID === undefined || item.id === undefined ) return;\n        console.log(\n            await viewer.IFC.getProperties(item.modelID, item.id, true));\n    }\n")),(0,i.kt)("p",null,"\ud83c\udfa8\nMake sure you create the necessary HTML and CSS to give the viewer the look and feel you want."),(0,i.kt)("h4",{id:"google-drive-api"},"Google Drive API"),(0,i.kt)("p",null,"\ud83d\udd12\ud83d\udd12\ud83d\udd12\nWell, we have a BIM viewer, but for now it can't download anything from the ",(0,i.kt)("strong",{parentName:"p"},"Google Drive API"),". However, that's easy: just follow these steps from the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/drive/api/v3/quickstart/js"},"official documentation")," and copy and paste the JavaScript code to be able to access the API."),(0,i.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udd11\ud83d\udd11\ud83d\udd11 Following the google guide, you'll need to create a new Google Cloud project to get your own CLIENT_ID and API_KEY; they are just two texts that you must have for google to know who you are. In other words, you can't use the keys we have to access to your drive!"),"\ufe0f",(0,i.kt)("p",null,"\ud83d\udccb\nIf you take a look at the code we have posted, you will see that ",(0,i.kt)("strong",{parentName:"p"},"we have copied and pasted almost all of the code")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/drive/api/v3/quickstart/js"},"google example"),". The only thing we have added is the following, which simply gets the ID of the file from the URL of the web application and downloads it from google drive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    /**\n     *  Called when the signed in status changes, to update the UI\n     *  appropriately. After a sign-in, the API is called.\n     */\n    function updateSigninStatus(isSignedIn) {\n        if (isSignedIn) {\n            const {id, name} = getIdAndName();\n            fileName.innerText = `Name: ${name}`;\n            if (id) downloadFile(id);\n            else console.log('No ID was providen as URL parameter!');\n        }\n    }\n\n    /**\n     *  Sign in the user upon button click.\n     */\n    function handleAuthClick(event) {\n        authorizeButton.onclick = handleSignoutClick;\n        buttonText.innerText = 'Sign out';\n        gapi.auth2.getAuthInstance().signIn();\n    }\n\n\n    function downloadFile(fileId) {\n        gapi.client.drive.files.get({\n            fileId: fileId,\n            alt: 'media'\n        }).then(function (response) {\n            loadIfcModel(response.body);\n        }, function (error) {\n            console.error(error)\n        })\n    }\n\n    function getIdAndName() {\n        const urlParams = new URLSearchParams(window.location.search);\n        const id = urlParams.get(\"id\");\n        const name = urlParams.get(\"name\");\n        return {id, name};\n    }\n\n    function loadIfcModel(text) {\n        const blob = new Blob([text], {type: 'text/plain'});\n        const file = new File([blob], \"ifcModel\");\n        window.webIfcAPI.IFC.loadIfc(file);\n    }\n")),(0,i.kt)("p",null,"\ud83c\udf89\ud83c\udf89 Congratulations! You have just built a BIM application capable of downloading files from Google Drive. Now all that remains is the last part: creating the Google Chrome extension."),(0,i.kt)("h3",{id:"chrome-extension"},"Chrome extension"),(0,i.kt)("p",null,"Now we are going to make a Google Chrome extension so that the ",(0,i.kt)("strong",{parentName:"p"},"user can select the files they want to open"),". If you've never done this before, it may sound intimidating, but it's actually very simple. You can find the finished result ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/Drive-CDE"},"here"),"."),(0,i.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udd11\ud83d\udd11\ud83d\udd11 Following the google guide, you'll need to create a new Google Cloud project to get your own CLIENT_ID and API_KEY; they are just two texts that you must have for google to know who you are. In other words, you can't use the keys we have to access to your drive! ",(0,i.kt)("a",{href:"https://developers.google.com/drive/api/v3/about-sdk#create_and_open_files_directly_from_the_drive_ui"},"Have a look here for more details"),"."),"\ufe0f",(0,i.kt)("p",null,"\ud83d\udc63\nThere are many ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/anobjectisa/how-to-build-a-chrome-extension-new-manifest-v3-5edk"},"step-by-step guides")," on the internet, but we recommend that you take the code from our repository, study it and play with it to see how it works."),(0,i.kt)("p",null,"\ud83e\uddf1\nThere are really only 2 important files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/Drive-CDE/blob/master/background.js"},"background.js"),": controls the events of the page, like when the user clicks on something, but doesn't have access to the page content.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/Drive-CDE/blob/master/foreground.js"},"foreground.js"),": has access to the page content, but not to the events."))),(0,i.kt)("p",null,"\ud83d\udc6c\nSo, as you can imagine, both files have to communicate with each other in order to do what we want. As you can see in the code, they do it with a simple message system."),(0,i.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nIn the repository you will find step-by-step comments on what does what. In total, there are less than 100 lines of relevant code: everything else is copied and pasted."),(0,i.kt)("h3",{id:"all-toguether"},"All toguether!"),(0,i.kt)("p",null,"\ud83d\udd25\ud83d\udd25\ud83d\udd25\nThis is how our 30 minutes CDE looks:"),(0,i.kt)("iframe",{width:"100%",height:"600px",src:"https://www.youtube.com/embed/lYzTaOBuv7k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"\ud83c\udfc6\nCongratulations! You have just created ",(0,i.kt)("strong",{parentName:"p"},"your first CDE"),". It may not seem much, but think of all its functionalities: file storage, permissions and version control, 3d view, access to properties, 3d measurements, section planes..."),(0,i.kt)("p",null,"\ud83d\ude80\ud83d\ude80\ud83d\ude80\nIf we have done this in such a short time and using Google Drive, can you imagine what is possible to build with IFC.js and other technologies such as ",(0,i.kt)("strong",{parentName:"p"},"databases")," or ",(0,i.kt)("strong",{parentName:"p"},"servers?")," Don't worry, we'll be making tutorials on all that and more!"))}p.isMDXComponent=!0},5038:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lego-27af32023b801c95f6e806ca0f47aec0.jpg"},9927:function(e,t,n){"use strict";t.Z=n.p+"assets/images/schema-ee9c12a5d7cba299d5a0035eccae4d6e.jpg"}}]);