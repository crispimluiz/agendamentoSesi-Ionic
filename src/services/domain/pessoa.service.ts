import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PessoaDTO } from "../../models/pessoa.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PessoaService{
  constructor(public http: HttpClient){

  }

  findAll() : Observable<PessoaDTO[]>{
    return this.http.get<PessoaDTO[]>(`${API_CONFIG.baseUrl}/pessoas/`);
  }
}
