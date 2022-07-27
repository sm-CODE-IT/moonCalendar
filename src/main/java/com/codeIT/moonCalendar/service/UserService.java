package com.codeIT.moonCalendar.service;

import com.codeIT.moonCalendar.domain.user.User;
import com.codeIT.moonCalendar.domain.user.UserRepository;
import com.codeIT.moonCalendar.dto.UserRequestDto;
import com.codeIT.moonCalendar.exception.CustomException;
import com.codeIT.moonCalendar.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Long deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new CustomException(ErrorCode.USER_NOT_FOUND)
        );
        userRepository.delete(user);

        return id;
    }

    @Transactional
    public User join(UserRequestDto userRequestDto) {
        String encode = passwordEncoder.encode(userRequestDto.getPassword());
        userRequestDto.setPassword(encode); // 비밀번호 암호화
        userRequestDto.setPasswordConfirm(encode);

        return userRepository.save(userRequestDto.toEntity());
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(
                () -> new CustomException(ErrorCode.USER_NOT_FOUND)
                );
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    /**
     * 이메일(아이디) 중복 체크
     * @param email
     * @return
     */
    public boolean checkEmailDuplicate(String email) {
        return userRepository.existsByEmail(email); // DB에 이미 존재하는 이메일이면 true를, 아니면 false를 반환
    }
}
