import face_recognition_models

print("✅ face_recognition_models is installed!")
print("Package location:", face_recognition_models.__file__)

# Check pretrained model files
print("68 landmark model:", face_recognition_models.pose_predictor_model_location())
print("5 landmark model:", face_recognition_models.pose_predictor_five_point_model_location())
print("Face recognition model:", face_recognition_models.face_recognition_model_location())
print("CNN face detector model:", face_recognition_models.cnn_face_detector_model_location())
