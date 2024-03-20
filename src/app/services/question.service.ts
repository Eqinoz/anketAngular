import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from '../models/questions';
import { Answers } from '../models/answers';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl = "http://localhost:3000/";

  constructor(private httpClient:HttpClient) { }

  getQuestions(): Observable<Questions[]>{
    let newUrl = "https://www.jsonkeeper.com/b/K50D";
    return this.httpClient.get<Questions[]>(newUrl);
  }

  addAnswer(answer: Answers){
    let newUrl = this.apiUrl + "answers";
    return this.httpClient.post<Answers>(newUrl, answer);
  }
}
