import cv2
def start_camera():
    camera = cv2.VideoCapture(0)

    while True:

        success, frame = camera.read()

        cv2.imshow("AI Interview Camera", frame)

        if cv2.waitKey(1) == 27:

            break

    camera.release()

    cv2.destroyAllWindows()