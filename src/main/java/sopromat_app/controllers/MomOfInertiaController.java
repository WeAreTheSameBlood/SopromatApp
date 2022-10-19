package sopromat_app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Calculate moment of inertia:
 * circle;
 * annular section;
 * rectangle;
 * isosceles and tight triangle;
 */
@Controller
@RequestMapping("/moi")
public class MomOfInertiaController {

    @GetMapping
    public String mainPage() {
        return "views/momentOfInertia";
    }
}
