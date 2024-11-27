import { Injectable } from "@angular/core";
import { Quiz } from "../models/quiz.model";
import { QuizDto } from "../dtos/quiz.dto";

@Injectable({providedIn: 'root'})

// C'est ICI dans le mapper où l'on traite la DATA avant de la retourner dans l'application
export class QuizMapper {
  public fromDto(dto: QuizDto): Quiz {
    const { datePublication, ...rest } = dto;

    return { ...rest, datePublication: new Date(datePublication)};
  }

  public toDto(data: Quiz): QuizDto {
    const { datePublication, ...rest } = data;

    return { ...rest, datePublication: datePublication.toISOString()};
  }
}