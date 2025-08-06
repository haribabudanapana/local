import * as crypto from 'crypto';

/**
 * Equivalent to the Java EncryptionUtil,
 * uses Triple DES (DES-EDE) cipher in ECB mode (no IV), Base64 encoding.
 */
export class EncryptionUtil {
  private key: Buffer;
  private algorithm = 'des-ede3'; // Triple DES (3DES/DESEDE)
  private keyString: string = 'ThisIsSpartaThisIsSparta'; // 24 chars = 192 bits

  constructor(myKey?: string) {
    if (myKey) {
      this.keyString = myKey;
    }
    // Triple DES key is 24 bytes
    this.key = Buffer.from(this.keyString, 'utf8').slice(0, 24);
  }

  encrypt(unencryptedString: string): string | null {
    try {
      const cipher = crypto.createCipheriv(this.algorithm, this.key, null);
      let encrypted = cipher.update(unencryptedString, 'utf8', 'base64');
      encrypted += cipher.final('base64');
      return encrypted;
    } catch (err) {
      console.error('Encryption error:', err);
      return null;
    }
  }

  decrypt(encryptedString: string): string | null {
    try {
      const decipher = crypto.createDecipheriv(this.algorithm, this.key, null);
      let decrypted = decipher.update(encryptedString, 'base64', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (err) {
      console.error('Decryption error:', err);
      return null;
    }
  }
}
