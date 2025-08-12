"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/services/email.ts
function getBaseEmail(senderName) {
  return __async(this, null, function* () {
    let base = yield getHeaderText();
    base += `ola .${senderName}@example.com`;
    base += "oi oi";
    return base;
  });
}
function getHeaderText() {
  return __async(this, null, function* () {
    return "email para voce";
  });
}
var email_default = getBaseEmail;

// src/index.ts
email_default("itin");
console.log("teste som ei");
