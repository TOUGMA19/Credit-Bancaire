export function calculMensualite(c,t,d){const m=t/100/12;return c*(m/(1-Math.pow(1+m,-d)));}
export function scoreClient(m,r=300000){const x=m/r;return x<.3?"Excellent ⭐⭐⭐⭐⭐":x<.4?"Acceptable ⭐⭐⭐":"Risque élevé ⚠️";}
export class Pret{constructor({capital,taux,duree,differe}){this.c=capital;this.t=taux;this.d=duree;this.df=differe;}
amortissement(){let r=this.c;const m=calculMensualite(r,this.t,this.d);return Array.from({length:this.d},(_,i)=>{const I=r*this.t/100/12;const C=i<this.df?0:m-I;r-=C;return{mois:i+1,reste:Math.max(0,r)};});}}