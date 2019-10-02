import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { Observable } from "rxjs/Rx";
import { TimesDTO } from "../../models/Times.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class AgendamentoService{
  constructor(public http: HttpClient,
    public storage: StorageService){
  }

  findAll() : Observable<TimesDTO[]>{
    return this.http.get<TimesDTO[]>(`${API_CONFIG.baseUrl}/timetable`);
  }
}
