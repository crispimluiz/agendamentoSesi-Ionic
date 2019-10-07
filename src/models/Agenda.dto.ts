import { AgendaIntervalo } from "./AgendaIntervalo.dto";

export interface Agenda{
  id : string,
  description: String,
  startDate: Date,
  endDate: Date,
  agendaIntervalo?: AgendaIntervalo[]
}
