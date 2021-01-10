import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <h3>Extension ngStyle</h3>
  <h4>Agrandissez ou réduisez la fenêtre </h4>
  <div 
      fxLayout="row"
      fxLayoutAlign="center center"
      class="container">
    <div 
        style="font-size:12px; color:red; font-weight: bold;"
        [ngStyle.sm]="{'font-size': '20px', color: 'blue'}"
        ngStyle.md="font-size: 28px; color : orange; font-weight: normal;">Bonjour !
    </div>
</div>
`,
  styles: [`
    .container {
      border: solid 1px #b6b6b6;
      background: grey;
      height: 400px;
      width: 100%;
    }`
  ]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}