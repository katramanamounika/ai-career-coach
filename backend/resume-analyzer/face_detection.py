import cv2

def detect_face():

    camera = cv2.VideoCapture(0)

    face_cascade = cv2.CascadeClassifier(

        cv2.data.haarcascades +
        "haarcascade_frontalface_default.xml"

    )

    while True:

        success, frame = camera.read()

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        faces = face_cascade.detectMultiScale(

            gray,
            1.1,
            4

        )

        for (x, y, w, h) in faces:

            cv2.rectangle(

                frame,
                (x, y),
                (x + w, y + h),
                (0, 255, 0),
                2

            )

            cv2.putText(

                frame,
                "Face Detected",
                (x, y - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.7,
                (0, 255, 0),
                2

            )

        cv2.imshow("Face Detection", frame)

        if cv2.waitKey(1) == 27:
            break

    camera.release()

    cv2.destroyAllWindows()