import {Component, OnInit} from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';

@Component({
    selector: 'app-note-list',
    templateUrl: './note-list.component.html',
    styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

    notes: any[];

    constructor(private amplifyService: AmplifyService) { }

    async ngOnInit() {
        this.notes = await this.amplifyService.api().get('notes', '/notes', {});
    }

}
