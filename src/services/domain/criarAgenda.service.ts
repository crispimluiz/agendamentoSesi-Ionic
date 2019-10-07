import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";
import { Agenda } from "../../models/Agenda.dto";

@Injectable()
export class CriarAgendaService{
  constructor(public http: HttpClient,
    public storage: StorageService){

  }

  insert (obj : Agenda){
    return this.http.post(
      `${API_CONFIG.baseUrl}/agenda/gerarhorarios`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }


/*
  findAll() : Observable<AgendaIntervalo[]>{
    return this.http.get<AgendaIntervalo[]>(`${API_CONFIG.baseUrl}/agenda`);
  }
  */
}
