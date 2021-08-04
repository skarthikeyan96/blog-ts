import admin from "firebase-admin"

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
      }),
      // For the FIREBASE_DATABASE_URL add https://<database-name>.firebaseio.com. Replace database-name with your database name.
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    })
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack)
  }
}
export default admin.firestore()
