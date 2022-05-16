import { Injectable } from '@angular/core';
import { sha3_256 } from 'js-sha3';
declare function escape(s: string): string;
declare function unescape(s: string): string;
@Injectable()
export class Webcryptoservice {
  Crypto;
  encryptAlgorithm = {
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    extractable: false,
    hash: {
      name: "SHA-256"
    }
  }
  signAlgorithm = {
    name: "RSASSA-PKCS1-v1_5",
    hash: {
      name: "SHA-256"
    },
    modulusLength: 2048,
    extractable: false,
    publicExponent: new Uint8Array([1, 0, 1])
  }
  constructor() {
    this.Crypto = window.crypto.subtle;
  }


  importPublicKey(pemKey: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.Crypto.importKey("spki", this.convertKeyToBinary(pemKey), this.signAlgorithm, true, ["verify"])
        .then(key => {
          resolve(key)
        })
        .catch(function (error) {
          reject(error)
        });
    })
  }

  importPrivateKey(pemKey: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.Crypto.importKey("pkcs8", this.convertKeyToBinary(pemKey), this.signAlgorithm, true, ["sign"])
        .then(key => {
          resolve(key)
        })
        .catch(function (error) {
          reject(error)
        });
    })
  }

  signData(pemKey: string, data: any): Promise<string> {
    return new Promise((resolve, reject) => {
     this.importPrivateKey(pemKey).then(result => {
        this.Crypto.sign(this.signAlgorithm, result, this.textToArrayBuffer(data))
          .then(result => {
            resolve(this.arrayBufferToBase64(result))
          })
          .catch(function (error) {
            reject(error)
          });
      }
      );
    })
  }

  validateAESKey(key: string): Promise<boolean> {
    const that = this;
    const p = new Promise<any>((resolve, reject) => {
      // Import public key
      const privateKeyPem = this.convertKeyToBinary(key); // this.convertPemToBinary(this.model.publicKey);
      this.Crypto.importKey('spki', privateKeyPem, this.encryptAlgorithm, true, ['encrypt'])
        .then(function (key) {
          const data = that.textToArrayBuffer('Validate aes key');
          that.Crypto.encrypt({ name: 'RSA-OAEP' }, key, data)
            .then(function (encrypted) {
              resolve(true);
            })
            .catch(function (error) {
              reject(error)
            });
        })
        .catch(function (error) {
          reject(error)
        });

    });
    return p;
  }
  encryptData(key: string, data_to_be_encrypted: string): Promise<string> {
    const that = this;
    const p = new Promise<any>((resolve, reject) => {
      // Import public key
      const privateKeyPem = this.convertKeyToBinary(key); // this.convertPemToBinary(this.model.publicKey);
      this.Crypto.importKey('spki', privateKeyPem, this.encryptAlgorithm, true, ['encrypt'])
        .then(function (key) {
          const data = that.textToArrayBuffer(data_to_be_encrypted);
          that.Crypto.encrypt({ name: 'RSA-OAEP' }, key, data)
            .then(function (encrypted) {
              const result = that.arrayBufferToBase64(encrypted);
              resolve(result);
            })
            .catch(function (error) {
              reject(error)
            });
        })
        .catch(function (error) {
          reject(error)
        });

    });
    return p;
  }
  private trimKey(key): string {
    key = key.replace(/-----BEGIN RSA PUBLIC KEY-----/g, '');
    key = key.replace(/-----END RSA PUBLIC KEY-----/g, '');
    key = key.replace(/-----BEGIN RSA PRIVATE KEY-----/g, '');
    key = key.replace(/-----END RSA PRIVATE KEY-----/g, '');
    key = key.replace(/-----BEGIN PUBLIC KEY-----/g, '');
    key = key.replace(/-----END PUBLIC KEY-----/g, '');
    key = key.trim()
    return key;
  }
  private convertKeyToBinary(key) {
    key = this.trimKey(key)
    return this.base64StringToArrayBuffer(key);
  }
  private base64StringToArrayBuffer(b64str) {
    const byteStr = atob(b64str);
    const bytes = new Uint8Array(byteStr.length);
    for (let i = 0; i < byteStr.length; i++) {
      bytes[i] = byteStr.charCodeAt(i);
    }
    return bytes.buffer;
  }
  private textToArrayBuffer(str) {
    const buf = unescape(encodeURIComponent(str)); // 2 bytes for each char
    const bufView = new Uint8Array(buf.length);
    for (let i = 0; i < buf.length; i++) {
      bufView[i] = buf.charCodeAt(i);
    }
    return bufView;
  }
  private arrayBufferToBase64(arr) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(arr)));
  }
  getSha256(key): string {
    return '0x' + sha3_256(key)
  }
  generateAESKey() {
    const arrayBuffer = window.crypto.getRandomValues(new Int32Array(32));
    // receive error -> error TS2345: Argument of type 'ArrayBufferView' is not assignable to parameter of type 'ArrayBuffer'. Property 'slice' is missing in type 'ArrayBufferView'
    const byteArray = new Uint8Array(arrayBuffer as any);
    let byteString = '';
    for (let i = 0; i < byteArray.byteLength; i++) {
      byteString += String.fromCharCode(byteArray[i]);
    }
    return btoa(byteString);
  }
}
