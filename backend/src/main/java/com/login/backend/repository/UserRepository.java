package com.login.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.login.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {}
