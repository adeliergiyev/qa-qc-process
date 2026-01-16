import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Component, OnInit, Output, ViewChild, Input } from '@angular/core';

// TODO: refactor bootstrap (TODOs Sonar is considered a code smell)
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
