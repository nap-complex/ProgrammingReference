#include <iostream>
#include <fstream>
using namespace std;
/*

	May 18, 2019  -  JLF

	This program was taken off of youTube video: https://www.youtube.com/watch?v=fbH005SzEMc

	I don't know exactly what it is doing, but it does make an image, so mess around with it
	and see if you can make that image something usefull to you.

*/


const int thing1 = 1000;

const int width = thing1, height = thing1;

main(){
	cout << "\n\n************************************************************************************\n\n";

	ofstream img ("picture.ppm");
	img << "P3" << endl;
	img << width << " " << height << endl;
	img << thing1 << endl;

	for ( int y = 0; y < height; y++){
		for ( int x = 0; x < width; x++ ){

			int r = x % thing1;
			int g = y % thing1;
			int b = y * x % thing1;

			img << r << " " << g << " " << b << endl;
		}
	}

//	system("open picture.ppm");


	cout << "\n\n************************************************************************************\n\n";

	return 0;

} // end of main
