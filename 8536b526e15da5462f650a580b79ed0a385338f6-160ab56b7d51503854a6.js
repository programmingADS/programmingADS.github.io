"use strict";(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[975],{22702:function(e,t,o){o.d(t,{Z:function(){return y}});var a=o(87462),n=o(45987),i=o(67294),r=o(85505),l=o(49044),c=o(6018),d=(0,c.Z)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=(0,c.Z)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=o(37595),u=(0,c.Z)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=o(81664),h=o(34621),b=i.createElement(s,null),g=i.createElement(d,null),v=i.createElement(u,null),f=i.forwardRef((function(e,t){var o=e.checkedIcon,c=void 0===o?b:o,d=e.classes,s=e.color,p=void 0===s?"secondary":s,u=e.icon,h=void 0===u?g:u,f=e.indeterminate,y=void 0!==f&&f,Z=e.indeterminateIcon,k=void 0===Z?v:Z,C=e.inputProps,x=e.size,I=void 0===x?"medium":x,E=(0,n.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),w=y?k:h,N=y?k:c;return i.createElement(l.Z,(0,a.Z)({type:"checkbox",classes:{root:(0,r.Z)(d.root,d["color".concat((0,m.Z)(p))],y&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:p,inputProps:(0,a.Z)({"data-indeterminate":y},C),icon:i.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===I?I:w.props.fontSize}),checkedIcon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===I?I:N.props.fontSize}),ref:t},E))})),y=(0,h.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},48086:function(e,t,o){var a=o(87462),n=o(45987),i=o(67294),r=o(85505),l=o(68725),c=o(34621),d=o(80453),s=o(81664),p=i.forwardRef((function(e,t){e.checked;var o=e.classes,c=e.className,p=e.control,u=e.disabled,m=(e.inputRef,e.label),h=e.labelPlacement,b=void 0===h?"end":h,g=(e.name,e.onChange,e.value,(0,n.Z)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),v=(0,l.Z)(),f=u;void 0===f&&void 0!==p.props.disabled&&(f=p.props.disabled),void 0===f&&v&&(f=v.disabled);var y={disabled:f};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===p.props[t]&&void 0!==e[t]&&(y[t]=e[t])})),i.createElement("label",(0,a.Z)({className:(0,r.Z)(o.root,c,"end"!==b&&o["labelPlacement".concat((0,s.Z)(b))],f&&o.disabled),ref:t},g),i.cloneElement(p,y),i.createElement(d.Z,{component:"span",className:(0,r.Z)(o.label,f&&o.disabled)},m))}));t.Z=(0,c.Z)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(p)},23729:function(e,t,o){var a=o(87462),n=o(45987),i=o(67294),r=o(85505),l=o(34621),c=o(37595),d=o(67055),s=o(81664),p=i.forwardRef((function(e,t){var o=e.edge,l=void 0!==o&&o,c=e.children,p=e.classes,u=e.className,m=e.color,h=void 0===m?"default":m,b=e.disabled,g=void 0!==b&&b,v=e.disableFocusRipple,f=void 0!==v&&v,y=e.size,Z=void 0===y?"medium":y,k=(0,n.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(d.Z,(0,a.Z)({className:(0,r.Z)(p.root,u,"default"!==h&&p["color".concat((0,s.Z)(h))],g&&p.disabled,"small"===Z&&p["size".concat((0,s.Z)(Z))],{start:p.edgeStart,end:p.edgeEnd}[l]),centerRipple:!0,focusRipple:!f,disabled:g,ref:t},k),i.createElement("span",{className:p.label},c))}));t.Z=(0,l.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},90058:function(e,t,o){o.d(t,{Z:function(){return f}});var a=o(45987),n=o(4942),i=o(87462),r=o(67294),l=o(85505),c=o(34621),d=o(67055),s=o(61008),p=o(11291),u=o(38582),m=o(73935),h="undefined"==typeof window?r.useEffect:r.useLayoutEffect,b=r.forwardRef((function(e,t){var o=e.alignItems,n=void 0===o?"center":o,c=e.autoFocus,b=void 0!==c&&c,g=e.button,v=void 0!==g&&g,f=e.children,y=e.classes,Z=e.className,k=e.component,C=e.ContainerComponent,x=void 0===C?"li":C,I=e.ContainerProps,E=(I=void 0===I?{}:I).className,w=(0,a.Z)(I,["className"]),N=e.dense,R=void 0!==N&&N,S=e.disabled,B=void 0!==S&&S,z=e.disableGutters,F=void 0!==z&&z,P=e.divider,L=void 0!==P&&P,M=e.focusVisibleClassName,$=e.selected,O=void 0!==$&&$,A=(0,a.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),T=r.useContext(u.Z),V={dense:R||T.dense||!1,alignItems:n},H=r.useRef(null);h((function(){b&&H.current&&H.current.focus()}),[b]);var q=r.Children.toArray(f),D=q.length&&(0,s.Z)(q[q.length-1],["ListItemSecondaryAction"]),j=r.useCallback((function(e){H.current=m.findDOMNode(e)}),[]),G=(0,p.Z)(j,t),W=(0,i.Z)({className:(0,l.Z)(y.root,Z,V.dense&&y.dense,!F&&y.gutters,L&&y.divider,B&&y.disabled,v&&y.button,"center"!==n&&y.alignItemsFlexStart,D&&y.secondaryAction,O&&y.selected),disabled:B},A),_=k||"li";return v&&(W.component=k||"div",W.focusVisibleClassName=(0,l.Z)(y.focusVisible,M),_=d.Z),D?(_=W.component||k?_:"div","li"===x&&("li"===_?_="div":"li"===W.component&&(W.component="div")),r.createElement(u.Z.Provider,{value:V},r.createElement(x,(0,i.Z)({className:(0,l.Z)(y.container,E),ref:G},w),r.createElement(_,W,q),q.pop()))):r.createElement(u.Z.Provider,{value:V},r.createElement(_,(0,i.Z)({ref:G},W),q))})),g=(0,c.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b),v=r.forwardRef((function(e,t){var o,n=e.classes,c=e.className,d=e.component,s=void 0===d?"li":d,p=e.disableGutters,u=void 0!==p&&p,m=e.ListItemClasses,h=e.role,b=void 0===h?"menuitem":h,v=e.selected,f=e.tabIndex,y=(0,a.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(o=void 0!==f?f:-1),r.createElement(g,(0,i.Z)({button:!0,role:b,tabIndex:o,component:s,selected:v,disableGutters:u,classes:(0,i.Z)({dense:n.dense},m),className:(0,l.Z)(n.root,c,v&&n.selected,!u&&n.gutters),ref:t},y))})),f=(0,c.Z)((function(e){return{root:(0,i.Z)({},e.typography.body1,(0,n.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,i.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(v)},80453:function(e,t,o){var a=o(87462),n=o(45987),i=o(67294),r=o(85505),l=o(34621),c=o(81664),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=i.forwardRef((function(e,t){var o=e.align,l=void 0===o?"inherit":o,s=e.classes,p=e.className,u=e.color,m=void 0===u?"initial":u,h=e.component,b=e.display,g=void 0===b?"initial":b,v=e.gutterBottom,f=void 0!==v&&v,y=e.noWrap,Z=void 0!==y&&y,k=e.paragraph,C=void 0!==k&&k,x=e.variant,I=void 0===x?"body1":x,E=e.variantMapping,w=void 0===E?d:E,N=(0,n.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),R=h||(C?"p":w[I]||d[I])||"span";return i.createElement(R,(0,a.Z)({className:(0,r.Z)(s.root,p,"inherit"!==I&&s[I],"initial"!==m&&s["color".concat((0,c.Z)(m))],Z&&s.noWrap,f&&s.gutterBottom,C&&s.paragraph,"inherit"!==l&&s["align".concat((0,c.Z)(l))],"initial"!==g&&s["display".concat((0,c.Z)(g))]),ref:t},N))}));t.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)},49044:function(e,t,o){var a=o(87462),n=o(29439),i=o(45987),r=o(67294),l=o(85505),c=o(12933),d=o(68725),s=o(34621),p=o(23729),u=r.forwardRef((function(e,t){var o=e.autoFocus,s=e.checked,u=e.checkedIcon,m=e.classes,h=e.className,b=e.defaultChecked,g=e.disabled,v=e.icon,f=e.id,y=e.inputProps,Z=e.inputRef,k=e.name,C=e.onBlur,x=e.onChange,I=e.onFocus,E=e.readOnly,w=e.required,N=e.tabIndex,R=e.type,S=e.value,B=(0,i.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),z=(0,c.Z)({controlled:s,default:Boolean(b),name:"SwitchBase",state:"checked"}),F=(0,n.Z)(z,2),P=F[0],L=F[1],M=(0,d.Z)(),$=g;M&&void 0===$&&($=M.disabled);var O="checkbox"===R||"radio"===R;return r.createElement(p.Z,(0,a.Z)({component:"span",className:(0,l.Z)(m.root,h,P&&m.checked,$&&m.disabled),disabled:$,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){C&&C(e),M&&M.onBlur&&M.onBlur(e)},ref:t},B),r.createElement("input",(0,a.Z)({autoFocus:o,checked:s,defaultChecked:b,className:m.input,disabled:$,id:O&&f,name:k,onChange:function(e){var t=e.target.checked;L(t),x&&x(e,t)},readOnly:E,ref:Z,required:w,tabIndex:N,type:R,value:S},y)),P?u:v)}));t.Z=(0,s.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)}}]);
//# sourceMappingURL=8536b526e15da5462f650a580b79ed0a385338f6-160ab56b7d51503854a6.js.map