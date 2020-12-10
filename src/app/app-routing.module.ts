import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CollectionComponent } from './collection/collection.component';
import { MongoComponent } from './mongo/mongo.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: '', redirectTo: 'collection', pathMatch: 'full' },
  { path: 'collection', component: CollectionComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'mongo', component: MongoComponent },
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
