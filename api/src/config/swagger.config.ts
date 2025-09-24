import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function SetupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle("CareerBoard API")
    .setDescription("API para gerenciamento de entrevistas de emprego")
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
}
