import { Component, OnDestroy, OnInit } from '@angular/core';
import { Quiz } from '../../../business/models/quiz.model';
import { QuizService } from '../../../business/services/quiz.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit, OnDestroy{
  protected quizzes: Quiz[] | null = null;

  private subscription?: Subscription;

  constructor(private readonly quizServices: QuizService) {}

  public ngOnInit(): void {
    this.quizServices
    .list()
    .subscribe( quizzes => {
      this.quizzes = quizzes;
    })
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

