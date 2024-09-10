"use strict";(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[851],{38015:function(e,t,a){var n=a(67294),i=a(85420),s=a(29114),l=a(1097),r=a(48086),o=a(22702),u=a(31690),d=a(89711),h=a(31295),c=a(90058),m=a(52311),_=a(82441),p=a(50535),v=a(13578),g=a(50238);const f=p.default.div.withConfig({displayName:"CourseOptionsEditor__Row",componentId:"sc-15i8a3h-0"})(["margin-bottom:1.5rem;"]),E=p.default.form.withConfig({displayName:"CourseOptionsEditor__Form",componentId:"sc-15i8a3h-1"})([""]),b=p.default.div.withConfig({displayName:"CourseOptionsEditor__InfoBox",componentId:"sc-15i8a3h-2"})(["margin-bottom:2rem;"]),k=p.default.div.withConfig({displayName:"CourseOptionsEditor__FormContainer",componentId:"sc-15i8a3h-3"})(["height:100%;margin-top:2rem;"]),C=(0,p.default)(i.Z).withConfig({displayName:"CourseOptionsEditor__WarningBox",componentId:"sc-15i8a3h-4"})(["margin:2rem 0;background:#f1a9a0;padding:1rem;font-weight:bold;"]);class Z extends n.Component{constructor(){super(...arguments),this.onClick=async e=>{e.preventDefault(),this.setState({submitting:!0});let t={digital_education_for_all:this.state.digital_education_for_all,use_course_variant:this.state.use_course_variant,course_variant:this.state.course_variant,marketing:this.state.marketing,research:this.state.research};const a={first_name:this.state.first_name,last_name:this.state.last_name,organizational_id:this.state.student_number};try{await(0,m.ek)({extraFields:t,userField:a}),this.setState({submitting:!1}),this.props.onComplete()}catch(n){this.setState({errorObj:n,submitting:!1})}},this.state={submitting:!1,error:!0,errorObj:void 0,digital_education_for_all:!1,marketing:!1,research:void 0,first_name:void 0,last_name:void 0,use_course_variant:void 0,course_variant:"",course_variants:[],email:void 0,student_number:void 0,loading:!0,focused:null},this.handleInput=e=>{const t=e.target.name,a=e.target.value;this.setState({[t]:a},(()=>{this.validate()}))},this.handleCheckboxInput=e=>{const t=e.target.name,a=e.target.checked;this.setState({[t]:a},(()=>{this.validate()}))},this.handleCourseVariantCheckbox=e=>{this.setState({use_course_variant:e.target.checked,course_variant:""},(()=>{this.validate()}))},this.handleFocus=e=>{const t=e.target.name;this.setState({focused:t})},this.handleUnFocus=()=>{this.setState({focused:null})},this.validate=()=>{this.setState((e=>{const t=void 0===e.research,a=e.use_course_variant&&!e.course_variant;return{error:t||a}}))}}async componentDidMount(){var e,t,a,n,i,s,l,r,o;const u=await(0,m.$V)(),d=await(0,m.lI)();let h="t"===(null===(e=u.extra_fields)||void 0===e?void 0:e.use_course_variant),c=null!==(t=null===(a=u.extra_fields)||void 0===a?void 0:a.course_variant)&&void 0!==t?t:"";d.find((e=>e.key===c))||(h=!1,c=""),this.setState({first_name:null===(n=u.user_field)||void 0===n?void 0:n.first_name,last_name:null===(i=u.user_field)||void 0===i?void 0:i.last_name,email:u.email,student_number:null===(s=u.user_field)||void 0===s?void 0:s.organizational_id,digital_education_for_all:"t"===(null===(l=u.extra_fields)||void 0===l?void 0:l.digital_education_for_all),use_course_variant:h,course_variant:c,course_variants:d,marketing:"t"===(null===(r=u.extra_fields)||void 0===r?void 0:r.marketing),research:null===(o=u.extra_fields)||void 0===o?void 0:o.research,loading:!1},(()=>{this.validate()}))}render(){return n.createElement(k,null,n.createElement(_.Z,{loading:this.state.loading,heightHint:"490px"},n.createElement(b,null,n.createElement(i.Z,null,n.createElement(s.Z,null,this.props.t("loggedInWith"),this.state.email)))),n.createElement("h1",null,this.props.t("studentInfo")),n.createElement(E,null,n.createElement(b,null,this.props.t("aboutYourself")),n.createElement(_.Z,{loading:this.state.loading,heightHint:"490px"},n.createElement("div",null,n.createElement(f,null,n.createElement(l.Z,{variant:"outlined",type:"text",label:this.props.t("firstName"),autoComplete:"given-name",name:"first_name",InputLabelProps:{shrink:this.state.first_name||"first_name"===this.state.focused},fullWidth:!0,value:this.state.first_name,hidden:"true",onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),n.createElement(f,null,n.createElement(l.Z,{variant:"outlined",type:"text",label:this.props.t("lastName"),autoComplete:"family-name",name:"last_name",InputLabelProps:{shrink:this.state.last_name||"last_name"===this.state.focused},fullWidth:!0,hidden:"true",value:this.state.last_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),n.createElement(f,null,n.createElement(l.Z,{variant:"outlined",type:"text",label:this.props.t("sid"),name:"student_number",InputLabelProps:{shrink:this.state.student_number||"student_number"===this.state.focused},fullWidth:!0,hidden:"true",value:this.state.student_number,onChange:this.handleInput,helperText:this.props.t("nosid"),onFocus:this.handleFocus,onBlur:this.handleUnFocus})),n.createElement(f,null,n.createElement(r.Z,{control:n.createElement(o.Z,{checked:this.state.digital_education_for_all,onChange:this.handleCheckboxInput,name:"digital_education_for_all",hidden:"true",value:"1"}),label:"Olen tällä hetkellä opiskelijana Digital Education for All -hankkeessa. Jätä tämä valitsematta mikäli et tiedä kyseisestä hankkeesta."})),n.createElement(f,null,n.createElement(r.Z,{control:n.createElement(o.Z,{checked:this.state.marketing,onChange:this.handleCheckboxInput,name:"marketing",hidden:"true",value:"1"}),label:this.props.t("marketing")})),0===this.state.course_variants.length?null:n.createElement("div",null,n.createElement("h2",null,this.props.t("courseInfo")),n.createElement(f,null,n.createElement(r.Z,{control:n.createElement(o.Z,{checked:this.state.use_course_variant,onChange:this.handleCourseVariantCheckbox,name:"use_course_variant",value:"1"}),disabled:0===this.state.course_variants.length,label:this.props.t("useCourseVariantLabel")})),n.createElement(f,null,n.createElement(u.Z,{fullWidth:!0,variant:"outlined"},n.createElement(d.Z,{id:"select-course",shrink:this.state.course_variant||"course_variant"===this.state.focused},this.props.t("courseVariant")),n.createElement(h.Z,{key:this.state.use_course_variant,disabled:!this.state.use_course_variant,labelId:"select-course",label:this.props.t("courseVariant"),name:"course_variant",value:this.state.course_variant,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus},n.createElement(c.Z,{value:"",disabled:!0},this.props.t("chooseCourse")),this.state.course_variants.map((e=>{const t=e.tmcOrganization+"-"+e.tmcCourse;return n.createElement(c.Z,{value:t,key:t},e.organizationName,": ",e.title)}))))))))),this.state.error&&n.createElement(b,null,n.createElement("b",null,this.props.t("fillRequired"))),this.state.errorObj&&n.createElement(C,null,this.state.errorObj.toString()))}}t.Z=(0,g.Z)("common")((0,v.Z)(Z))},54374:function(e,t,a){a.r(t);var n=a(67294),i=a(96038),s=a(38015),l=a(25444),r=a(54021),o=a(86810);class u extends n.Component{constructor(){super(...arguments),this.onStepComplete=()=>{"undefined"==typeof window?(0,l.navigate)("/"):window.history.back()}}render(){return this.context.loggedIn?n.createElement(i.Z,null,n.createElement(o.Z,null,n.createElement(s.Z,{courseVariant:"nodl",onComplete:this.onStepComplete}))):("undefined"!=typeof window&&(0,l.navigate)("/sign-in"),n.createElement("div",null,"Redirecting..."))}}u.contextType=r.ZP,t.default=(0,r._N)(u)}}]);
//# sourceMappingURL=component---src-pages-missing-info-js-31a48fce5267df625a97.js.map