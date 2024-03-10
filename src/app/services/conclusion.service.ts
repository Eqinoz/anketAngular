import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answers } from '../models/answers';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class ConclusionService {
  apiUrl = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  getConclusion():Observable<Answers[]> {
    let newUrl = this.apiUrl + "answers";
    return this.httpClient.get<Answers[]>(newUrl);
  }
  getConclusionByUserName(id:number):Observable<Answers[]> {
    let newUrl = this.apiUrl + "answers?id=" + id;
    return this.httpClient.get<Answers[]>(newUrl);
  }
}
