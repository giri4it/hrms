package main.java.com.ksgbabu.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by gireesh.babu on 24/05/14.
 */
@Controller
@RequestMapping("/login")
public class LoginController {

    Logger logger = Logger.getLogger(this.getClass().toString());

    @RequestMapping("/authenticate")
    public String authenticate(WebRequest request){
        String userName = request.getParameter("userName");
        logger.log(Level.INFO,"user name - " + userName);
        return "loginSuccess";
    }
}
