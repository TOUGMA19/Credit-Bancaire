let chart=null;export function afficherGraphique(c,a){const l=a.map(x=>x.mois),d=a.map(x=>x.reste);
if(chart){chart.data.labels=l;chart.data.datasets[0].data=d;chart.update();return;}
chart=new Chart(c,{type:"line",data:{labels:l,datasets:[{label:"Capital restant",data:d,tension:.3}]}});}