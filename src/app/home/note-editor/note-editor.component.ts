import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AmplifyService} from 'aws-amplify-angular';

@Component({
    selector: 'app-note-editor',
    templateUrl: './note-editor.component.html',
    styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

    form: FormGroup;
    private file: File;

    constructor(private fb: FormBuilder, private amplifyService: AmplifyService) { }

    ngOnInit() {
        this.form = this.fb.group({
            content: this.fb.control('', [Validators.required]),
            file: this.fb.control(null),
        });
    }

    async submit(value: any) {
        console.log(value);

        const attachment = this.file
            ? await this.s3Upload(this.file)
            : null;

        await this.createNote({
            attachment,
            content: value.content
        });
    }

    changeFile(file: File) {
        this.file = file;
    }

    private async s3Upload(file) {
        const filename = `${Date.now()}-${file.name}`;

        const stored: any = await this.amplifyService.storage().vault.put(filename, file, {
            contentType: file.type
        });

        return stored.key;
    }

    private async createNote(note: any) {
        return this.amplifyService.api().post('notes', '/notes', {
            body: note
        });
    }
}
