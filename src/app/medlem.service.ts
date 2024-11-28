import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedlemService {

  private baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  async login(epost: string, password: string): Promise<any>{
    const url = `${this.baseUrl}/auth/login`;
    try{
      const response = await this.http.post<any>(url, {epost, password}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  async registreraMedlem(medlemsData: any, token: string): Promise<any>{
    const url = `${this.baseUrl}/admin/registrera-medlem`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = await this.http.post<any>(url, medlemsData, {headers}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  async hamtaAllaMedlemmar(token: string): Promise<any>{
    const url = `${this.baseUrl}/admin/hamta-alla-medlemmar`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = await this.http.get<any>(url, {headers}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  async hamtaProfilInfo(token: string): Promise<any>{
    const url = `${this.baseUrl}/admin/hamta-profil`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = await this.http.get<any>(url, {headers}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  async hamtaMedlemMedId(id: string, token: string): Promise<any>{
    const url = `${this.baseUrl}/admin/hamta-medlem/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = await this.http.get<any>(url, {headers}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  async raderaMedlem(id: string, token: string): Promise<any>{
    const url = `${this.baseUrl}/admin/radera-medlem/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = await this.http.delete<any>(url, {headers}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  async uppdateraMedlem(id: string, medlemsData: any, token: string): Promise<any>{
    const url = `${this.baseUrl}/admin/uppdatera/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = await this.http.put<any>(url, medlemsData, {headers}).toPromise();
      return response;
    } catch(error) {
      throw error;
    }
  }

  /*Autentisering*/

  logOut(): void {
    if(typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('roll');
    }
  }

  arInloggad(): boolean {
    if(typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token
    }
    return false;
  }
}
