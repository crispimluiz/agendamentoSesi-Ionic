import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { TurmaDTO } from "../../models/turma.dto"
import { Observable } from "rxjs/Rx";

@Injectable()
export class TurmaService{
  constructor(public http: HttpClient){

  }

  findAll() : Observable<TurmaDTO[]>{
    return this.http.get<TurmaDTO[]>(`${API_CONFIG.baseUrl}/turmas`);
  }
}
