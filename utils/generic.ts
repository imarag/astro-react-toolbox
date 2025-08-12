import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Generate a random UUID string
export function generateRandomId(): string {
    return uuidv4();
}

// Delay execution for a given number of milliseconds
export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}