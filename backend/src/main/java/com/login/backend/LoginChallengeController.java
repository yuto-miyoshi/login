package com.login.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.backend.model.LoginChallenge;
import com.login.backend.model.LoginChallengeResult;

@RestController
public class LoginChallengeController {

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<LoginChallengeResult> judge(@RequestBody LoginChallenge challenge) {
        System.out.println(challenge.mail);
        System.out.println(challenge.password);
        LoginChallengeResult result = new LoginChallengeResult();
        result.success = true;
        return ResponseEntity.ok(result);
    }

}
