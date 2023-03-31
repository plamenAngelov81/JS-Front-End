function solve() {

    const model = document.querySelector('#model');
    const year = document.querySelector('#year');
    const description = document.querySelector('#description');
    const price = document.querySelector('#price');

    const btnAdd = document.querySelector('#add');

    const tBody = document.querySelector('#furniture-list');

    const totalPrice = document.querySelector('.total-price');

    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();

        const modelText = model.value;
        model.value = '';
        const yearText = year.value;
        year.value = '';
        const descriptionText = description.value;
        description.value = '';
        const priceText = price.value;
        price.value = '';

        if (!modelText || !yearText || !descriptionText || !priceText || !Number(yearText) || !Number(priceText) || yearText < 0 || priceText < 0) {
            return;
        }

        const trInfo = document.createElement('tr');
        trInfo.setAttribute('class', 'info');

        const tdModel = document.createElement('td');
        tdModel.textContent = modelText;

        const tdPrice = document.createElement('td');
        tdPrice.textContent = `${Number(priceText).toFixed(2)}`;

        const tdBtns = document.createElement('td');

        const btnMoreInfo = document.createElement('button');
        btnMoreInfo.textContent = 'More Info';
        btnMoreInfo.setAttribute('class', 'moreBtn');
        btnMoreInfo.addEventListener('click', function (e) {

            if (e.target.textContent === 'More Info') {
                trHide.removeAttribute('style');
                trHide.setAttribute('style', 'display: contents;');
                e.target.textContent = 'Less Info';
            } else if (e.target.textContent === 'Less Info') {
                trHide.removeAttribute('style');
                trHide.setAttribute('style', 'display: none;');
                e.target.textContent = 'More Info';
            }

        });

        const btnBuyIt = document.createElement('button');
        btnBuyIt.textContent = 'Buy it';
        btnBuyIt.setAttribute('class', 'buyBtn');
        btnBuyIt.addEventListener('click', function (e) {

            const currentPrice = Number(e.target.parentElement.previousSibling.textContent);

            totalPrice.textContent = (Number(totalPrice.textContent) + currentPrice).toFixed(2);

            // e.target.parentElement.parentElement.nextSibling.remove();
            e.target.parentElement.parentElement.remove();
        });

        tdBtns.appendChild(btnMoreInfo);
        tdBtns.appendChild(btnBuyIt);

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdBtns);

        const trHide = document.createElement('tr');
        trHide.setAttribute('class', 'hide');

        const tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearText}`;

        const tdDescription = document.createElement('td');
        tdDescription.textContent = `Description: ${descriptionText}`;
        tdDescription.setAttribute('colspan', 3);

        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);

        tBody.appendChild(trInfo);
        tBody.appendChild(trHide);

    });

}
