import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home-page',
  imports: [QuizComponent, HeaderComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})

export class HomePage {

}
