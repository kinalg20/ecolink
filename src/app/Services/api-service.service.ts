import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  api_baseurl= "https://brandtalks.in/ecolink/api/"

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) { }

  getAllBlogs(): Observable<any> {
    return this.http.get(this.api_baseurl + 'getallblogs');
  }
  getBlog(url: string): Observable<any> {
    return this.http.post(this.api_baseurl + 'getblog', { slug: url });
  }
  // registerClient(registerUser:any):Observable<any> {
  //   return this.http.post(this.api_baseurl+'register',{registerUser});
  // }
  post(data: any): Observable<any> {
    return this.http.post(this.api_baseurl + 'register', data);
  }
  login(url:any):Observable<any> {
    // const body=JSON.stringify(url);
    return this.http.post(this.api_baseurl+'login',url);
  }
  getAllCategories(): Observable<any> {
    return this.http.get(this.api_baseurl + 'getCategories');
  }

  getDetailByCategory(slug: any): Observable<any> {
    let url = 'getCategory';
    return this.http.post<any>(this.api_baseurl + url, { slug: slug });
  }
  getProductDetail(slug: any): Observable<any> {
    let url = 'getProduct';
    return this.http.post<any>(this.api_baseurl + url, { slug: slug });
  }
  home():Observable<any>{
    return this.http.get(this.api_baseurl+'home');
  }

  getSantizedData(data: any) {
    let trustedUrl = this.sanitizer.bypassSecurityTrustHtml(data);
    return trustedUrl;
  }
}

