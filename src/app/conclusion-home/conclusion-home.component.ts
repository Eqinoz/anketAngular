import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConclusionComponent } from '../conclusion/conclusion.component';
import { Answer } from '../models/answer';
import { Answers } from '../models/answers';
import { ConclusionService } from '../services/conclusion.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { Questions } from '../models/questions';

@Component({
  selector: 'app-conclusion-home',
  standalone: true,
  imports: [RouterLink,ConclusionComponent,HttpClientModule],
  templateUrl: './conclusion-home.component.html',
  styleUrl: './conclusion-home.component.css'
})
export class ConclusionHomeComponent implements OnInit{
  answers: Answers[] = [];
  answer: Answer[] = [];
  questions: Questions[] = [];
  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getConclusionByUserName(params["id"]);
      }
      else{
        this.getConclusion();
      }
    })
  }

  constructor(private conclusionService: ConclusionService, private activetedRoute:ActivatedRoute) { }

  getConclusion(){
    this.conclusionService.getConclusion().subscribe(data=>{
      this.answers = data;
    });
  }
  getConclusionByUserName(id:number){
    this.conclusionService.getConclusionByUserName(id).subscribe(data=>{
      this.answers = data;
    });
  }

}
