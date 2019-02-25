import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    signUpConfig = {
        hiddenDefaults: ['email', 'phone_number'],
        signUpFields: [
            {
                label: 'First name',
                key: 'given_name',
                required: true,
            },
            {
                label: 'Last name',
                key: 'family_name',
                required: true,
            },
        ],
    };

    constructor() { }

    ngOnInit() {
    }

}
