import{a as Q}from"./chunk-SYDIEAGX.js";import{$ as a,Da as K,Ja as l,M as x,N as c,P as k,Pa as E,R as v,Ra as J,Y as p,_ as G,_a as F,a as y,b as D,fa as M,ia as m,ib as h,k as oe,mb as ue,oa as Y,p as ae,pa as _,rb as de,ub as T,v as le,za as o}from"./chunk-DYHRJMNH.js";var Ce=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(o(K),o(Y))},e.\u0275dir=a({type:e});let i=e;return i})(),Ve=(()=>{let e=class e extends Ce{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,features:[l]});let i=e;return i})(),q=new v("");var qe={provide:q,useExisting:c(()=>De),multi:!0};function ze(){let i=Q()?Q().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ze=new v(""),De=(()=>{let e=class e extends Ce{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ze())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(o(K),o(Y),o(Ze,8))},e.\u0275dir=a({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&F("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[h([qe]),l]});let i=e;return i})();function C(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Xe(i){return i!=null&&typeof i.length=="number"}var g=new v(""),A=new v(""),Ye=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Ke(i){return e=>{if(C(e.value)||C(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function Je(i){return e=>{if(C(e.value)||C(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function Qe(i){return C(i.value)?{required:!0}:null}function et(i){return C(i.value)||Ye.test(i.value)?null:{email:!0}}function tt(i){return e=>C(e.value)||!Xe(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function ce(i){return null}function be(i){return i!=null}function Ae(i){return ue(i)?oe(i):i}function Me(i){let e={};return i.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Ee(i,e){return e.map(n=>n(i))}function it(i){return!i.validate}function Fe(i){return i.map(e=>it(e)?e:n=>e.validate(n))}function nt(i){if(!i)return null;let e=i.filter(be);return e.length==0?null:function(n){return Me(Ee(n,e))}}function te(i){return i!=null?nt(Fe(i)):null}function rt(i){if(!i)return null;let e=i.filter(be);return e.length==0?null:function(n){let t=Ee(n,e).map(Ae);return le(t).pipe(ae(Me))}}function ie(i){return i!=null?rt(Fe(i)):null}function he(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function we(i){return i._rawValidators}function Ie(i){return i._rawAsyncValidators}function ee(i){return i?Array.isArray(i)?i:[i]:[]}function B(i,e){return Array.isArray(i)?i.includes(e):i===e}function fe(i,e){let n=ee(e);return ee(i).forEach(r=>{B(n,r)||n.push(r)}),n}function pe(i,e){return ee(e).filter(n=>!B(i,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},d=class extends U{get formDirective(){return null}get path(){return null}},V=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},st={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},si=D(y({},st),{"[class.ng-submitted]":"isSubmitted"}),oi=(()=>{let e=class e extends R{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(o(V,2))},e.\u0275dir=a({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&J("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[l]});let i=e;return i})(),ai=(()=>{let e=class e extends R{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(o(d,10))},e.\u0275dir=a({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&J("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[l]});let i=e;return i})();var w="VALID",j="INVALID",b="PENDING",I="DISABLED";function ne(i){return(z(i)?i.validators:i)||null}function ot(i){return Array.isArray(i)?te(i):i||null}function re(i,e){return(z(e)?e.asyncValidators:i)||null}function at(i){return Array.isArray(i)?ie(i):i||null}function z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Se(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new x(1e3,"");if(!t[n])throw new x(1001,"")}function Oe(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new x(1002,"")})}var O=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===j}get pending(){return this.status==b}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(fe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(fe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(pe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=b,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(t=>{t.disable(D(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(t=>{t.enable(D(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===b)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;let n=Ae(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(j)?j:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}},H=class extends O{constructor(e,n,t){super(ne(n),re(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Oe(this,!0,e),Object.keys(e).forEach(t=>{Se(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var N=new v("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function X(i,e){return[...e.path,i]}function L(i,e,n=Z){se(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ut(i,e),ct(i,e),dt(i,e),lt(i,e)}function ge(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),W(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function $(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function lt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function se(i,e){let n=we(i);e.validator!==null?i.setValidators(he(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Ie(i);e.asyncValidator!==null?i.setAsyncValidators(he(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();$(e._rawValidators,r),$(e._rawAsyncValidators,r)}function W(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=we(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(u=>u!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Ie(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(u=>u!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return $(e._rawValidators,t),$(e._rawAsyncValidators,t),n}function ut(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ne(i,e)})}function dt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ne(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ne(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ct(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Pe(i,e){i==null,se(i,e)}function ht(i,e){return W(i,e)}function xe(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ft(i){return Object.getPrototypeOf(i.constructor)===Ve}function ke(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ge(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===De?n=s:ft(s)?t=s:r=s}),r||t||n||null}function pt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}var gt={provide:d,useExisting:c(()=>mt)},S=Promise.resolve(),mt=(()=>{let e=class e extends d{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new _,this.form=new H({},te(t),ie(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),L(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{let r=this._findContainer(t.path),s=new H({});Pe(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){S.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,ke(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(o(g,10),o(A,10),o(N,8))},e.\u0275dir=a({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&F("submit",function(f){return s.onSubmit(f)})("reset",function(){return s.onReset()})},inputs:{options:[p.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([gt]),l]});let i=e;return i})();function me(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function ye(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Te=class extends O{constructor(e=null,n,t){super(ne(n),re(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var yt=i=>i instanceof Te,vt=(()=>{let e=class e extends d{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return X(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,features:[l]});let i=e;return i})();var _t={provide:V,useExisting:c(()=>Ct)},ve=Promise.resolve(),Ct=(()=>{let e=class e extends V{constructor(t,r,s,u,f,We){super(),this._changeDetectorRef=f,this.callSetDisabledState=We,this.control=new Te,this._registered=!1,this.name="",this.update=new _,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ge(this,u)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),xe(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){L(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ve.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,s=r!==0&&T(r);ve.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?X(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(o(d,9),o(g,10),o(A,10),o(q,10),o(de,8),o(N,8))},e.\u0275dir=a({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[p.None,"disabled","isDisabled"],model:[p.None,"ngModel","model"],options:[p.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[h([_t]),l,M]});let i=e;return i})(),ui=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=a({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})(),Vt={provide:q,useExisting:c(()=>Dt),multi:!0},Dt=(()=>{let e=class e extends Ve{writeValue(t){let r=t??"";this.setProperty("value",r)}registerOnChange(t){this.onChange=r=>{t(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&F("input",function(f){return s.onChange(f.target.value)})("blur",function(){return s.onTouched()})},features:[h([Vt]),l]});let i=e;return i})();var je=new v("");var bt={provide:d,useExisting:c(()=>Be)},Be=(()=>{let e=class e extends d{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return L(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){ge(t.control||null,t,!1),pt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,ke(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(ge(r||null,t),yt(s)&&(L(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Pe(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&ht(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){se(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(g,10),o(A,10),o(N,8))},e.\u0275dir=a({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&F("submit",function(f){return s.onSubmit(f)})("reset",function(){return s.onReset()})},inputs:{form:[p.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([bt]),l,M]});let i=e;return i})(),At={provide:d,useExisting:c(()=>Ue)},Ue=(()=>{let e=class e extends vt{constructor(t,r,s){super(),this.name=null,this._parent=t,this._setValidators(r),this._setAsyncValidators(s)}_checkParentType(){He(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(d,13),o(g,10),o(A,10))},e.\u0275dir=a({type:e,selectors:[["","formGroupName",""]],inputs:{name:[p.None,"formGroupName","name"]},features:[h([At]),l]});let i=e;return i})(),Mt={provide:d,useExisting:c(()=>Re)},Re=(()=>{let e=class e extends d{constructor(t,r,s){super(),this.name=null,this._parent=t,this._setValidators(r),this._setAsyncValidators(s)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return X(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){He(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(d,13),o(g,10),o(A,10))},e.\u0275dir=a({type:e,selectors:[["","formArrayName",""]],inputs:{name:[p.None,"formArrayName","name"]},features:[h([Mt]),l]});let i=e;return i})();function He(i){return!(i instanceof Ue)&&!(i instanceof Be)&&!(i instanceof Re)}var Et={provide:V,useExisting:c(()=>Ft)},Ft=(()=>{let e=class e extends V{set isDisabled(t){}constructor(t,r,s,u,f){super(),this._ngModelWarningConfig=f,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ge(this,u)}ngOnChanges(t){this._added||this._setUpControl(),xe(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return X(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(d,13),o(g,10),o(A,10),o(q,10),o(je,8))},e.\u0275dir=a({type:e,selectors:[["","formControlName",""]],inputs:{name:[p.None,"formControlName","name"],isDisabled:[p.None,"disabled","isDisabled"],model:[p.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[h([Et]),l,M]});let i=e;return i})();function wt(i){return typeof i=="number"?i:parseInt(i,10)}function Le(i){return typeof i=="number"?i:parseFloat(i)}var P=(()=>{let e=class e{constructor(){this._validator=ce}ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ce,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=a({type:e,features:[M]});let i=e;return i})(),It={provide:g,useExisting:c(()=>St),multi:!0},St=(()=>{let e=class e extends P{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=t=>Le(t),this.createValidator=t=>Je(t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(r,s){r&2&&E("max",s._enabled?s.max:null)},inputs:{max:"max"},features:[h([It]),l]});let i=e;return i})(),Ot={provide:g,useExisting:c(()=>Nt),multi:!0},Nt=(()=>{let e=class e extends P{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=t=>Le(t),this.createValidator=t=>Ke(t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(r,s){r&2&&E("min",s._enabled?s.min:null)},inputs:{min:"min"},features:[h([Ot]),l]});let i=e;return i})(),Pt={provide:g,useExisting:c(()=>xt),multi:!0};var xt=(()=>{let e=class e extends P{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=T,this.createValidator=t=>Qe}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&E("required",s._enabled?"":null)},inputs:{required:"required"},features:[h([Pt]),l]});let i=e;return i})();var kt={provide:g,useExisting:c(()=>Gt),multi:!0},Gt=(()=>{let e=class e extends P{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=T,this.createValidator=t=>et}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[h([kt]),l]});let i=e;return i})(),Tt={provide:g,useExisting:c(()=>jt),multi:!0},jt=(()=>{let e=class e extends P{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=t=>wt(t),this.createValidator=t=>tt(t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=m(e)))(s||e)}})(),e.\u0275dir=a({type:e,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(r,s){r&2&&E("minlength",s._enabled?s.minlength:null)},inputs:{minlength:"minlength"},features:[h([Tt]),l]});let i=e;return i})();var $e=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=G({type:e}),e.\u0275inj=k({});let i=e;return i})(),_e=class extends O{constructor(e,n,t){super(ne(n),re(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Oe(this,!1,e),e.forEach((t,r)=>{Se(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var di=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:N,useValue:t.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=G({type:e}),e.\u0275inj=k({imports:[$e]});let i=e;return i})(),ci=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:je,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:N,useValue:t.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=G({type:e}),e.\u0275inj=k({imports:[$e]});let i=e;return i})();export{De as a,oi as b,ai as c,H as d,mt as e,Te as f,Ct as g,ui as h,Dt as i,Be as j,Ue as k,Re as l,Ft as m,St as n,Nt as o,xt as p,Gt as q,jt as r,_e as s,di as t,ci as u};