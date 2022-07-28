package com.codeIT.moonCalendar.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 계정이 존재하지 않습니다."),
    USER_DUPLICATED(HttpStatus.CONFLICT, "이미 해당 계정의 유저가 존재합니다."),
    NOT_FOUND(HttpStatus.NOT_FOUND, "해당 객체가 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String detail;
}
