import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/authguard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { EnquiryListComponent } from './components/enquiry-list/enquiry-list.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { AdminCourseListComponent } from './components/admin-course-list/admin-course-list.component';
import { StudentComponent } from './components/student/student.component';
import { AdminEnquiryListComponent } from './components/admin-enquiry-list/admin-enquiry-list.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'course', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'courselist', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'admincourselist', component: AdminCourseListComponent, canActivate: [AuthGuard] },
  { path: 'enquiry', component: EnquiryFormComponent, canActivate: [AuthGuard] },
  { path: 'enquirylist', component: EnquiryListComponent, canActivate: [AuthGuard] },
  { path: 'adminenquirylist', component: AdminEnquiryListComponent, canActivate: [AuthGuard] },
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]  },
  {path: 'student', component: StudentComponent, canActivate: [AuthGuard]  },
  { path: 'paymentlist', component: PaymentListComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent, data: { message: 'Oops! Something went wrong.' }},
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
