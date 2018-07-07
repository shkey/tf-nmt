from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
import simplejson
import json
import socket
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

# @csrf_exempt
def index(request):
    if request.method == 'POST' and request.body:
        BUFSIZE = 1024
        print(request.POST)
        src = request.POST.get('src')
        tgt = request.POST.get('tgt')
        word_src = request.POST.get('word_src')
        TFSERVER = request.POST.get('ip')
        result = 'sorry, we have some problems'
        if src == 'en' and tgt == 'de':
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.connect((TFSERVER, 6666))
            sock.send(word_src.encode('utf-8'))
            result = sock.recv(BUFSIZE)
            print(result)
        if src == 'de' and tgt == 'en':
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.connect((TFSERVER, 7777))
            sock.send(word_src.encode('utf-8'))
            result = sock.recv(BUFSIZE)
            print(result)
        return HttpResponse(result.decode('utf-8'))


def main(request):
    return render(request, 'translate/index.html')
