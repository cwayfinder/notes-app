import {Component, OnInit} from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    signedIn: boolean;
    userName: string;

    constructor(private amplifyService: AmplifyService) {
        this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.userName = null;
                } else {
                    this.amplifyService.auth().currentUserInfo().then(({attributes}) => {
                        const {given_name, family_name} = attributes;
                        this.userName = given_name + ' ' + family_name;
                    });
                }
            });
    }

    ngOnInit(): void {
    }

    logout() {
        this.amplifyService.auth().signOut();
    }
}
