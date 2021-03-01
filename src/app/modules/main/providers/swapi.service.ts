import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class SwapiService {

    constructor(private http: HttpClient) {

    }

    getResources() {
        const queryUrl = `${environment.swapiUrl}/`;

        return this.http.get(queryUrl);
    }

    getAll() {
        const resources = forkJoin({
            people: this.getResourceByType('people'),
            planets: this.getResourceByType('planets'),
            films: this.getResourceByType('films'),
            species: this.getResourceByType('species'),
            vehicles: this.getResourceByType('vehicles'),
            starships: this.getResourceByType('starships')
        });

        return resources;
    }

    getResourceByType(type: string | undefined, page: number = 1) {
        const params: string = [
            `page=${page}`
        ].join('&');

        const queryUrl = `${environment.swapiUrl}/${type}/?${params}`;

        return this.http.get(queryUrl);
    }

    getResourceDetailsById(id: string, type: string) {
        const queryUrl = `${environment.swapiUrl}/${type}/${id}`;

        return this.http.get(queryUrl);
    }

    search(term: string, type: string | undefined) {
        const queryUrl = `${environment.swapiUrl}/${type}/?search=${term}`;

        return this.http.get(queryUrl);
    }
}