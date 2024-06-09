package com.login.backend;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.backend.entity.LoginTime;
import com.login.backend.repository.LoginTimeRepository;

@Service
public class LoginHistoryService {
    
    @Autowired
    LoginTimeRepository loginTimeRepository;

    public List<LocalDateTime> loginHistriesFn(String mail) {
        List<LoginTime> records = this.loginTimeRepository.loginHistory(mail);
        return records.stream().map((record) -> record.getLoginTime()).collect(Collectors.toList());        
    }
    
}
