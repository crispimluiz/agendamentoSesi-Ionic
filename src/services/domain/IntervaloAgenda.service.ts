
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { AgendaIntervalo } from "../../models/AgendaIntervalo.dto";
import { API_CONFIG } from "../../config/api.config";
import { Injectable } from "@angular/core";

@Injectable()
export class IntervaloAgendaService{
  constructor(public http: HttpClient,
    public storage: StorageService){

  }

  insert (obj : AgendaIntervalo){
    return this.http.post(
      `${API_CONFIG.baseUrl}/agenda`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
