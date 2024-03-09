import { Component, OnInit } from '@angular/core';
import { Answers } from '../models/answers';
import { ConclusionService } from '../services/conclusion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conclusion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './conclusion.component.html',
  styleUrl: './conclusion.component.css'
})
export class ConclusionComponent implements OnInit{
  answers: Answers[] = [];
  currentAnswer: Answers;

  constructor(private conclusionService: ConclusionService) { }


  ngOnInit(): void {
    this.getConclusion();
    this.currentAnswer;

  }

  getConclusion(){
    this.conclusionService.getConclusion().subscribe(data=>{
      this.answers = data;
    });
  }

  setCurrentAnswer(answer: Answers){
    this.currentAnswer = answer;
  }

  getCurrentUserClass(answer: Answers){
    if(answer == this.currentAnswer){
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

}
