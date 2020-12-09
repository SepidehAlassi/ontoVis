import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizerComponent } from './onto-visualizer/visualizer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListVisualizerComponent } from './list-visualizer/list-visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    ListVisualizerComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
