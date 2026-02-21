import{Pret,calculMensualite,scoreClient}from"./finance.js";
import{afficherGraphique}from"./charts.js";
document.getElementById("simuler").onclick=()=>{
const c=+capital.value,t=+taux.value,d=+duree.value,df=+differe.value;
const p=new Pret({capital:c,taux:t,duree:d,differe:df});
const m=calculMensualite(c,t,d);
mensualite.textContent=`Mensualité : ${m.toFixed(0)} FCFA`;
score.textContent=`Score client : ${scoreClient(m)}`;
afficherGraphique(chart,p.amortissement());};