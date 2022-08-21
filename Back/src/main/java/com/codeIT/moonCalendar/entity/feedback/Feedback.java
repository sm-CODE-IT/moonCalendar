package com.codeIT.moonCalendar.entity.feedback;

import com.codeIT.moonCalendar.entity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity(name = "feedback")
public class Feedback extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String contents;
    private String email;
    private int read_cnt;


    @Builder
    public Feedback(Long id, String title, String contents, String email, int read_cnt){
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.email = email;
        this.read_cnt = read_cnt;
    }
}
