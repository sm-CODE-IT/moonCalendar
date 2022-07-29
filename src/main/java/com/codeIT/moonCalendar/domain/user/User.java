package com.codeIT.moonCalendar.domain.user;

import com.codeIT.moonCalendar.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Getter
@NoArgsConstructor
public class User extends BaseTimeEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column
    private String gender;

    @Column
    private String password;

    @Column
    private String picture;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Builder
    public User(String name, String email, String gender, String password, String picture, Role role) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.picture = picture;
        this.role = role;
    }

    // 구글 사용자 정보가 업데이트 되었을 때 이를 엔티티에 반영하기 위해 update 메소드 구현
    public User update(String name, String picture) {
        this.name = name;
        this.picture = picture;

        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}
