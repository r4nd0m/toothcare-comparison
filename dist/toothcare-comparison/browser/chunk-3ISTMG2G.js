import{c as Z,d as U,f as R,g as ee,h as L}from"./chunk-WXI33M2S.js";import{a as y,b as N,c as T,d as _,f as l,h as M,i as k,j as D,k as W,l as X,m as G,n as V,o as A,s as Y,u as I}from"./chunk-YE6GBJUK.js";import{c as H,h as J,k as K}from"./chunk-SYDIEAGX.js";import{a as Q}from"./chunk-WHSBMCJH.js";import{$a as v,Ia as z,Oa as C,Qa as c,Sa as P,Ta as S,U as j,Ua as F,Va as e,Wa as t,Xa as s,Y as q,Ya as E,Z as b,_a as u,ab as g,ga as f,gb as a,ha as h,jb as w,ma as O,na as B,ya as d}from"./chunk-DYHRJMNH.js";function $(n){return Z(n,[ee("in",R({transform:"scale(0)",height:"0"})),L("void => *",[R({transform:"scale(0)",height:"0"}),U(300)]),L("* => void",[U(300,R({transform:"scale(0)",height:"0"}))])])}var ne=(n,i)=>i.period.start+i.period.end+i.price;function oe(n,i){if(n&1){let p=E();e(0,"div",11)(1,"div",14),a(2," Age "),t(),e(3,"div",15),s(4,"input",16),t(),e(5,"div",17),a(6," - "),t(),e(7,"div",15),s(8,"input",18),t(),e(9,"div",17),a(10," : "),t(),e(11,"div",14),s(12,"input",19),t(),e(13,"div",14)(14,"button",20),u("click",function(){let m=f(p).$index,o=v();return h(o.removePrice(m))}),a(15,"remove"),t()()()}if(n&2){let p=i.$index;c("formGroupName",p)("@priceAnimation",void 0)}}function ae(n,i){n&1&&(e(0,"div",10),a(1,"no prices added"),t())}var te=(()=>{let i=class i{constructor(){this.provider=B.required(),this.removeEmitter=O({alias:"onRemove"}),this.updateEmitter=O({alias:"onUpdate"}),this.element_id="insurance_provider_"+Math.random()+Math.random()}ngOnInit(){this.insuranceProviderForm=new _({name:new l(this.provider().name),coverage_part:new l(this.provider().coverage_part),prices:new Y([])}),this.provider().prices.forEach(r=>{this.insuranceProviderForm.get("prices").push(this.buildPriceFormGroup(r))}),this.insuranceProviderForm.valueChanges.subscribe(()=>this.updateEmitter.emit(this.insuranceProviderForm.value))}addPrice(){let r=this.buildPriceFormGroup();this.insuranceProviderForm.get("prices").push(r),this.updateEmitter.emit(this.insuranceProviderForm.value)}get prices(){return this.insuranceProviderForm.get("prices").controls}removeProvider(){this.removeEmitter.emit(null)}removePrice(r){this.insuranceProviderForm.get("prices").removeAt(r)}buildPriceFormGroup(r){return new _({period:new _({start:new l(r?.period.start),end:new l(r?.period.end)}),price:new l(r?.price)})}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=b({type:i,selectors:[["insurance-provider"]],inputs:{provider:[q.SignalBased,"provider"]},outputs:{removeEmitter:"onRemove",updateEmitter:"onUpdate"},standalone:!0,features:[w],decls:24,vars:10,consts:[[1,"py-2","mb-4","shadow","rounded",3,"formGroup"],[1,"m-3"],[1,"row",3,"for"],[1,"container-fluid","px-0","hstack","gap-0"],[1,"col-10","pe-2"],["name","name","formControlName","name",1,"form-control",3,"id"],[1,"col-2","button-remove-provider","btn","btn-outline-danger",3,"click"],[1,"container-fluid","px-0"],["name","coverage_part","formControlName","coverage_part",1,"form-control",3,"id"],["formArrayName","prices",1,"m-3"],[1,"row"],[1,"container-fluid","px-0","py-1","hstack","gap-2","row-provider-price",3,"formGroupName"],["role","toolbar",1,"btn-toolbar","mt-2"],[1,"button-add-price","btn","btn-outline-primary","float-right",3,"click"],[1,"mx-0"],["formGroupName","period",1,"mx-0"],["name","period_start","placeholder","Start age","type","number","min","16","max","70","formControlName","start",1,"form-control"],[1,"mx-0","px-0"],["name","period_end","placeholder","End age","type","number","min","16","max","70","formControlName","end",1,"form-control"],["name","period_price","placeholder","Price","type","number","min","0","max","999","step","0.1","formControlName","price",1,"form-control"],[1,"button-remove-price","btn","btn-outline-danger",3,"click"]],template:function(m,o){m&1&&(e(0,"form",0)(1,"div",1)(2,"label",2),a(3,"Name:"),t(),e(4,"div",3)(5,"div",4),s(6,"input",5),t(),e(7,"button",6),u("click",function(){return o.removeProvider()}),a(8,"remove"),t()()(),e(9,"div",1)(10,"label",2),a(11,"Coverage part (%):"),t(),e(12,"div",7)(13,"div"),s(14,"input",8),t()()(),e(15,"div",9)(16,"label",10),a(17,"Prices:"),t(),S(18,oe,16,2,"div",11,ne),C(20,ae,2,0,"div",10),e(21,"div",12)(22,"button",13),u("click",function(){return o.addPrice()}),a(23,"add price"),t()()()()),m&2&&(c("formGroup",o.insuranceProviderForm),d(2),g("for","",o.element_id,"_provider_name"),d(4),g("id","",o.element_id,"_provider_name"),d(4),g("for","",o.element_id,"_provider_coverage_part"),d(4),g("id","",o.element_id,"_provider_coverage_part"),d(4),F(o.provider().prices),d(2),P(20,o.provider().prices.length===0?20:-1))},dependencies:[I,M,y,k,N,T,A,V,D,G,W,X],styles:["input[_ngcontent-%COMP%]{min-width:100px}button[_ngcontent-%COMP%]{min-width:80px}form[_ngcontent-%COMP%]{min-width:500px}"],data:{animation:[$("priceAnimation")]}});let n=i;return n})();var me=(n,i)=>i.name+i.coverage_part;function de(n,i){if(n&1){let p=E();e(0,"div")(1,"insurance-provider",15),u("onRemove",function(){let m=f(p).$index,o=v();return h(o.removeProvider(m))})("onUpdate",function(m){let o=f(p).$index,x=v();return h(x.updateProvider(o,m))}),t()()}if(n&2){let p=i.$implicit,r=v();c("@providerAnimation",void 0)("@.disabled",r.animationsDisabled()),d(),c("provider",p)}}function se(n,i){n&1&&(e(0,"span",1),a(1,"No providers selected"),t())}var we=(()=>{let i=class i{constructor(){this.animationsDisabled=z(!0),this.dataService=j(Q),this.providers=this.dataService.getProvidersSignal();let r=this.dataService.getMissingTeethData();this.missingTeethDataForm=new _({teeth_min:new l(r.teeth_min),teeth_max:new l(r.teeth_max),tooth_price:new l(r.tooth_price)}),this.missingTeethDataForm.valueChanges.subscribe(()=>this.dataService.setMissingTeethData(this.missingTeethDataForm.value))}ngAfterViewInit(){setTimeout(()=>this.animationsDisabled.set(!1),0)}addProvider(){this.dataService.addNewProvider()}updateProvider(r,m){this.dataService.updateProvider(r,m)}removeProvider(r){this.dataService.removeProvider(r)}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=b({type:i,selectors:[["providers"]],standalone:!0,features:[w],decls:25,vars:2,consts:[[1,"container","p-0"],[1,"message-no-providers"],[1,"button-add-provider","btn","btn-outline-primary",3,"click"],[1,"mt-4"],[3,"formGroup"],["for","missing_tooth_price",1,"form-label"],["id","missing_tooth_price","type","number","step","100","formControlName","tooth_price",1,"form-control"],["for","missing_teeth_min",1,"mt-2"],[1,"hstack"],[1,"pe-5","col-6"],["id","missing_teeth_min","type","number","min","0","max","32","formControlName","teeth_min",1,"form-control"],[1,"py-1","text-and"],[1,"ps-5","col-6"],["id","missing_teeth_max","type","number","min","0","max","32","formControlName","teeth_max",1,"form-control"],["routerLink","/diagram",1,"container-fluid","btn","btn-primary","col-md-auto","col-sm-12","mt-3"],[3,"onRemove","onUpdate","provider"]],template:function(m,o){m&1&&(e(0,"h2"),a(1,"Providers:"),t(),e(2,"div",0),S(3,de,2,3,"div",null,me),C(5,se,2,0,"span",1),e(6,"button",2),u("click",function(){return o.addProvider()}),a(7,"add provider"),t()(),e(8,"h2",3),a(9,"Additional parameters:"),t(),e(10,"form",4)(11,"label",5),a(12,"Missing tooth recovery price:"),t(),s(13,"input",6),e(14,"label",7),a(15,"Calculate for missing teeth between:"),t(),e(16,"div",8)(17,"div",9),s(18,"input",10),t(),e(19,"div",11),a(20,"and"),t(),e(21,"div",12),s(22,"input",13),t()(),e(23,"button",14),a(24,"Go to calculation"),t()()),m&2&&(d(3),F(o.providers()),d(2),P(5,o.providers().length===0?5:-1),d(5),c("formGroup",o.missingTeethDataForm))},dependencies:[te,I,M,y,k,N,T,A,V,D,G,H,K,J],styles:[".text-and[_ngcontent-%COMP%]{min-width:10rem;text-align:center;margin-left:-5rem;margin-right:-5rem}"],data:{animation:[$("providerAnimation")]}});let n=i;return n})();export{we as ProvidersComponent};
