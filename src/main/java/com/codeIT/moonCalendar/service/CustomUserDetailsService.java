package com.codeIT.moonCalendar.service;

import com.codeIT.moonCalendar.config.auth.dto.SessionUser;
import com.codeIT.moonCalendar.domain.user.CustomUserDetails;
import com.codeIT.moonCalendar.domain.user.User;
import com.codeIT.moonCalendar.domain.user.UserRepository;
import com.codeIT.moonCalendar.exception.CustomException;
import com.codeIT.moonCalendar.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    // email이 db에 존재하는지 확인
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(
                () -> new CustomException(ErrorCode.NOT_FOUND)
        );

        return new CustomUserDetails(user);
    }
}
