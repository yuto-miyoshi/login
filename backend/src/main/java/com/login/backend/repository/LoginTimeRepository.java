package com.login.backend.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.login.backend.entity.LoginTime;

@Repository
public interface LoginTimeRepository extends JpaRepository<LoginTime, Long> {

    @Query(value="select * from login_time where user_id = (select user_id from users where mail = :mail)", nativeQuery=true)
    public List<LoginTime> loginHistory(@Param("mail") String mail);

    @Query(value="insert into login_time(user_id, login_time) values ((select id from users where mail=:mail), :login_time)", nativeQuery=true)
    public void insertLoginRecord(@Param("mail") String mail, @Param("login_time") LocalDateTime time);

}
