package com.login.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.login.backend.entity.LoginTime;

@Repository
public interface LoginTimeRepository extends JpaRepository<LoginTime, Long> {}
