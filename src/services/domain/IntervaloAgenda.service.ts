
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { AgendaIntervaloDTO } from "../../models/AgendaIntervalo.dto";
import { API_CONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";

@Injectable()
export class IntervaloAgendaService{
  constructor(public http: HttpClient,
    public storage: StorageService){
  }


  receberAgenda(agenda_id: string){
    return this.http.get(`${API_CONFIG.baseUrl}/agenda/?`)
  }

  insert (obj : AgendaIntervaloDTO){
    return this.http.post(
      `${API_CONFIG.baseUrl}/intervalos`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
