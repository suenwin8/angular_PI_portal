import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

// import { BnPiHdrComponent } from './layout/bn_pi/bn-pi-hdr/bn-pi-hdr.component';

// import { BnPiReplyComponent } from './layout/bn_pi/bn-pi-reply/bn-pi-reply.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent
        // , BnPiHdrComponent, BnPiReplyComponent
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
