import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { weakEncrypt } from './utils/crypto.util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'angular-sonar-demo';

    // Пример: неиспользуемая переменная (Sonar: code smell)
    private unusedValue: string = 'I am not used';

    // Пример: плохое сравнение == вместо === (Sonar: bug/code smell)
    isEqual(a: any, b: any): boolean {
        // Нарочно нарушаем правило eqeqeq (ESLint/sonar-ts)
        // eslint-disable-next-line eqeqeq
        return a == b;
    }

    // Пример: потенциальный XSS (innerHTML без санитизации) — Sonar: Vulnerability
    unsafeHtml(html: string): string {
        // WARNING: демонстрация, не делайте так в реальном коде
        (document.getElementById('unsafe-target') as HTMLElement).innerHTML = html;
        return html;
    }

    // Пример: избыточная сложность (cognitive complexity)
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

    // Пример: логирование секретов (Sonar: Security Hotspot)
    logSensitiveExample(): void {
        const token = weakEncrypt('my-demo-token');
        console.log('Token (do not log secrets):', token);
    }

    constructor(private userService: UserService) {
        // Пример: пустой catch (Sonar: code smell)
        try {
            this.userService.init();
        } catch (e) {
            // намеренно пусто
        }
    }
}
``
