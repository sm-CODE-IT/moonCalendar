package com.codeIT.moonCalendar.domain.user;

import lombok.Data;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Data
@Getter
public class CustomUserDetails implements UserDetails {

    private static final long serialVersionUID = 1L;
    private final User user;

    @Autowired
    public CustomUserDetails(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(user.getRoleKey()));
    }

    @Override
    public String getPassword() { // 비밀번호
        return user.getPassword();
    }

    @Override
    public String getUsername() { // 아이디(이메일)
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // 만료되지 않음
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // 잠기지 않음
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // 만료되지 않음
    }

    @Override
    public boolean isEnabled() {
        return true; // 활성화됨
    }
}
