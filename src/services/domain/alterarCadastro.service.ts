import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PessoaDTO } from "../../models/pessoa.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";

@Injectable()
export class atualizarCadastroService{
constructor(public http: HttpClient,
  public storage: StorageService){

}

findById(id : string)  : Observable<PessoaDTO>{
  return this.http.get<PessoaDTO>(`${API_CONFIG.baseUrl}/pessoas/`+id);
}

update (id: string){
  return this.http.put(
    `${API_CONFIG.baseUrl}/pessoas/`+{id},
    {
      observe: 'response',
      responseType: 'text'
    }
  );
}
}
