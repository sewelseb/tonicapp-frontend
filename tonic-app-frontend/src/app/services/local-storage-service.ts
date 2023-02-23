import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

    saveToken(token: string) {
        localStorage.setItem("token", token);
    }
    
}