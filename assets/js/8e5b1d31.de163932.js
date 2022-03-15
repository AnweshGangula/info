(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6347],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var i=n(7294),r="icon_1PGw",o=n(9205),a=function(e){return i.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},i.createElement("div",{className:r},i.createElement(o.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var i=n(7294),r=n(9205),o="titleOffset_2I3u",a="iconContainer_1xRA",s=function(e){var t=e.title?i.createElement("div",{className:"card__header"},i.createElement("span",{className:a},e.icon&&i.createElement(r.A,{icon:e.icon,link:e.link,active:"true"})),i.createElement("h3",{className:e.icon&&o},e.title)):"";return i.createElement("div",{className:"card-demo",style:{margin:"2rem"}},i.createElement("div",{className:"card"},t,i.createElement("div",{className:"card__body"},i.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var i=n(7294),r="hidden_2JtY",o="iconContainer_2Rnc",a="visible_2147",s="link_Lh4h",c="clickable_3vcc",l=function(e){var t=" "+(e.active?a:r),n=s+" "+(e.link&&c);return i.createElement("div",{className:o+t},i.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var i=n(7294),r="threeScene_3QXR",o=function(e){return i.createElement("iframe",{className:r,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},481:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h},default:function(){return m}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=n(983),s=n(3878),c=n(6649),l=["components"],u={title:"\ud83d\udc53 Hiding",sidebar_position:4},d={unversionedId:"Guide/web-ifc-three/Tutorials/Hiding",id:"Guide/web-ifc-three/Tutorials/Hiding",isDocsHomePage:!1,title:"\ud83d\udc53 Hiding",description:"Introduction",source:"@site/docs/Guide/web-ifc-three/Tutorials/Hiding.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Hiding",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Hiding",version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udc53 Hiding",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc3 Properties",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Properties"},next:{title:"\ud83e\udde0 Memory",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Memory"}},h=[{value:"Introduction",id:"introduction",children:[]},{value:"How to do it",id:"how-to-do-it",children:[{value:"Get subsets of categories",id:"get-subsets-of-categories",children:[]},{value:"Set up GUI",id:"set-up-gui",children:[]},{value:"Bind GUI with visibility",id:"bind-gui-with-visibility",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],p={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nWith what we have seen in other tutorials we already know how to select elements in 3D, access their properties and highlight them using ",(0,o.kt)("strong",{parentName:"p"},"subsets, which are parts of the whole model"),"."),(0,o.kt)("p",null,"\ud83d\udeaa\ud83e\uddf1\nHowever, in many BIM applications it is also possible to ",(0,o.kt)("strong",{parentName:"p"},"hide and isolate elements"),". A common use case is to hide all elements that do not comply with a certain filter or show only those objects belonging to a floor of the building."),(0,o.kt)("p",null,"\ud83c\udf70 Of course, this is a piece of cake using IFC.js. In this example we are going to create ",(0,o.kt)("strong",{parentName:"p"},"filters by category"),", so that the user can show or hide items using checkboxes."),(0,o.kt)(a.M,{mdxType:"IfcCard"},"As with the other tutorials, you can find the full example ",(0,o.kt)("a",{href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc-three/hiding"},"here"),"."),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,o.kt)("h3",{id:"get-subsets-of-categories"},"Get subsets of categories"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nVisibility in IFC.js is based on ",(0,o.kt)("strong",{parentName:"p"},"subset operations"),". This allows complex visualisations to be created with minimal memory usage. The first thing we are going to do is to define which ",(0,o.kt)("strong",{parentName:"p"},"IFC categories")," we are going to allow the user to show or hide."),(0,o.kt)("p",null,"\ud83d\udccb\ud83d\udccb\ud83d\udccb\nTo save memory, ",(0,o.kt)("strong",{parentName:"p"},"categories in IFC.js are defined as numeric constants"),". So let's create an object that maps the name of those constants to their numeric value, and a function to retrieve them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    IFCWALLSTANDARDCASE,\n    IFCSLAB,\n    IFCDOOR,\n    IFCWINDOW,\n    IFCFURNISHINGELEMENT,\n    IFCMEMBER,\n    IFCPLATE\n} from 'web-ifc';\n\n// List of categories names\nconst categories = {\n    IFCWALLSTANDARDCASE,\n    IFCSLAB,\n    IFCFURNISHINGELEMENT,\n    IFCDOOR,\n    IFCWINDOW,\n    IFCPLATE,\n    IFCMEMBER\n};\n\n// Gets the name of a category\nfunction getName(category) {\n    const names = Object.keys(categories);\n    return names.find(name => categories[name] === category);\n}\n")),(0,o.kt)("p",null,"\ud83c\udfe0\u23e9\ud83d\udeaa\nNow let's create a couple of functions to ",(0,o.kt)("strong",{parentName:"p"},"get all the IDs")," of the elements belonging to a category and ",(0,o.kt)("strong",{parentName:"p"},"create a subset")," with those IDs."),(0,o.kt)(s.r,{mdxType:"IfcAlert"},"Remember that many IFC.js functions are asynchronous, so we're going to use async and await."),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nYou can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"removeFromSubset()")," to remove a single item from a subset (e.g. hide a single item). If you combine that with ",(0,o.kt)("inlineCode",{parentName:"p"},"createSubset()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"removePrevious = false"),", you'll have full control of what is added to which subset and its visibility."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Gets the IDs of all the items of a specific category\nasync function getAll(category) {\n    const manager = ifcLoader.ifcManager;\n    return manager.getAllItemsOfType(0, category, false);\n}\n\n// Creates a new subset containing all elements of a category\nasync function newSubsetOfType(category) {\n    const ids = await getAll(category);\n    return ifcLoader.ifcManager.createSubset({\n        modelID: 0,\n        scene,\n        ids,\n        removePrevious: true,\n        customID: category.toString()\n    })\n}\n")),(0,o.kt)("h3",{id:"set-up-gui"},"Set up GUI"),(0,o.kt)("p",null,"\ud83d\udcbb\ud83e\uddd1\nWe will now create a simple GUI to allow the user to control which categories are visible or invisible. We are going to ",(0,o.kt)("strong",{parentName:"p"},"create a checkbox for each category")," of the BIM model we are working with."),(0,o.kt)("p",null,"\ud83d\udc85\nThis can easily be done with a little ",(0,o.kt)("strong",{parentName:"p"},"HTML")," and ",(0,o.kt)("strong",{parentName:"p"},"CSS"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <link rel="icon" href="../../../favicon.ico">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="styles.css">\n    <title>IFC.js</title>\n</head>\n<body>\n<canvas id="three-canvas"></canvas>\n\n<div class="checkboxes">\n    <div>\n        <input checked="true" id="IFCWALLSTANDARDCASE" type="checkbox">\n        Walls\n    </div>\n    <div>\n        <input checked="true" id="IFCSLAB" type="checkbox">\n        Slabs\n    </div>\n    <div>\n        <input checked="true" id="IFCWINDOW" type="checkbox">\n        Windows\n    </div>\n    <div>\n        <input checked="true" id="IFCFURNISHINGELEMENT" type="checkbox">\n        Furniture\n    </div>\n    <div>\n        <input checked="true" id="IFCDOOR" type="checkbox">\n        Doors\n    </div>\n    <div>\n        <input checked="true" id="IFCMEMBER" type="checkbox">\n        Curtain wall structure\n    </div>\n    <div>\n        <input checked="true" id="IFCPLATE" type="checkbox">\n        Curtain wall plates\n    </div>\n</div>\n\n<script src="bundle.js"><\/script>\n</body>\n</html>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    overflow: hidden;\n}\n\n#three-canvas{\n    position: fixed;\n    top: 0;\n    left: 0;\n    outline: none;\n}\n\n#file-input{\n    z-index: 1;\n    position: absolute;\n}\n\n.checkboxes {\n    position: absolute;\n    left: 1rem;\n    top: 1rem;\n}\n")),(0,o.kt)("h3",{id:"bind-gui-with-visibility"},"Bind GUI with visibility"),(0,o.kt)("p",null,"\u2728\nNow it only remains to ",(0,o.kt)("strong",{parentName:"p"},"link the click event of each checkbox with the visibility of the corresponding category"),", so that when the checkbox is activated the category becomes visible and when it is deactivated it disappears."),(0,o.kt)("p",null,"\ud83c\udfa8\ud83d\udc68\u200d\ud83c\udfa8\nHere it is worth noting that to make the code more concise we have given ",(0,o.kt)("strong",{parentName:"p"},"each checkbox an ID with the same name as the category it links to"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Stores the created subsets\nconst subsets = {};\n\nasync function setupAllCategories() {\n    const allCategories = Object.values(categories);\n    for (let i = 0; i < allCategories.length; i++) {\n        const category = allCategories[i];\n        await setupCategory(category);\n    }\n}\n\n// Creates a new subset and configures the checkbox\nasync function setupCategory(category) {\n    subsets[category] = await newSubsetOfType(category);\n    setupCheckBox(category);\n}\n\n// Sets up the checkbox event to hide / show elements\nfunction setupCheckBox(category) {\n    const name = getName(category);\n    const checkBox = document.getElementById(name);\n    checkBox.addEventListener('change', (event) => {\n        const checked = event.target.checked;\n        const subset = subsets[category];\n        if (checked) scene.add(subset);\n        else subset.removeFromParent();\n    });\n}\n")),(0,o.kt)("p",null,"\ud83d\ude0e And here is the result:"),(0,o.kt)(c.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/hiding/index.html",mdxType:"Scene"}),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89\nCongratulations! Now you know how to control the visibility of elements using any filter."),(0,o.kt)(s.r,{mdxType:"IfcAlert"},"This would be the same if we want to filter with other properties (e.g. the floor they belong to using the spatial structure tree, seen in the properties section).  Just make sure you get the IDs of the elements you want to filter."),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nHowever, ",(0,o.kt)("inlineCode",{parentName:"p"},"web-ifc-three")," has even more functionality. For example, what if we want to ",(0,o.kt)("strong",{parentName:"p"},"open and close the viewer"),"? Let's take a look at it next."))}m.isMDXComponent=!0}}]);