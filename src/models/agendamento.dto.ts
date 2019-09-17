import { PessoaDTO } from "./pessoa.dto";

export interface AgendamentoDTO{
  atendimentoId : string,
  dataAgendamento : string,
  ativoAgendamento: boolean,
  pessoa : PessoaDTO,
  periodoAtendimento: string
}
