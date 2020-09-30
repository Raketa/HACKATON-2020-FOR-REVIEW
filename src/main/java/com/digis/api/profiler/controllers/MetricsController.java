package com.digis.api.profiler.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Metrics.
 *
 * Prometheus format.
 */
@CrossOrigin(origins = "*")
@RestController
public class MetricsController {

    @GetMapping(value = "metrics", produces = "text/plain")
    public String main() {

        return "my_metrique1{key1=\"bir\",key2=\"eki\"} " + Math.random() + "\n" +
               "my_metrique2{key1=\"bir\",key2=\"eki\"} " + Math.random() + "\n" +
               "my_metrique3{key1=\"bir\",key2=\"eki\"} " + Math.random() + "\n" +
               "my_metrique4{key1=\"bir\",key2=\"eki\"} " + Math.random() + "\n" +
               "my_metrique5{key1=\"bir\",key2=\"eki\"} " + Math.random() + "\n" +
               "my_metrique6{key=\"" + Math.random() + "\"} " + Math.random() + "\n" +
               "my_metrique7 " + Math.random() + "\n" +
               "my_metrique8 " + Math.random() + "\n" +
               "my_metrique9 " + Math.random();
    }
}

