package com.codeIT.moonCalendar.config.auth;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.PARAMETER)       // LoginUser가 생성될 수 있는 위치 = 메소드의 파라미터로 선언된 객체
@Retention(RetentionPolicy.RUNTIME)
public @interface LoginUser { // 어노테이션 클래스
}
