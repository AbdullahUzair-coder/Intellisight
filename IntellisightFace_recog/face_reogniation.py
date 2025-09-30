import cv2
from simple_facerec import SimpleFacerec

# Initialize Face Recognition
sfr = SimpleFacerec()
sfr.load_encoding_images("images/")  # Load known faces from "images" folder

# Open Camera (0 = default webcam / iVCam)
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Detect Faces
    face_locations, face_names = sfr.detect_known_faces(frame)

    for face_loc, name in zip(face_locations, face_names):
        y1, x2, y2, x1 = face_loc  # top, right, bottom, left

        # If no match → force name to "Unknown"
        if name == "":
            name = "Unknown"

        # Draw text (name or "Unknown") above rectangle
        cv2.putText(frame, name, (x1, y1 - 10),
                    cv2.FONT_HERSHEY_DUPLEX, 1, (0, 0, 0), 2)

        # Draw rectangle around face
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

    # Show the frame
    cv2.imshow("Frame", frame)

    # Exit on ESC
    key = cv2.waitKey(1)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()
