import{h as w,i as k,v,o as d,c as h,T as x,d as u,w as m,a,u as s,Z as y,t as V,g as c,b as r,j as $,e as f,n as B,f as C}from"./app-55d15f39.js";import{_ as N}from"./GuestLayout-59460594.js";import{_ as p,a as _,b as g}from"./TextInput-ac9fe97a.js";import{_ as S}from"./PrimaryButton-6ba95bd1.js";import"./ApplicationLogo-f296c355.js";const U=["value"],q={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=w({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>k((d(),h("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=b=>n.value=b),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,U)),[[v,n.value]])}},L={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],R={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=x({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),u(N,null,{default:m(()=>[a(s(y),{title:"Log in"}),l.status?(d(),h("div",L,V(l.status),1)):c("",!0),r("form",{onSubmit:C(i,["prevent"])},[r("div",null,[a(p,{for:"email",value:"Email"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",R,[a(p,{for:"password",value:"Password"}),a(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[a(q,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),E])]),r("div",F,[l.canResetPassword?(d(),u(s($),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[f(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),a(S,{class:B(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[f(" Log in ")]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}};export{G as default};
