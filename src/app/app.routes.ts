import { Routes } from '@angular/router';
import { HomePage } from './page/home/home.page';
import { QuizDetailsPage } from './page/quiz-details/quiz-details.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'quiz/:id', component: QuizDetailsPage }
];
