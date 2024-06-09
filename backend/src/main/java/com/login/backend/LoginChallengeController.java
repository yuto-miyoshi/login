package com.login.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.backend.model.LoginChallenge;
import com.login.backend.model.LoginChallengeResult;

@RestController
public class LoginChallengeController {

    @Autowired
    LoginChallengeService loginChallengeService;

    @Autowired
    LoginRecordService loginRecordService;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<LoginChallengeResult> loginChallenge(@RequestBody LoginChallenge form) {
        LoginChallengeResult result = this.loginChallengeService.authenticate(form);

        if (result.success) {
            this.loginRecordService.record(form);
        }

        return ResponseEntity.ok(result);
    }

}
