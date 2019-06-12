from django.core.mail import EmailMessage
import threading

class EmailThread(threading.Thread):
    def __init__(self, subject, html_content, recipient_list, from_email):
        self.subject = subject
        self.recipient_list = recipient_list
        self.html_content = html_content
        self.from_email = from_email
        threading.Thread.__init__(self)

    def run (self):
        msg = EmailMessage(self.subject, self.html_content, self.from_email, self.recipient_list)
        msg.content_subtype = "html"
        msg.send()