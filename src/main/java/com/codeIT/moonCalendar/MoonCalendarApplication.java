package com.codeIT.moonCalendar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing // BaseTimeEntity의 auditing 추가로 인해 꼭 필요한 annotation - JPA Auditing 활성화
@SpringBootApplication
public class MoonCalendarApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoonCalendarApplication.class, args);
	}

}
