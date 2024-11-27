import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { QuizDto } from "../dtos/quiz.dto";
import { QuizMapper } from "../mappers/quiz.mapper";
import { Quiz } from "../models/quiz.model";

@Injectable({ providedIn: 'root' })
export class QuizService {
  static list() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly mapper: QuizMapper,
    private readonly client: HttpClient
  ) {}

  public list(): Observable<Quiz[]> {
    return this.client
      .get<QuizDto[]>("http://localhost:5106/api/quiz")
      .pipe(
        map(dtos => {
          return dtos.map(d => this.mapper.fromDto(d))
        })
      );
  }
}