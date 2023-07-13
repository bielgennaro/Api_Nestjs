import { IsString } from 'class-validator';

export class UpdateCoursesDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsString({ each: true })
  readonly tags: string[];
}
