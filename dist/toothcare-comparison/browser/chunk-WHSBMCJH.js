import{Ia as o,O as c}from"./chunk-DYHRJMNH.js";var r=class{constructor(e,n,i){this.name="",this.prices=[],this.coverage_part=0,e!==void 0&&(this.name=e),n!==void 0&&(this.prices=n),i!==void 0&&(this.coverage_part=i)}addPrice(e){e!==void 0?this.prices.push(e):this.prices.push(new t)}},t=class{constructor(e,n){this.period=new s,this.price=0,e!==void 0&&(this.period=e),n!==void 0&&(this.price=n)}},s=class{constructor(e,n){e!==void 0&&(this.start=e),n!==void 0&&(this.end=n)}};var v=(()=>{let e=class e{constructor(){this.selectedTheme=o(localStorage.getItem("selectedTheme")?JSON.parse(localStorage.getItem("selectedTheme")):""),this.loadedProviders=localStorage.getItem("insuranceProviders")?JSON.parse(localStorage.getItem("insuranceProviders")):[],this.dummyProviders=[new r("AOK Premium",[new t(new s(37,39),25.2),new t(new s(40,49),38.18),new t(new s(50,59),50.14)],90),new r("AOK optimal",[new t(new s(37,39),17.44),new t(new s(40,49),25.99),new t(new s(50,59),37.51)],70),new r("AOK kompakt",[new t(new s(37,39),11.85),new t(new s(40,49),17.91),new t(new s(50,59),26.23)],50),new r("W\xFCrttembergische",[new t(new s(37,39),34.37),new t(new s(40,49),41.67),new t(new s(50,59),47.63)],90),new r("Die Bayerische",[new t(new s(37,39),32.6),new t(new s(40,49),41.4),new t(new s(50,59),54.4)],100)],this.loadedMissingTeethData=localStorage.getItem("missingTeethData")?JSON.parse(localStorage.getItem("missingTeethData")):{teeth_min:2,teeth_max:15,tooth_price:1500},this.missingTeethData=o(this.loadedMissingTeethData),this.loadedProviders.length===0&&(this.loadedProviders=this.dummyProviders),this.providers=o(this.loadedProviders)}getProviders(){return this.providers()}getProvidersSignal(){return this.providers.asReadonly()}addNewProvider(){this.providers.update(i=>(i.push(new r),i)),this.saveProviders()}updateProvider(i,h){this.providers.update(d=>(d[i]=Object.assign(d[i],h),d)),this.saveProviders()}removeProvider(i){this.providers.update(h=>(h.splice(i,1),h)),this.saveProviders()}getMissingTeethDataSignal(){return this.missingTeethData.asReadonly()}getSelectedThemeSignal(){return this.selectedTheme.asReadonly()}getMissingTeethData(){return this.missingTeethData()}getSelectedTheme(){return this.selectedTheme()}setMissingTeethData(i){this.missingTeethData.set(i),this.saveMissingTeethData()}setSelectedTheme(i){this.selectedTheme.set(i),this.saveSelectedTheme()}saveProviders(){localStorage.setItem("insuranceProviders",JSON.stringify(this.providers()))}saveMissingTeethData(){localStorage.setItem("missingTeethData",JSON.stringify(this.missingTeethData()))}saveSelectedTheme(){localStorage.setItem("selectedTheme",JSON.stringify(this.selectedTheme()))}};e.\u0275fac=function(h){return new(h||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac});let a=e;return a})();export{v as a};
