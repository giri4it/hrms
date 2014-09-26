package com.ksgbabu;

import junit.framework.TestCase;
import org.testng.annotations.Test;

/**
 * Created by gireesh.babu on 30/07/14.
 */
public class UtilConstantTest extends TestCase {


    @Test
    public void testGetCodeFromString() throws Exception {

        UtilConstant constant = UtilConstant.valueOf("ONE") ;
        System.out.println( constant.details + " "+constant.key );


    }
}
