import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id='8a523b72f41fd2831964';
	private client_secret = '9f851337d214236a2cc012d7b80667403242e112';

	constructor(private _http: Http) {
		console.log('github Service Ready...');
		this.username = 'prabeshb';

	}

	getUser() {
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret).map(res => res.json());
	}

	getRepos() {
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret'+this.client_secret).map(res => res.json());
	}

	updateUser(username:string) {
		this.username = username;
	}

}