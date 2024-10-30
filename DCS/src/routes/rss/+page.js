export async function load({fetch}) {
  const RSS_URL = `https://cors-anywhere.herokuapp.com/https://alerthub.civildefence.govt.nz/rss/pwp`;

  fetch(RSS_URL)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((url1) => console.log(url1));

    const RSS_URL2=`https://cors-anywhere.herokuapp.com/https://alerts.metservice.com/cap/rss`
    fetch(RSS_URL2)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((url2) => console.log(url2));

  return {url1,url2};
}

