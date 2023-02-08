import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--disable-web-security'
    ],
    headless:false,
    devtools: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();

  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  await page.evaluate(() => {
    console.log('test');
    fetch("https://chat.openai.com/api/auth/session", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "if-none-match": "W/\"seuh4d5m8918h\"",
        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "__Host-next-auth.csrf-token=f8f114e6f4566b9d1ff764fad43ca6584dfe5e516bd21c84d2df5d3c2675e4f4%7C16ac9f6dc4f9882a2956d1e0ab5268b93f5e7182bd998a44ea56f59c45e3021f; __Secure-next-auth.callback-url=https%3A%2F%2Fchat.openai.com%2F; cf_clearance=dxcrJU4X4V5j4BAktD2WDZpREb1jloZJi_cnV5FTjK8-1675770274-0-1-26006f62.b894cf10.5b388330-160; _cfuvid=uEsnSqVKOOSysWFKKNa01NimC442IMFGhIAyhhNTY.w-1675770274501-0-604800000; __cf_bm=S1FPi7KV0dqKCYOQkNxODa0A_TuKLV15wOWo6IaefpA-1675770275-0-AeGLacMBCTfKmFdzVt0KKx4oD4pSIuDqyaueaDkBjPkvh/6JC/6v3gVff66KqWWmNmkFNxu9Fw7k7nSwNo7t0Ts99uvsqd53Dz6q4kbXYikwSnpnhJaLiMSy9hICK4NrbLeSBW2N6Ze3liuZwShKTdgKbkdZfOjlNZ5AFr1lwI1QHuHLHLdLbi5bIpe/t/ZnRQ==; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..poM8xrH5vvOPddlK.TLYX5x5YJhgEJbYgc1TmE4GoKzYUPjE6MPnW7wDI7vXqmrKpIYqITX-jsyDWCPQg91QtGoeIpIOvb2VFDd3w5fq3VF06rMSkBqAuA0Grzb9JpUcxqgnT-XmW9cBEB6MyMVrKmgOB2LLvaGSXhqm1NcZUCaTFKQ_ZsxhYikg-MULpGytAqmrtvjEHgOEJSKtqQAh08MHU9HKiQhq0EQ-Q0xOfrLzPYgPGbfehZWKqIdDgk103EPeg5CpKTep2gEjpsOmqrHmr2bX-q9iKYVTzwOFbdCWfzEnx5tC0zoKq009qfRpU3k3xdWmcdPcLrwURxxtI1VVjxSRdR3jVSEKGgJB3P3Ci4i7gDoM-KlMyjScLq1S93UCtNY8ZfSVsxrn4kZczftgOiJ_Y-Ekt44kOCfSMb64KeBaUOA5J5ziCPtO8ShLl3MqlV40l-LmpjSyY5OLBfISmSWTNimJQGAZTlwmV0RWk8TQo-SBCW44f9GGusADj7XToB8iAckTJKINCGJl0WlTAvz-T3kWRFnfqrwcJo4p9sPpncknfdL-hlGbLNkQ36i0n0S2nSHoHiwveyMfcuePF-01xCXU7jqhnjPSWr7rWStqjlFqUCfBmJG3VOzXiKiMoxJX_C2gf_jVHLkPAR-WgcRSi8TA0dQHd8ZR_DD-LSb5vo6EQL7Z113VBG_Zg-dUplJF-HtManfWWlFjBxm9gDQTd_u0TBZQ_14hAy9CWbth2sZ7eOGrR7ypOch4xXTgQcmCPY7Q27Yq80JALXGx4GQXK3ByLRLshgiwBvrLe9VvK7TuNqC-Zc0p1CFYHtTv7oazUQHOLC06KQUcutQIVvHYFMAFEy0CruZ8_Jzlcq_hlKZFj8Lbp0pmTaXOPbXlHL1Vys2O7O-YaIoYelV1OtPvhs6Y6508K45Xg67kywEK480W_LVQbtwS3FzfkfIQh1k35srgBcaYd78puZCINblRUWbqQtAAhknDDwhaD6KovL_Ln_KDjjNa2ob5acOPBZt5GanSyPlKl0bVY4mbkTydi7ikSIo3kganrr0De6W2gysKR8pCe9OkGpTGUoM5sIRVMLYZyxbbM-1YfJxM0r9_Wrha-p10AkYtkkxLgmEDjuc1CFRwvkI7Ylk-hQJtVIiNmb6U1oBouCyhqdL18joR-3QHL25lwbd6T3tM7g7O0hNyrMS24kuho6dH59C8gPxzfqTbqblqw-jeNc8Z5v7AZdV2lKlxyMDi1DHh6S8kfqE3mS1rHTSZCL23Y7TNm-aegZHJiR4qW_mj-11LqHmCycXwnLQ7YFLdy8LC_b7OaUxYBjfQRSo0st-i-CLd6R9qrYaSuMCErGX9KUlpCf5r8a9OZHWB-MnFgFaP-udcZedmp4R1yCRvQ0RwSd5beCgn8N7Vg2rR0QU57twaYnrZA5Xl2UBcu2qS3pyutUlN9Zad0PjJ4HYJeN2ayxIqobaBIej_TQ3Ib9MN63vYda9OBK-UyvSruw7eQ_ffUYH7xepDwAh1y4hGOwsMoiIIuY0AIz9itrMJB2nqDJFm2RDj2_0shzxorDZEIYJWDj5xZb8DhcOCBndZpYOOordarKIaXco3g0w2Rm303UJAND4vjLqziGfwQNUmekxyBg6pyvHNz-mX2yN23-Whb1PK36h4OH1EdVxnM-Dc07Y4s-LirbhaP3r8Jvb4ujZqiXU6dfSlZzCTZl2zfNOVq1Cf5Xo-K3sA8oqde_m88fLsNA0YIj-K8qHUCkgJm0u6Wf_cXUtT9AdZNjb2Flwv5vRK9IwHHTCpPFo6CZXnvroubFIi0lCVXIjWkVWVriUfFkFNqrXzrhqy--UfVzoxWsIoVrwiktMZ0KqWOREYMN-CvBsgxus0zqwBP2MPN5QR1yT6Nqn1wJSBjtFLpVe_G2dxCOFpaUNMdQ0NFqDHWRhJLGNdoxkLYYDToVpGSVY2Eq5MqXfK4XErOwpOyv0QmO_S5ONnjZ2gnC_ysIzBvixoVQwB0wFGHOpvk5QquQDf8oE-wIHvIPC8e-WHhPWbivJ6VT9XC2IJY1UgoKLhgZL6CTXx9jcSYisRTXxgJXTKK8StXSPbU27igN7HxoqL6C8Au9wLEuikoAawr6_9jhvZfZq4S30iujAdugSKbzGA5c-RmdG72LdBgJPp5QaFNoAKT73Gnsk8qJu0Dtvatwwo4iQO3Nq4iDXx3wnADzxbqU3zCiV9d8WfFv_2YNYNSiHc3yksYaLByWk5ffxpiTIuW0sRzOiLwSVpq3Q3wTex3LJurHymFrZG2a1HWFOyWqNw6tdeQ5lyBIkcvjAvnlFTciVv7ENWMdSyJTcU2lK1f4zwx8Y321gKvgFAc3MAjwmrgBErDJyP7ZersXZQEndsP2tA9xtxQMWvrDtY8OQ25Y6a7VUkP6_FK7s5FIDrZlC7avMat7aGiU9X0dlmM5Q0WKU-R1zt6s1e3uVtYtru348CKtszvnqS99Jf1iCS8RKVyUSS9TPhABZYjCmwxXG91U9IGfk1jcx9OfgkKQMDhHAetzJgDe_S-K0FHs3vXzb8UbhR6qTM2ANIKzdef9ZUdpCE2T5y0ns2EtKF5lDMb55637bpkkHKUe6u6JNuuJk8Q9VFbruBCY0wQkH2HwyEmU95-yNGQYH5pbrcY4rt2Jgi879MGM4XIxkT0oTzciFJMJqJUU8OhRbqNbp0.BEkkw0VKKFeNrKGlkapMZQ",
        "Referer": "https://chat.openai.com/chat",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    })
      .then(response => {
        return response.text();
      }).then(function (data) {
        console.log(data); // this will be a string
      });
  });

  // Type into search box
  // await page.type('.search-box__input', 'automate beyond recorder');

  // // Wait and click on first result
  // const searchResultSelector = '.search-box__link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector.evaluate(el => el.textContent);

  // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();
})();
