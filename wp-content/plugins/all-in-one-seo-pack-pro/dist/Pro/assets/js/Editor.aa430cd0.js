var D=Object.defineProperty,U=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var v=(i,t,e)=>t in i?D(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,g=(i,t)=>{for(var e in t||(t={}))Q.call(t,e)&&v(i,e,t[e]);if(S)for(var e of S(t))W.call(t,e)&&v(i,e,t[e]);return i},q=(i,t)=>U(i,j(t));var w=(i,t,e)=>(v(i,typeof t!="symbol"?t+"":t,e),e);import{a3 as l,j as _}from"./vendor.f6bbc087.js";import{b as z}from"./index.0c09686e.js";import{n as $}from"./vueComponentNormalizer.4c221f82.js";const Z=i=>{const{invalidClosingTags:t,invalidOpeningTags:e,tagNamePattern:s}=O(i);let n=i;return t.forEach(o=>{n=`<${o.match(s)[1]}>`+n}),e.forEach(o=>{const r=o.match(s)[1];n=n+`</${r}>`}),n},K=(i,t)=>{const{invalidClosingTags:e,invalidOpeningTags:s,tagNamePattern:n}=O(i);return e.forEach(o=>{const r=o.match(n)[1],a=new RegExp(`^<${r}>`);t=t.replace(a,"")}),s.forEach(o=>{const r=o.match(n)[1],a=new RegExp(`<\\/${r}>$`);t=t.replace(a,"")}),t},O=i=>{const t=new RegExp(/(<[^<>]*>)/),e=new RegExp(/<\s?\/[^<>]*>/),s=new RegExp(/<\s?\/?([^<\s>]*).*>/),n=i.split(t),o=[];n.forEach(c=>{c.match(t)&&o.push(c)});const r=[];o.forEach((c,d)=>{if(!c)return;if(c.match(e)){r.push(c),o[d]="";return}const u=c.match(s)[1];let f=!1;o.forEach((b,M)=>{if(d===M||!b||f||!b.match(e))return;const V=b.match(s)[1];if(u===V){o[d]="",o[M]="",f=!0;return}r.push(c),o[d]=""})});const a=[],h=[];return r.forEach(c=>{if(!!c.match(t)){if(c.match(e)){h.push(c);return}a.push(c)}}),{invalidClosingTags:h,invalidOpeningTags:a,tagNamePattern:s}};class J{constructor(t,e){this.quill=t,this.options=g({defaultLength:1},e),this.container=e.container,t.on("text-change",this.update.bind(this)),this.update()}update(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild);const t=this.quill.getLines();if(this.options.defaultLength>t.length)for(let n=t.length;this.options.defaultLength>n;n++)t.push({});let e=0;for(let n=0;n<t.length;n++){const o=t[n].domNode?t[n].domNode.offsetHeight:25,r=document.createElement("div");r.style.minHeight=`${o}px`,r.innerHTML=n+1,this.container.appendChild(r),e+=o}const s=this.quill.container.querySelector(".ql-editor");if(s){const n=window.getComputedStyle(s);s.style.minHeight=`${e+parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom"))}px`}}}l.register("modules/lineNumbers",J,!0);const X=(i,t,e)=>{const s=i;return Object.keys(t).forEach(n=>{-1<e.indexOf(n)?s.dataset[n]=t[n]:delete s.dataset[n]}),s},P=(i,t)=>t.reduce((e,s)=>{const n=i.lastIndexOf(s);return n>e.mentionCharIndex?{mentionChar:s,mentionCharIndex:n}:{mentionChar:e.mentionChar,mentionCharIndex:e.mentionCharIndex}},{mentionChar:null,mentionCharIndex:-1}),Y=(i,t)=>t.test(i),G=(i,t,e)=>-1<i?!(e&&!(i===0||!!t[i-1].match(/\s/g))):!1,tt=l.import("blots/embed");class p extends tt{constructor(t){super(t);this.clickHandler=this.clickHandler.bind(this),t.addEventListener("click",this.clickHandler)}static getQuillInstance(t){let e=l.find(t);if(!!e){for(;e.parent;)e=e.parent;return l.find(e.domNode.parentNode)}}clickHandler(){const t=p.getQuillInstance(this.domNode),e=t.getModule("mention");if(e.currentBlot=this,e.currentNode=this.domNode,e.isOpen)return this.domNode.querySelector(".aioseo-tag .tag-toggle svg").classList.remove("rotated"),e.hideMentionList();this.domNode.querySelector(".aioseo-tag .tag-toggle svg").classList.add("rotated"),e.mentionCharPos=this.offset(t.scroll),e.options.source("",e.renderList.bind(e,this.domNode.dataset.denotationChar),this.domNode.dataset.denotationChar)}static create(t){const e=super.create(),s=document.createElement("span");if(s.className="ql-mention-denotation-char",s.innerHTML=t.denotationChar,e.appendChild(s),e.innerHTML+=t.value,t.custom&&t.customValue){let n=e.querySelector(".tag-custom");if(!n){n=document.createElement("span"),n.classList.add("tag-custom");const o=e.querySelector(".tag-name");o.parentNode.insertBefore(n,o.nextSibling)}n.innerText=" - "+(t.customValue||"")}return setTimeout(()=>{const n=p.getQuillInstance(e);if(n){const o=n.getModule("mention");o.currentNode=e}},0),p.setDataValues(e,t)}static setDataValues(t,e){const s=t;return Object.keys(e).forEach(n=>{s.dataset[n]=e[n]}),s}static value(t){return t.dataset}format(t,e){t==="customValue"&&e?this.domNode.dataset.customValue=e:super.format(t,e)}}p.blotName="mention";p.tagName="span";p.className="mention";l.register(p);const m={TAB:9,ENTER:13,ESCAPE:27,UP:38,DOWN:40};class et{constructor(t,e){this.isOpen=!1,this.itemIndex=0,this.mentionCharPos=null,this.cursorPos=null,this.values=[],this.suspendMouseEnter=!1,this.activeElement=null,this.currentBlot=null,this.currentNode=null,this.quill=t,this.silentInsert=!1,this.insertingCustomItem=!1,this.options={source:null,renderItem(o){return`${o.value}`},onSelect(o,r){r(o)},mentionDenotationChars:["@"],showDenotationChar:!0,allowedChars:/^[a-zA-Z0-9_]*$/,minChars:0,maxChars:1e3,offsetTop:2,offsetLeft:0,isolateCharacter:!1,fixMentionsToQuill:!1,defaultMenuOrientation:"bottom",dataAttributes:["id","value","denotationChar","link","target"],linkTarget:"_blank",onOpen(){return!0},onClose(){return!0},listItemClass:"ql-mention-list-item",mentionContainerClass:"ql-mention-list-container",mentionListClass:"ql-mention-list",spaceAfterInsert:!0},Object.assign(this.options,e,{dataAttributes:Array.isArray(e.dataAttributes)?this.options.dataAttributes.concat(e.dataAttributes):this.options.dataAttributes}),this.mentionContainer=document.createElement("div"),this.mentionContainer.className=this.options.mentionContainerClass?this.options.mentionContainerClass:"",this.mentionContainer.style.cssText="display: none; position: absolute;",this.mentionContainer.onmousemove=this.onContainerMouseMove.bind(this),this.options.fixMentionsToQuill&&(this.mentionContainer.style.width="auto"),this.customFieldInput=document.createElement("div"),this.customFieldInput.className=this.options.mentionPrependClassCustom?this.options.mentionPrependClassCustom:"",this.customFieldInput.innerHTML=this.options.customFieldInput||"",this.mentionContainer.appendChild(this.customFieldInput),this.mentionSearch=document.createElement("div"),this.mentionSearch.className=this.options.mentionPrependClass?this.options.mentionPrependClass:"",this.mentionSearch.innerHTML=this.options.prependMentionList||"",this.mentionContainer.appendChild(this.mentionSearch),this.customFieldInput.addEventListener("click",o=>{this.activeElement=o.target;const r=o.target.querySelector("input");r&&setTimeout(()=>{r.focus()},0)});const s=this.customFieldInput.querySelector("input");s&&s.addEventListener("input",o=>{if(this.currentNode){let r=this.currentNode.querySelector(".tag-custom");if(!r){r=document.createElement("span"),r.classList.add("tag-custom");const a=this.currentNode.querySelector(".tag-name");a.parentNode.insertBefore(r,a.nextSibling)}r.innerText=o.target.value?" - "+o.target.value:"",this.currentBlot=l.find(this.currentNode),this.currentBlot.format("customValue",o.target.value)}}),this.customFieldInput.addEventListener("keydown",o=>{o.keyCode===13&&(this.hideMentionList(),this.removeOrphanedMentionChar()),o.keyCode===27&&(this.hideMentionList(),this.removeOrphanedMentionChar()),o.keyCode===32&&o.preventDefault()}),this.mentionSearch.addEventListener("click",o=>{this.activeElement=o.target}),this.mentionSearch.addEventListener("keydown",o=>{o.keyCode===40&&this.nextItem(),o.keyCode===38&&this.prevItem(),o.keyCode===13&&this.selectItem(),o.keyCode===27&&this.hideMentionList()});const n=this.mentionSearch.querySelector("input");n&&n.addEventListener("input",o=>{const r=this.getTextBeforeCursor(),{mentionChar:a}=P(r,this.options.mentionDenotationChars);if(!a&&!this.currentBlot)return;const h=a||this.currentBlot.domNode.dataset.denotationChar;this.options.source(o.target.value,this.renderList.bind(this,h),h)}),this.mentionList=document.createElement("ul"),this.mentionList.className=this.options.mentionListClass?this.options.mentionListClass:"",this.mentionContainer.appendChild(this.mentionList),this.quill.container.appendChild(this.mentionContainer),t.on("text-change",this.onTextChange.bind(this)),t.on("selection-change",this.onSelectionChange.bind(this)),t.keyboard.addBinding({key:m.TAB},this.selectHandler.bind(this)),t.keyboard.bindings[m.TAB].unshift(t.keyboard.bindings[m.TAB].pop()),t.keyboard.addBinding({key:m.ENTER},this.selectHandler.bind(this)),t.keyboard.bindings[m.ENTER].unshift(t.keyboard.bindings[m.ENTER].pop()),t.keyboard.addBinding({key:m.ESCAPE},this.escapeHandler.bind(this)),t.keyboard.addBinding({key:m.UP},this.upHandler.bind(this)),t.keyboard.addBinding({key:m.DOWN},this.downHandler.bind(this)),t.clipboard.addMatcher(Node.TEXT_NODE,this.clipboardHandler.bind(this))}selectHandler(){return this.isOpen?(this.selectItem(),!1):!0}escapeHandler(){return this.isOpen?(this.hideMentionList(),this.removeOrphanedMentionChar(),!1):!0}removeOrphanedMentionChar(){let t=!1;this.quill.hasFocus()||(this.quill.focus(),t=!0);const e=this.getTextBeforeCursor();e.charAt(e.length-1)==="#"&&this.quill.deleteText(this.quill.getSelection().index-1,1,l.sources.USER),t&&this.quill.blur()}upHandler(){return this.isOpen?(this.prevItem(),!1):!0}downHandler(){return this.isOpen?(this.nextItem(),!1):!0}clipboardHandler(t,e){if(typeof t.data!="string")return;const s=new RegExp(`${this.options.mentionDenotationChars.join("|")}[A-Za-z_-]+`,"g"),n=t.data.match(s);if(n&&0<n.length){const o=[];let r=t.data;this.mentionCharPos=0,n.forEach(a=>{const h=a.charAt(0),c=a.substr(1).split("-"),d=this.options.source(c[0],this.renderList.bind(this,h),h,!0,c[1]||null);if(!d)return;const u=g({denotationChar:this.options.showDenotationChar?h:""},d);c[1]!==void 0&&(u.customValue=c[1]);const f=r.split(a),b=f.shift();o.push({insert:b}),o.push({insert:{mention:u}}),r=f.join(a)}),o.push({insert:r}),e.ops=o}return e}showMentionList(){if(this.mentionContainer.style.visibility="hidden",this.mentionContainer.style.display="",this.setMentionContainerPosition(),this.customFieldInput.style.display="none",this.currentNode&&this.currentNode.dataset.custom){this.customFieldInput.style.display="block";const t=this.customFieldInput&&this.customFieldInput.querySelector("input"),e=this.currentNode.querySelector(".tag-custom");t&&e&&(t.value=e.innerText.replace(" - ",""))}this.setIsOpen(!0)}hideMentionList(){document.querySelectorAll(".aioseo-tag .tag-toggle svg").forEach(n=>{n.classList.remove("rotated")});const e=this.mentionSearch&&this.mentionSearch.querySelector("input");e&&(e.value="");const s=this.customFieldInput&&this.customFieldInput.querySelector("input");s&&(s.value=""),this.currentBlot=null,this.currentNode=null,this.mentionContainer.style.display="none",this.setIsOpen(!1)}highlightItem(t=!0){if(!!this.mentionList.childNodes[this.itemIndex]){for(let e=0;e<this.mentionList.childNodes.length;e+=1)this.mentionList.childNodes[e].classList.remove("selected");if(this.mentionList.childNodes[this.itemIndex].classList.add("selected"),t){const e=this.mentionList.childNodes[this.itemIndex].offsetHeight,s=this.itemIndex*e,n=this.mentionContainer.scrollTop,o=n+this.mentionContainer.offsetHeight;s<n?this.mentionContainer.scrollTop=s:s>o-e&&(this.mentionContainer.scrollTop+=s-o+e)}}}getItemData(){const{link:t}=this.mentionList.childNodes[this.itemIndex].dataset,e=typeof t!="undefined",s=this.mentionList.childNodes[this.itemIndex].dataset.target;return e&&(this.mentionList.childNodes[this.itemIndex].dataset.value=`<a href="${t}" target=${s||this.options.linkTarget}>${this.mentionList.childNodes[this.itemIndex].dataset.value}`),this.mentionList.childNodes[this.itemIndex].dataset}onContainerMouseMove(){this.suspendMouseEnter=!1}selectItem(){const t=this.getItemData();if(!t.id)return this.hideMentionList();this.options.onSelect(t,e=>{this.insertItem(e)}),t.custom||this.hideMentionList()}insertItem(t){const e=t;if(e===null)return;this.options.showDenotationChar||(e.denotationChar=""),t.custom&&(this.insertingCustomItem=!0,setTimeout(()=>{this.insertingCustomItem=!1},50),this.customFieldInput.style.display="block",this.customFieldInput.click());const s=this.mentionCharPos;this.quill.deleteText(this.mentionCharPos,this.cursorPos-this.mentionCharPos,l.sources.USER),this.quill.insertEmbed(s,"mention",e,l.sources.USER),this.options.spaceAfterInsert?(this.quill.insertText(s+1," ",l.sources.USER),this.quill.setSelection(s+2,l.sources.USER)):this.quill.setSelection(s+1,l.sources.USER),t.custom||this.hideMentionList()}onItemMouseEnter(t){if(this.suspendMouseEnter)return;const e=Number(t.target.dataset.index);!Number.isNaN(e)&&e!==this.itemIndex&&(this.itemIndex=e,this.highlightItem(!1))}onItemClick(t){t.preventDefault(),t.stopImmediatePropagation(),this.itemIndex=t.currentTarget.dataset.index,this.highlightItem(),this.selectItem()}renderList(t,e,s,n=!1,o=!1){if(this.mentionList.innerHTML="",e&&0<e.length){if(this.values=e,this.values.length===1&&(this.values[0].name===s||this.values[0].id===s)){if(n)return this.values[0];this.insertItem(this.values[0]);return}else if(n){const r=this.values.find(a=>a.name===s||a.id===s);if(r)return r}else if(o){const r=this.values.find(a=>a.name===s||a.id===s);r&&this.insertItem(r)}for(let r=0;r<e.length;r+=1){const a=document.createElement("li");a.className=this.options.listItemClass?this.options.listItemClass:"",a.dataset.index=r,a.innerHTML=this.options.renderItem(e[r],s),a.onmouseenter=this.onItemMouseEnter.bind(this),a.dataset.denotationChar=t,a.onclick=this.onItemClick.bind(this),this.mentionList.appendChild(X(a,e[r],this.options.dataAttributes))}this.itemIndex=0,this.highlightItem()}else{const r=document.createElement("li");r.className=this.options.listItemClassNoMatch?this.options.listItemClassNoMatch:"",r.innerHTML=this.options.renderItemNoMatch(),this.mentionList.appendChild(r)}this.showMentionList()}nextItem(){this.itemIndex=(this.itemIndex+1)%this.values.length,this.suspendMouseEnter=!0,this.highlightItem()}prevItem(){this.itemIndex=(this.itemIndex+this.values.length-1)%this.values.length,this.suspendMouseEnter=!0,this.highlightItem()}containerBottomIsNotVisible(){return this.mentionContainer.getBoundingClientRect().bottom>window.innerHeight}containerRightIsNotVisible(t,e){return this.options.fixMentionsToQuill?!1:e.width<t+this.mentionContainer.offsetWidth}setIsOpen(t){this.isOpen!==t&&(t?this.options.onOpen():this.options.onClose(),this.isOpen=t)}setMentionContainerPosition(){const t=this.quill.container.getBoundingClientRect(),e=this.quill.getBounds(this.mentionCharPos),s=this.mentionContainer.offsetHeight;let n=this.options.offsetTop,o=this.options.offsetLeft;if(this.options.fixMentionsToQuill?this.mentionContainer.style.right=`${0}px`:o+=e.left,this.containerRightIsNotVisible(o,t)){const r=this.mentionContainer.offsetWidth+this.options.offsetLeft;o=t.width-r}if(this.options.defaultMenuOrientation==="top"){if(this.options.fixMentionsToQuill?n=-1*(s+this.options.offsetTop):n=e.top-(s+this.options.offsetTop),0>=n+t.top){let r=this.options.offsetTop;this.options.fixMentionsToQuill?r+=t.height:r+=e.bottom,n=r}}else if(this.options.fixMentionsToQuill?n+=t.height:n+=e.bottom,this.containerBottomIsNotVisible(n,t)){let r=this.options.offsetTop*-1;this.options.fixMentionsToQuill||(r+=e.top),n=r-s}0<=n?this.options.mentionContainerClass.split(" ").forEach(r=>{this.mentionContainer.classList.add(`${r}-bottom`),this.mentionContainer.classList.remove(`${r}-top`)}):this.options.mentionContainerClass.split(" ").forEach(r=>{this.mentionContainer.classList.add(`${r}-top`),this.mentionContainer.classList.remove(`${r}-bottom`)}),this.mentionContainer.style.top=`${n}px`,this.mentionContainer.style.left=`${o}px`,this.mentionContainer.style.visibility="visible"}getTextBeforeCursor(){const t=Math.max(0,this.cursorPos-this.options.maxChars);return this.quill.getText(t,this.cursorPos-t)}onSomethingChange(){const t=this.quill.getSelection();if(t===null||this.insertingCustomItem)return;this.cursorPos=t.index;const e=this.getTextBeforeCursor(),{mentionChar:s,mentionCharIndex:n}=P(e,this.options.mentionDenotationChars);if(G(n,e,this.options.isolateCharacter)){const o=this.cursorPos-(e.length-n);this.mentionCharPos=o;const r=e.substring(n+s.length);r.length>=this.options.minChars&&Y(r,this.options.allowedChars)?this.options.source(r,this.renderList.bind(this,s),s):this.hideMentionList()}else this.hideMentionList()}onTextChange(t,e,s){s==="user"&&this.onSomethingChange()}onSelectionChange(t){t&&t.length===0?this.onSomethingChange():setTimeout(()=>{this.activeElement?this.activeElement.classList.contains("aioseo-tag-custom")||(this.activeElement=null):this.hideMentionList()},0)}}l.register("modules/mention",et);const it=l.import("modules/clipboard"),L=l.import("formats/code"),C=l.import("delta");class nt extends it{onPaste(t){const e=this,s=this.options,n=this.quill.getSelection(),o=this.quill.scrollingContainer.scrollTop;let r=new C().retain(n.index);t.defaultPrevented||!this.quill.isEnabled()||(this.container.focus(),this.quill.selection.update(l.sources.SILENT),setTimeout(function(){r=r.concat(e.convert()).delete(n.length),s.newLines===!1&&r.ops.map(function(a){return typeof a.insert=="string"&&(a.insert=a.insert.replace(/(\r\n|\n|\r)/gm," ")),a}),e.quill.updateContents(r,l.sources.USER),e.quill.setSelection(r.length()-n.length,l.sources.SILENT),e.quill.scrollingContainer.scrollTop=o,e.quill.focus()},1))}convert(t){if(typeof t=="string")return this.container.innerHTML=t.replace(/>\r?\n +</g,"><"),this.convert();const e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[L.blotName]){const r=this.container.innerText;return this.container.innerHTML="",new C().insert(r,{[L.blotName]:e[L.blotName]})}const[s,n]=this.prepareMatching();n[0]=rt;let o=A(this.container,s,n);return ot(o,`
`)&&o.ops[o.ops.length-1].attributes===null&&(o=o.compose(new C().retain(o.length()-1).delete(1))),this.container.innerHTML="",o}}const st="__ql-matcher";function A(i,t,e){return i.nodeType===i.TEXT_NODE?e.reduce(function(n,o){return o(i,n)},new C):i.nodeType===i.ELEMENT_NODE?[].reduce.call(i.childNodes||[],(s,n)=>{let o=A(n,t,e);return n.nodeType===i.ELEMENT_NODE&&(o=t.reduce(function(r,a){return a(n,r)},o),o=(n[st]||[]).reduce(function(r,a){return a(n,r)},o)),s.concat(o)},new C):new C}function ot(i,t){let e="";for(let s=i.ops.length-1;0<=s&&e.length<t.length;--s){const n=i.ops[s];if(typeof n.insert!="string")break;e=n.insert+e}return e.slice(-1*t.length)===t}function rt(i,t){let e=i.data;if(i.parentNode.tagName==="O:P")return t.insert(e.trim());if(!B(i.parentNode).whiteSpace.startsWith("pre")){const s=function(n,o){return o=o.replace(/[^\u00a0]/g,""),1>o.length&&n?" ":o};e=e.replace(/\r\n/g," ").replace(/\n/g," "),e=e.replace(/\s\s+/g,s.bind(s,!0)),(i.previousSibling===null&&T(i.parentNode)||i.previousSibling!==null&&T(i.previousSibling))&&(e=e.replace(/^\s+/,s.bind(s,!1))),(i.nextSibling===null&&T(i.parentNode)||i.nextSibling!==null&&T(i.nextSibling))&&(e=e.replace(/\s+$/,s.bind(s,!1)))}return t.insert(e)}function B(i){if(i.nodeType!==Node.ELEMENT_NODE)return{};const t="__ql-computed-style";return i[t]||(i[t]=window.getComputedStyle(i))}function T(i){if(i.childNodes.length===0)return!1;const t=B(i);return-1<["block","list-item"].indexOf(t.display)}l.register("modules/clipboard",nt,!0);class at{constructor(t,e){this.quill=t,this.options=e,this.container=document.querySelector(e.container),t.on("text-change",this.update.bind(this)),this.update()}calculate(){let t=this.quill.getText()?this.quill.root.innerHTML:"";const e=document.createRange().createContextualFragment(t),s=document.createRange().createContextualFragment("");e.childNodes.forEach(o=>{if(o.tagName!=="P")return;o.childNodes.forEach(a=>{if(a.nodeType===3){s.appendChild(a.cloneNode(!0));return}if(a.tagName==="SPAN"){const h=a.querySelector(".aioseo-tag .tag-name");if(h){const c=this.options.tags.find(u=>u.name===h.textContent),d=document.createTextNode(this.decodeHTMLEntities(c.valueText));s.appendChild(d)}}});const r=document.createElement("br");s.appendChild(r)}),s.normalize();const n=document.createElement("div");return n.appendChild(s.cloneNode(!0)),t=n.innerHTML.replace(/&nbsp;/gi," ").replace(/<br\s*[/]?>/gi,this.single?"":`
`).trim(),{length:this.decodeHTMLEntities(t).length,text:t}}update(){const{length:t}=this.calculate();let e=this.options.unit;t!==1&&(e+="s"),this.container&&(this.container.innerText=t+" "+e)}decodeHTMLEntities(t){const e=document.createElement("div");return t&&typeof t=="string"&&(t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi,""),t=t.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi,""),e.innerHTML=t,t=e.textContent),t}}l.register("modules/counter",at);const lt=l.import("modules/toolbar");class F extends lt{}F.DEFAULTS.handlers.autoLink=function(){const i=this.quill.getSelection(),t=this.quill.getModule("autoLink"),e=this.quill.getContents();e.ops.forEach(s=>{s.attributes&&s.attributes.link&&delete s.attributes.link}),this.quill.setContents(e,l.sources.SILENT),this.quill.setSelection(i,l.sources.SILENT),this.quill.format("link",t.options.url,l.sources.USER)};l.register("modules/toolbar",F,!0);class ct{constructor(t,e){this.quill=t,this.options=e,this.container=document.querySelector(e.container)}}l.register("modules/autoLink",ct,!0);const E=(i,t,e)=>(i.forEach(s=>{e[s]&&t.setAttribute(s,e[s]),s==="data-*"&&Object.keys(e).forEach(n=>{n.indexOf("data-")===0&&t.setAttribute(n,e[n])})}),t),y=(i,t)=>i.reduce((e,s)=>(t.hasAttribute(s)&&(e[s]=t.getAttribute(s)),s==="data-*"&&Object.keys(t.dataset).forEach(n=>{n="data-"+n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),e[n]=t.getAttribute(n)}),e),{}),ht=l.import("formats/link"),N=["href","rel","target","class","data-*","style"];class R extends ht{static create(t){typeof t=="string"&&(t=this.linkAttributesCache);const e=E(N,super.create(t),t);return N.forEach(s=>{s==="href"&&(t[s]=this.sanitize(t[s]),e.setAttribute(s,t[s]))}),this.linkAttributesCache=t,e}static formats(t){return y(N,t)}}w(R,"linkAttributesCache",{});l.register("formats/link",R,!0);const x=["style","class","data-*"],ut=l.import("blots/inline");class I extends ut{static create(t){return E(x,super.create(t),t)}static formats(t){return y(x,t)}}I.blotName="aioseoInline";I.tagName="aioseo-inline";l.register("formats/aioseoInline",I,!0);const dt=l.import("formats/italic");class mt extends dt{static create(t){return E(x,super.create(t),t)}static formats(t){return y(x,t)}}l.register("formats/italic",mt,!0);var pt=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("svg",{staticClass:"aioseo-plus",attrs:{viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 0.00115967H4V4.00116H0V6.00116H4V10.0012H6V6.00116H10V4.00116H6V0.00115967Z",fill:"currentColor"}})])},ft=[];const gt={},k={};var Ct=$(gt,pt,ft,!1,bt,null,null,null);function bt(i){for(let t in k)this[t]=k[t]}var Tt=function(){return Ct.exports}(),xt=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"aioseo-editor"},[e("div",{ref:"quill",class:[{"aioseo-editor-line-numbers":i.lineNumbers},{"aioseo-editor-single":i.single},{"aioseo-editor-monospace":i.monospace},{"aioseo-editor-description":i.description}]}),i.lineNumbers?e("div",{ref:"line-numbers",staticClass:"aioseo-line-numbers"}):i._e(),i._l(i.$tags.context(i.tagsContext),function(s,n){return[e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:n,ref:"select-template",refInFor:!0},[e("span",{staticClass:"aioseo-tag"},[e("span",{staticClass:"tag-name"},[i._v(i._s(s.name))]),s.custom&&s.customValue?e("span",{staticClass:"tag-custom"},[i._v(" - "+i._s(s.customValue)+" ")]):i._e(),e("span",{staticClass:"tag-toggle"},[e("svg-caret")],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:"menu-"+n,ref:"menu-template",refInFor:!0},[e("div",{staticClass:"aioseo-tag-item"},[e("div",[e("svg-plus")],1),e("div",[e("div",{staticClass:"aioseo-tag-title"},[i._v(" "+i._s(s.name)+" ")]),e("div",{staticClass:"aioseo-tag-description"},[i._v(" "+i._s(s.description)+" ")])])])])]}),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"tag-search"},[e("base-input",{attrs:{size:"medium",placeholder:i.strings.searchPlaceholder,prependIcon:"search"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"tag-custom"},[e("base-input",{attrs:{size:"small",placeholder:i.strings.enterCustomFieldName}})],1)],2)},vt=[];const Lt={components:{SvgCaret:z,SvgPlus:Tt},props:{value:{type:String,default:""},minimumLineNumbers:{type:Number,default(){return 5}},single:Boolean,lineNumbers:Boolean,allowTags:Boolean,disabled:Boolean,tagsContext:String,forceUpdates:Boolean,monospace:Boolean,defaultMenuOrientation:String,description:Boolean,showToolbar:Boolean,autoLink:{type:[Object,Boolean],default(){return!1}}},data(){return{localTags:[],quill:null,html:"",insertExact:!1,cachedPhrase:"",strings:{searchPlaceholder:"Search for an item...",enterCustomFieldName:"Enter a custom field name..."}}},watch:{disabled(){this.disabled?this.quill.disable():this.quill.enable()},value(){this.forceUpdates&&this.startup(!0)},liveTags:{deep:!0,handler(){this.localTags=this.getTags();const i=this.quill.getModule("counter");i&&(i.options.tags=this.localTags,this.$emit("counter",i.calculate()))}},tags:{deep:!0,handler(){const i=this.getTags();JSON.stringify(this.localTags)!==JSON.stringify(i)&&(this.localTags=i,this.startup(!0))}}},computed:g(g({},_(["currentPost","tags"])),_("live-tags",["liveTags"])),methods:{getTags(){return(this.tagsContext?[...this.$tags.context(this.tagsContext)]:[...this.tags.tags].filter(t=>!t.deprecated)).map((t,e)=>{const s=this.currentPost&&this.liveTags[t.id]||t.value;return q(g({},t),{valueText:s,value:this.$refs["select-template"][e]?this.$refs["select-template"][e].innerHTML:"",menuHtml:this.$refs["menu-template"][e]?this.$refs["menu-template"][e].innerHTML:""})})},update(){if(this.allowTags){const n=this.quill.getModule("counter");this.$emit("counter",n.calculate())}let i=this.quill.getText()?this.quill.root.innerHTML:"";const t=document.createRange().createContextualFragment(i),e=document.createRange().createContextualFragment("");t.childNodes.forEach(n=>{if(n.tagName!=="P")return;n.childNodes.forEach(r=>{if(r.nodeType===3){e.appendChild(r.cloneNode(!0));return}if(r.tagName==="SPAN"&&this.allowTags){const a=r.querySelector(".aioseo-tag");if(a){const h=a.querySelector(".tag-name");if(h){const c=this.localTags.find(u=>u.name===h.textContent);if(c.custom){const u=a.querySelector(".tag-custom");if(u){const f=document.createTextNode(`#${c.id}-${u.innerText.replace(" - ","")}`);e.appendChild(f);return}}const d=document.createTextNode(`#${c.id}`);e.appendChild(d)}}}});const o=document.createElement("br");e.appendChild(o)}),e.normalize();const s=document.createElement("div");s.appendChild(e.cloneNode(!0)),i=s.innerHTML.replace(/<br\s*[/]?>/gi,this.single?"":`
`).trim(),i=i.replace(/&nbsp;/gi," ").trim(),this.$emit("input",i)},insertTag(i){const t=this.quill.getModule("mention"),e=t.getTextBeforeCursor();this.insertExact=!0;const s=i?this.localTags.find(r=>r.id===i):null;let n=s?`#${s.id}`:e.charAt(e.length-1)==="#"?"":"#";const o=this.quill.getContents(0,t.cursorPos);o.ops.length&&(typeof o.ops.pop().insert!="string"||!e.match(/\s$/))&&(n=" "+n),this.quill.focus(),i&&t.removeOrphanedMentionChar(),this.quill.insertText(this.quill.getSelection().index,n,l.sources.USER),this.quill.setSelection(this.quill.getSelection().index+n.length,l.sources.USER),this.insertExact=!1,i?t.hideMentionList():setTimeout(()=>{t.mentionCharPos=this.quill.getSelection().index-1,t.silentInsert=!0,t.showMentionList()},0)},maybeCloseMenu(i){const t=i.target;if(t.classList.contains("aioseo-tag")||t.closest(".aioseo-tag")||t.closest(".add-tags"))return;if(t.classList.contains("ql-mention-list-container")||t.closest(".ql-mention-list-container")){const s=t.classList.contains("prepend-icon")?t:t.closest(".prepend-icon");s&&s.nextSibling.focus();return}const e=this.quill.getModule("mention");e.isOpen&&(e.hideMentionList(),e.removeOrphanedMentionChar())},startup(i=!1){this.quill=new l(this.$refs.quill,{modules:{toolbar:this.showToolbar?["bold","italic","underline","autoLink"]:[],lineNumbers:this.lineNumbers?{container:this.$refs["line-numbers"],defaultLength:this.minimumLineNumbers}:null,mention:this.allowTags?{defaultMenuOrientation:this.defaultMenuOrientation||"bottom",dataAttributes:["id","value","denotationChar","link","target","custom","customValue"],allowedChars:/^[A-Za-z\s_]*$/,mentionDenotationChars:["#"],spaceAfterInsert:!0,mentionPrependClass:"aioseo-tag-search",mentionPrependClassCustom:"aioseo-tag-custom",prependMentionList:this.$refs["tag-search"].innerHTML,customFieldInput:this.$refs["tag-custom"].innerHTML,listItemClassNoMatch:"aioseo-tag-no-match",renderItemNoMatch(){return"No matches found"},renderItem(n){return`${n.menuHtml}`},source:(n,o,r,a=!1,h="")=>{const c=[...this.localTags];if(c[0].custom&&(c[0].customValue=h),n.length===0)return o(c,n,a,this.insertExact);const d=[];for(let u=0;u<c.length;u++)(~c[u].name.toLowerCase().indexOf(n.toLowerCase())||~c[u].id.toLowerCase().indexOf(n.toLowerCase()))&&d.push(c[u]);return o(d,n,a,this.insertExact)}}:{},counter:this.allowTags?{tags:this.localTags}:null,clipboard:{newLines:!this.single},autoLink:g({enabled:!!this.autoLink},this.autoLink),keyboard:{bindings:{enter:{key:13,handler:()=>!this.single}}}},theme:"snow",formats:this.showToolbar?["bold","underline","italic","link","list","autoLink","aioseoInline"]:["mention"]}),i&&this.quill.setText("");let t=this.value;t&&t.length&&t.match(/#[^\s]*$/)&&(t=t.trim()+"&nbsp;"),t=t&&(this.single?t.replace(`
`," "):"<p>"+t.split(`
`).map(n=>n===""?"<br>":n).join("</p><p>")+"</p>");const e=document.documentElement.scrollTop;this.quill.clipboard.dangerouslyPasteHTML(0,t,l.sources.API),this.quill.blur();const s=this.quill.getModule("mention");if(s&&s.removeOrphanedMentionChar(),document.documentElement.scrollTop=e,this.allowTags){const n=this.quill.getModule("counter");this.$emit("counter",n.calculate())}this.quill.on("text-change",()=>this.update()),this.quill.on("selection-change",(n,o,r)=>{r==="api"&&this.update(),this.$emit("selection-change",{range:n,oldRange:o,source:r})}),document.addEventListener("click",this.maybeCloseMenu),this.disabled&&this.quill.disable(),i||this.quill.history.clear(),this.removeTrailingNewLine()},setPhrase(i){this.cachedPhrase=i,i=Z(i),i=i.replace(/<span([^>]*)>/g,"<aioseo-inline$1>").replace(/<\/span>/g,"</aioseo-inline>"),this.quill.clipboard.dangerouslyPasteHTML(i)},getPhrase(){return this.quill.getText()},getPhraseWithFormats(){return this.quill.getContents()},getPhraseHtml(){let i=this.quill.root.childNodes[0].innerHTML;return i=i.replace(/<aioseo-inline([^>]*)>/g,"<span$1>").replace(/<\/aioseo-inline>/g,"</span>"),i=K(this.cachedPhrase,i),i},removeTrailingNewLine(){const i=document.querySelector(".aioseo-editor-description .ql-editor");this.description&&i&&(i.innerHTML=i.innerHTML.replace(/<p><br><\/p>$/i,""))}},mounted(){this.localTags=this.getTags(),this.startup(!0)},beforeDestroy(){document.removeEventListener("click",this.maybeCloseMenu)}},H={};var Nt=$(Lt,xt,vt,!1,Et,null,null,null);function Et(i){for(let t in H)this[t]=H[t]}var qt=function(){return Nt.exports}();export{qt as B,Tt as S};