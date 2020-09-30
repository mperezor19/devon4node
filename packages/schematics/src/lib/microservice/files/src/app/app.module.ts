import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [CoreModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
