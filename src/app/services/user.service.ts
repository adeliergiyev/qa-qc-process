import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    private users: string[] = ['admin', 'demo'];

    init(): void {
        //  Anti-pattern: setTimeout without clear + empty errors — may be observed
        setTimeout(() => {
            try {
                // fake initialization
                const u = this.users.find(u => u == 'admin'); // == for demonstration
                if (!u) throw new Error('admin not found');
            } catch (_e) {
                // empty on purpose
            }
        }, 100);
    }

    // Example: duplicate lines (Sonar: code smell)
    greet(name: string): string {
        if (name === 'admin') return 'Hello admin';
        if (name === 'demo') return 'Hello demo';
        return `Hello ${name}`;
    }
}
