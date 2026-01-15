// ВНИМАНИЕ: демонстрационная слабая "шифрация" (Sonar: Security Hotspot)
const HARDCODED_SECRET = 'super-secret-key'; // hardcoded secret (bad)

export function weakEncrypt(value: string): string {
    // Тривиальный XOR — легко детектируется как слабое шифрование
    return value
        .split('')
        .map((ch, i) => String.fromCharCode(ch.charCodeAt(0) ^ HARDCODED_SECRET.charCodeAt(i % HARDCODED_SECRET.length)))
        .join('');
}
