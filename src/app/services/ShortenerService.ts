import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ShortenerService {
    private url = "https://sbond-url-shortener.herokuapp.com/";

    public constructor(private http: HttpClient) {

    }

    public ShortenUrl(url: string): Observable<string> {
        return this.request({
            url: url
        });
    }

    private request<T>(params: any): Observable<T> {
        return this.http.post(this.url, {
            params: params
        }) as Observable<T>;
    }
}