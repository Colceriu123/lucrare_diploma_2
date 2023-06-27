package com.example.server;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping("/auth/goodbye")
    public String goodbye(){
        return "Goodbye from Spring Boot App";
    }

}