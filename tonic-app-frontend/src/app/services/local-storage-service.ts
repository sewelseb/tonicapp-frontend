import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

    saveToken(token: string) {
        localStorage.setItem("token", token);
    }

    getToken(): string {
        let token = localStorage.getItem("token");
        if(token === null) return"";

        return token;
    }
    
}