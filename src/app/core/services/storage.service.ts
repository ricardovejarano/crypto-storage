import { Injectable } from '@angular/core';
const enc = require('crypto-js/enc-utf8');
const sha256 = require('crypto-js/sha256')
const AES = require("crypto-js/aes");
const SecureStorage = require('secure-web-storage');
const SECRET_KEY = 'Ber1g0';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  public secureStorage = new SecureStorage(sessionStorage, {
    hash: function hash(key) {
      key = sha256(key, SECRET_KEY);
 
      return key.toString();
    },
    encrypt: function encrypt(data) {
      data = AES.encrypt(data, SECRET_KEY);
 
      data = data.toString();
 
      return data;
    },
    decrypt: function decrypt(data) {
      data = AES.decrypt(data, SECRET_KEY);
 
      data = data.toString(enc);
 
      return data;
    }
  });
}
