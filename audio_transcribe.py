import sys
import speech_recognition as sr
#!/usr/bin/env python3

#prompt user for audio file
print('Please enter name of the .wav, .flac, or .aiff file to be transcribed:')
fileName = str(input()) #read in audio filename from console 

#obtain path to audio file to be transcribed (must be in same folder)
from os import path
try:
	AUDIO_FILE = path.join(path.dirname(path.realpath(__file__)), fileName)
except (FileNotFoundError, IOError, OSError): #error handling
	print('Invalid audio file name')
	sys.exit()
#else:
	#print('An error has occurred, please use a different audio file')
	#sys.exit()

print('Processing...') #alert user audio is being processed

# use the given file as the audio source
r = sr.Recognizer()
with sr.AudioFile(AUDIO_FILE) as source:
    audio = r.record(source)  # read the entire audio file

# use Google Speech Recognition
try:
    # using default google api
    print("Google Speech Recognition thinks you said:\n" + r.recognize_google(audio))
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))
