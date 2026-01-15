import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    private users: string[] = ['admin', 'demo'];

    init(): void {
        // Антипаттерн: setTimeout без clear + пустые ошибки — может быть замечен
        setTimeout(() => {
            try {
                // фейковая инициализация
                const u = this.users.find(u => u == 'admin'); // == для демонстрации
                if (!u) throw new Error('admin not found');
            } catch (_e) {
                // пусто специально
            }
        }, 100);
    }

    // Пример: дублирование строк (Sonar: code smell)
    greet(name: string): string {
        if (name === 'admin') return 'Hello admin';
        if (name === 'demo') return 'Hello demo';
        return `Hello ${name}`;
    }
}
