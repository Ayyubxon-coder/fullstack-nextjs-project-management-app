import bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';
import { db } from './db';

export const hashPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

export const comparePasswords = (
  plainTextPassword: string,
  hashedPassword: string
): Promise<boolean> => bcrypt.compare(plainTextPassword, hashedPassword);
