(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1),a=(n(0),n(151));const o={title:"useSetRecoilState()",sidebar_label:"useSetRecoilState()"},c={id:"api-reference/core/useSetRecoilState",title:"useSetRecoilState()",description:"Returns a setter function for updating the value of writeable Recoil state.",source:"@site/docs/api-reference/core/useSetRecoilState.md",permalink:"/docs/api-reference/core/useSetRecoilState",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useSetRecoilState.md",sidebar_label:"useSetRecoilState()",sidebar:"someSidebar",previous:{title:"useRecoilValue()",permalink:"/docs/api-reference/core/useRecoilValue"},next:{title:"useResetRecoilState()",permalink:"/docs/api-reference/core/useResetRecoilState"}},i=[{value:"Example",id:"example",children:[]}],l={rightToc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns a setter function for updating the value of writeable Recoil state."),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"state"),": writeable Recoil state (an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/atom"}),Object(a.b)("inlineCode",{parentName:"a"},"atom"))," or a ",Object(a.b)("em",{parentName:"li"},"writeable")," ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/selector"}),Object(a.b)("inlineCode",{parentName:"a"},"selector")),")")),Object(a.b)("p",null,"This is the recommended hook to use when a component intends to write to state without reading it. If a component used the ",Object(a.b)("inlineCode",{parentName:"p"},"useRecoilState()")," hook to get the setter, it would also subscribe to updates and re-render when the atom or selector updated. Using ",Object(a.b)("inlineCode",{parentName:"p"},"useSetRecoilState()")," allows a component to set the value without re-rendering when the value changes."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, useSetRecoilState} from 'recoil';\n\nconst namesState = atom({\n  key: 'namesState',\n  default: ['Ella', 'Chris', 'Paul'],\n});\n\nfunction NameInput() {\n  const [name, setName] = useState('');\n  const setNamesState = useSetRecoilState(namesState);\n\n  const addName = () => {\n    setNamesState(existingNames => [...existingNames, name]);\n  };\n\n  const onChange = (e) => {\n    setName(e.target.value);\n  };\n\n  return (\n    <>\n      <input type=\"text\" value={name} onChange={onChange} />\n      <button onClick={addName}>Add Name</button>\n    </>\n  );\n}\n")))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);