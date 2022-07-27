package com.codeIT.moonCalendar.config.auth.dto;

import com.codeIT.moonCalendar.domain.user.User;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {  // 세션에 사용자 정보를 저장하기 위한 클래스
    // 인증된 사용자 정보만 필요하므로 아래 필드만 원함
    private String name;
    private String email;
    private String picture;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.picture = user.getPicture();
    }
}
