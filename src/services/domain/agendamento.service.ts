import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { Observable } from "rxjs/Rx";
import { Agenda } from "../../models/Agenda.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class AgendamentoService{
  constructor(public http: HttpClient,
    public storage: StorageService){
  }

  findAll() : Observable<Agenda[]>{
    return this.http.get<Agenda[]>(`${API_CONFIG.baseUrl}/agenda`);
  }
}
