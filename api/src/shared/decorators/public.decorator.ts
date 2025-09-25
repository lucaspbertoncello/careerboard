import { Reflector } from "@nestjs/core";

export const PublicDecorator = Reflector.createDecorator<boolean>();
export const Public = () => PublicDecorator(true);
