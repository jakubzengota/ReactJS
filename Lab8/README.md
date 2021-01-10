# Laboratorium nr 8 -  React - aplikacja nr 2 + analiza kodu źródłowego + git difftool

react-collapsed install:
![](img/1.png)

Link do przykladu:
https://reactjsexample.com/a-react-custom-hook-for-creating-flexible-and-accessible-expand-collapse/

Do mojego projektu, dodałem bootstrapowe komponenty do poprawienia wyglądu aplikacji.

Kod apki:
![](myapp/img/10.png)


funkcje:
![](myapp/img/2.png)

importy:
![](img/3.png)

Wygląd aplikacji:
![](myapp/img/4.png)
![](myapp/img/5.png)
![](myapp/img/6.png)

Polecenie git diff słuzy do zobaczenia rożnic między commitami.
* czerwone - linia usunięta
* zielony - linia dodana

Sprawdzmy róznice pomiędzy pierwszym a ostatnim commitem.
Do tego potrzebujemy id commitów.

Id commitów możemy łatwo sprawdzić poprzez wpisanie git log:
![](myapp/img/7.png)
git diff b559965185e6b76fc8caad08cede223813dbf6c6 77ab76ee39489a1f8504045f0a427f3bf8c3efb2
![](myapp/img/8.png)

Możemy użyć polecania git difftool, wybieramy tutaj zmiane dla danego pliku:
![](myapp/img/9.png)