# Import required modules
from PIL import Image
import numpy as np

def blacknwhite(image):
    #convert to grey-scale
    bnw=image.convert('1')
        # The default method of converting a greyscale ("L") or "RGB"
        # image into a bilevel (mode "1") image uses Floyd-Steinberg
        # dither to approximate the original image luminosity levels. If
        # dither is :data:`NONE`, all values larger than 127 are set to 255 (white),
        # all other values to 0 (black). 
    bnw.show()

    print("\n\nBNW MATRIX\n")
    image_bnw_arr = np.array(bnw)
    print(image_bnw_arr)



def grayscale(image):

    #convert to grey-scale
    grey=image.convert('L')
    #  When translating a color image to greyscale (mode "L"),
    #   the library uses the ITU-R 601-2 luma transform::
    #         L = R * 299/1000 + G * 587/1000 + B * 114/1000

    grey.show()

    print("\n\ngrey-scale Matrix\n")
    image_grey_arr = np.array(grey)
    print(image_grey_arr)


    
def cropimage(image):
    
    # Convert image to array
    image_arr = np.array(image)

    # Crop image
    image_arr = image_arr[:480,:320]
    # image resolution is 640x480 which means:  
    # each row has 640 pixels(columns)
    # and there are 480 row in total      
    # print(image_arr)

    # Convert array to image
    image = Image.fromarray(image_arr)
    
    # Display image
    image.show()



def main():
    # Load image
    d=int(input("GRAY_SCALE image: 1\ncrop image: 2\nB N W image: 3\nAll image func: 4\n"))
    image = Image.open("G:\\My Drive\\University-Work\\SEMESTER 6\\CG\\LAB TASK\\COAS.jpg")

    if(d==1):
        grayscale(image)
    elif(d==2):
        cropimage(image)
    elif(d==3):
        blacknwhite(image)
    else:
        grayscale(image)
        cropimage(image)
        blacknwhite(image)




main()










