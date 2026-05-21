import cv2

def analyze_confidence():

    camera = cv2.VideoCapture(0)

    face_cascade = cv2.CascadeClassifier(

        cv2.data.haarcascades +
        "haarcascade_frontalface_default.xml"

    )

    confidence_score = 0

    while True:

        success, frame = camera.read()

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        faces = face_cascade.detectMultiScale(

            gray,
            1.1,
            4

        )

        # FACE DETECTED
        if len(faces) > 0:

            confidence_score += 1

            confidence_level = "Confident"

        else:

            confidence_level = "Not Confident"

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
                confidence_level,
                (x, y - 10),

                cv2.FONT_HERSHEY_SIMPLEX,
                0.7,
                (0, 255, 0),
                2

            )

        cv2.imshow(

            "Confidence Detection",
            frame

        )

        # ESC KEY TO CLOSE
        if cv2.waitKey(1) == 27:
            break

    camera.release()

    cv2.destroyAllWindows()

    return {

        "confidence_score": confidence_score,
        "confidence_level": confidence_level

    }