import{O as f,aa as u}from"./chunk-DYHRJMNH.js";var h=(()=>{let e=class e{transform(t,r){let o=r===void 0?1:r;return o<0&&(o=0),o>1&&(o=1),"rgba("+t.map(this.normalizeColor).join(",")+","+o+")"}normalizeColor(t){return t<0&&(t=0),t>255&&(t=255),t}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=u({name:"toRgba",type:e,pure:!0,standalone:!0});let a=e;return a})();var F=(()=>{let e=class e{constructor(){this.toRgbaPipe=new h}calculate(t,r){let o=[];return t.forEach(s=>{let i=this.toRgbaPipe.transform(this.getRandomColorsRGB(),1),c={label:s.name,data:[],backgroundColor:i,borderColor:i};for(let n=r.teeth_min;n<=r.teeth_max;n++)c.data.push(this.calculateForProvider(s,n,r.tooth_price).overpaid);o.push(c)}),o}calculateForProvider(t,r,o){let s=t.prices.reduce((d,l)=>{let p=1+l.period.end-l.period.start;return d+p},0),i=r*o,c=t.prices.reduce((d,l)=>{let p=1+l.period.end-l.period.start,_=l.price*p*12;return d+_},0),n=i*(1-t.coverage_part/100),m=n+c;return{name:t.name,total_years:s.toString(),total_coverage_price:c.toFixed(2),total_treatment_price:i.toFixed(2),self_paid:n.toFixed(2),total_paid:m.toFixed(2),overpaid:m-i}}getRandomColorsRGB(){return[Math.floor(Math.random()*255),Math.floor(Math.random()*228),Math.floor(Math.random()*228)]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac});let a=e;return a})();export{F as a};
