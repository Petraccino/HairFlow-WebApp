import { Cliente } from './Cliente';
import { Utente } from './Utente';

export class GenericUser {
  firstName!: string;
  lastName!: string;
  birthDay!: Date;
  province!: string;
  address!: string;
  email!: string;
  phone!: string;
  gender!: string;
  password!: string;
  fiscalCode!: string;
  grant!: number;

  toCliente(): Cliente {
    return {
      nome: this.firstName,
      cognome: this.lastName,
      dataNascita: this.birthDay,
      provincia: this.province,
      email: this.email,
      numeroTelefono: this.phone,
      sesso: this.gender,
      password: this.password,
      grant: this.grant,
    };
  }

  toUtente(): Utente {
    return {
      email: this.email,
      password: this.password,
      grant: this.grant,
      informazioni: {
        nome: this.firstName,
        cognome: this.lastName,
        dataNascita: this.birthDay,
        provincia: this.province,
        numeroTelefono: this.phone,
        sesso: this.gender,
        codiceFiscale: this.fiscalCode,
      },
    };
  }
}
