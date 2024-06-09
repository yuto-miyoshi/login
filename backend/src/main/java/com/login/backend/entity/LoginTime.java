package com.login.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name="login_time")
public class LoginTime {
    
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="login_time_id_generator")
    @SequenceGenerator(name = "login_time_id_generator", sequenceName = "login_time_id_seq", allocationSize = 1)
    @Column
    private long id;

    @Column(name="login_time")
    private LocalDateTime loginTime;

    @ManyToOne
    private User user;

    public long getId() {
        return this.id;
    }

    public LocalDateTime getLoginTime() {
        return this.loginTime;
    }

    public void setLoginTime(LocalDateTime loginTime) {
        this.loginTime = loginTime;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
