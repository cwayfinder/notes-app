import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { AuthComponent } from './auth/auth.component';
import { NoteEditorComponent } from './home/note-editor/note-editor.component';
import { NoteListComponent } from './home/note-list/note-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuthComponent,
        NoteEditorComponent,
        NoteListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        AmplifyAngularModule,

        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    providers: [AmplifyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
