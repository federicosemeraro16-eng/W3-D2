/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

//1. scrivere una funzione che ha due paramentri che sono task e priorità
//2. la funzione deve alla chiamata : creare un elemento li , gli do una classe in base alla priorità con text content uguale a task
//3.creare uno span all'interno di li che indica la priorità
//4. dare una classe a labelprio .badge
// 5. problema attuale aggiungere il bottone: considerazioni: il button deve essere esterno al li ma dentro ul; deve apparire nel momento in cui appare il resto; soluzione creare una funzione separata per creare il bottone ed appenderlo e richiamarla dentro la funzione generale?

const ulList = document.querySelector("#lista-task");

const addTask = (task, priority) => {
  const newLi = document.createElement("li");
  switch (priority) {
    case "alta":
      newLi.classList.add("priorita-alta");
      break;
    case "bassa":
      newLi.classList.add("priorita-bassa");
      break;
    case "media":
      newLi.classList.add("priorita-media");
  }
  newLi.textContent = task;
  const labelPrio = document.createElement("span");
  labelPrio.classList.add("badge");
  labelPrio.textContent = `${priority}`;
  const datePar = document.createElement("p");
  const today = new Date();
  const dataFormat = today.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const time = today.toLocaleTimeString("it-IT",{
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
  })
   const finalOutDat= `${dataFormat} ${time}`


  // inserire l'ora e formattarla oltre all'inserimento della data // 
  datePar.textContent = finalOutDat;
  datePar.classList.add("data");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Elimina";

  newLi.appendChild(labelPrio);
  newLi.appendChild(datePar);
  newLi.appendChild(deleteBtn);
  ulList.appendChild(newLi);
  return newLi;
};

console.log(addTask("Pagare bolletta", "alta"));
console.log(addTask("Studiare Js", "alta"));
console.log(addTask("Andare in palestra", "alta"));
console.log(addTask("Sistemare casa", "media"));
console.log(addTask("Portare il cane a spasso", "bassa"));
console.log(addTask("Prelevare contanti", "bassa"));
