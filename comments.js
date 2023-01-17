//The problems encountered:

//First: Rendering one image , which goes out of the frame , and only the black canvas behind is visible after it has crossed

//Solution: Render the same image twice ,
//The first at x = 0 , second at x = image_width = 2400. Keep decreasing x1 and x2.
//write logic to reset x1 and x2

//Problem 2 :
//logic to reset x1 and x2 : if (x1 < -2400 ) reset to 2400 and if x2 < -2400 , reset to 2400
//LEAVES a gap! as the decrement in x1 and x2 is = gameSpeed

//Solution
//write logic to lessen the gap
// if (x1 < -2400 ) reset to 2400 - gameSpeed;
// if (x2 < -2400 ) reset to 2400 - gameSpeed;
// gameSpeed is subtracted to the updates because while x1 is resetting , x2 will have moved by 15 (= gameSpeed)

//Problem 3:
//there is still a small gap
//We need to link x1 and x2 together.
//because gameSpeed is not a multple of the image size , there are always pixels left out.
//by doing reset to if (x1 < -2400 ) reset to 2400 - gameSpeed +x2;
//even if gap is created , it corrects itself.

// the gap is created because while the reset is happening , the image which is not being reset , might not exactly be at 0.

//Writing simpler update logic:
//the above technique is placing the images behind each other when one reaches the end.
//sliding image technique:
//when the first image reaches -2400 , reset it to 0. Position of 2nd image is always (x1 + 2400)

//Parallax effect:
//When foreground layer moves faster than background layer
//This creates an illusion of depth in 2D

//we need the position (x) to be between 0 and -2400
//we can also take an ever increasing variable (gameFrame), and set x = gameFrame % 2400 in every loop

//or better just set this.x %= this.width on every update
