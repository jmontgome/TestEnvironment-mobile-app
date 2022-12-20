import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ({providedIn:'root'})
export class APIService {
    baseURL: string = 'https://localhost:7189/api/';

    constructor(private http: HttpClient) {}

    async SendTestObjectToServer(value: string) {
        var testModel = new Test(value);
        const response = await fetch(this.baseURL + 'Test/object_type_parameter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(
                testModel
            ),
        });
    }
    async SendSimpleTestToServer(value: string) {
        const response = await fetch(this.baseURL + 'Test/string_type_parameter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: '"'+value+'"'
        });
    }
}

export class Test {
    constructor(message: string) {
        this.Message = message;
    }
    Message?: string;
}