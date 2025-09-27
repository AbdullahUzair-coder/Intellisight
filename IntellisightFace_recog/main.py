import cv2

# Option 1: Raw string
img = cv2.imread(r"D:\Fyp\messi.jpg")

# Option 2: Double backslashes
# img = cv2.imread("D:\\Fyp\\messi.jpg")

# Option 3: Forward slashes
# img = cv2.imread("D:/Fyp/messi.jpg")

cv2.imshow("Original", img)
cv2.waitKey(0)
cv2.destroyAllWindows()
