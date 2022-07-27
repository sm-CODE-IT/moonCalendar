package com.codeIT.moonCalendar.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // created_at, modified_at도 column으로 인식되도록 하기
@EntityListeners(AuditingEntityListener.class) // auditing 기능 추가
public class BaseTimeEntity { // 모든 entity 생성, 수정 시간 관리하는 클래스

    @CreatedDate
    private LocalDateTime created_at;

    @LastModifiedDate
    private LocalDateTime modified_at;
}
