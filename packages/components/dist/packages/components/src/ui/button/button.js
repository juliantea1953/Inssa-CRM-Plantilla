import{__rest as i,__assign as a}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as e}from"react/jsx-runtime";import o from"clsx";import{StyledLink as n,StyledAnchor as t,StyledButton as c}from"./style.js";var s=function(s){var l=s.children,r=s.type,p=s.variant,$=s.color,d=s.size,u=s.shape,h=s.fullwidth,m=s.active,b=s.disabled,f=s.iconButton,v=s.hasIcon,z=s.label,S=s.onClick,y=s.className,B=s.path,P=s.iconPosition,w=s.iconSize,N=s.iconSpace,k=s.uppercase,C=i(s,["children","type","variant","color","size","shape","fullwidth","active","disabled","iconButton","hasIcon","label","onClick","className","path","iconPosition","iconSize","iconSpace","uppercase"]);if(B){var I=/^\/(?!\/)/.test(B);null==B||B.startsWith("./pages/dashboard-one");return I?e(n,a({$color:$,$variant:p,$size:d,$shape:u,$fullwidth:h,$active:m,disabled:b,$iconButton:f,$hasIcon:v,$iconPosition:P,$iconSize:w,$iconSpace:N,$uppercase:k,"aria-label":z,onClick:S,className:o(y,"btn"),to:B},C,{children:l})):e(t,a({$color:$,$variant:p,$size:d,$shape:u,$fullwidth:h,$active:m,disabled:b,$iconButton:f,$hasIcon:v,$iconPosition:P,$iconSize:w,$iconSpace:N,$uppercase:k,"aria-label":z,onClick:S,className:o(y,"btn"),href:B},C,{children:l}))}return e(c,a({$color:$,$variant:p,$size:d,$shape:u,$fullwidth:h,type:r,$active:m,disabled:b,$iconButton:f,$hasIcon:v,$iconPosition:P,$iconSize:w,$iconSpace:N,$uppercase:k,"aria-label":z,onClick:S,className:o(y,"btn")},C,{children:l}))};s.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"rounded",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,iconPosition:"left",iconSize:"sm"},s.displayName="Button";export{s as default};
