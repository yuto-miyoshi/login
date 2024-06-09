package com.login.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.login.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value="select * from users where mail = :mail and password = :password;", nativeQuery=true)
    List<User> userFromMailAndPassword(@Param("mail") String mail, @Param("password") String password);
}
