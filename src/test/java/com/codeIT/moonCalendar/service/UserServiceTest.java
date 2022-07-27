package com.codeIT.moonCalendar.service;

import com.codeIT.moonCalendar.domain.user.User;
import com.codeIT.moonCalendar.dto.UserRequestDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;


@SpringBootTest
@Transactional
class UserServiceTest {

    @Autowired
    UserService userService;

    @Test
    void 회원_생성() {
        UserRequestDto userRequestDto = UserRequestDto.builder()
                .name("홍길동")
                .email("hong@gmail.com")
                .password("honggil0#")
                .passwordConfirm("honggil0#")
                .build();
    }

    @Test
    void 회원가입() {
        // given
        UserRequestDto userRequestDto = UserRequestDto.builder()
                .name("홍길동")
                .email("hong@gmail.com")
                .password("honggil0#")
                .passwordConfirm("honggil0#")
                .build();

        // when
        User saveUser = userService.join(userRequestDto);

        // then
        User findUser = userService.findUserByEmail(saveUser.getEmail());
        Assertions.assertThat(saveUser.getId()).isEqualTo(findUser.getId());
    }

    @Test
    void 중복_이메일_회원가입() {
        UserRequestDto userRequestDto1 = UserRequestDto.builder()
                .name("홍길동")
                .email("hong@gmail.com")
                .password("honggil0#")
                .passwordConfirm("honggil0#")
                .build();
        UserRequestDto userRequestDto2 = UserRequestDto.builder()
                .name("길동홍")
                .email("hong@gmail.com")
                .password("gildong90#")
                .passwordConfirm("gildong90#")
                .build();

        // when
        userService.join(userRequestDto1);

        // then
        try{
            userService.join(userRequestDto2);
        }catch (Exception e) {
            System.out.println("\nError : " + e.getMessage());
        }
    }
}
