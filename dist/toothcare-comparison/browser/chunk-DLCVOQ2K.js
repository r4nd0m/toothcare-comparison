import{Ia as d,O as w}from"./chunk-DYHRJMNH.js";var r=class{constructor(e,n,s){this.name="",this.prices=[],this.coverage_part=0,e!==void 0&&(this.name=e),n!==void 0&&(this.prices=n),s!==void 0&&(this.coverage_part=s)}addPrice(e){e!==void 0?this.prices.push(e):this.prices.push(new t)}},t=class{constructor(e,n){this.period=new i,this.price=0,e!==void 0&&(this.period=e),n!==void 0&&(this.price=n)}},i=class{constructor(e,n){e!==void 0&&(this.start=e),n!==void 0&&(this.end=n)}};var p=(()=>{let e=class e{constructor(){this.loadedProviders=localStorage.getItem("insuranceProviders")?JSON.parse(localStorage.getItem("insuranceProviders")):[],this.dummyProviders=[new r("AOK Premium",[new t(new i(37,39),25.2),new t(new i(40,49),38.18),new t(new i(50,59),50.14)],90),new r("AOK optimal",[new t(new i(37,39),17.44),new t(new i(40,49),25.99),new t(new i(50,59),37.51)],70),new r("AOK kompakt",[new t(new i(37,39),11.85),new t(new i(40,49),17.91),new t(new i(50,59),26.23)],50),new r("W\xFCrttembergische",[new t(new i(37,39),34.37),new t(new i(40,49),41.67),new t(new i(50,59),47.63)],90),new r("Die Bayerische",[new t(new i(37,39),32.6),new t(new i(40,49),41.4),new t(new i(50,59),54.4)],100)],this.loadedMissingTeethData=localStorage.getItem("missingTeethData")?JSON.parse(localStorage.getItem("missingTeethData")):{teeth_min:2,teeth_max:15,tooth_price:1500},this.missingTeethData=d(this.loadedMissingTeethData),this.loadedProviders.length===0&&(this.loadedProviders=this.dummyProviders),this.providers=d(this.loadedProviders)}getProviders(){return this.providers()}getProvidersSignal(){return this.providers.asReadonly()}addNewProvider(){this.providers.update(s=>(s.push(new r),s)),this.saveProviders()}updateProvider(s,o){this.providers.update(h=>(h[s]=Object.assign(h[s],o),h)),this.saveProviders()}removeProvider(s){this.providers.update(o=>(o.splice(s,1),o)),this.saveProviders()}getMissingTeethDataSignal(){return this.missingTeethData.asReadonly()}getMissingTeethData(){return this.missingTeethData()}setMissingTeethData(s){this.missingTeethData.set(s),this.saveMissingTeethData()}saveProviders(){localStorage.setItem("insuranceProviders",JSON.stringify(this.providers()))}saveMissingTeethData(){localStorage.setItem("missingTeethData",JSON.stringify(this.missingTeethData()))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac});let a=e;return a})();export{p as a};
