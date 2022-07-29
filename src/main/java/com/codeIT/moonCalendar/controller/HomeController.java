package com.codeIT.moonCalendar.controller;

import com.codeIT.moonCalendar.config.auth.LoginUser;
import com.codeIT.moonCalendar.config.auth.dto.SessionUser;
import com.codeIT.moonCalendar.domain.user.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {

    @GetMapping("/")
    public String index(Model model, @LoginUser SessionUser user, @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        if(user != null) {
            model.addAttribute("userName", user.getEmail());
        }
        if(customUserDetails != null) {
            model.addAttribute("userName", customUserDetails.getUsername());
        }
        return "index";
    }

}
