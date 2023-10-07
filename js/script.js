/*
Wskazówki
Pobierz odpowiednie elementy.

Stwórz funkcję, będzie sprawdzała, czy wszystkie pola zostały uzupełnione. Jeśli nie, pokaż błąd. Jeśli tak, wywołaj kolejną funkcję, która zajmie się obliczaniem rachunku.

Funkcja obliczająca rachunek musi przechwycić dane z input i select oraz wykonać działanie wg wzoru:

(kwota do zapłaty + (kwota do zapłaty * napiwek)) / ilość osób

Wynik działania wypisz w odpowiednim paragrafie. Nie zapomnij zaokrąglić kwoty do dwóch miejsc po przecinku!



Podpowiedzi do wskazówek
Musimy pobrać:

inputy (kwota do zapłaty, ilość osób),

select z napiwkiem,

przycisk,

paragraf do wyświetlania błędu,

paragraf i span do wyświetlania wyniku.



Instrukcja warunkowa if nada się do tego zadania idealnie. ;)



Jeśli pojawi się problem z obliczeniami, sprawdź, czy na pewno operujesz na liczbach, a nie np. na stringach. ;)
*/

const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const errorText = document.querySelector('.error')
const costText = document.querySelector('.cost-info')
const costSpanText = document.querySelector('.cost')

const checkEmptyPlace = () => {
	if (inputPrice.value.trim() == '' || inputPeople.value.trim() == '' || selectTip.value == 0) {
		errorText.textContent = 'Uzupełnij wszystkie pola'
		costText.style.display = 'none'
	} else {
		errorText.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(inputPrice.value.trim()) //parseFloat zamienia string na number i zwraca liczbę zmiennoprzecinkową.
	const newPeople = parseInt(inputPeople.value.trim()) //parseInt zamienia string na number i zwraca liczbę całkowitą.
	const newTip = parseFloat(selectTip.value) //parseFloat zamienia string na number i zwraca liczbę zmiennoprzecinkową.

	const sum = (newPrice + newPrice * newTip) / newPeople

	costText.style.display = 'block'
	costSpanText.textContent = sum.toFixed(2) //metoda toFixed zaokrągli nam wynik do 2 liczb po przecinku.
}

countBtn.addEventListener('click', checkEmptyPlace)


/*
PODSUMOWANIE:
Pierwsze siedem linii kodu to deklaracje zmiennych, które są przypisywane do różnych elementów HTML na stronie internetowej. Te zmienne służą do uzyskiwania dostępu do wartości wprowadzanych przez użytkownika oraz do elementów, w których będą wyświetlane wyniki.

const inputPrice = document.querySelector('#price'): Ta linia kodu znajduje element HTML o identyfikatorze "price" i przypisuje go do zmiennej inputPrice. Ten element będzie przechowywał cenę zamówienia.
const inputPeople = document.querySelector('#people'): Podobnie jak poprzednia linia, ta linia znajduje element o identyfikatorze "people" i przypisuje go do zmiennej inputPeople. Ten element będzie przechowywał liczbę osób.
const selectTip = document.querySelector('#tip'): Ta linia znajduje element o identyfikatorze "tip" i przypisuje go do zmiennej selectTip. Ten element to rozwijalna lista, która będzie zawierać procent napiwku.
const countBtn = document.querySelector('.count'): Ta linia znajduje element z klasą "count" i przypisuje go do zmiennej countBtn. Ten element to przycisk, który uruchamia obliczenia.
const errorText = document.querySelector('.error'): Ta linia znajduje element z klasą "error" i przypisuje go do zmiennej errorText. Ten element będzie służył do wyświetlania komunikatów o błędach.
const costText = document.querySelector('.cost-info'): Ta linia znajduje element z klasą "cost-info" i przypisuje go do zmiennej costText. Ten element będzie zawierać wynik obliczeń.
const costSpanText = document.querySelector('.cost'): Ta linia znajduje element z klasą "cost" i przypisuje go do zmiennej costSpanText. Ten element będzie zawierać wyświetlaną kwotę.
Następnie jest definiowana funkcja checkEmptyPlace(), która jest wywoływana po kliknięciu przycisku. Funkcja ta sprawdza, czy wszystkie pola zostały wypełnione i czy wybrano procent napiwku. Jeśli jakieś pole jest puste lub nie wybrano napiwku (0%), wyświetla się komunikat o błędzie, a wynik jest ukrywany. W przeciwnym razie funkcja wywołuje countBill(), aby obliczyć rachunek.

Funkcja countBill() jest wywoływana, gdy wszystkie pola są wypełnione poprawnie. W tej funkcji następuje obliczenie kosztu rachunku na osobę. Wykonuje się następujące kroki:

Konwertuje wartość wprowadzoną przez użytkownika jako cenę zamówienia na liczbę zmiennoprzecinkową i przypisuje ją do zmiennej newPrice.
Konwertuje liczbę osób na liczbę całkowitą i przypisuje ją do zmiennej newPeople.
Konwertuje wybrany procent napiwku na liczbę zmiennoprzecinkową i przypisuje ją do zmiennej newTip.
Oblicza sumę, która jest równa (newPrice + newPrice * newTip) / newPeople, czyli cena zamówienia z uwzględnieniem napiwku podzielona przez liczbę osób.
Wyświetla wynik w elemencie costSpanText, zaokrąglając go do dwóch miejsc po przecinku.
Na koniec dodaje się nasłuchiwanie na kliknięcie przycisku countBtn, które uruchamia funkcję checkEmptyPlace(). W ten sposób użytkownik może wprowadzić dane, kliknąć przycisk, a następnie zobaczyć obliczony koszt rachunku na stronie.

*/
