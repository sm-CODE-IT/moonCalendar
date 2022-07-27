package com.codeIT.moonCalendar.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // 소셜 로그인 : 이미 생성된 사용자인지 처음 가입하는 사용자인지 판단하기
    boolean existsByEmail(String email); // existsByXXX(찾으려는 값)은 알아서 해당 값이 존재하는지 조회하는 select 쿼리를 날려준다. by JPA
}
