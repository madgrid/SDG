export const FirstRunPage = FirstRunCheck();

// Detects window size and display tutorial page only for phone
// Desktop screen skips the tutorial pages
function FirstRunCheck() {
    let w = window.innerWidth;
    return (w < 992) ? 'TutorialPage' : 'SignupSelectPage';
}
