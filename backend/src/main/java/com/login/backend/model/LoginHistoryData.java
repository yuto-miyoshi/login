package com.login.backend.model;

import java.time.LocalDateTime;
import java.util.List;

public class LoginHistoryData {
    
    List<LocalDateTime> list;

    public List<LocalDateTime> getList() {
        return list;
    }

    public void setList(List<LocalDateTime> list) {
        this.list = list;
    }

}
