export interface Quiz {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly difficulty: number;
  readonly categoryId: string;
  readonly datePublication: Date;
}