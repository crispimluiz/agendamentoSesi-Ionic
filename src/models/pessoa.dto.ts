import { DateTimeData } from "ionic-angular/umd/util/datetime-util";

export interface PessoaDTO{
  id : string,
  nome : string,
  cpf : string,
  email : string,
  ativa : string,
  observacao : string,
  pessoaResponsavel : string,
  dataNascimento: DateTimeData,
  celular : string,
  celular2 : string,
  celular3 : string

}
