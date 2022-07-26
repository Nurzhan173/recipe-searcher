import axios from 'axios';

export async function getIngredientsList() {
  const data = '{"lang":"ru"}';

  const config = {
    method: 'post',
    url: 'https://d1.supercook.com/dyn/lang_ings',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      Connection: 'keep-alive',
      'Content-Type': 'application/json;charset=UTF-8',
      Origin: 'https://www.supercook.com',
      Referer: 'https://www.supercook.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'sec-ch-ua':
        '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
    data: data,
  };

  const response = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return await response;
}

export async function getRecipeList(kitchenList) {
  var qs = require('qs');
  var data = qs.stringify({
    needsimage: '1',
    app: '1',
    kitchen: kitchenList,
    focus: '',
    exclude: '',
    kw: '',
    catname: '',
    start: '0',
    fave: 'false',
    lang: 'ru',
    cv: '2',
  });
  var config = {
    method: 'post',
    url: 'https://d1.supercook.com/dyn/results',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      Origin: 'https://www.supercook.com',
      Referer: 'https://www.supercook.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'sec-ch-ua':
        '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
    data: data,
  };

  const response = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return await response;
}

export async function getDetails(id, ingredients) {
  var qs = require('qs');
  var data = qs.stringify({
    rid: id,
    lang: 'ru',
    ingredients: ingredients,
  });

  var config = {
    method: 'post',
    url: 'https://d1.supercook.com/dyn/details',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      Origin: 'https://www.supercook.com',
      Referer: 'https://www.supercook.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'sec-ch-ua':
        '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
    data: data,
  };

  const response = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return await response;
}
