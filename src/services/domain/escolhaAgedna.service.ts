import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Agenda } from "../../models/Agenda.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class EscolhaAgendaService{
  constructor(public http: HttpClient){
  }

  findAll() : Observable<Agenda[]>{
    return this.http.get<Agenda[]>(`${API_CONFIG.baseUrl}/agenda`);
  }
}
