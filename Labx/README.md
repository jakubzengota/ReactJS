# Laboratorium nr 8 -  React - aplikacja nr 2 + analiza kodu źródłowego + git difftool

react-collapsed install:
![](1.png)

Link do przykladu:
https://reactjsexample.com/a-react-custom-hook-for-creating-flexible-and-accessible-expand-collapse/

Do mojego projektu, dodałem bootstrapowe komponenty do poprawienia wyglądu aplikacji.

Kod apki:
![](img/10.png)


funkcje:
![qwe](img/2.png)

importy:
![](img/3.png)

Wygląd aplikacji:
![](img/4.png)
![](img/5.png)
![](img/6.png)

Polecenie git diff słuzy do zobaczenia rożnic między commitami.
czerwone - linia usunięta
zielony - linia dodana

Sprawdzmy róznice pomiędzy pierwszym a ostatnim commitem.
Do tego potrzebujemy id commitów.

Id commitów możemy łatwo sprawdzić poprzez wpisanie git log:
![](img/7.png)
git diff b559965185e6b76fc8caad08cede223813dbf6c6 77ab76ee39489a1f8504045f0a427f3bf8c3efb2
![](img/8.png)

Możemy użyć polecania git difftool, wybieramy tutaj zmiane dla danego pliku:
![](img/9.png)