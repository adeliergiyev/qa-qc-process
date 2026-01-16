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

    it('should greet unknown user with generic message', () => {
        const svc = new UserService();
        expect(svc.greet('someone')).toBe('Hello someone');
    });

    it('should show equality caveat with loose comparison', () => {
        const app = TestBed.createComponent(AppComponent).componentInstance;
        expect(app.isEqual(2, '2')).toBeTrue(); // demonstrate loose equality
    });

    it('should greet admin in uppercase (expected to fail)', () => {
        const svc = new UserService();
        // Current realization returns 'Hello admin'
        // We expected 'Hello ADMIN' → test failed.
        expect(svc.greet('admin')).toBe('Hello ADMIN');
    });


});
