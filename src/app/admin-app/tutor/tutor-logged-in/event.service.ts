import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class EventService {
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            title: 'Present'
        },
        {
            title: 'Absent'
        },
        {
            id: 999,
            title: 'Meeting with Admin'
        },
        {
            id: 999,
            title: 'Meeting with Parent'
        },
        {
            title: 'Holiday'
        }];
        return Observable.of(data);
    }
};