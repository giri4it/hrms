package com.ksgbabu;

/**
 * Created by gireesh.babu on 30/07/14.
 */
public enum UtilConstant {

    ONE("One","for one"), TWO("Two","for two");

    String key;
    String details;

    private UtilConstant(String key, String details){
        this.key = key;
        this.details =details;
    }

    public static UtilConstant getCodeFromString(String key){
        for(UtilConstant u: UtilConstant.values()){
            if(u.key.equals(key)){
                return u;
            }
        }
        throw new IllegalArgumentException(key);
    }

}
