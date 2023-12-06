# NgrxAnotherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Best Practice #1 — The Root Store Module

1. Generate RootStoreModule using the Angular CLI:
   
```
ng g module root-store --flat false --module app.module.ts
```


2. Generate RootState interface to represent the entire state of your application using the Angular CLI:

```
ng g interface root-store/root-state
```

### Best Practice #2 — Create Feature Store Module(s)

#### Suggested Implementation — Entity Feature Module

1. Generate MyFeatureStoreModule feature module using the Angular CLI:

```
ng g module root-store/my-feature-store --flat false --module root-store/root-store.module.ts
```

2. Actions — Create an actions.ts file in the app/root-store/my-feature-store directory:
3. State — Create a state.ts file in the app/root-store/my-feature-store directory:
4. Reducer — Create a reducer.ts file in the app/root-store/my-feature-store directory:
5. Selectors — Create a selectors.ts file in the app/root-store/my-feature-store directory:
6. Effects — Create an effects.ts file in the app/root-store/my-feature-store directory with the following:


#### Suggested Implementation — Standard Feature Module

1. Generate MyFeatureStoreModule feature module using the Angular CLI:

```

```


2. Actions — Create an actions.ts file in the app/root-store/my-feature-store directory:
3. State — Create a state.ts file in the app/root-store/my-feature-store directory:
4. Reducer — Create a reducer.ts file in the app/root-store/my-feature-store directory:
5. Selectors — Create a selectors.ts file in the app/root-store/my-feature-store directory:
6. Effects — Create an effects.ts file in the app/root-store/my-feature-store directory with the following:
  
Note:

> Adding NgRx schematics to schematicCollections

>> ng config cli.schematicCollections "[\"@ngrx/schematics\"]"

<br/>


See https://medium.com/upstate-interactive/create-a-login-feature-with-ngrx-in-6-steps-8691395bcda7
See https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7

See https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7
