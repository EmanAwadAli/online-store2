import { EncryptedLocalStorageDriver, PlainLocalStorageDriver, setCacheConfigurations } from "@mongez/cache";
import { __DEV__, appCodeName } from "./flages";
import { setEncryptionConfigurations, encrypt, decrypt } from "@mongez/encryption";
import { AES } from "crypto-js";

const cacheDriver = __DEV__ ? new PlainLocalStorageDriver() : new EncryptedLocalStorageDriver();

setEncryptionConfigurations( {
    key: appCodeName,
    driver: AES
})

setCacheConfigurations({
    prefix: appCodeName,
    driver: cacheDriver,
    encryption: {
        encrypt,
        decrypt
    }
})