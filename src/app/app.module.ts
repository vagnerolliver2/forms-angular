import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { ComponentsComponent } from './components/components.component';
import { WorkflowgroupComponent } from './workflowgroup/workflowgroup.component';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { MetadataComponent } from './workflowgroup/components/metadata/metadata.component';

const appRoutes: Routes = [
  { path: 'workflowgroup', component: WorkflowgroupComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDriveFormComponent,
    ReactiveFormBuilderComponent,
    ComponentsComponent,
    WorkflowgroupComponent,
    HomeComponent,
    MetadataComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
