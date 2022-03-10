import os
import PyPDF2
from gtts import gTTS
from tkinter import Tk
from tkinter.filedialog import askopenfilename

Tk().withdraw
filelocation = askopenfilename()

with open(filelocation, 'rb') as f:
    pdf = PyPDF2.PdfFileReader(f)
    myText = ""
    for pageNum in range(pdf.numPages):
        pageObj = pdf.getPage(pageNum)
        myText += pageObj.extractText()
print(myText)

final_output = gTTS(text=myText, lang='en')
print('Generating Speech........')
final_output.save('output.mp3')
os.system('start output.mp3')
print("Successfully Generated!!")