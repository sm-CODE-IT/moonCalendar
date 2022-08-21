package com.codeIT.moonCalendar.web;


import com.codeIT.moonCalendar.dto.feedback.FeedbackRequestDto;
import com.codeIT.moonCalendar.entity.feedback.Feedback;
import com.codeIT.moonCalendar.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@RequiredArgsConstructor
@Controller
public class FeedbackController {

    private final FeedbackService feedbackService;

    @GetMapping("feedback")
    public String getFeedback(Model model, FeedbackRequestDto feedbackRequestDto){
        return "feedback";
    }

    @GetMapping("/feedback/list")
    public String getFeedbackListPage(Model model
            , @RequestParam(required = false, defaultValue = "0") Integer page
            , @RequestParam(required = false, defaultValue = "5") Integer size) throws Exception{
        try{
            model.addAttribute("resultMap", feedbackService.findAll(page, size));
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }

        return "/feedback/list";
    }

    @GetMapping("/feedback/write")
    public String getFeedbackWritePage(Model model
            , FeedbackRequestDto feedbackRequestDto){
        return "/feedback/write";
    }

    @GetMapping("/feedback/view")
    public String getFeedbackViewPage(Model model
            , FeedbackRequestDto feedbackRequestDto) throws Exception{
        try{
            if (feedbackRequestDto.getId() != null){
                model.addAttribute("resultMap", feedbackService.findById(feedbackRequestDto.getId()));
            }
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
        return "/feedback/view";
    }

    @PostMapping("/feedback/write/action")
    public String feedbackWriteAction(Model model,
                                      FeedbackRequestDto feedbackRequestDto,
                                      MultipartHttpServletRequest multiRequest) throws Exception{
        try{

            if (!feedbackService.save(feedbackRequestDto, multiRequest)){
                throw new Exception("#Exception feedbackWriteAction!");
            }
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
        return "redirect:/feedback";
    }

    @PostMapping("/feedback/view/action")
    public String feedbackViewAction(Model model, FeedbackRequestDto feedbackRequestDto,
                                     MultipartHttpServletRequest multiRequest) throws Exception {
        try{
            boolean result = feedbackService.updateFeedback(feedbackRequestDto, multiRequest);

            if(!result) {
                throw new Exception("#Exception feedbackViewAction!");
            }
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
        return "redirect:/feedback";
    }

}
