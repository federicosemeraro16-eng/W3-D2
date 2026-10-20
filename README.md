# W3-D2

Descrizione:
Applicazione to do List con manipolazione del DOM e creazione del contenuto direttamente da JS, attualmente permette:
- visualizzare task
- categorizzare in base ad una priorità assegnata
- mostrare data ed ora dell'inserimento del task
- eliminare un task tramite pulsante dedicato (per ora non funzionante)

  Logica di sviluppo:

  Ho creato una funzione principale con due parametri, ovvero task e priorità. Una volta invocata la funzione:
  1) viene creato un elemento li;
  2) stilizzato tramite classi separate in css in base alla priorità fatto con switch case in modo tale da dare la possibilità di conoscere subito alla macchina il caso di riferimento senza    fare i vari confronti negli if ( le classi utilizzate sono: priorita-bassa;priorita-media;priorita-alta;
  3) ho completato la creazione del li aggiungendo il testo all'interno tramite il parametro task;
  4) ho creato uno span con create element e l'ho riempito con il testo del parametro della funzione;
  5) stilizzato con classe .badge separata in css;
  6) ho creato un paragrafo successivo a questo 
  7) tramite oggetto date ho creato e formattato la data
  8) ho fatto la stessa cosa con l'ora
  9) ho unito entrambi i valori in un output "HH:MM:SS DD/MM/AAAA"
  10) ho riempito il paragrafo con il testo dell'output finale;
  11) ho stilizzato il paragrafo della data aggiungendo la classe data;
 
  Fase di ricomposizione degli elementi:
  12) tramite metodo append child ho collegato prima tutti i vari elementi al li
  13) una volta completato l'elemento li l'ho appeso al padre ul
  14 in fase di conclusiva ritorno il nuovo li creato

  In fase di sviluppo: 
  Sistemazione della classe evidenziato
  definizione della funzione somma in base all'array generato dal nodo li
