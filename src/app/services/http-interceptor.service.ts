import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor(private router: Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if session is active
    if (this.isSessionActive()) {
      // Update last activity time
      // this.updateLastActivityTime();
      return next.handle(req);
    } else {
      // Trigger login popup
      this.showLoginPopup();
      // You might want to interrupt the request or handle it differently
      // based on your requirements
      return next.handle(req);
    }
  }

  private isSessionActive(): boolean {
    const currentTime = new Date().getTime();
    const loggedTime: any = localStorage.getItem('loggedTime');
    console.log("currentTime", currentTime, )
    const elapsedTime = currentTime - loggedTime;


    return elapsedTime < 120000;
  }

  private updateLastActivityTime(): void {
    // Update the last activity time
    // This is called when a request is made and the session is active
  }

  private showLoginPopup(): void {
      this.router.navigate(['/login']);
    // Implement logic to show the login popup
    // This is called when the session is inactive for more than 1 hour
  }
}
