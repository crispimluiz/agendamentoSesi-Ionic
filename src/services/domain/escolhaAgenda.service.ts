import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AgendaDTO } from "../../models/Agenda.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class EscolhaAgendaService{
  constructor(public http: HttpClient){
  }

  findAll() : Observable<AgendaDTO[]>{
    return this.http.get<AgendaDTO[]>(`${API_CONFIG.baseUrl}/agenda`);
  }
}
