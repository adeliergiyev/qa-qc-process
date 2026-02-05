import { UserService } from './services/user.service';
import { weakEncrypt } from './utils/crypto.util';
import { Component, OnInit, Output, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'angular-sonar';
    @Input() public loadingText: any;

    // Example: unused variable (Sonar: code smell)
    private unusedValue: string = 'I am not used';

    // Example: bad comparison == instead of === (Sonar: bug/code smell)
    isEqual(a: any, b: any): boolean {
        // We deliberately violate the eqeqeq rule (ESLint/sonar-ts)
        // eslint-disable-next-line eqeqeq
        //let variableA = a;
        return a == b;
    }

    // Example: potential XSS (innerHTML without sanitization) — Sonar: Vulnerability
    unsafeHtml(html: string): string {
        //WARNING: demonstration, do not do this in real code
        (document.getElementById('unsafe-target') as HTMLElement).innerHTML = html;
        return html;
    }

    // Example: excessive complexity (cognitive complexity)
    computeScore(items: Array<number | string>): number {
        let score = 0;
        for (const item of items) {
            if (typeof item === 'number') {
                if (item > 10) {
                    score += 2;
                } else if (item > 5) {
                    score += 1;
                } else {
                    score += 0;
                }
            } else {
                if (item.length > 5) {
                    score += 2;
                } else if (item.length > 2) {
                    score += 1;
                } else {
                    score += 0;
                }
            }
        }
        return score;
    }

    // Example: Logging secrets (Sonar: Security Hotspot)
    logSensitiveExample(): void {
        const token = weakEncrypt('my-demo-token');
        console.log('Token (do not log secrets):', token);
    }

    constructor(private userService: UserService) {
        // Example: empty catch (Sonar: code smell)
        try {
            this.userService.init();
        } catch (e) {
            // deliberately empty
        }
    }
    // Example: Logging secrets (Sonar: Security Hotspot)



}
``
