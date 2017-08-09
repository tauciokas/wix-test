import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MainService {

    constructor(private _http: Http) {}

    getTreeData() {
        return this._http.get('../../category-tree.json')
            .map((res: Response) => {
                return res.json();
            });
    }
}
