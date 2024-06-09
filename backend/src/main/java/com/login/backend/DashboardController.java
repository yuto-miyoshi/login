package com.login.backend;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.backend.model.LoginHistoryData;
import com.login.backend.model.SearchTarget;


@RestController
public class DashboardController {

    @Autowired
    LoginHistoryService loginHistoryService;
    
    @CrossOrigin
    @PostMapping("/login-data")
    public ResponseEntity<LoginHistoryData> loginData(@RequestBody SearchTarget target) {
        List<LocalDateTime> histories = this.loginHistoryService.loginHistriesFn(target.getMail());
        
        LoginHistoryData data = new LoginHistoryData();
        data.setList(histories);

        return ResponseEntity.ok(data);
    }

}
