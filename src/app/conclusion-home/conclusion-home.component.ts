import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConclusionComponent } from '../conclusion/conclusion.component';
import { Answer } from '../models/answer';
import { Answers } from '../models/answers';
import { ConclusionService } from '../services/conclusion.service';

@Component({
  selector: 'app-conclusion-home',
  standalone: true,
  imports: [RouterLink,ConclusionComponent],
  templateUrl: './conclusion-home.component.html',
  styleUrl: './conclusion-home.component.css'
})
export class ConclusionHomeComponent implements OnInit{
  answers: Answers[] = [];
  ngOnInit(): void {
    this.getConclusion();
  }

  constructor(private conclusionService: ConclusionService) { }

  getConclusion(){
    this.conclusionService.getConclusion().subscribe(data=>{
      this.answers = data;
    });
  }

}
