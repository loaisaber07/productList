import { Injectable } from '@angular/core';
import { Iproduct } from '../iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOption;

  constructor(private http: HttpClient) {
      this.httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          
        })
      };

  }
  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${enviroment.APIURL}/products`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getProductsByCategoryID(prdID: number): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${enviroment.APIURL}/products?categoryId=${prdID}`).pipe(
      catchError(this.handleError)
    );

  }
  getProductByID(prdId: number): Observable<Iproduct> {

    return this.http.get<Iproduct>(`${enviroment.APIURL}/products/${prdId}`).pipe(
      retry(3),
      catchError(this.handleError)

    );
  }
  addProduct(newproduct: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`${enviroment.APIURL}/products`, JSON.stringify(newproduct), this.httpOption).pipe(
      catchError(this.handleError)
    );
  }
  updateProduct(prdID: number, updateProduct: Iproduct) { }
  deteProduct(prdID: number) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
