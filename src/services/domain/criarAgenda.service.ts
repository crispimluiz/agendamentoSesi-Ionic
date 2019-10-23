import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";
import { AgendaDTO } from "../../models/Agenda.dto";
import { Observable } from "rxjs";

@Injectable()
export class CriarAgendaService{
  constructor(public http: HttpClient,
    public storage: StorageService){

  }

  insert (obj : AgendaDTO){
    return this.http.post(
      `${API_CONFIG.baseUrl}/agenda/`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }



  findAll() : Observable<AgendaDTO[]>{
    return this.http.get<AgendaDTO[]>(`${API_CONFIG.baseUrl}/agenda/`);
  }

}
