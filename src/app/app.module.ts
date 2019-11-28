import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';

// nicole 20191105
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

// import { BnPiHdrComponent } from './layout/bn_pi/bn-pi-hdr/bn-pi-hdr.component';

// import { BnPiReplyComponent } from './layout/bn_pi/bn-pi-reply/bn-pi-reply.component';
import { EnvironmentUrlService } from './services/environment/environment-url.service';
import { ErrorHandlerService } from './services/environment/error-handler.service';
// import { BnPiShipmentComponent } from './layout/bn_pi/bn-pi-shipment/bn-pi-shipment.component';
// nicole 20191128
import {BnPiShipmentModule} from './layout/bn_pi/bn-pi-shipment/bn-pi-shipment.module';



@NgModule({
    declarations: [AppComponent
        // , BnPiShipmentComponent
        // , BnPiHdrComponent, BnPiReplyComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        DataTablesModule,
        BnPiShipmentModule
    ],
    providers: [AuthGuard
        , EnvironmentUrlService
        , ErrorHandlerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
