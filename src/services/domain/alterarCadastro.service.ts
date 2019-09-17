import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PessoaDTO } from "../../models/pessoa.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";
import { Headers } from "@angular/http";

@Injectable()
export class atualizarCadastroService{
constructor(public http: HttpClient,
  public storage: StorageService){

}

findById(id : string)  : Observable<PessoaDTO>{
  return this.http.get<PessoaDTO>(`${API_CONFIG.baseUrl}/pessoas/`+id);
}

}
