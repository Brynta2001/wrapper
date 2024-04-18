import { IsInt, IsString } from 'class-validator';

export class FilterDto {
  @IsInt()
  userId: number;

  @IsInt()
  id: number;

  @IsString()
  title: string;
}
