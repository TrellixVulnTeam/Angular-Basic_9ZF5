import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ParentComponent } from './components/lifecycle/parent/parent.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CurrencyInputDirective } from './shared/directives/currency-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DeactivateGuard } from './shared/guards/deactivate.guard';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { SqrootPipe } from './shared/pipes/sqroot.pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,
    canActivate : [AuthGuard],
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'post-list',
    component: PostsComponent,
  },
  {
    path: 'post-list/:id',
    component: PostDetailComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'post-details',
    component: PostDetailComponent,
    canActivate : [AuthGuard]
  },

  {
    path: 'pipes',
    component: PipesExampleComponent
  },

  {
    path: '**',
    component: ChildComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FeaturedListComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    CurrencyInputDirective,
    PostsComponent,
    PostDetailComponent,
    LoginComponent,
    PipesExampleComponent,
    ReversePipe,
    SqrootPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
