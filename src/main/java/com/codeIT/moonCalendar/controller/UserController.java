package com.codeIT.moonCalendar.controller;

import com.codeIT.moonCalendar.dto.UserRequestDto;
import com.codeIT.moonCalendar.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    /**
     * 회원가입 페이지
     * @return
     */
    @GetMapping("/signup")
    public String sign_up(Model model) {
        model.addAttribute("userRequestDto", new UserRequestDto());
        return "user/signup";
    }

    /**
     * 회원가입 처리
     * @param userRequestDto
     * @param bindingResult
     * @param model
     * @return
     */
    @PostMapping("/signup")
    public String signupProc(@Valid @ModelAttribute("userRequestDto") UserRequestDto userRequestDto, BindingResult bindingResult, Model model) {
        if(bindingResult.hasErrors()){
            System.out.println(model);
            System.out.println(userRequestDto);
            return "user/signup";
        }
        if(userService.checkEmailDuplicate(userRequestDto.getEmail())) {
            // 중복된 이메일 - 회원가입 불가능
            bindingResult.rejectValue("email", "emailDuplicate", "이미 존재하는 회원입니다.");
            return "user/signup";
        }if(!(userRequestDto.getPassword().equals(userRequestDto.getPasswordConfirm()))){
            bindingResult.rejectValue("passwordConfirm", "passwordInCorrect",
                    "2개의 패스워드가 일치하지 않습니다.");
            return "user/signup";
        }
        else{
            // 회원가입 진행
            userService.join(userRequestDto);
            return "user/signin";
        }
    }

    /**
     * 회원탈퇴
     * @param id
     * @return
     */
    @DeleteMapping
    public ResponseEntity<?> delete(@RequestParam Long id, Model model) {
        try{
            userService.deleteUser(id);
        } catch (DataIntegrityViolationException e) {
            model.addAttribute("eMessage", "회원탈퇴 중 DataIntegrityViolationException 발생" + e.getMessage());
        } catch (Exception e) {
            model.addAttribute("eMessage", "회원탈퇴 중 문제가 발생했습니다." + e.getMessage());
        }
        return ResponseEntity.ok().build();
    }

}
