package com.codeIT.moonCalendar.dto;

import com.codeIT.moonCalendar.domain.user.Role;
import com.codeIT.moonCalendar.domain.user.User;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Getter @Setter
public class UserRequestDto {
    @NotEmpty(message = "이름은 필수 입력 항목입니다.")
    private String name;
    @NotEmpty(message = "이메일은 필수 항목입니다.")
    @Email(message = "이메일 형식을 확인해주세요.")
    private String email;
    @NotEmpty(message = "비밀번호는 필수 항목입니다.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}", message = "비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.")
    private String password;
    @NotEmpty(message = "비밀번호 확인은 필수항목입니다.")
    private String passwordConfirm;

    @Builder
    public UserRequestDto(String name, String email, String password, String passwordConfirm) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

    // dto -> entity
    public User toEntity() {
        return User.builder()
                .name(name)
                .email(email)
                .password(password)
                .role(Role.USER)
                .build();
    }
}
