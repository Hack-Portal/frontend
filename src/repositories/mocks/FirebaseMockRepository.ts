import { auth, db } from '@/lib/firebase/client'
import {
  AuthProvider,
  User,
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { onSnapshot, doc, collection } from 'firebase/firestore'
import { Chat } from '@/types/chat'
import api from '@/api/$api'
import aspida from '@aspida/axios'
import axios from 'axios'
import { Domain_GetRoomResponse } from '@/api/@types'
import { EmailSignInFormData } from '@/app/signin/types/formData'
import { API_URL } from '@/constants/API_URL'

export class FirebaseMockRepository {
 
}
