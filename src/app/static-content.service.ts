import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Testimonial } from './testimonial';
import { Gallery } from './gallery';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class StaticContentService {
	private publicGalleryUrl = 'http://localhost:8000/api/gallery';
  private publicOccasionUrl = 'http://localhost:8000/api/occasions';
  constructor(private http: HttpClient) { }

  getPublicGallery() {
    return this.http
      .get<Gallery[]>(this.publicGalleryUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPublicOccasion() {
    return this.http
      .get<Gallery[]>(this.publicGalleryUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
