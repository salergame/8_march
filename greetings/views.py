from django.shortcuts import render

def navigation(request):
    """Представление для страницы навигации."""
    return render(request, 'greetings/navigation.html')

def index(request):
    """Представление для основной страницы поздравления."""
    return render(request, 'greetings/index.html')

def mama(request):
    """Представление для страницы поздравления мамы."""
    return render(request, 'greetings/mama.html')

def sister(request):
    """Представление для страницы поздравления сестры."""
    return render(request, 'greetings/sister.html') 