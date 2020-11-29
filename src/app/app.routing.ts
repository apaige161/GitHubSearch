  
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoginComponent } from './loginModule/login/login.component';
import { AuthGuard } from './loginModule/auth-guard.service';

//import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
]);