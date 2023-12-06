import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';
import { UserStoreModule } from './user-store/user-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    UserStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
