package com.digis.common.utils;

import java.security.*;

public class SignHelper {

    private static String ALGORITHM = "RSA";

    public static byte[] sign(byte[] data, PrivateKey privateKey) throws NoSuchProviderException, NoSuchAlgorithmException, InvalidKeyException, SignatureException {
        Signature signature = Signature.getInstance(ALGORITHM, "BC");
        signature.initSign(privateKey);
        signature.update(data);

        return signature.sign();
    }

    public static boolean verify(PublicKey publicKey, byte[] data, byte[] baSignature) throws NoSuchAlgorithmException, SignatureException, InvalidKeyException {
        Signature signature = Signature.getInstance(ALGORITHM);
        signature.initVerify(publicKey);
        signature.update(data);

        return signature.verify(baSignature);
    }

    public static KeyPair generateCertificate() throws NoSuchAlgorithmException {
        KeyPairGenerator kpg = KeyPairGenerator.getInstance(ALGORITHM);
        kpg.initialize(2048);
        return kpg.genKeyPair();
    }
}
