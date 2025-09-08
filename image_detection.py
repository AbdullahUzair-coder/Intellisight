import cv2
import face_recognition

# Load the image
detect_to_image = cv2.imread(r'C:\Fyp\OpenCV\images\trump_modi.jpg')

# Detect faces
all_face_location = face_recognition.face_locations(detect_to_image, model='hog')

print('This image contains {} face(s).'.format(len(all_face_location)))

# Loop through each face
for index, current in enumerate(all_face_location):
    top_pos, right_pos, bottom_pos, left_pos = current
    print('Face {} found at Top: {}, Right: {}, Bottom: {}, Left: {}'.format(
        index + 1, top_pos, right_pos, bottom_pos, left_pos
    ))

    # Correct slicing: [y1:y2, x1:x2]
    current_face = detect_to_image[top_pos:bottom_pos, left_pos:right_pos]

    # Check if slice is not empty
    if current_face.size != 0:
        cv2.imshow("Face no " + str(index + 1), current_face)
    else:
        print("⚠️ Face {} could not be cropped properly.".format(index + 1))

cv2.waitKey(0)
cv2.destroyAllWindows()
