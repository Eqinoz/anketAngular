import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Questions } from '../models/questions';
import { QuestionService } from '../services/question.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Answers } from '../models/answers';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, RouterLink, HttpClientModule, ToastrModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  i: number = 0;
  addForm: FormGroup;
  addAnswer: FormGroup;
  all: any;
  questions: Questions[] = [];
  currentQuestion: Questions;
  answeys: Answers[] = [];
  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private toastrService: ToastrService, private httpClient: HttpClientModule) {

  }
  ngOnInit(): void {
    this.addForm
    this.getQuestions();
    this.currentQuestion
    this.createAddForm();
  }
  createAddForm() {
    this.addForm = this.formBuilder.group({
      userName: ['', Validators.required, , Validators.minLength(3)],
      answers: this.formBuilder.group({
        answerId1: ['', Validators.required],
        answerId2: ['', Validators.required],
        answerId3: ['', Validators.required]
      })
    })

  };



  submit() {
    // let answerModel = Object.assign({}, this.addForm.value);
    // console.log(answerModel);
        if(this.addForm.valid){
          let answerModel = Object.assign({}, this.addForm.value);
          this.questionService.addAnswer(answerModel).subscribe(data=>{
           console.log(data);
            this.toastrService.success("Anket başarıyla tamamlandı");
          });
     }
     else{
       this.toastrService.error("Anketi doldurunuz");
     }
  }
  //Soru Ayarları
  getQuestions() {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
    })
  }

  setCurrentQuestion(question: Questions) {
    this.currentQuestion = question;
  }

}
