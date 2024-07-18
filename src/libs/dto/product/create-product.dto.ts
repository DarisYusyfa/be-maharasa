import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProductStatus } from 'src/libs/entities';

export class CreateProductDto {
  @ApiProperty({ example: 'Kangkung' })
  @IsString()
  product_name: string;

  @ApiProperty({ example: 10000 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'Kangkung Pedas' })
  @IsString()
  @IsOptional()
  desc?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  category_id: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsOptional()
  image_url?: string;
}
