package com.digis.common.utils;

import com.google.gson.GsonBuilder;

public class JsonHelper {

    private JsonHelper() {
    }

    public static String toJson(Object object) {
        return new GsonBuilder()
                .setPrettyPrinting()
                .create()
                .toJson(object);
    }

    public static <T> T fromJson(String json, Class<T> type) {
        return new GsonBuilder().create().fromJson(json, type);
    }
}
