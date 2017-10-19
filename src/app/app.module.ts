import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiSwitchModule } from '../../node_modules/ng2-ui-switch/dist';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, UiSwitchModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
