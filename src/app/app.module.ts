import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { Calendar } from '@ionic-native/calendar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QuestionPage } from '../pages/question/question';
import { FitnessPlanPage } from '../pages/fitness-plan/fitness-plan';
import { FitnessPlan2Page } from '../pages/fitness-plan2/fitness-plan2';
import { FitnessPlan3Page } from '../pages/fitness-plan3/fitness-plan3';
import { TestPage } from '../pages/test/test';
import { FoodPlanPage } from '../pages/food-plan/food-plan';
import { WorkoutPage } from '../pages/workout/workout';
import { ProfilePage } from '../pages/profile/profile';
import { FoodPlan2Page } from '../pages/food-plan2/food-plan2';
import { CollectionPage } from '../pages/collection/collection';
import { Collection2Page } from '../pages/collection2/collection2';
import { Collection15Page } from '../pages/collection15/collection15';
import { CalendarPage } from '../pages/calendar/calendar';
import { WorkoutCategoryAbsPage } from '../pages/workout-category-abs/workout-category-abs';
import { WorkoutCategoryShouldersPage } from '../pages/workout-category-shoulders/workout-category-shoulders';
import { WorkoutCategoryArmsPage } from '../pages/workout-category-arms/workout-category-arms';
import { WorkoutCategoryBackPage } from '../pages/workout-category-back/workout-category-back';
import { WorkoutCategoryChestPage } from '../pages/workout-category-chest/workout-category-chest';
import { WorkoutCategoryLegsPage } from '../pages/workout-category-legs/workout-category-legs';
import { WorkoutCategoryCardioPage } from '../pages/workout-category-cardio/workout-category-cardio';
import { UpdatePage } from '../pages/update/update';
import { ProgressPage } from '../pages/progress/progress';
import { ProteinPage } from '../pages/protein/protein';
import { CarbsPage } from '../pages/carbs/carbs';
import { FatsPage } from '../pages/fats/fats';
import { EditprofilePage } from '../pages/editprofile/editprofile';

export const config = {
  apiKey: "AIzaSyACQbDFnbhv5uJCBcyd6Sy1ylmBzvd44AM",
  authDomain: "modal-82ed6.firebaseapp.com",
  databaseURL: "https://modal-82ed6.firebaseio.com",
  projectId: "modal-82ed6",
  storageBucket: "modal-82ed6.appspot.com",
  messagingSenderId: "525147176042"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    QuestionPage,
    FitnessPlanPage,
    FitnessPlan2Page,
    FitnessPlan3Page,
    TestPage,
    FoodPlanPage,
    WorkoutPage,
    ProfilePage,
    FoodPlan2Page,
    CollectionPage,
    Collection2Page,
    Collection15Page,
    CalendarPage,
    WorkoutCategoryAbsPage,
    WorkoutCategoryShouldersPage,
    WorkoutCategoryArmsPage,
    WorkoutCategoryBackPage,
    WorkoutCategoryChestPage,
    WorkoutCategoryLegsPage,
    WorkoutCategoryCardioPage,
    UpdatePage,
    ProgressPage,
    ProteinPage,
    CarbsPage,
    FatsPage,
    EditprofilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    QuestionPage,
    FitnessPlanPage,
    FitnessPlan2Page,
    FitnessPlan3Page,
    TestPage,
    FoodPlanPage,
    WorkoutPage,
    ProfilePage,
    FoodPlan2Page,
    CollectionPage,
    Collection2Page,
    Collection15Page,
    CalendarPage,
    WorkoutCategoryAbsPage,
    WorkoutCategoryShouldersPage,
    WorkoutCategoryArmsPage,
    WorkoutCategoryBackPage,
    WorkoutCategoryChestPage,
    WorkoutCategoryLegsPage,
    WorkoutCategoryCardioPage,
    UpdatePage,
    ProgressPage,
    ProteinPage,
    CarbsPage,
    FatsPage,
    EditprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuthModule,
    AngularFireAuth,
    Calendar
  ]
})
export class AppModule { }
