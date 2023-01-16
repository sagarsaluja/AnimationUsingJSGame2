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

//
