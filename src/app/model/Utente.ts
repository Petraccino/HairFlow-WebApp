import { InformazioniUtente } from "./Informazioni";

export class Utente {
    email!: string;
    password!: string;
    grant!: number;
    informazioni!: InformazioniUtente;
  }
