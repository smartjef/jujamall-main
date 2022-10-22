from django.shortcuts import render, redirect

from core.forms import ContactForm
from shop.models import BusinessProfile, BusinessBranch, Category


# Create your views here.
def index(request):
    bus = BusinessBranch.objects.all()
    categories = Category.objects.all()
    title = 'home'
    context = {
        'bus': bus,
        'title': title,
        'categories': categories,
    }
    # print(f"\n\n{title}\n\n")
    return render(request, 'index.html', context)


def about(request):
    title = 'About Us'
    context = {
        'title': title,
    }
    return render(request, 'about.html', context)


def contact(request):
    title = 'Contact us'

    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')

    # if request.user.is_authenticated:
    #     form = ContactForm(initial={
    #         'name': request.user.get_full_name(),
    #         'email': request.user.email,
    #         'phone_number':request.user.profile.phone_number,
    #         'message': '',
    #
    #     })


    context = {
        'title': title,
        'form': form,
    }
    return render(request, 'contact.html', context)


def products(request):
    title = 'Products'
    categories = Category.objects.all()
    context = {
        'title': title,
        'categories': categories,
    }
    return render(request, 'products.html', context)
