import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { INavBarItem } from '../models/navbar.model';
import { IUser } from '@app/modules/shared/models/user.model';

import { AuthenticationService } from '@app/modules/authentication/providers/authentication.service';

@Injectable({ providedIn: 'root' })
export class NavBarService {
    private items: BehaviorSubject<INavBarItem[]>;
    private currentUser!: IUser;

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
        
        this.items = new BehaviorSubject<INavBarItem[]>(this.getItems() || []);
    }

    public get menuItems(): INavBarItem[] {
        return this.items.value;
    }

    public setActive(url: string): void {
        const items = this.getItems();

        items.map(x => {
            x.url === url ? x.active = true : x.active = false;
        });

        this.items = new BehaviorSubject<INavBarItem[]>(items);
    }

    private getItems(): INavBarItem[] {
        const login = <INavBarItem>{ title: 'Login', url: '/login', active: false };
        const logout = <INavBarItem>{ title: 'Logout', url: '/logout', active: false };

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

        const items = <INavBarItem[]>[
            { title: 'Home', url: '/home', active: false },
            { title: 'Contact', url: '/contact', active: true },
            { title: 'About', url: '/about', active: false }
        ];

        let item = Object.keys(this.currentUser).length === 0 ? login : logout;

        items.push(item);

        return items;
    }
}