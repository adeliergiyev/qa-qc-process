import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [UserService]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should compute score', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.computeScore([1, 6, 12, 'ab', 'abcdef'])).toBeGreaterThan(0);
    });
});
