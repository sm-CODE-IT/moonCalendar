package com.codeIT.moonCalendar.service;

import com.codeIT.moonCalendar.domain.user.User;
import com.codeIT.moonCalendar.domain.user.UserRepository;
import com.codeIT.moonCalendar.dto.UserRequestDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserServiceTest {

    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @BeforeEach
    public void beforeEach() {

    }

    @AfterEach
    public void afterEach() {
        userRepository.deleteAll();
    }

    @Test
    void 회원가입() {
        // given
        UserRequestDto userRequestDto = UserRequestDto.builder()
                .name("홍길동")
                .password("dong@gmail.com")
                .password("dongdong00#")
                .passwordConfirm("dongdong00#")
                .build();

        // when
        User savedUser = userService.join(userRequestDto);

        // then
        User findUser = userRepository.findByEmail("dong@gmail.com").get();
        Assertions.assertThat(savedUser.getId()).isEqualTo(findUser.getId());
    }

//    @Test
//    void 중복_이메일_테스트() {
//
//    }
}
