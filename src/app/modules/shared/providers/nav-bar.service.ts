import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { INavBarItem } from '@app/modules/shared/models/navbar.model';
import { IUser } from '@app/modules/shared/models/user.model';

import { AuthenticationService } from '@app/modules/authentication/providers';

@Injectable({ providedIn: 'root' })
export class NavBarService {
    public items: BehaviorSubject<INavBarItem[]> = new BehaviorSubject<INavBarItem[]>([]);
    private currentUser!: IUser;

    constructor(private authenticationService: AuthenticationService) {

        this.authenticationService.currentUser.subscribe(x => {
            this.currentUser = x;

            this.getItems();
        });
    }

    private getItems(): void {
        const login = <INavBarItem>{ title: 'Login', url: '/login', active: false };
        const logout = <INavBarItem>{ title: 'Logout', url: '/logout', active: false };

        const items = <INavBarItem[]>[
            { title: 'Home', url: '/home/overview', active: true },
            { title: 'Contact', url: '/contact', active: false },
            { title: 'About', url: '/about', active: false }
        ];

        let item = Object.keys(this.currentUser).length === 0 ? login : logout;

        items.push(item);

        this.items.next(items);
    }
}