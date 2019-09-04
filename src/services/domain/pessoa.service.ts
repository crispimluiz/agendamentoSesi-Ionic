import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PessoaDTO } from "../../models/pessoa.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";

@Injectable()
export class PessoaService{
  constructor(public http: HttpClient,
    public storage: StorageService){

  }

  findByCpf(cpf: string) : Observable<PessoaDTO>{
    return this.http.get<PessoaDTO>(`${API_CONFIG.baseUrl}/pessoas/cpf?value=${cpf}`);

  }
}
