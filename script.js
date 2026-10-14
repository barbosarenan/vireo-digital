'use strict';
const screens=[
 [['label','SISTEMA VIREO'],['message','Olá, Ana. Como foi a visita de Mariana ao imóvel IM-042?'],['label right','CORRETORA ANA'],['message reply','Gostou do imóvel, mas quer comparar outras opções.']],
 [['label','REGISTRO ILUSTRATIVO'],['record',[['Visita','Realizada · IM-042'],['Corretora','Ana'],['Retorno','Comparando opções'],['Próxima ação','Retomar contato amanhã, às 10h']]]],
 [['label','SISTEMA VIREO'],['message','Ana, chegou o horário de retomar o contato com Mariana.'],['label right','CORRETORA ANA'],['message reply','Retorno realizado. Próxima ação registrada.']]
];
let step=0;
const buttons=document.querySelectorAll('[data-step]'),screen=document.getElementById('demo-screen'),next=document.getElementById('demo-next'),position=document.getElementById('demo-position');
function render(){screen.replaceChildren();for(const [type,value] of screens[step]){if(type==='record'){const box=document.createElement('div');box.className='demo-record';for(const [label,text] of value){const row=document.createElement('p'),l=document.createElement('span'),v=document.createElement('strong');l.textContent=label;v.textContent=text;row.append(l,v);box.append(row);}screen.append(box);}else{const p=document.createElement('p');p.className=type.split(' ').map(x=>x==='label'?'demo-label':x==='message'?'demo-message':x).join(' ');p.textContent=value;screen.append(p);}}
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.step)===step)));position.textContent='Etapa '+(step+1)+' de 3';next.textContent=step===0?'Ver o registro →':step===1?'Ver o lembrete →':'Recomeçar →';}
buttons.forEach(b=>b.addEventListener('click',()=>{step=Number(b.dataset.step);render();}));
next.addEventListener('click',()=>{step=(step+1)%3;render();});
