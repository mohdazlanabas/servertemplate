import pyttsx3
import PyPDF2

# pdf file name
book = open('data.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(book)
pages = pdfReader.numPages

#number of pages
n=1

speaker = pyttsx3.init()
for num in range(n, pages):
    page = pdfReader.getPage(num)
    text = page.extractText()
    speaker.say(text)
    speaker.runAndWait()