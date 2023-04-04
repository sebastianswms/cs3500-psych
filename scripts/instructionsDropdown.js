/*
    Input: The user clicking on the Instruction text to view the instructions.

    Output: All the instruction steps will be displayed for user.

    Remarks: This is the function call when the user needs directions on home page (index.html).
*/
var inst_steps = document.getElementById("instructions-box");
var inst_icon = document.getElementById("inst-icon");
inst_steps.style.display = "none";
window.toggleInstructionsDropdown = function toggleInstructionsDropdown() {
    if (inst_steps.style.display == "none") {
        inst_steps.style.display = "block";
        inst_icon.style.transform = 'rotate(180deg)';
    }else {
        inst_icon.style.transform = 'rotate(-0deg)';
        inst_steps.style.display = "none";
    }
}