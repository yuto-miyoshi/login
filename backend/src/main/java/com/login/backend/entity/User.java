package com.login.backend.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long id;

    @Column(length = 255, nullable = true)
    private String mail;

    @Column(length = 255, nullable = true)
    private String password;

    @OneToMany(mappedBy="user")
    @Column(nullable=true)
    private List<LoginTime> loginTimes;

    public long getId() {
        return this.id;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<LoginTime> getLoginTimes() {
        return this.loginTimes;
    }

    public void setLoginTimes(List<LoginTime> loginTimes) {
        this.loginTimes = loginTimes;
    }
    
}
